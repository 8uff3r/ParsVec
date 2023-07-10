<template>
  <div class="mt-5">
    <IndexSearchInput />
  </div>
  <h1 class="text-[2rem] font-extrabold mx-6 mb-8 text-gray-200">
    Posts that include "{{ query }}":
  </h1>
  <div
    class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 sm:px-24"
  >
    <div v-for="(post, index) in posts" :key="index">
      <HomePost
        :record="post"
        class="flex-shrink-0 rounded-xl overflow-hidden w-full min-h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import PocketBase from "pocketbase";
const config = useRuntimeConfig() as any;
const route = useRoute();

const query = route.params.query as string;

const posts = ref();

onMounted(async () => {
  const pb = new PocketBase(config.public.PB_ENDPOINT);
  posts.value = (
    await pb.collection("posts").getList(1, 50, {
      filter: `title ~ '${query}' || desc ~ '${query}'`,
      expand: "owner",
    })
  ).items;
});
</script>

<style scoped></style>
