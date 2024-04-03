<template>
  <div class="relative min-h-[32rem]">
    <div class="mt-5">
      <IndexSearchInput />
    </div>
    <div>
      <h1
        class="mx-6 mb-8 text-3xl font-extrabold text-gray-700 dark:text-gray-200"
        v-if="pending || posts[0]"
      >
        Posts that include "{{ query }}":
      </h1>
      <h1 v-else-if="!pending && !posts[0]">No posts that include "{{ query }}" were found!</h1>
    </div>
    <div class="absolute right-1/2 top-64 flex text-gray-500" v-if="pending">
      <span class="text-xl font-bold">Searching</span>
      <span class="loading loading-dots loading-lg ml-2 inline-flex"></span>
    </div>
    <div v-if="!posts[0]">{{}}</div>
    <div class="grid gap-8 sm:grid-cols-2 sm:px-24 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
      <div v-for="(post, index) in posts" :key="index">
        <HomePost
          :record="post"
          class="min-h-[350px] w-full flex-shrink-0 overflow-hidden rounded-xl before:absolute before:inset-x-0 before:z-[1] before:h-full before:w-full before:bg-gradient-to-t before:from-gray-900/[.7]"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PocketBase, { type RecordModel } from 'pocketbase';
const config = useRuntimeConfig() as any;
const route = useRoute();

const query = route.params.query as string;

const posts = ref<RecordModel[]>([]);

const { pending } = useLazyAsyncData(async () => {
  const pb = new PocketBase(config.public.PB_ENDPOINT);
  posts.value = (
    await pb.collection('posts').getList(1, 50, {
      filter: `title ~ '${query}' || desc ~ '${query}'`,
      expand: 'owner'
    })
  ).items;
});
</script>

<style scoped></style>
