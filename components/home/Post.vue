<template>
  <!-- Card -->
  <NuxtLink class="group relative block" :to="`/post/${props.record.id}`">
    <img
      class="absolute left-0 top-0 h-full w-full object-cover"
      :src="imageUrl"
      :onerror="`this.onerror=null;this.src='${defaultPostUrl}'`"
    />

    <div
      class="absolute inset-x-0 top-0 z-10 bg-gradient-to-b from-gray-500 to-transparent transition-all duration-200 ease-out group-hover:opacity-100 dark:from-gray-900 lg:opacity-0"
    >
      <div class="flex h-full flex-col p-4 sm:p-6">
        <!-- Avatar -->
        <div class="flex items-center">
          <NuxtLink class="flex-shrink-0" :to="`/u/${props.record.expand.owner.username}`">
            <img
              class="h-[2.875rem] w-[2.875rem] rounded-full border-2 border-white object-cover"
              :src="avatarUrl"
              alt="avatar"
              :onerror="`this.onerror=null;this.src='${defaultAvatarUrl}'`"
            />
          </NuxtLink>
          <NuxtLink
            class="ml-2.5 hover:underline sm:ml-4"
            :to="`/u/${props.record.expand.owner.username}`"
          >
            <h4 class="font-semibold text-white">
              {{ props.record.expand.owner.username }}
            </h4>
          </NuxtLink>
        </div>
        <!-- End Avatar -->
      </div>
    </div>

    <div class="absolute inset-x-0 bottom-0 z-30 group-hover:visible lg:invisible">
      <div class="flex h-full flex-col p-4 sm:p-6">
        <h3 class="text-sm font-semibold text-white sm:text-lg md:text-xl">
          {{ props.record.title }}
        </h3>
        <!-- <p class="mt-2 text-white/[.8]"> -->
        <!--   {{ props.record.desc }} -->
        <!-- </p> -->
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
      thumb: '300x200'
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
