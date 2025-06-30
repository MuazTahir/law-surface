import { Case } from '@/models/case';
import mongoose from 'mongoose';
import ClientQueries from '@/app/api/dashboard/clients/queries';

export default {
  async getCases(dataType, sortObj, matchObj, skipNum, limit, sort) {
    if (!limit) {
      limit = 100000000;
    }
    const aggrObj = [
      {
        $match: matchObj
      },
      {
        $lookup: {
          from: 'casevalues', // Casevalues collection
          let: { courtId: { $toObjectId: '$court' } }, // Convert court to ObjectId
          pipeline: [
            { $unwind: '$values' }, // Unwind the values array
            {
              $match: {
                $expr: {
                  $eq: ['$values._id', '$$courtId'] // Match court with values._id
                }
              }
            }
          ],
          as: 'matchedValues'
        }
      },
      {
        $unwind: {
          path: '$matchedValues',
          preserveNullAndEmptyArrays: true // Preserve cases with no matches
        }
      },
      {
        $lookup: {
          from: 'casevalues', // Casevalues collection
          let: { courtId: { $toObjectId: '$caseType' } }, // Convert court to ObjectId
          pipeline: [
            { $unwind: '$values' }, // Unwind the values array
            {
              $match: {
                $expr: {
                  $eq: ['$values._id', '$$courtId'] // Match court with values._id
                }
              }
            }
          ],
          as: 'matchedCaseType'
        }
      },
      {
        $addFields: {
          matchedCaseType: { $arrayElemAt: ['$matchedCaseType', 0] } // Extract only the first element
        }
      },
      {
        $lookup: {
          from: 'casevalues', // Casevalues collection
          let: { courtId: { $toObjectId: '$department' } }, // Convert court to ObjectId
          pipeline: [
            { $unwind: '$values' }, // Unwind the values array
            {
              $match: {
                $expr: {
                  $eq: ['$values._id', '$$courtId'] // Match court with values._id
                }
              }
            }
          ],
          as: 'matchedDepartment'
        }
      },
      {
        $addFields: {
          matchedDepartment: { $arrayElemAt: ['$matchedDepartment', 0] } // Extract only the first element
        }
      },
      {
        $lookup: {
          from: 'casevalues', // Casevalues collection
          let: { courtId: { $toObjectId: '$caseStage' } }, // Convert court to ObjectId
          pipeline: [
            { $unwind: '$values' }, // Unwind the values array
            {
              $match: {
                $expr: {
                  $eq: ['$values._id', '$$courtId'] // Match court with values._id
                }
              }
            }
          ],
          as: 'matchedStage'
        }
      },
      {
        $addFields: {
          matchedStage: { $arrayElemAt: ['$matchedStage', 0] } // Extract only the first element
        }
      },
      {
        $lookup: {
          from: 'casevalues', // Casevalues collection
          let: { fileNo: { $toObjectId: '$fileNo' } }, // Convert court to ObjectId
          pipeline: [
            { $unwind: '$values' }, // Unwind the values array
            {
              $match: {
                $expr: {
                  $eq: ['$values._id', '$$fileNo'] // Match court with values._id
                }
              }
            }
          ],
          as: 'matchedValues_fileNo'
        }
      },
      {
        $unwind: {
          path: '$matchedValues_fileNo',
          preserveNullAndEmptyArrays: true // Preserve cases with no matches
        }
      },
      // ****************
      {
        $lookup: {
          from: 'casevalues', // Casevalues collection
          let: { governing: { $toObjectId: '$governing' } }, // Convert court to ObjectId
          pipeline: [
            { $unwind: '$values' }, // Unwind the values array
            {
              $match: {
                $expr: {
                  $eq: ['$values._id', '$$governing'] // Match court with values._id
                }
              }
            }
          ],
          as: 'matchedValues_governing'
        }
      },
      {
        $unwind: {
          path: '$matchedValues_governing',
          preserveNullAndEmptyArrays: true // Preserve cases with no matches
        }
      },
      // ***********************************
      {
        $lookup: {
          from: 'casevalues', // Casevalues collection
          let: { caseStatus: { $toObjectId: '$caseStatus' } }, // Convert court to ObjectId
          pipeline: [
            { $unwind: '$values' }, // Unwind the values array
            {
              $match: {
                $expr: {
                  $eq: ['$values._id', '$$caseStatus'] // Match court with values._id
                }
              }
            }
          ],
          as: 'matchedValues_caseStatus'
        }
      },
      {
        $unwind: {
          path: '$matchedValues_caseStatus',
          preserveNullAndEmptyArrays: true // Preserve cases with no matches
        }
      },
      {
        $lookup: {
          from: 'clients', // Clients collection
          let: { clientIds: { $map: { input: '$clients', as: 'c', in: '$$c.client' } } },
          pipeline: [
            {
              $match: {
                $expr: { $in: ['$_id', '$$clientIds'] }
              }
            }
          ],
          as: 'clientsData'
        }
      },
      {
        $set: {
          clientsData: {
            $map: {
              input: '$clientsData',
              as: 'clientObj',
              in: {
                $mergeObjects: [
                  '$$clientObj', // Original client object from lookup
                  {
                    adjective: {
                      $arrayElemAt: [
                        {
                          $map: {
                            input: {
                              $filter: {
                                input: '$clients',
                                as: 'c',
                                cond: { $eq: ['$$c.client', '$$clientObj._id'] }
                              }
                            },
                            as: 'filteredClient',
                            in: '$$filteredClient.adjective'
                          }
                        },
                        0
                      ]
                    }
                  }
                ]
              }
            }
          }
        }
      },
      {
        $unwind: {
          path: '$clientsData',
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $lookup: {
          from: 'casevalues',
          let: { adjectiveId: { $toObjectId: '$clientsData.adjective' } },
          pipeline: [
            { $unwind: '$values' },
            {
              $match: {
                $expr: {
                  $eq: [
                    { $toString: '$values._id' }, // Convert to string for comparison
                    { $toString: '$$adjectiveId' }
                  ]
                }
              }
            }
          ],
          as: 'matchedAdjectiveClient'
        }
      },
      {
        $set: {
          'clientsData.adjective': { $arrayElemAt: ['$matchedAdjectiveClient.values', 0] }
        }
      },
      {
        $group: {
          _id: '$_id',
          clientsData: { $push: '$clientsData' },
          otherFields: { $first: '$$ROOT' }
        }
      },
      {
        $replaceRoot: {
          newRoot: {
            $mergeObjects: [
              '$otherFields',
              { clientsData: '$clientsData', matchedAdjectiveClient: '$matchedAdjectiveClient' }
            ]
          }
        }
      },

      {
        $unwind: {
          path: '$opponents',
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $lookup: {
          from: 'casevalues',
          let: { adjectiveId: { $toObjectId: '$opponents.adjective' } },
          pipeline: [
            { $unwind: '$values' },
            {
              $match: {
                $expr: {
                  $eq: [
                    { $toString: '$values._id' }, // Convert to string for comparison
                    { $toString: '$$adjectiveId' }
                  ]
                }
              }
            }
          ],
          as: 'matchedAdjective'
        }
      },
      {
        $set: {
          'opponents.adjective': { $arrayElemAt: ['$matchedAdjective.values', 0] }
        }
      },
      {
        $group: {
          _id: '$_id',
          opponents: { $push: '$opponents' },
          otherFields: { $first: '$$ROOT' }
        }
      },
      {
        $replaceRoot: {
          newRoot: {
            $mergeObjects: ['$otherFields', { opponents: '$opponents', matchedAdjective: '$matchedAdjective' }]
          }
        }
      },
      {
        $set: {
          caseStatus: '$matchedValues_caseStatus.values',
          governing: '$matchedValues_governing.values',
          court: '$matchedValues.values', // Replace court field with matched value
          fileNo: '$matchedValues_fileNo.values', // Replace fileNo field with matched value
          clients: '$clients'
        }
      },

      {
        $set: {
          caseStatus: '$matchedValues_caseStatus.values',
          governing: '$matchedValues_governing.values',
          court: '$matchedValues.values', // Replace court field with matched value
          fileNo: '$matchedValues_fileNo.values', // Replace court field with matched value
          clients: '$clientsData'
        }
      },
      // { $sort: sortObj },
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
                then: { $trim: { input: { $toLower: '$' + targtKey[0] } } },
                else: '$' + targtKey[0]
              }
            } // Convert to lowercase
          }
        },
        {
          $sort: { sortField: sortObj[targtKey[0]] }
        }
      );
    }

    // Issue, we are passing hard-code strings from the front-end now
    if (dataType.data.status) {
      aggrObj.splice(aggrObj.length - 1, 0, {
        $match: { 'caseStatus._id': new mongoose.Types.ObjectId(dataType.data.status) }
      });
    }

    // TBC-company check from user after middleware implementaton
    let cases = await Case.aggregate(aggrObj);
    return cases;
  },
  async getRelatedCases(dataType) {
    const { data } = dataType;
    let caseFound = await Case.aggregate([
      {
        $match: { relative: data.caseId } // Finds cases where `caseId` is in the `relative` array
      }
    ]);

    return caseFound;
  },
  async getCase(dataType) {
    const { data } = dataType;
    let caseFound = await Case.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(dataType.data.caseId) // Replace YOUR_CASE_ID with the specific _id you're looking for
        }
      },
      {
        $lookup: {
          from: 'casevalues', // Casevalues collection
          let: { courtId: { $toObjectId: '$court' } }, // Convert court to ObjectId
          pipeline: [
            { $unwind: '$values' }, // Unwind the values array
            {
              $match: {
                $expr: {
                  $eq: ['$values._id', '$$courtId'] // Match court with values._id
                }
              }
            }
          ],
          as: 'matchedValues'
        }
      },
      {
        $unwind: {
          path: '$matchedValues',
          preserveNullAndEmptyArrays: true // Preserve cases with no matches
        }
      },
      {
        $lookup: {
          from: 'casevalues', // Casevalues collection
          let: { fileNo: { $toObjectId: '$fileNo' } }, // Convert court to ObjectId
          pipeline: [
            { $unwind: '$values' }, // Unwind the values array
            {
              $match: {
                $expr: {
                  $eq: ['$values._id', '$$fileNo'] // Match court with values._id
                }
              }
            }
          ],
          as: 'matchedValues_fileNo'
        }
      },
      {
        $unwind: {
          path: '$matchedValues_fileNo',
          preserveNullAndEmptyArrays: true // Preserve cases with no matches
        }
      },
      {
        $lookup: {
          from: 'casevalues', // Casevalues collection
          let: { caseType: { $toObjectId: '$caseType' } }, // Convert court to ObjectId
          pipeline: [
            { $unwind: '$values' }, // Unwind the values array
            {
              $match: {
                $expr: {
                  $eq: ['$values._id', '$$caseType'] // Match court with values._id
                }
              }
            }
          ],
          as: 'matchedValues_caseType'
        }
      },
      {
        $unwind: {
          path: '$matchedValues_caseType',
          preserveNullAndEmptyArrays: true // Preserve cases with no matches
        }
      },
      {
        $lookup: {
          from: 'casevalues', // Casevalues collection
          let: { department: { $toObjectId: '$department' } }, // Convert court to ObjectId
          pipeline: [
            { $unwind: '$values' }, // Unwind the values array
            {
              $match: {
                $expr: {
                  $eq: ['$values._id', '$$department'] // Match court with values._id
                }
              }
            }
          ],
          as: 'matchedValues_department'
        }
      },
      {
        $unwind: {
          path: '$matchedValues_department',
          preserveNullAndEmptyArrays: true // Preserve cases with no matches
        }
      },
      {
        $lookup: {
          from: 'casevalues', // Casevalues collection
          let: { department: { $toObjectId: '$department' } }, // Convert court to ObjectId
          pipeline: [
            { $unwind: '$values' }, // Unwind the values array
            {
              $match: {
                $expr: {
                  $eq: ['$values._id', '$$department'] // Match court with values._id
                }
              }
            }
          ],
          as: 'matchedValues_department'
        }
      },
      {
        $unwind: {
          path: '$matchedValues_department',
          preserveNullAndEmptyArrays: true // Preserve cases with no matches
        }
      },
      {
        $lookup: {
          from: 'casevalues', // Casevalues collection
          let: { caseStage: { $toObjectId: '$caseStage' } }, // Convert court to ObjectId
          pipeline: [
            { $unwind: '$values' }, // Unwind the values array
            {
              $match: {
                $expr: {
                  $eq: ['$values._id', '$$caseStage'] // Match court with values._id
                }
              }
            }
          ],
          as: 'matchedValues_caseStage'
        }
      },
      {
        $unwind: {
          path: '$matchedValues_caseStage',
          preserveNullAndEmptyArrays: true // Preserve cases with no matches
        }
      },
      // ****************
      {
        $lookup: {
          from: 'casevalues', // Casevalues collection
          let: { governing: { $toObjectId: '$governing' } }, // Convert court to ObjectId
          pipeline: [
            { $unwind: '$values' }, // Unwind the values array
            {
              $match: {
                $expr: {
                  $eq: ['$values._id', '$$governing'] // Match court with values._id
                }
              }
            }
          ],
          as: 'matchedValues_governing'
        }
      },
      {
        $unwind: {
          path: '$matchedValues_governing',
          preserveNullAndEmptyArrays: true // Preserve cases with no matches
        }
      },
      // ***********************************
      {
        $lookup: {
          from: 'casevalues', // Casevalues collection
          let: { caseStatus: { $toObjectId: '$caseStatus' } }, // Convert court to ObjectId
          pipeline: [
            { $unwind: '$values' }, // Unwind the values array
            {
              $match: {
                $expr: {
                  $eq: ['$values._id', '$$caseStatus'] // Match court with values._id
                }
              }
            }
          ],
          as: 'matchedValues_caseStatus'
        }
      },
      {
        $unwind: {
          path: '$matchedValues_caseStatus',
          preserveNullAndEmptyArrays: true // Preserve cases with no matches
        }
      },
      // {
      //   $lookup: {
      //     from: 'clients', // Clients collection
      //     localField: 'clients', // Field in Case referencing clients
      //     foreignField: '_id', // Field in Clients collection
      //     as: 'clientsData' // Populated data will be in this field
      //   }
      // },
      {
        $lookup: {
          from: 'clients', // Clients collection
          let: { clientIds: { $map: { input: '$clients', as: 'c', in: '$$c.client' } } },
          pipeline: [
            {
              $match: {
                $expr: { $in: ['$_id', '$$clientIds'] }
              }
            }
          ],
          as: 'clientsData'
        }
      },
      {
        $unwind: '$opponents'
      },
      {
        $lookup: {
          from: 'casevalues',
          let: { adjectiveId: { $toObjectId: '$opponents.adjective' } },
          pipeline: [
            { $unwind: '$values' },
            {
              $match: {
                $expr: {
                  $eq: [
                    { $toString: '$values._id' }, // Convert to string for comparison
                    { $toString: '$$adjectiveId' }
                  ]
                }
              }
            }
          ],
          as: 'matchedAdjective'
        }
      },
      {
        $set: {
          'opponents.adjective': { $arrayElemAt: ['$matchedAdjective.values', 0] }
        }
      },
      {
        $group: {
          _id: '$_id',
          opponents: { $push: '$opponents' },
          otherFields: { $first: '$$ROOT' }
        }
      },
      {
        $replaceRoot: {
          newRoot: {
            $mergeObjects: ['$otherFields', { opponents: '$opponents', matchedAdjective: '$matchedAdjective' }]
          }
        }
      },
      // BOUNDARY START
      {
        $unwind: '$opponents'
      },
      {
        $lookup: {
          from: 'casevalues',
          let: { adjectiveId: { $toObjectId: '$opponents.opponentLegalStatus' } },
          pipeline: [
            { $unwind: '$values' },
            {
              $match: {
                $expr: {
                  $eq: [
                    { $toString: '$values._id' }, // Convert to string for comparison
                    { $toString: '$$adjectiveId' }
                  ]
                }
              }
            }
          ],
          as: 'matchedLegalStatus'
        }
      },
      {
        $set: {
          'opponents.opponentLegalStatus': { $arrayElemAt: ['$matchedLegalStatus.values', 0] }
        }
      },
      {
        $group: {
          _id: '$_id',
          opponents: { $push: '$opponents' },
          otherFields: { $first: '$$ROOT' }
        }
      },
      {
        $replaceRoot: {
          newRoot: {
            $mergeObjects: ['$otherFields', { opponents: '$opponents', matchedAdjective: '$matchedAdjective' }]
          }
        }
      },
      // **BOUNDARY CLOSE FOR POPULATION
      // BOUNDARY START
      {
        $unwind: {
          path: '$disputes',
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $lookup: {
          from: 'casevalues',
          let: { adjectiveId: { $toObjectId: '$disputes.disputingPartyLegalStatus' } },
          pipeline: [
            { $unwind: '$values' },
            {
              $match: {
                $expr: {
                  $eq: [
                    { $toString: '$values._id' }, // Convert to string for comparison
                    { $toString: '$$adjectiveId' }
                  ]
                }
              }
            }
          ],
          as: 'matcheddisputing1'
        }
      },
      {
        $set: {
          'disputes.disputingPartyLegalStatus': { $arrayElemAt: ['$matcheddisputing1.values', 0] }
        }
      },
      {
        $group: {
          _id: '$_id',
          disputes: { $push: '$disputes' },
          otherFields: { $first: '$$ROOT' }
        }
      },
      {
        $replaceRoot: {
          newRoot: {
            $mergeObjects: ['$otherFields', { disputes: '$disputes', matcheddisputing1: '$matcheddisputing1' }]
          }
        }
      },
      // **BOUNDARY CLOSE FOR POPULATION
      // BOUNDARY START
      {
        $unwind: {
          path: '$disputes',
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $lookup: {
          from: 'casevalues',
          let: { adjectiveId: { $toObjectId: '$disputes.adjective' } },
          pipeline: [
            { $unwind: '$values' },
            {
              $match: {
                $expr: {
                  $eq: [
                    { $toString: '$values._id' }, // Convert to string for comparison
                    { $toString: '$$adjectiveId' }
                  ]
                }
              }
            }
          ],
          as: 'matcheddisputing2'
        }
      },
      {
        $set: {
          'disputes.adjective': { $arrayElemAt: ['$matcheddisputing2.values', 0] }
        }
      },
      {
        $group: {
          _id: '$_id',
          disputes: { $push: '$disputes' },
          otherFields: { $first: '$$ROOT' }
        }
      },
      {
        $replaceRoot: {
          newRoot: {
            $mergeObjects: ['$otherFields', { disputes: '$disputes' }]
          }
        }
      },
      // **BOUNDARY CLOSE FOR POPULATION
      {
        $set: {
          caseStage: '$matchedValues_caseStage.values',
          department: '$matchedValues_department.values',
          caseStatus: '$matchedValues_caseStatus.values',
          caseType: '$matchedValues_caseType.values',
          governing: '$matchedValues_governing.values',
          court: '$matchedValues.values', // Replace court field with matched value
          fileNo: '$matchedValues_fileNo.values', // Replace court field with matched value
          opponents: '$opponents',
          clients: {
            $map: {
              input: '$clients',
              as: 'clientObj',
              in: {
                $mergeObjects: [
                  {
                    $arrayElemAt: [
                      {
                        $filter: {
                          input: '$clientsData',
                          as: 'clientData',
                          cond: { $eq: ['$$clientData._id', '$$clientObj.client'] }
                        }
                      },
                      0
                    ]
                  },
                  { adjective: '$$clientObj.adjective' }
                ]
              }
            }
          }
        }
      },
      {
        $unwind: '$clients'
      },
      {
        $lookup: {
          from: 'casevalues',
          let: { adjectiveId: { $toObjectId: '$clients.adjective' } },
          pipeline: [
            { $unwind: '$values' },
            {
              $match: {
                $expr: {
                  $eq: [
                    { $toString: '$values._id' }, // Convert to string for comparison
                    { $toString: '$$adjectiveId' }
                  ]
                }
              }
            }
          ],
          as: 'matchedAdjectiveClient'
        }
      },
      {
        $set: {
          'clients.adjective': { $arrayElemAt: ['$matchedAdjectiveClient.values', 0] }
        }
      },
      {
        $group: {
          _id: '$_id',
          clients: { $push: '$clients' },
          otherFields: { $first: '$$ROOT' }
        }
      },
      {
        $replaceRoot: {
          newRoot: {
            $mergeObjects: ['$otherFields', { clients: '$clients', matchedAdjectiveClient: '$matchedAdjectiveClient' }]
          }
        }
      },
      {
        $lookup: {
          from: 'sessions', // Sessions collection
          let: { caseId: '$_id' }, // Use _id of the current case
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ['$case', '$$caseId'] // Match sessions where case field equals current case _id
                }
              }
            },
            { $sort: { date: -1 } } // Sort by date ascending to get the sessions in order
          ],
          as: 'nextSession' // Store all matched sessions in an array
        }
      },
      {
        $lookup: {
          from: 'procedures', // Sessions collection
          let: { pID: '$_id' }, // Use _id of the current case
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ['$case', '$$pID'] // Match sessions where case field equals current case _id
                }
              }
            }
          ],
          as: 'legalProcedures' // Store all matched sessions in an array
        }
      },
      {
        $lookup: {
          from: 'cases',
          let: { caseIdStr: { $toString: '$_id' } }, // Convert ObjectId to String
          pipeline: [
            {
              $match: {
                $expr: { $in: ['$$caseIdStr', '$relative'] }
              } // Check in the relative array
            }
          ],
          as: 'relatedCases'
        }
      }
      // {
      //   $set: {
      //     caseStage: '$matchedValues_caseStage.values',
      //     department: '$matchedValues_department.values',
      //     caseStatus: '$matchedValues_caseStatus.values',
      //     caseType: '$matchedValues_caseType.values',
      //     governing: '$matchedValues_governing.values',
      //     court: '$matchedValues.values', // Replace court field with matched value
      //     fileNo: '$matchedValues_fileNo.values', // Replace court field with matched value
      //     opponents: '$opponents'
      //     clients: '$clientsData',
      //   }
      // }
    ]);

    data.search = {
      _id: { $in: caseFound[0].clients.map((client) => new mongoose.Types.ObjectId(client._id)) }
    };

    let caseClients = (await ClientQueries.getClients({ data }))[0].results;

    // some aggregation issues, we get an empty disputes array, TBC
    caseFound[0].disputes = caseFound[0].disputes.filter((i) => Object.keys(i).length);

    caseFound[0].clients = caseClients.map((item) => {
      return {
        adjective: caseFound[0].clients.find((i) => i._id.toString() == item._id._id.toString()).adjective,
        ...item
      };
    });

    return caseFound;
  }
};
