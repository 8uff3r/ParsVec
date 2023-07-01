import { Client, Databases, Query } from "node-appwrite";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const client = new Client();
  const dbs = new Databases(client);
  client
    .setEndpoint(config.appwrite.endpoint)
    .setProject(config.appwrite.project)
    .setKey(
      config.appwrite.apiKey,
    );
  const profilesCollection = "649ddcfcbdd3b7e3b06b";
  const usersDatabase = "649ddac07a565f27b301";

  const userId = event.context.auth.userId;
  const body = await readBody(event);
  const fields = ["username", "name", "lastname", "gender", "email", "phone", "bio"];

  let listRes = await dbs.listDocuments(
    usersDatabase,
    profilesCollection,
    [
      Query.equal("owner", userId),
      Query.limit(1),
    ],
  );

  let data = {};
  if (JSON.stringify(body) != "{}") {
    fields.forEach((value) => {
      if (
        body[value] && listRes.documents[0].hasOwnProperty(value) && body[value] != listRes.documents[0][value]
      ) {
        data[`${value}`] = body[value];
      }
    });
    console.log("the data to be changed is: ", data);
    if (JSON.stringify(data) != "{}") {
      if (listRes.total == 0) {
        const createRes = await dbs.createDocument(
          usersDatabase,
          profilesCollection,
          userId,
          {
            owner: userId,
            ...data,
          },
        );
      } else {
        const upRes = await dbs.updateDocument(
          usersDatabase,
          profilesCollection,
          listRes.documents[0]["$id"],
          data,
        );
      }
    }
  }

  return true;
});
