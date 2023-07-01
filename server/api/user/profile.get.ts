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
  if (event.context.auth && event.context.auth.userId) {
    const userId = event.context.auth.userId;
  } else {
    createError({ statusCode: 401, statusMessage: "Unauthorized" });
    return;
  }

  let listRes = await dbs.listDocuments(
    usersDatabase,
    profilesCollection,
    [
      Query.equal("owner", userId),
      Query.limit(1),
    ],
  );

  return {
    email: listRes.documents[0].email,
    name: listRes.documents[0].name,
    lastname: listRes.documents[0].lastname,
    gender: listRes.documents[0].gender,
    phone: listRes.documents[0].phone,
    bio: listRes.documents[0].bio,
  };
});
