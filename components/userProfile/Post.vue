<template>
  <!-- Card -->
  <NuxtLink
    class="group relative block transition-all"
    :to="`/post/${props.record.id}`"
  >
    <img
      class="w-full h-full absolute top-0 left-0 object-cover"
      :src="imageUrl"
      :onerror="`this.onerror=null;this.src='${defaultPostUrl}'`"
    />

    <div
      class="group-hover:visible lg:invisible absolute bottom-0 inset-x-0 z-30"
    >
      <div class="flex flex-col h-full p-4 sm:p-6">
        <h3 class="text-xs sm:text-sm md:text-md font-semibold text-white">
          {{ props.record.title }}
        </h3>
      </div>
    </div>
  </NuxtLink>
  <!-- End Card -->
</template>

<script setup lang="ts">
import PocketBase from "pocketbase";

const config = useRuntimeConfig() as any;
let pb = new PocketBase(config.public.PB_ENDPOINT);
const props = defineProps<{ record: any }>();

let imageUrl: string;
watch(
  () => props.record,
  () => {
    imageUrl = pb.files.getUrl(props.record, props.record.file!, {
      thumb: "300x200",
    });
  },
  { immediate: true }
);
const defaultPostUrl = "/gray.jpg";
onUnmounted(() => {
  imageUrl = "";
});
</script>

<style scoped></style>
