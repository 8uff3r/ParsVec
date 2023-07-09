<template>
  <div class="min-h-screen">
    <div
      class="pt-5 dark:border-b-gray-700 border-b-gray-100 border-b-2 mx-auto w-[88%]"
    >
      <IndexSearchInput />
    </div>
    <!----------------- Posts and Loading ----------------->
    <h1 class="text-[35px] mx-6 mt-1 -mb-8 text-gray-400">
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
import PostsLoading from "@/components/home/PostsLoading.vue";

const mainHead = ref("Latest Posts");
</script>

<style scoped></style>
