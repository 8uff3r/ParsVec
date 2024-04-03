<template>
  <div class="z-40">
    <header class="z-40 flex w-full flex-wrap text-sm md:flex-nowrap md:justify-start">
      <nav
        class="relative mx-2 mt-6 w-full max-w-[90rem] rounded-[36px] border border-gray-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-800 md:flex md:items-center md:justify-between md:px-6 md:py-0 lg:px-8 xl:mx-auto"
      >
        <div class="relative flex items-center justify-center">
          <div class="md:hidden" v-on-click-outside="close">
            <button
              @click="toggleShowC"
              type="button"
              class="absolute inset-y-0 left-0 inline-flex items-center justify-center gap-2 rounded-full border bg-white p-2 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-gray-800"
            >
              <IconMenu2 :size="14" />
            </button>
          </div>
          <NuxtLink class="flex-none text-xl font-semibold dark:text-white" to="/">
            <img src="/logo.png" alt="logo" data-not-lazy class="hidden max-h-6 dark:block" />
            <img src="/logo-dark.png" alt="logo" data-not-lazy class="max-h-6 dark:hidden" />
          </NuxtLink>

          <NavbarAccDrop class="absolute bottom-0 right-0 inline-flex justify-center md:hidden" />
        </div>
        <div class="mx-auto grow basis-full md:block" :class="showC ? 'block' : 'hidden'">
          <div
            class="mt-5 flex flex-col items-center gap-x-0 gap-y-4 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-x-7 md:gap-y-0 md:pl-7"
          >
            <UseDark v-slot="{ isDark, toggleDark }">
              <label class="swap swap-rotate hidden md:inline-grid" @change="toggleDark()">
                <!-- this hidden checkbox controls the state -->
                <input type="checkbox" class="hidden" />
                <!-- moon icon -->
                <IconMoon class="swap-off h-6 w-6" />

                <!-- sun icon -->
                <IconSun class="swap-on h-6 w-6 text-white" />
              </label>
            </UseDark>
            <NuxtLink class="font-medium text-blue-600 dark:text-blue-500 md:py-6" to="/latest"
              >Latest</NuxtLink
            >
            <template v-if="!store.isAuthed">
              <NuxtLink
                class="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 md:my-6 md:border-l md:border-gray-300 md:pl-6"
                to="/signin"
              >
                <svg
                  class="h-4 w-4"
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
                class="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 md:w-fit"
                to="/new"
              >
                Share Work
              </NuxtLink>

              <NavbarAccDrop class="bottom-0 right-0 hidden justify-center md:block" />
              <AuthSignIn />
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
import { IconMoon, IconSun, IconMenu2 } from '@tabler/icons-vue';
import { vOnClickOutside, UseDark } from '@vueuse/components';
import { useAuthStore } from '../stores/user';
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
