export const useUserAvatar = (userId: string) => {
  const config = useRuntimeConfig();
  const bucketId = "64a05291ac50663f8aa3";
  return `${config.public.appwrite.endpoint}/storage/buckets/${bucketId}/files/${userId}/preview?project=${config.public.appwrite.project}`;
};
