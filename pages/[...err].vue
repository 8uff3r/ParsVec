<template>
  <div class="">
    <div class="mx-auto flex h-full w-full max-w-[50rem] flex-col">
      <div class="px-4 py-10 text-center sm:px-6 lg:px-8">
        <h1 class="block text-7xl font-bold text-gray-800 dark:text-white sm:text-9xl">404</h1>
        <h1 class="block text-2xl font-bold text-white"></h1>
        <p class="mt-3 text-gray-600 dark:text-gray-400">Oops, something went wrong.</p>
        <p class="text-gray-600 dark:text-gray-400">Sorry, we couldn't find your page.</p>
        <div class="mt-5 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
          <NuxtLink
            class="inline-flex w-full items-center justify-center gap-2 rounded-md border border-transparent px-4 py-3 text-sm font-semibold text-blue-500 ring-offset-white transition-all hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-slate-900 sm:w-auto"
            to="/"
          >
            <svg class="h-2.5 w-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M11.2792 1.64001L5.63273 7.28646C5.43747 7.48172 5.43747 7.79831 5.63273 7.99357L11.2792 13.64"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            Back to Home
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
