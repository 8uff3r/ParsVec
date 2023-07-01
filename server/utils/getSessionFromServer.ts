import { Account, Client } from "appwrite";

const config = useRuntimeConfig();

const client = new Client();
client
  .setEndpoint(config.appwrite.endpoint)
  .setProject(config.appwrite.project);

const account = new Account(client);

export const getSessionFromServer = async (cookies: Record<string, string>): Promise<boolean | string | undefined> => {
  const sessionCookiesNames = [
    `a_session_${config.appwrite.endpoint.toLowerCase()}`,
    `a_session_${config.appwrite.project.toLowerCase()}_legacy`,
  ];

  let hash = cookies[sessionCookiesNames[0]] ?? cookies[sessionCookiesNames[1]] ?? "";

  const authCookies: any = new Map();
  authCookies[`a_session_${config.appwrite.project.toLowerCase()}`] = hash;

  client.headers["X-Fallback-Cookies"] = JSON.stringify(authCookies);

  try {
    const user = await account.get();
    if (user.$id) {
      console.log("getSession userId:", user.$id);
      return user.$id;
    } else {
      return undefined;
    }
  } catch (error) {
    return false;
  }
};
