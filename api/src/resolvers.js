import AWS from 'aws-sdk';

export default {
    Query: {
      file: () => {
        // Return the record of files uploaded from your DB or API or filesystem.
      }
    },
    Mutation: {
      async uploadFile(parent, { file }) {

        let s3bucket = new AWS.S3({
            accessKeyId: process.env.AWS_ACCESS_KEY,
            secretAccessKey: process.env.AWS_ACCESS_SECRET
        });

        const { createReadStream, filename, mimetype, encoding } = await file;

        const stream = createReadStream();

        const params = {
          Key: filename,
          Body: stream,
          Bucket: process.env.AWS_ACCESS_BUCKET
         };

        s3bucket.upload(params, function (err, data) {
          if (err) {
           console.log('error in callback');
           console.log(err);
          }

          console.log('success');
          console.log(data);
         });

        return { filename, mimetype, encoding };
      }
    },
  };
