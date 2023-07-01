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

  const userId = getQuery(event).user as string;
  console.log(userId);
  if (userId) {
    const user = await dbs.getDocument(
      usersDatabase,
      profilesCollection,
      userId,
      [Query.select([
        "name",
      ])],
    );

    return {
      name: user.name,
    };
  } else {
    throw createError({
      statusCode: 400,
      statusMessage: "user query cant be empty",
    });
  }
});
