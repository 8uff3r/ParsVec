export default defineNuxtRouteMiddleware(to => {
  // skip middleware on server
  if (process.server) return;

  const cookie = useCookie("user");
  if (!cookie.value) localStorage.clear();
});
