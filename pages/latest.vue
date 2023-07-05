<template>
  <div class="">
    <div class="px-8 pt-5 border-b-gray-700 pb-7 border-b">
      <label
        for="hs-search-box-with-loading-4"
        class="block text-sm font-medium mb-2 dark:text-white"
        >Search</label
      >
      <div class="flex rounded-md shadow-sm">
        <input
          type="text"
          id="hs-search-box-with-loading-4"
          v-model="searchInput"
          @keyup.enter="submitSearch"
          name="hs-search-box-with-loading-4"
          class="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-l-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
          placeholder="Input search"
        />
        <button
          type="button"
          @click="submitSearch"
          class="py-3 px-4 inline-flex flex-shrink-0 justify-center items-center gap-2 rounded-r-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
        >
          <span
            class="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full"
            role="status"
            aria-label="loading"
          >
            <span class="sr-only">Loading...</span>
          </span>
          Search
        </button>
      </div>
    </div>
    <!----------------- Posts and Loading ----------------->
    <h1 class="text-[3rem] font-extrabold mx-6 mt-1 -mb-8 text-white">
      {{ mainHead }}
    </h1>
    <ClientOnly>
      <Suspense>
        <main>
          <PostsSection :search="search" />
        </main>
        <template #fallback>
          <PostsLoading />
        </template>
      </Suspense>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import PostsSection from "@/components/home/PostsSection.vue";
import PostsLoading from "@/components/home/PostsLoading.vue";

const mainHead = ref("Latest Posts");
const search = ref("");
const searchInput = ref("");
const submitSearch = () => {
  console.log("submit");
  search.value = searchInput.value;
};
</script>

<style scoped></style>
