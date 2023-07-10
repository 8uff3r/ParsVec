<template>
  <div class="flex relative w-full mx-auto mt-4">
    <section class="pt-1 w-full">
      <div class="w-full lg:w-8/12 px-4 mx-auto">
        <div
          class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg mt-16"
        >
          <div class="px-6 flex flex-col pb-4">
            <div class="flex flex-wrap justify-center">
              <div class="relative w-[100px] px-4 flex justify-center mb-16">
                <img
                  alt="avatar"
                  :src="avatarUrl"
                  class="shadow-xl object-cover rounded-full align-middle border-none absolute"
                />
              </div>
            </div>
            <div class="text-center mt-12 flex-col flex">
              <h3
                class="text-xl font-semibold leading-normal text-gray-700 dark:text-gray-300"
              >
                {{ user?.name || "" }}
              </h3>
              <div
                class="text-sm leading-normal mt-0 mb-2 text-gray-400 font-bold uppercase"
              >
                <i class="text-lg text-gray-400"></i>
                @{{ user?.username || "" }}
              </div>
              <div class="mb-2 text-gray-200 dark:text-gray-300 mt-1">
                <i class="text-lg text-gray-400"></i>
                Admin of ParsVec
              </div>
            </div>

            <div class="stats bg-inherit stats-horizontal mx-auto">
              <div class="stat">
                <div class="stat-title">Friends</div>
                <div class="stat-value">31K</div>
              </div>

              <div class="stat">
                <div class="stat-title">Photos</div>
                <div class="stat-value">4,200</div>
              </div>

              <div class="stat">
                <div class="stat-title">Comments</div>
                <div class="stat-value">1,200</div>
              </div>
            </div>
            <!-- <div class="mt-10 py-10 border-t border-blueGray-200 text-center"> -->
            <!--   <div class="flex flex-wrap justify-center"> -->
            <!--     <div class="w-full lg:w-9/12 px-4"> -->
            <!--       <p -->
            <!--         class="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300" -->
            <!--       > -->
            <!--         An artist of considerable range, Jenna the name taken by -->
            <!--         Melbourne-raised, Brooklyn-based Nick Murphy writes, -->
            <!--         performs and records all of his own music, giving it a warm, -->
            <!--         intimate feel with a solid groove structure. An artist of -->
            <!--         considerable range. -->
            <!--       </p> -->
            <!--       <a -->
            <!--         href="javascript:void(0);" -->
            <!--         class="font-normal text-pink-500" -->
            <!--       > -->
            <!--         Show more -->
            <!--       </a> -->
            <!--     </div> -->
            <!--   </div> -->
            <!-- </div> -->
          </div>
        </div>
      </div>
    </section>
  </div>

  <div
    class="flex flex-wrap flex-row flex-1 gap-2 justify-center items-center place-items-center px-0 sm:px-3 xl:px-32"
  >
    <template v-if="!pending">
      <div v-for="(post, index) in posts" :key="index">
        <UserProfilePost
          :record="post"
          class="rounded-xl min-h-[150px] sm:min-h-[250px] w-[100px] sm:w-[200px] overflow-clip"
        />
      </div>
    </template>
    <template v-else>
      <div v-for="n in 15" :key="n">
        <LoadingImage
          class="flex-shrink-0 relative rounded-xl overflow-hidden w-full min-h-[350px]"
        />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import PocketBase, { Record } from "pocketbase";

const route = useRoute();
const username = route.params.username as string;
const config = useRuntimeConfig() as any;
const pb = new PocketBase(config.public.PB_ENDPOINT);

const posts: Ref<Record[] | undefined> = ref();
const user: Ref<Record | undefined> = ref();
const avatarUrl = ref("");
const { pending } = useLazyAsyncData(async () => {
  posts.value = (
    await pb.collection("posts").getList(1, 15, {
      sort: "+created",
      filter: `owner.username = '${username}'`,
    })
  ).items;
  user.value = (
    await pb.collection("users").getFullList({
      filter: `username = '${username}'`,
    })
  )[0];
  avatarUrl.value = pb.getFileUrl(user.value!, user.value?.avatar, {
    thumb: "200x200",
  });
});
</script>

<style scoped></style>
