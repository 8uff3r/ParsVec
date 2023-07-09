<template>
  <div class="dropdown w-full relative">
    <label class="cursor-pointer inline" tabindex="0"
      >Photos
      <svg
        class="ml-2 w-2.5 h-2.5 text-gray-600 inline"
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
      class="dropdown-menu dropdown-menu-bottom-right dark:bg-gray-800 lg:w-[40rem] xl:w-[70rem] mt-1 absolute"
    >
      <div
        class="grid grid-cols-1 space-y-6 gap-x-4 gap-y-0 lg:grid-cols-3 w-full"
      >
        <NuxtLink
          :to="`/tags/${tag.name}`"
          v-for="(tag, index) in tags"
          :key="index"
          class="dropdown-item w-full text-sm dark:hover:bg-slate-700 h-full"
          style="margin-top: 0 !important"
        >
          {{ tag.name }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PocketBase from "pocketbase";

const config = useRuntimeConfig() as any;
const tags = ref();
onMounted(async () => {
  const pb = new PocketBase(config.public.PB_ENDPOINT);
  tags.value = (await pb.collection("tags").getList(1, 15)).items;
  console.log(tags.value);
});
</script>

<style scoped></style>
