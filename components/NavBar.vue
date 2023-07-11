<template>
  <div class="z-40">
    <header
      class="flex flex-wrap md:justify-start md:flex-nowrap z-40 w-full text-sm"
    >
      <nav
        class="mt-6 relative max-w-[90rem] w-full bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="flex items-center justify-center relative">
          <div class="md:hidden" v-on-click-outside="close">
            <button
              @click="toggleShowC"
              type="button"
              class="p-2 absolute left-0 inset-y-0 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
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
          <NuxtLink
            class="flex-none text-xl font-semibold dark:text-white"
            to="/"
          >
            <img src="/logo.png" alt="logo" data-not-lazy class="max-h-6 hidden dark:block" />
            <img src="/logo-dark.png" alt="logo" data-not-lazy class="max-h-6 dark:hidden" />
          </NuxtLink>

          <NavbarAccDrop
            class="md:hidden absolute right-0 bottom-0 inline-flex justify-center"
          />
        </div>
        <div
          class="basis-full grow md:block mx-auto"
          :class="showC ? 'block' : 'hidden'"
        >
          <div
            class="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row items-center md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7"
          >
            
            <label class="swap swap-rotate hidden  md:inline-grid">
  
  <!-- this hidden checkbox controls the state -->
  <input type="checkbox" class="hidden" />
  
  <!-- sun icon -->
  <svg class="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  <!-- moon icon -->
  <svg class="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
            <NuxtLink
              class="font-medium text-blue-600 md:py-6 dark:text-blue-500"
              to="/latest"
              >Latest</NuxtLink
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
                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 cursor-pointer w-full md:w-fit"
                to="/new"
              >
                Share Work
              </NuxtLink>

              <NavbarAccDrop
                class="right-0 bottom-0  justify-center hidden md:block"
              />
            </template>
          </div>
        </div>
      </nav>
    </header>
  </div>

  <!-- <div class="ml-4 sm:ml-8 md:ml-16 lg:ml-28 xl:ml-36 relative mt-2 z-50"> -->
  <!--   <NavbarMegaPhotos /> -->
  <!-- </div> -->
</template>

<script setup lang="ts">
import { vOnClickOutside } from "@vueuse/components";
import { useAuthStore } from "../stores/user";
const store = useAuthStore();
let showC = ref(false);
function toggleShowC() {
  showC.value = !showC.value;
}
function close() {
  showC.value = false;
}
</script>

<style scoped></style>
