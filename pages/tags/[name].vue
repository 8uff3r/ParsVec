<template>
  <h1 class="text-[3rem] font-extrabold mx-6 mb-8 text-white">
    Posts with the tag: {{ routeTag }}
  </h1>
  <div
    class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 sm:px-24"
  >
    <div v-for="(post, index) in posts" :key="index" class="">
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
const routeTag = route.params.name as string;
const posts = ref();
let tags: any;

onMounted(async () => {
  const pb = new PocketBase(config.public.PB_ENDPOINT);
  tags = await pb
    .collection("tags")
    .getFullList({ filter: `name ~ '${routeTag}'`, fields: "id" });

  const postsRes = (
    await pb.collection("posts").getList(1, 12, {
      sort: "-created",
      expand: "owner",
      filter: `tags ~ '${tags[0].id}'`,
    })
  ).items;

  posts.value = postsRes;
});

onUnmounted(() => {
  tags = undefined;
  posts.value = undefined;
});
</script>

<style scoped></style>
