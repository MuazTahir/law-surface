const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
import { Session } from '@/models/session';
import { getDataType } from '@/app/lib/utils';
import { NextResponse } from 'next/server';
import _ from 'lodash';

export async function POST(req) {
  let dataType = await getDataType(req);
  const { data } = dataType;

  try {
    console.log(dataType);

    switch (true) {
      case dataType.type == 'fetchSessionSummary': {
        const timestamps = data.dates.map((day) => day.timestamp);
        let sessionSummary = await Session.aggregate([
          {
            $match: {
              archived: false,
              nextSessionDate: { $in: timestamps }
            }
          },
          {
            $group: {
              _id: '$nextSessionDate', // or use $dateToString if you need to format the date
              count: { $sum: 1 },
              sessions: { $push: '$$ROOT' }
            }
          }
        ]);

        const resultObject = {};
        const asyncCounter = {};
        sessionSummary.forEach((doc) => {
          let occurrences = 0;

          let groupedTiming = _.groupBy(doc.sessions, 'nextSessionTime');
          for (let item in groupedTiming) {
            if (groupedTiming[item].length > 1) {
              occurrences++;
            }
          }
          asyncCounter[doc._id] = occurrences;
          resultObject[doc._id] = doc.count;
        });

        data.dates = data.dates.map((item) => {
          return {
            ...item,
            session: {
              ...item.session,
              num: resultObject[item.timestamp] || 0
            },
            border: {
              ...item.border,
              text: asyncCounter[item.timestamp] || 0
            }
          };
        });

        return NextResponse.json({
          success: true,
          resultObject: data.dates
        });
      }
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json(e);
  }
}
