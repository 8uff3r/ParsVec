export const usePostData = async (postId: string) => {
  const { database } = useAppwrite();

  const postsDatabase = "649df44a17f9aa64d617";
  const dataCollection = "649e91cb0aa2504dc506";
  const post = await database.getDocument(postsDatabase, dataCollection, postId);
  return post
};
