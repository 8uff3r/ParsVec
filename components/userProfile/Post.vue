<template>
  <!-- Card -->
  <NuxtLink class="group relative block transition-all" :to="`/post/${props.record.id}`">
    <img
      class="absolute left-0 top-0 h-full w-full object-cover"
      :src="imageUrl"
      :onerror="`this.onerror=null;this.src='${defaultPostUrl}'`"
    />

    <div class="absolute inset-x-0 bottom-0 z-30 group-hover:visible lg:invisible">
      <div class="flex h-full flex-col p-4 sm:p-6">
        <h3 class="md:text-md text-xs font-semibold text-white sm:text-sm">
          {{ props.record.title }}
        </h3>
      </div>
    </div>
  </NuxtLink>
  <!-- End Card -->
</template>

<script setup lang="ts">
import PocketBase from 'pocketbase';

const config = useRuntimeConfig() as any;
let pb = new PocketBase(config.public.PB_ENDPOINT);
const props = defineProps<{ record: any }>();

let imageUrl: string;
watch(
  () => props.record,
  () => {
    imageUrl = pb.files.getUrl(props.record, props.record.file!, {
      thumb: '300x200'
    });
  },
  { immediate: true }
);
const defaultPostUrl = '/gray.jpg';
onUnmounted(() => {
  imageUrl = '';
});
</script>

<style scoped></style>
