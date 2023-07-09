<template>
  <div class="z-40">
    <header
      class="flex flex-wrap md:justify-start md:flex-nowrap z-40 w-full text-sm"
    >
      <nav
        class="mt-6 relative max-w-[90rem] w-full bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="flex items-center justify-between">
          <NuxtLink
            class="flex-none text-xl font-semibold dark:text-white"
            to="/"
            >ParsVec</NuxtLink
          >
          <div class="md:hidden">
            <button
              @click="toggleShowC"
              type="button"
              class="p-2 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
            >
              <svg
                class="w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                class="hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          class="transition-all duration-300 basis-full grow md:block"
          :class="showC ? 'block' : 'hidden'"
        >
          <div
            class="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7"
          >
            <NuxtLink
              class="font-medium text-blue-600 md:py-6 dark:text-blue-500"
              to="/latest"
              >Latest</NuxtLink
            >
            <a
              class="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
              href="#"
              >Dashboard</a
            >
            <a
              class="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
              href="#"
              >Blog</a
            >

            <template v-if="!store.isAuthed">
              <NuxtLink
                class="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 md:border-l md:border-gray-300 md:my-6 md:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500"
                to="/signin"
              >
                <svg
                  class="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
                  />
                </svg>
                Sign In
              </NuxtLink>
            </template>
            <template v-else>
              <NuxtLink
                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 cursor-pointer"
                to="/new"
              >
                Share Work
              </NuxtLink>
              <NavbarAccDrop />
            </template>
          </div>
        </div>
      </nav>
    </header>
  </div>

  <div class="ml-4 sm:ml-8 md:ml-16 lg:ml-28 xl:ml-36 relative mt-2 z-50">
    <NavbarMegaPhotos />
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "../stores/user";
const store = useAuthStore();
let showC = ref(false);
function toggleShowC() {
  showC.value = !showC.value;
}
</script>

<style scoped></style>
