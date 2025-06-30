import { Client, getFieldName } from '@/models/client';

export default {
  async getClients(data) {
    let matchObj = {};
    const { pageNum, sort } = data.data;

    if (data.data.search) {
      matchObj = { ...matchObj, ...data.data.search };
    }

    let skipNum = 0;
    const limit = data.data.resPerPage || 5;

    const sortObj = {};

    if (pageNum) {
      skipNum = (pageNum - 1) * limit;
    }

    if (sort) {
      sortObj[getFieldName(sort)] = 1;
      if (sort[0] == '-') {
        sortObj[getFieldName(sort)] *= -1;
      }
    }

    // const aggrObj = [
    //   { $match: matchObj },
    //   {
    //     $lookup: {
    //       from: 'casevalues', // Casevalues collection
    //       let: { legalForm: { $toObjectId: '$legalForm' } }, // Convert court to ObjectId
    //       pipeline: [
    //         { $unwind: '$values' }, // Unwind the values array
    //         {
    //           $match: {
    //             $expr: {
    //               $eq: ['$values._id', '$$legalForm'] // Match court with values._id
    //             }
    //           }
    //         }
    //       ],
    //       as: 'matchedValues_legalForm'
    //     }
    //   },
    //   {
    //     $unwind: {
    //       path: '$matchedValues_legalForm',
    //       preserveNullAndEmptyArrays: true // Preserve cases with no matches
    //     }
    //   },
    //   {
    //     $set: {
    //       legalForm: '$matchedValues_legalForm.values'
    //     }
    //   },
    //   // { $sort: sortObj },
    //   {
    //     $facet: {
    //       results: [{ $skip: skipNum }, { $limit: limit }],
    //       count: [{ $count: 'total' }]
    //     }
    //   }
    // ];

    const aggrObj = [
      { $match: matchObj },

      // Lookup legalForm details from casevalues collection
      {
        $lookup: {
          from: 'casevalues',
          let: { legalForm: { $toObjectId: '$legalForm' } }, // Convert legalForm to ObjectId
          pipeline: [
            { $unwind: '$values' }, // Unwind the values array
            {
              $match: {
                $expr: {
                  $eq: ['$values._id', '$$legalForm'] // Match with values._id
                }
              }
            }
          ],
          as: 'matchedValues_legalForm'
        }
      },
      {
        $unwind: {
          path: '$matchedValues_legalForm',
          preserveNullAndEmptyArrays: true // Preserve clients with no legalForm match
        }
      },
      {
        $set: {
          legalForm: '$matchedValues_legalForm.values'
        }
      },

      // Lookup the cases collection to count cases per client
      {
        $lookup: {
          from: 'cases', // Cases collection
          localField: '_id', // Client's _id
          foreignField: 'clients', // Cases array contains client IDs
          as: 'clientCases'
        }
      },
      {
        $set: {
          totalCases: { $size: '$clientCases' } // Count number of cases for each client
        }
      },
      {
        $project: {
          clientCases: 0 // Exclude the joined cases array from the final output
        }
      },

      // Pagination
      {
        $facet: {
          results: [{ $skip: skipNum }, { $limit: limit }],
          count: [{ $count: 'total' }]
        }
      }
    ];

    if (sort) {
      let targtKey = Object.keys(sortObj);
      aggrObj.splice(
        aggrObj.length - 1,
        0,
        {
          $addFields: {
            sortField: {
              $cond: {
                if: { $eq: [{ $type: '$' + targtKey[0] }, 'string'] },
                then: { $toLower: '$' + targtKey[0] },
                else: '$' + targtKey[0]
              }
            } // Convert to lowercase
          }
        },
        {
          $sort: { sortField: sortObj[targtKey[0]] }
        }
        // {
        //   $project: {
        //     sortField: 0 // Remove the extra field from results
        //   }
        // }
      );
    }

    return await Client.aggregate(aggrObj);
  }
};
