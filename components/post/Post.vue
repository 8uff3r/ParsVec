<template>
  <!-- Card -->
  <NuxtLink class="relative block w-full" :to="`/post/${props.record.id}`">
    <div class="group relative overflow-clip rounded-xl">
      <img
        class="inset-0 w-full object-cover pb-0 sm:max-w-none"
        :src="imageUrl"
        alt="Image Description"
        :onerror="`this.onerror=null;this.src='${defaultPostUrl}'`"
      />

      <div
        class="absolute inset-x-0 bottom-0 z-30 h-1/2 transition-all duration-300 ease-out group-hover:opacity-100 lg:opacity-0"
      >
        <div
          class="absolute bottom-0 h-full w-full bg-gradient-to-t from-gray-900 to-transparent p-4 sm:px-6"
        >
          <h3 class="absolute bottom-4 text-sm font-semibold text-white">
            {{ props.record.title }}
          </h3>
        </div>
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
let avatarUrl: string;
watch(
  () => props.record,
  () => {
    imageUrl = pb.files.getUrl(props.record, props.record.file!, {
      thumb: '400x300'
    });
    avatarUrl = pb.files.getUrl(props.record.expand.owner, props.record.expand.owner.avatar, {
      thumb: '50x50'
    });
  },
  { immediate: true }
);
const defaultAvatarUrl = '';
const defaultPostUrl = '/gray.jpg';
</script>

<style scoped></style>
