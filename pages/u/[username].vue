<template>
  <div class="relative mx-auto mt-4 flex w-full">
    <section class="w-full pt-1">
      <div class="mx-auto w-full px-4 lg:w-6/12">
        <div
          class="relative mb-6 mt-16 flex w-full min-w-0 flex-col break-words rounded-lg shadow-xl"
        >
          <div class="flex flex-col">
            <div class="flex flex-wrap justify-center">
              <div class="relative mb-16 w-[100px] justify-center">
                <img
                  alt="avatar"
                  :src="avatarUrl"
                  class="absolute h-[100px] w-[100px] rounded-full border-none object-cover align-middle shadow-xl"
                />
              </div>
            </div>
            <div class="mt-12 flex flex-col items-center justify-center text-center">
              <div class="my-1 h-6 w-24 rounded-xl bg-gray-600" v-if="pending"></div>
              <h3
                v-else
                class="text-xl font-semibold leading-normal text-gray-700 dark:text-gray-300"
              >
                {{ user?.name || '' }}
              </h3>

              <div class="my-1 h-6 w-20 rounded-xl bg-gray-600" v-if="pending"></div>
              <div
                v-else
                class="mb-2 mt-0 text-sm font-bold uppercase leading-normal text-gray-400"
              >
                <i class="text-lg text-gray-400"></i>
                @{{ user?.username || '' }}
              </div>
              <div class="mb-2 mt-1 text-gray-800 dark:text-gray-300">
                {{ user?.bio }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div
    class="flex flex-1 flex-row flex-wrap place-items-center items-center justify-center gap-2 px-0 sm:px-3 xl:px-32"
  >
    <template v-if="pending">
      <div v-for="n in 3" :key="n">
        <LoadingImage
          class="min-h-[150px] w-[100px] overflow-clip rounded-xl sm:min-h-[250px] sm:w-[200px]"
        />
      </div>
    </template>
    <template v-else>
      <div v-for="(post, index) in posts" :key="index">
        <UserProfilePost
          :record="post"
          class="min-h-[150px] w-[100px] overflow-clip rounded-xl sm:min-h-[250px] sm:w-[200px]"
        />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import PocketBase, { Record } from 'pocketbase';

const route = useRoute();
const username = route.params.username as string;
const config = useRuntimeConfig() as any;
const pb = new PocketBase(config.public.PB_ENDPOINT);

const posts: Ref<Record[] | undefined> = ref();
const user: Ref<Record | undefined> = ref();
const avatarUrl = ref('');
const { pending } = useLazyAsyncData(async () => {
  posts.value = (
    await pb.collection('posts').getList(1, 15, {
      sort: '+created',
      filter: `owner.username = '${username}'`
    })
  ).items;
  user.value = (
    await pb.collection('users').getFullList({
      filter: `username = '${username}'`
    })
  )[0];
  avatarUrl.value = pb.getFileUrl(user.value!, user.value?.avatar, {
    thumb: '200x200'
  });
  await timeout(5000);
});
function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
onUnmounted(() => {
  posts.value = undefined;
  avatarUrl.value = '';
  user.value = undefined;
});
</script>

<style scoped></style>
