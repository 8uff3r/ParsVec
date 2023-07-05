<template>
  <div
    class="top-0 ease-in transition-all fixed h-full w-full bg-slate-950 backdrop-blur-2xl bg-slate-950/30"
    @click="show = false"
    :class="{ hidden: !show }"
  ></div>
  <div
    class="w-full ease-in duration-200 transition-all h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
    :class="{ hidden: !show }"
  >
    <div
      class="mt-0 justify-center ease-out transition-all sm:max-w-lg sm:w-full sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center"
      :class="show ? 'opacity-100' : 'opacity-0'"
    >
      <div
        class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
      >
        <div
          class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700"
        >
          <h3 class="font-bold text-gray-800 dark:text-green-500">Success!</h3>
        </div>
        <div
          class="p-16 pb-8 overflow-y-auto text-gray-800 dark:text-gray-400 text-2xl text-center"
        >
          <p>Your post has been published 🎉</p>
          <p>What do you want to do now?</p>
        </div>
        <div class="flex justify-center items-center gap-x-2 pb-3 px-4">
          <button
            type="button"
            class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
            @click="show = false"
          >
            Create New Post
          </button>
          <NuxtLink
            class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
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
const show = defineModel<boolean>("show", { default: false });
</script>

<style scoped></style>
