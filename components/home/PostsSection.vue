<template>
  <!-- Card Blog -->
  <div class="mx-auto px-4 py-10 sm:px-6 lg:px-32 lg:py-14">
    <!-- Grid -->
    <div class="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5">
      <template v-if="!pending">
        <div v-for="(post, index) in posts" :key="index">
          <Post
            :record="post"
            class="relative min-h-[350px] w-full flex-shrink-0 overflow-hidden rounded-xl before:absolute before:inset-x-0 before:z-[1] before:h-full before:w-full before:bg-gradient-to-t before:from-gray-900/[.7]"
          />
        </div>
      </template>
      <template v-else>
        <div v-for="n in 12" :key="n">
          <LoadingImage
            class="relative min-h-[350px] w-full flex-shrink-0 overflow-hidden rounded-xl"
          />
        </div>
      </template>
    </div>
    <!-- End Grid -->
  </div>
  <!-- End Card Blog -->
</template>

<script setup lang="ts">
import PocketBase from 'pocketbase';
import Post from './Post.vue';

const config = useRuntimeConfig() as any;
const posts = ref();

const { pending } = useLazyAsyncData(async () => {
  const pb = new PocketBase(config.public.PB_ENDPOINT);
  posts.value = (
    await pb.collection('posts').getList(1, 100, {
      sort: '-created',
      expand: 'owner'
    })
  ).items;
});
</script>

<style scoped></style>
