<template>
  <!-- Card Blog -->
  <div class="px-4 py-10 sm:px-6 lg:px-32 lg:py-14 mx-auto">
    <!-- Grid -->
    <div class="grid lg:grid-cols-3 gap-8">
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

const props = defineProps({
  search: { type: String, default: "" },
});
const posts = ref();
onMounted(async () => {
  const pb = new PocketBase("http://127.0.0.1:8090");
  watch(
    () => props.search,
    async () => {
      posts.value = (
        await pb.collection("posts").getList(1, 100, {
          sort:"-created",
          expand: "owner",
          filter: `title ~ '${props.search}'`,
        })
      ).items;
      console.log("posts are: ", posts.value);
    },
    { immediate: true }
  );
});

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
</script>

<style scoped></style>
