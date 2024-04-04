import { Storage } from "@google-cloud/storage";

(async () => {
  const storage = new Storage({
    projectId: process.env.PROJECT_ID,
    keyFilename: "./key.json",
  });

  const bucketName = process.env.PROJECT_ID + "-test";
  const srcFileName = "test.csv";

  const data = await storage.bucket(bucketName).file(srcFileName).download();
  const contents = data[0].toString();
  console.log(contents);
})().catch(async (e) => {
  console.error(e.code, e.errors);
});
