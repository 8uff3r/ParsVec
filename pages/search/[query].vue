<template>
  <div class="relative min-h-[32rem]">
    <div class="mt-5">
      <IndexSearchInput />
    </div>
    <div>
      <h1
        class="text-3xl font-extrabold mx-6 mb-8 dark:text-gray-200 text-gray-700"
        v-if="pending || posts[0]"
      >
        Posts that include "{{ query }}":
      </h1>
      <h1 v-else-if="!pending && !posts[0]">
        No posts that include "{{ query }}" were found!
      </h1>
    </div>
    <div class="absolute top-64 right-1/2 flex text-gray-500" v-if="pending">
      <span class="text-xl font-bold">Searching</span>
      <span class="loading loading-dots loading-lg inline-flex ml-2"></span>
    </div>
    <div v-if="!posts[0]">{{}}</div>
    <div
      class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 sm:px-24"
    >
      <div v-for="(post, index) in posts" :key="index">
        <HomePost
          :record="post"
          class="flex-shrink-0 rounded-xl overflow-hidden w-full min-h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PocketBase from "pocketbase";
const config = useRuntimeConfig() as any;
const route = useRoute();

const query = route.params.query as string;

const posts = ref();

const { pending } = useLazyAsyncData(async () => {
  const pb = new PocketBase(config.public.PB_ENDPOINT);
  posts.value = (
    await pb.collection("posts").getList(1, 50, {
      filter: `title ~ '${query}' || desc ~ '${query}'`,
      expand: "owner",
    })
  ).items;
});
</script>

<style scoped></style>
