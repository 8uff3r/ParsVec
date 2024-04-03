<template>
  <div class="w-full px-8 pb-7">
    <div class="flex rounded-md shadow-sm">
      <input
        type="text"
        v-model="searchInput"
        @keyup.enter="submitSearch"
        class="block w-full animate-pulse rounded-l-md border-gray-300 bg-gray-200 px-4 text-sm shadow-lg focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
        placeholder="Input search"
      />
      <button
        type="button"
        @click="submitSearch"
        class="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-r-md border border-transparent bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <span
          class="inline-block h-4 w-4 animate-spin rounded-full border-[3px] border-current border-t-transparent text-white"
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

const search = ref('');
const searchInput = ref('');
const submitSearch = () => {
  search.value = searchInput.value;
  router.push(`/search/${search.value}`);
};
</script>

<style scoped></style>
