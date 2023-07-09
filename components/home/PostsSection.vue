<template>
  <!-- Card Blog -->
  <div class="px-4 py-10 sm:px-6 lg:px-32 lg:py-14 mx-auto">
    <!-- Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <div v-for="(post, index) in posts" :key="index">
        <Post
          :record="post"
          class="flex-shrink-0 relative rounded-xl overflow-hidden w-full min-h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]"
        />
      </div>
    </div>
    <!-- End Grid -->
  </div>
  <!-- End Card Blog -->
</template>

<script setup lang="ts">
import PocketBase from "pocketbase";
import Post from "./Post.vue";

const config = useRuntimeConfig() as any;
const posts = ref();
onMounted(async () => {
  const pb = new PocketBase(config.public.PB_ENDPOINT);
  posts.value = (
    await pb.collection("posts").getList(1, 100, {
      sort: "-created",
      expand: "owner",
    })
  ).items;
});

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
</script>

<style scoped></style>
