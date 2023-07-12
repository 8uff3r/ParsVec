<template>
  <div class="flex relative w-full mx-auto mt-4">
    <section class="pt-1 w-full">
      <div class="w-full lg:w-6/12 px-4 mx-auto">
        <div
          class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg mt-16"
        >
          <div class="flex flex-col">
            <div class="flex flex-wrap justify-center">
              <div class="relative w-[100px] justify-center mb-16">
                <img
                  alt="avatar"
                  :src="avatarUrl"
                  class="shadow-xl object-cover rounded-full align-middle border-none absolute w-[100px] h-[100px]"
                />
              </div>
            </div>
            <div
              class="text-center mt-12 flex-col flex justify-center items-center"
            >
              <div
                class="bg-gray-600 h-6 rounded-xl w-24 my-1"
                v-if="pending"
              ></div>
              <h3
                v-else
                class="text-xl font-semibold leading-normal text-gray-700 dark:text-gray-300"
              >
                {{ user?.name || "" }}
              </h3>

              <div
                class="bg-gray-600 h-6 rounded-xl w-20 my-1"
                v-if="pending"
              ></div>
              <div
                v-else
                class="text-sm leading-normal mt-0 mb-2 text-gray-400 font-bold uppercase"
              >
                <i class="text-lg text-gray-400"></i>
                @{{ user?.username || "" }}
              </div>
              <div class="mb-2 text-gray-800 dark:text-gray-300 mt-1">
                {{ user?.bio }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div
    class="flex flex-wrap flex-row flex-1 gap-2 justify-center items-center place-items-center px-0 sm:px-3 xl:px-32"
  >
    <template v-if="pending">
      <div v-for="n in 3" :key="n">
        <LoadingImage
          class="rounded-xl min-h-[150px] sm:min-h-[250px] w-[100px] sm:w-[200px] overflow-clip"
        />
      </div>
    </template>
    <template v-else>
      <div v-for="(post, index) in posts" :key="index">
        <UserProfilePost
          :record="post"
          class="rounded-xl min-h-[150px] sm:min-h-[250px] w-[100px] sm:w-[200px] overflow-clip"
        />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import PocketBase, { Record } from "pocketbase";

const route = useRoute();
const username = route.params.username as string;
const config = useRuntimeConfig() as any;
const pb = new PocketBase(config.public.PB_ENDPOINT);

const posts: Ref<Record[] | undefined> = ref();
const user: Ref<Record | undefined> = ref();
const avatarUrl = ref("");
const { pending } = useLazyAsyncData(async () => {
  posts.value = (
    await pb.collection("posts").getList(1, 15, {
      sort: "+created",
      filter: `owner.username = '${username}'`,
    })
  ).items;
  user.value = (
    await pb.collection("users").getFullList({
      filter: `username = '${username}'`,
    })
  )[0];
  avatarUrl.value = pb.getFileUrl(user.value!, user.value?.avatar, {
    thumb: "200x200",
  });
  await timeout(5000);
});
function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
onUnmounted(() => {
  posts.value = undefined;
  avatarUrl.value = "";
  user.value = undefined;
});
</script>

<style scoped></style>
