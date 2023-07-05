import PocketBase from "pocketbase";
export default defineNuxtRouteMiddleware(to => {
  // skip middleware on server
  if (process.server) return;

  let pb = new PocketBase("http://127.0.0.1:8090");
  const owner = pb.authStore.model;
  if (!owner) {
    navigateTo("/signin");
    return;
  }
});
