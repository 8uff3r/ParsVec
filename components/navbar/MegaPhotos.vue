<template>
  <div class="dropdown relative w-full">
    <label class="inline cursor-pointer" tabindex="0"
      >Photos
      <svg
        class="ml-2 inline h-2.5 w-2.5 text-gray-600"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        ></path>
      </svg>
    </label>
    <div
      class="dropdown-menu dropdown-menu-bottom-right absolute mt-1 dark:bg-gray-800 lg:w-[40rem] xl:w-[70rem]"
    >
      <div class="grid w-full grid-cols-1 gap-x-4 gap-y-0 space-y-6 lg:grid-cols-3">
        <NuxtLink
          :to="`/tags/${tag.name}`"
          v-for="(tag, index) in tags"
          :key="index"
          class="dropdown-item h-full w-full text-sm dark:hover:bg-slate-700"
          style="margin-top: 0 !important"
        >
          {{ tag.name }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PocketBase from 'pocketbase';

const config = useRuntimeConfig() as any;
const tags = ref();
onMounted(async () => {
  const pb = new PocketBase(config.public.PB_ENDPOINT);
  tags.value = (await pb.collection('tags').getList(1, 15)).items;
});
</script>

<style scoped></style>
