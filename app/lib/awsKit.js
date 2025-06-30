let AWS = require("aws-sdk");
let path = require('path');

let S3;

let projectBucketName = 'lawmaster';

module.exports = {

    init: () => {

        AWS.config.loadFromPath(path.resolve('config/creds.json'));
        S3 = new AWS.S3({ apiVersion: '2006-03-01' });
        // AWS.config.update({
        //     region: 'us-east-1'
        // });

    },
    deleteBucket: async (bucketID) => {

        // await module.exports.deleteFile({
        //     bucketName: bucketID,
        //     path: 'intro'
        // });

        // let res = await S3.deleteBucket({ Bucket: bucketID }, (err, data) => {
        //     // conso`
        //     console.log(res);
        // });

        return new Promise(async (c, e) => {

            try {

                var params = {
                    Bucket: projectBucketName + '/' + bucketID,
                    Delimiter: '/',
                    Prefix: ''
                }

                S3.listObjects(params, async function (err, data) {
                    // let data = await S3.listObjects(params);

                    if (err) {
                        e(err);
                    };

                    if (data && data.CommonPrefixes.length) {

                        await Promise.all(data.CommonPrefixes.map(async (prefix) => {

                            let files = await module.exports.readFolder({
                                bucketName: projectBucketName,
                                folderName: bucketID + '/' + prefix.Prefix.replace('/', '')
                            });

                            await Promise.all(files.Contents.map(async (content) => {
                                let res = await module.exports.deleteFile({
                                    bucketName: projectBucketName,
                                    path: bucketID + '/' + content.Key
                                });
                                return res;
                            }));

                            return prefix;

                        }));

                        let res = await S3.deleteBucket({ Bucket: projectBucketName + '/' + bucketID }, (err, data) => {
                            if (err) {
                                e(err);
                            } else {
                                c(true);
                            }
                        });


                    } else {

                        let res = await S3.deleteBucket({ Bucket: projectBucketName + '/' + bucketID }, (err, data) => {
                            if (err) {
                                e(err);
                            } else {
                                c(true);
                            }
                        });
                    }



                    console.log(data);
                });

            } catch (e) {

                e(e);

            }

        });

    },
    copyFile: async (args) => {

        try {

            return await S3.copyObject({
                'Bucket': projectBucketName,
                'Key': args.bucketName + '/' + args.newName,
                'CopySource': args.sourceFile,
            }).promise();

        } catch (e) {
            console.log(e.message)
        }
        return new Error("Cannot rename file to itself")

    },
    renameFile: async (args) => {

        try {
            await S3.copyObject({
                'Bucket': projectBucketName,
                'Key': args.bucketName + '/' + args.newName,
                'CopySource':projectBucketName+'/'+  args.bucketName + '/' + args.sourceFile,
            }).promise();


            return module.exports.deleteFile({
                bucketName: args.bucketName,
                path:  args.sourceFile
            })

        } catch (e) {
            console.log(e.message)
        }
        return new Error("Cannot rename file to itself")

    },
    deleteFile: async (args) => {

        var params = { Bucket: args.projectBucketName || projectBucketName, Key: args.bucketName ? (args.bucketName + '/' + args.path) : args.path};

        return await S3.deleteObject(params).promise();

    },
    getFilrURL: (arg) => {

        return S3.getSignedUrl("getObject", {
            Bucket: arg.projectBucketName || projectBucketName,
            Key: arg.bucketName ? (arg.bucketName + '/' + arg.Key) : arg.Key,
            // Key: arg.bucketName + '/' + arg.Key,
            Expires: arg.time || 450 // 10 seconds in the past
        });

        // return S3.getSignedUrl(arg.bucketName, arg.Key).toExternalForm();    

    },
    uploadFile: async (args) => {

        let objectParams = args;

        args.Key = args.Bucket ? (args.Bucket + '/' + args.Key) : args.Key;

        args.Bucket = args.projectBucketName || projectBucketName;

        // args.Bucket = !args.ownBucket ? projectBucketName : args.Bucket;
        // args.Bucket = args.Bucket || projectBucketName;

        // args.Key = !args.ownBucket ? args.Bucket + '/' + args.Key : args.Key;
        // debugger;   
        // objectParams.ey = Math.round(Math.random() * 1000);

        // var objectParams = {
        //     Bucket: args.bucketName,
        //     Key: keyName,
        //     Body: 'Hello World!'
        // };

        // Create object upload promise
        return await S3.upload(objectParams).promise();
        // uploadPromise.then(
        //     function (data) {
        //         // console.log("Successfully uploaded data to " + objectParams.bucketName + "/" + keyName);
        //     });

    },
    getFile: async (args) => {

        args.Key =  args.Bucket ? args.Bucket + '/' + args.Key : args.Key;
        args.Bucket = args.projectBucketName || projectBucketName;
        delete args.projectBucketName;
        return await S3.getObject(args).promise();

    },
    readFolder: async (args) => {

        // params = args;

        var params = {
            Bucket: args.projectBucketName || projectBucketName,
            // Bucket:  args.bucketName,
            Delimiter: '/',
            Prefix: (args.bucketName ? args.bucketName + '/' : '') + args.folderName + '/'
        };

        return await S3.listObjects(params).promise();

    },
    createBucket: async (args) => {

        // Create a promise on S3 service object
        return await S3.createBucket({ Bucket:args.bucketName }).promise();

        // // Handle promise fulfilled/rejected states
        // bucketPromise.then(
        //     function (data) {
        //         // Create params for putObject call


        //     }).catch(
        //         function (err) {
        //             console.error(err, err.stack);
        //         });


    }

}