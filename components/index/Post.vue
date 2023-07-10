<template>
  <!-- Card -->
  <NuxtLink class="group relative block" :to="`/post/${props.record.id}`">
    <img
      class="w-full h-full absolute top-0 left-0 object-cover"
      :src="imageUrl"
      alt="Image Description"
      loading="lazy"
      :onerror="`this.onerror=null;this.src='${defaultPostUrl}'`"
    />

    <div
      class="group-hover:visible lg:invisible absolute bottom-0 inset-x-0 z-10 bg-gradient-to-t from-gray-900 to-transparent"
    >
      <div class="p-4 flex flex-col h-full sm:p-6">
        <!-- Avatar -->
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img
              class="h-[2.875rem] w-[2.875rem] border-2 border-white object-cover rounded-full"
              :src="avatarUrl"
              alt="avatar"
              :onerror="`this.onerror=null;this.src='${defaultAvatarUrl}'`"
            />
          </div>
          <div class="ml-2.5 sm:ml-4">
            <h4 class="font-semibold text-white">
              {{ props.record.expand.owner.username }}
            </h4>
          </div>
        </div>
        <!-- End Avatar -->
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
    console.log(props.record);
    imageUrl = pb.files.getUrl(props.record, props.record.file!, {
      thumb: "300x200",
    });
    avatarUrl = pb.files.getUrl(
      props.record.expand.owner,
      props.record.expand.owner.avatar
    );
  },
  { immediate: true }
);
const defaultAvatarUrl = "";
const defaultPostUrl = "/gray.jpg";
</script>

<style scoped></style>
