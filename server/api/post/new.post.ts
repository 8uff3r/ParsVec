import { on } from "events";
import formidable from "formidable";
import { Client, Databases, ID, InputFile, Query, Storage } from "node-appwrite";
import { PassThrough } from "stream";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const client = new Client();
  const dbs = new Databases(client);
  const storage = new Storage(client);
  client
    .setEndpoint(config.appwrite.endpoint)
    .setProject(config.appwrite.project)
    .setKey(
      config.appwrite.apiKey,
    );
  const postsDatabase = "649df44a17f9aa64d617";
  const dataCollection = "649e91cb0aa2504dc506";

  const userId = event.context.auth.userId;
  const postId: string = getRandomString(10);

  try {
    const body = await parseMultipartNodeRequest(event.node.req, userId) as {
      title: string[];
      desc: string[];
      tags: string[];
      file: typeof formidable.VolatileFile[];
    };
    console.log("body  after parsing is:", body);

    const createRes = await dbs.createDocument(postsDatabase, dataCollection, postId, {
      owner: userId,
      title: body.title[0],
      desc: body.desc[0],
      tags: JSON.parse(body.tags[0]),
    });
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 400,
      statusMessage: "Please fill the required fields",
    });
  }
  const headers = getRequestHeaders(event);

  return true;

  function parseMultipartNodeRequest(req: any, userId: string) {
    return new Promise((resolve, reject) => {
      const uploads: Promise<any>[] = [];

      const form = formidable({ multipart: true, fileWriteStreamHandler });

      form.parse(req, (err, fields, files) => {
        if (JSON.stringify(files) == "{}" || err) {
          reject(err);
          return;
        }
        Promise.all(uploads).then(() => resolve({ ...fields, ...files })).catch(reject);
      });

      function fileWriteStreamHandler(file: any) {
        const body = new PassThrough();

        console.log("file is: ", file);
        const fileExtension = file.originalFilename.split(".").pop();
        console.log(fileExtension);
        const uploadRequest = storage.createFile(
          "649af8acf363b416a307",
          postId,
          InputFile.fromStream(body, postId + "." + fileExtension, file.size),
        ).then((response) => {
        });

        uploads.push(uploadRequest);

        return body;
      }
    });
  }
});
