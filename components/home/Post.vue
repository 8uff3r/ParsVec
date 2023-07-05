<template>
  <!-- Card -->
  <NuxtLink class="group relative block" :to="`/post/${props.record.id}`">
    <img
      class="w-full h-full absolute top-0 left-0 object-cover"
      :src="imageUrl"
      alt="Image Description"
    />

    <div class="group-hover:visible lg:invisible absolute top-0 inset-x-0 z-10">
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
            <p class="text-xs text-white/[.8]">{{ props.record.created }}</p>
          </div>
        </div>
        <!-- End Avatar -->
      </div>
    </div>

    <div
      class="group-hover:visible lg:invisible absolute bottom-0 inset-x-0 z-30"
    >
      <div class="flex flex-col h-full p-4 sm:p-6">
        <h3 class="text-lg sm:text-3xl font-semibold text-white">
          {{ props.record.title }}
        </h3>
        <p class="mt-2 text-white/[.8]">
          {{ props.record.desc }}
        </p>
      </div>
    </div>
  </NuxtLink>
  <!-- End Card -->
</template>

<script setup lang="ts">
import PocketBase from "pocketbase";
let pb = new PocketBase("http://127.0.0.1:8090");
const props = defineProps<{ record: any }>();

let imageUrl: string;
let avatarUrl: string;
watch(
  () => props.record,
  () => {
    console.log(props.record);
    imageUrl = pb.files.getUrl(props.record, props.record.file!);
    avatarUrl = pb.files.getUrl(
      props.record.expand.owner,
      props.record.expand.owner.avatar
    );
  },
  { immediate: true }
);
const defaultAvatarUrl = "";
</script>

<style scoped></style>
