<template>
  <!-- Card -->
  <NuxtLink
    class="group relative block transition-all"
    :to="`/post/${props.record.id}`"
  >
    <img
      class="w-full h-full absolute top-0 left-0 object-cover"
      :src="imageUrl"
      loading="lazy"
      :onerror="`this.onerror=null;this.src='${defaultPostUrl}'`"
    />

    <div></div>
    <div
      class="group-hover:visible visible lg:invisible absolute top-0 inset-x-0 z-10 bg-gradient-to-b from-gray-900 to-transparent"
    >
      <div class="p-4 flex flex-col h-full sm:p-6">
        <!-- Avatar -->
        <div class="flex items-center">
          <NuxtLink
            class="flex-shrink-0"
            :to="`/u/${props.record.expand.owner.username}`"
          >
            <img
              class="h-[2.875rem] w-[2.875rem] border-2 border-white object-cover rounded-full"
              :src="avatarUrl"
              alt="avatar"
              :onerror="`this.onerror=null;this.src='${defaultAvatarUrl}'`"
            />
          </NuxtLink>
          <NuxtLink
            class="ml-2.5 sm:ml-4 hover:underline"
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

    <div
      class="group-hover:visible lg:invisible absolute bottom-0 inset-x-0 z-30"
    >
      <div class="flex flex-col h-full p-4 sm:p-6">
        <h3 class="text-sm sm:text-lg md:text-xl font-semibold text-white">
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
import PocketBase from "pocketbase";

const config = useRuntimeConfig() as any;
let pb = new PocketBase(config.public.PB_ENDPOINT);
const props = defineProps<{ record: any }>();

let imageUrl: string;
let avatarUrl: string;
watch(
  () => props.record,
  () => {
    imageUrl = pb.files.getUrl(props.record, props.record.file!, {
      thumb: "300x200",
    });
    avatarUrl = pb.files.getUrl(
      props.record.expand.owner,
      props.record.expand.owner.avatar,
      { thumb: "50x50" }
    );
  },
  { immediate: true }
);
const defaultAvatarUrl = "";
const defaultPostUrl = "/gray.jpg";
</script>

<style scoped></style>
