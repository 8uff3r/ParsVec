import PocketBase from 'pocketbase';
export default defineNuxtRouteMiddleware((to) => {
  // skip middleware on server
  if (process.server) return;

  const config = useRuntimeConfig() as any;
  let pb = new PocketBase(config.public.PB_ENDPOINT);
  const owner = pb.authStore.model;
  if (!owner) {
    navigateTo('/signin');
    return;
  }
});
