<template>
  <div class="mt-2 flex flex-col items-center px-4 py-2 text-sm dark:text-white">
    <div class="grid max-w-3xl items-start justify-between gap-4 lg:max-w-4xl xl:max-w-5xl">
      <div
        class="mt-4 grid space-y-1 rounded-xl py-3 shadow-[0_3px_6px_hsla(0,0%,0%,0.15),0_6px_4px_hsla(0,0%,0%,0.12),0_-1px_4px_hsla(0,0%,0%,0.05)] dark:bg-slate-800 sm:px-8"
      >
        <div class="mx-4 mb-7 flex sm:mx-0">
          <p class="text-2xl">{{ post.title }}</p>
        </div>
        <div class="mx-4 flex flex-grow items-center sm:mx-0">
          <a :href="`/u/${user?.username}`" class="cursor-pointer text-pink-500"
            ><div>
              <img :src="avatarUrl" class="h-12 w-12 rounded-full" />
            </div>
          </a>
          <div class="ml-2 flex flex-col">
            <h1 class="font-medium">{{ user.name + user.lastname }}</h1>
            <div class="flex items-center">
              <div class="text-zinc-400 dark:text-white">
                <a :href="`/u/${user?.username}`" class="cursor-pointer hover:underline"
                  >u/{{ user?.username }}</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="items-centert ext-pink-500 z-[1] flex overflow-hidden rounded-lg object-cover">
          <img :src="imageUrl" class="mx-auto my-2 overflow-hidden rounded-lg object-contain" />
        </div>
        <div class="mb-7 flex px-4 sm:px-0">
          <p class="text-xl text-gray-500">
            {{ post.desc || 'No description' }}
          </p>
        </div>
      </div>

      <div class="flex flex-col items-center gap-4 text-center">
        <NuxtLink
          :href="`/u/${user.username}`"
          class="mt-4 cursor-pointer text-xl font-medium hover:underline"
          >More by {{ user.name + user.lastname }}</NuxtLink
        >
        <div class="w-full">
          <div class="gap-2 sm:columns-2 md:columns-4">
            <template v-for="(post, index) in posts" :key="index">
              <Post :record="post" class="w-full max-w-[600px] overflow-clip rounded-xl" />
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full overflow-hidden">
      <p class="p-8 text-2xl">Comments</p>
      <div
        class="mb-4 grid h-10 animate-pulse grid-cols-1 gap-4 rounded-xl bg-gray-700 lg:grid-cols-4 lg:gap-8"
      ></div>
      <div
        class="grid h-32 animate-pulse grid-cols-1 gap-4 rounded-xl bg-gray-700 lg:grid-cols-4 lg:gap-8"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Post from '@/components/post/Post.vue';
import PocketBase, { type RecordModel } from 'pocketbase';

const config = useRuntimeConfig() as any;
const pb = new PocketBase(config.public.PB_ENDPOINT);
const route = useRoute();
const postId = route.params.id as string;
const post = await pb.collection('posts').getOne(postId, { expand: 'owner' });

const user = post.expand?.owner as RecordModel;
const posts = (
  await pb.collection('posts').getList(1, 4, {
    sort: '+created',
    expand: 'owner',
    filter: `owner = '${user.id}'`
  })
).items;

const avatarUrl = pb.getFileUrl(user as any, user?.avatar);
const imageUrl = pb.files.getUrl(post, post.file);
</script>

<style scoped></style>
