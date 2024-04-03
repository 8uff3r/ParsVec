<template>
  <div class="min-h-screen">
    <div class="mx-auto w-[88%] border-b-2 border-b-gray-100 pt-5 dark:border-b-gray-700">
      <IndexSearchInput />
    </div>
    <!----------------- Posts and Loading ----------------->
    <h1 class="mx-6 -mb-8 mt-1 text-[35px] text-gray-400">
      {{ mainHead }}
    </h1>
    <ClientOnly>
      <Suspense>
        <main>
          <HomePostsSection />
        </main>
        <template #fallback>
          <PostsLoading />
        </template>
      </Suspense>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import PostsLoading from '@/components/home/PostsLoading.vue';

const mainHead = ref('Latest Posts');
</script>

<style scoped></style>
