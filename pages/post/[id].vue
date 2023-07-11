<template>
  <div
    class="items-center dark:text-white flex flex-col text-sm px-4 py-2 mt-2"
  >
    <div
      class="grid max-w-3xl lg:max-w-4xl xl:max-w-5xl gap-4 justify-between items-start"
    >
      <div
        class="grid space-y-1 mt-4 dark:bg-slate-800 sm:px-8 py-3 rounded-xl shadow-[0_3px_6px_hsla(0,0%,0%,0.15),0_6px_4px_hsla(0,0%,0%,0.12),0_-1px_4px_hsla(0,0%,0%,0.05)]"
      >
        <div class="flex mb-7 mx-4 sm:mx-0">
          <p class="text-2xl">{{ post.title }}</p>
        </div>
        <div class="items-center flex flex-grow mx-4 sm:mx-0">
          <a :href="`/u/${user?.username}`" class="text-pink-500 cursor-pointer"
            ><div>
              <img :src="avatarUrl" class="h-12 w-12 rounded-full" />
            </div>
          </a>
          <div class="flex flex-col ml-2">
            <h1 class="font-medium">{{ user.name + user.lastname }}</h1>
            <div class="items-center flex">
              <div class="text-zinc-400 dark:text-white">
                <a :href="`/u/${user?.username}`" class="cursor-pointer"
                  >u/{{ user?.username }}</a
                >
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex items-centert ext-pink-500 object-cover z-[1] rounded-lg overflow-hidden"
        >
          <img
            :src="imageUrl"
            class="object-contain my-2 rounded-lg overflow-hidden"
          />
        </div>
        <div class="flex mb-7 px-4 sm:px-0">
          <p class="text-xl text-gray-500">
            {{ post.desc || "No description" }}
          </p>
        </div>
      </div>

      <div class="items-center flex gap-4 flex-col text-center">
        <NuxtLink
          :href="`/u/${user.username}`"
          class="cursor-pointer text-xl font-medium mt-4"
          >More by {{ user.name + user.lastname }}</NuxtLink
        >
        <div class="w-full">
          <div
            class="sm:columns-2 md:columns-4 gap-2 "
          >
            <template v-for="(post, index) in posts" :key="index">
              <Post
                :record="post"
                class="rounded-xl w-full max-w-[600px] overflow-clip"
              />
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full overflow-hidden">
      <p class="p-8 text-2xl">Comments</p>
      <div
        class="grid grid-cols-1 rounded-xl animate-pulse gap-4 lg:grid-cols-4 lg:gap-8 h-10 mb-4 bg-gray-700"
      ></div>
      <div
        class="grid grid-cols-1 rounded-xl animate-pulse gap-4 lg:grid-cols-4 lg:gap-8 h-32 bg-gray-700"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Post from "@/components/post/Post.vue";
import PocketBase, { Record } from "pocketbase";

const config = useRuntimeConfig() as any;
const router = useRouter();
const pb = new PocketBase(config.public.PB_ENDPOINT);
const route = useRoute();
const postId = route.params.id as string;
const post = await pb.collection("posts").getOne(postId, { expand: "owner" });

const user = post.expand.owner as Record;
const posts = (
  await pb.collection("posts").getList(1, 4, {
    sort: "+created",
    expand: "owner",
    filter: `owner = '${user.id}'`,
  })
).items;

const avatarUrl = pb.getFileUrl(user as any, user?.avatar);
const imageUrl = pb.files.getUrl(post, post.file);
</script>

<style scoped></style>
