<template>
  <div>
    <!-- Card Blog -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <!-- Grid -->
      <div class="grid lg:grid-cols-2 gap-6">
        <!-- Card -->
        <NuxtLink class="group relative block" :to="`/post/${props.id}`">
          <div
            class="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]"
          >
            <img
              class="w-full h-full absolute top-0 left-0 object-cover"
              :src="usePostImageUrl(props.id)"
              alt="Image Description"
            />
          </div>

          <div
            class="group-hover:visible invisible absolute top-0 inset-x-0 z-10"
          >
            <div class="p-4 flex flex-col h-full sm:p-6">
              <!-- Avatar -->
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <img
                    class="h-[2.875rem] w-[2.875rem] border-2 border-white rounded-full"
                    :src="avatarUrl"
                    alt="Image Description"
                    :onerror="`this.onerror=null;this.src='${defaultAvatarUrl}'`"
                  />
                </div>
                <div class="ml-2.5 sm:ml-4">
                  <h4 class="font-semibold text-white">{{ user.name }}</h4>
                  <p class="text-xs text-white/[.8]">{{ props.createDate }}</p>
                </div>
              </div>
              <!-- End Avatar -->
            </div>
          </div>

          <div
            class="group-hover:visible invisible absolute bottom-0 inset-x-0 z-10"
          >
            <div class="flex flex-col h-full p-4 sm:p-6">
              <h3 class="text-lg sm:text-3xl font-semibold text-white">
                {{ props.title }}
              </h3>
              <p class="mt-2 text-white/[.8]">
                {{ props.desc }}
              </p>
            </div>
          </div>
        </NuxtLink>
        <!-- End Card -->
      </div>
      <!-- End Grid -->
    </div>
    <!-- End Card Blog -->
  </div>
</template>

<script setup lang="ts">
import { useUserAvatar } from "../../composables/useUserAvatar";

const { avatars } = useAppwrite();
const props = defineProps({
  id: String,
  title: String,
  desc: String,
  owner: String,
  createDate: String,
});

const defaultAvatarUrl = ref("");
const avatarUrl = useUserAvatar(props.owner!);
console.log(props.owner);
const user = (
  await useFetch("/api/user/binfo", {
    method: "get",
    query: {
      user: props.owner,
    },
  })
    .then((val) => {
      defaultAvatarUrl.value = avatars.getInitials(user.name).href;
      return val;
    })
    .catch()
).data.value;
</script>

<style scoped></style>
