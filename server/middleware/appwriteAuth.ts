import { getSessionFromServer } from "../utils/getSessionFromServer";

const runtimeConfig = useRuntimeConfig();
const protectedRoutes: string[] = runtimeConfig.appwrite.guardRoutes;
const protectedRoutesRedirectURL: string = runtimeConfig.appwrite.guardRoutesRedirectURL;
const skipRoutes: string[] = runtimeConfig.appwrite.guardSkipRoutes;
const skipRedirRoute: string = runtimeConfig.appwrite.guardSkipRedirectRoute;

export default defineEventHandler(async (event) => {
  const URL: string | undefined = event.node.req.url;
  const isSkipped = skipRoutes.some(route => URL.startsWith(route));
  const isProtected = protectedRoutes.some(route => URL.startsWith(route));

  const protectedRoute = () => {
    if (!URL) return;
    return isProtected || isSkipped;
  };
  if (protectedRoute()) {
    const cookies = parseCookies(event);
    const session = await getSessionFromServer(cookies);
    console.log(session);
    if (!session && !isSkipped) {
      sendRedirect(event, protectedRoutesRedirectURL);
    }
    if (session) {
      console.log("setting context...");
      event.context.auth = { userId: session };
    }
    if (session && isSkipped) {
      sendRedirect(event, skipRedirRoute);
      return;
    }
  }
  return;
});
