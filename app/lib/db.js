// import { Package } from '@/models/package';
// import CaseValue from '@/models/SystemValue';
// import { systemValues } from '@/utilities/data-generation';
import mongoose from 'mongoose';
// import { MongoMemoryServer } from 'mongodb-memory-server';
// let mongoos = require('mongoose');

let mongod;

export const closeDB = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  if (mongod) {
    await mongod.stop();
  }
};

export async function connectDB() {
  console.log('DETECTED ENVIRONMENT ' + process.env.NODE_ENV);
  if (!global.connection) {
    try {
      if (process.env.NODE_ENV === 'test') {
        console.log('RUN FOR TEST');
        const { MongoMemoryServer } = await import('mongodb-memory-server');
        mongod = await MongoMemoryServer.create();
        const uri = mongod.getUri();
        console.log(uri);
        global.connection = await mongoose.connect(uri, {});
        // console.log(global.connection);
      } else {
        console.log('RUN FOR DEV');
        // global.connection = await mongoose.connect(process.env.MONGO_URI);
        global.connection = await mongoose.connect(
          'mongodb+srv://ali:abc1234567@cluster0.xht8ahs.mongodb.net/law-master',
          // 'mongodb+srv://ali:abc1234567@cluster0.xht8ahs.mongodb.net/law-master',
          {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 100000 // adjust timeout if necessary
          }
        );
        console.log('DB Connected');
      }

      // let item = "Governorate";

      // let caseValueItem = new CaseValue();
      // caseValueItem.groupTitle = item;
      // caseValueItem.values = systemValues.generate(item);

      // caseValueItem.company = "66c96deb82965254c33d7639";
      // await caseValueItem.save();

      // let package1 = new Package({name:"some"});
      // await package1.save();
    } catch (e) {
      console.log('APP ERROR');
      console.log(e.message);
      console.log(e);
    }
  }
}
