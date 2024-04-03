<template>
  <h1 class="mx-6 mb-8 text-[3rem] font-extrabold text-white">
    Posts with the tag: {{ routeTag }}
  </h1>
  <div class="grid gap-8 sm:grid-cols-2 sm:px-24 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
    <div v-for="(post, index) in posts" :key="index" class="">
      <HomePost
        :record="post"
        class="min-h-[350px] w-full flex-shrink-0 overflow-hidden rounded-xl before:absolute before:inset-x-0 before:z-[1] before:h-full before:w-full before:bg-gradient-to-t before:from-gray-900/[.7]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import PocketBase from 'pocketbase';
const config = useRuntimeConfig() as any;
const route = useRoute();
const routeTag = route.params.name as string;
const posts = ref();
let tags: any;

onMounted(async () => {
  const pb = new PocketBase(config.public.PB_ENDPOINT);
  tags = await pb.collection('tags').getFullList({ filter: `name ~ '${routeTag}'`, fields: 'id' });

  const postsRes = (
    await pb.collection('posts').getList(1, 12, {
      sort: '-created',
      expand: 'owner',
      filter: `tags ~ '${tags[0].id}'`
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
