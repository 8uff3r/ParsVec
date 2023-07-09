<template>
  <div class="px-8 pb-7 w-full">
    <div class="flex rounded-md shadow-sm">
      <input
        type="text"
        v-model="searchInput"
        @keyup.enter="submitSearch"
        class="px-4 block w-full border-gray-300 animate-pulse bg-gray-200 shadow-lg rounded-l-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
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
</template>

<script setup lang="ts">
const router = useRouter();

const search = ref("");
const searchInput = ref("");
const submitSearch = () => {
  search.value = searchInput.value;
  router.push(`/search/${search.value}`);
};
</script>

<style scoped></style>
