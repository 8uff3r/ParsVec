<template>
  <!-- Card -->
  <NuxtLink class="block relative w-full" :to="`/post/${props.record.id}`">
    <div class="relative group rounded-xl overflow-clip">
      <img
        class="object-cover pb-0 inset-0 w-full sm:max-w-none min-h-[200px]"
        :src="imageUrl"
        alt="Image Description"
        :onerror="`this.onerror=null;this.src='${defaultPostUrl}'`"
      />

      <div
        class="group-hover:opacity-100 lg:opacity-0 absolute bottom-0 inset-x-0 h-1/2 z-30 transition-all ease-out duration-300"
      >
        <div
          class="h-full p-4 sm:px-6 bg-gradient-to-t from-gray-900 absolute bottom-0 w-full to-transparent"
        >
          <h3
            class="text-sm sm:text-lg md:text-xl font-semibold text-white absolute bottom-4"
          >
            {{ props.record.title }}
          </h3>
        </div>
      </div>
    </div>
    <div class="py-2 sm:py-2">
      <!-- Avatar -->
      <div class="flex items-center">
        <div class="flex-shrink-0 rounded-full overflow-clip">
          <img
            class="w-[30px] h-[30px] border-1 border-white object-cover rounded-full"
            :src="avatarUrl"
            alt="avatar"
            :onerror="`this.onerror=null;this.src='${defaultAvatarUrl}'`"
          />
        </div>
        <div class="ml-1 sm:ml-2">
          <h4
            class="font-semibold dark:text-white text-gray-700 hover:underline"
          >
            {{ props.record.expand.owner.username }}
          </h4>
        </div>
      </div>
      <!-- End Avatar -->
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
      thumb: "400x300",
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
