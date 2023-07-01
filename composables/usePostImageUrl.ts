export const usePostImageUrl = (fileId: string, width?: number) => {
  const config = useRuntimeConfig();
  const bucketId = "649af8acf363b416a307";

  if (width) {
    return `${config.public.appwrite.endpoint}/storage/buckets/${bucketId}/files/${fileId}/preview?project=${config.public.appwrite.project}&width=${width}`;
  }
  return `${config.public.appwrite.endpoint}/storage/buckets/${bucketId}/files/${fileId}/preview?project=${config.public.appwrite.project}`;
};
