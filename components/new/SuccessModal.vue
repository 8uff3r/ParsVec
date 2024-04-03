<template>
  <div
    class="fixed top-0 h-full w-full bg-slate-950 bg-slate-950/30 backdrop-blur-2xl transition-all ease-in"
    @click="show = false"
    :class="{ hidden: !show }"
  ></div>
  <div
    class="fixed left-0 top-0 z-[60] h-full w-full overflow-y-auto overflow-x-hidden transition-all duration-200 ease-in"
    :class="{ hidden: !show }"
  >
    <div
      class="mt-0 flex min-h-[calc(100%-3.5rem)] items-center justify-center transition-all ease-out sm:mx-auto sm:w-full sm:max-w-lg"
      :class="show ? 'opacity-100' : 'opacity-0'"
    >
      <div
        class="flex flex-col rounded-xl border bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:shadow-slate-700/[.7]"
      >
        <div class="flex items-center justify-between border-b px-4 py-3 dark:border-gray-700">
          <h3 class="font-bold text-gray-800 dark:text-green-500">Success!</h3>
        </div>
        <div
          class="overflow-y-auto p-16 pb-8 text-center text-2xl text-gray-800 dark:text-gray-400"
        >
          <p>Your post has been published 🎉</p>
          <p>What do you want to do now?</p>
        </div>
        <div class="flex items-center justify-center gap-x-2 px-4 pb-3">
          <button
            type="button"
            class="inline-flex items-center justify-center gap-2 rounded-md border bg-white px-4 py-3 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-gray-800"
            @click="show = false"
          >
            Create New Post
          </button>
          <NuxtLink
            class="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            to="/latest"
          >
            Go to Dashboard
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const show = defineModel<boolean>('show', { default: false });
</script>

<style scoped></style>
