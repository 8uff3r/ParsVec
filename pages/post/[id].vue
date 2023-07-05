<template>
  <div class="items-center dark:text-white flex flex-col text-sm p-16">
    <div class="flex justify-between w-1/2 mt-4">
      <div class="flex justify-between w-full">
        <div class="items-center flex flex-grow">
          <div class="mr-4">
            <a
              href="https://dribbble.com/Rengised"
              class="text-pink-500 cursor-pointer"
              ><div>
                <img :src="avatarUrl" class="h-12 w-12 rounded-full" />
              </div>
            </a>
          </div>
          <div class="flex flex-col">
            <h1 class="font-medium">Easy peasy</h1>
            <div class="items-center flex">
              <div class="flex">
                <div class="text-zinc-400 dark:text-white">
                  <a
                    href="https://dribbble.com/Rengised"
                    class="cursor-pointer"
                    >{{ user?.name }}</a
                  >
                </div>

                <div class="flex">
                  <span class="text-zinc-500 mx-2 dark:text-zinc-500">•</span>
                  <div>
                    <a
                      href="https://dribbble.com/Rengised/followers"
                      class="cursor-pointer text-center whitespace-nowrap rounded-lg"
                      >Follow</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="items-center flex justify-between">
          <ul class="flex">
            <div>
              <li class="list-item">
                <a
                  href="https://dribbble.com/signup/new"
                  class="bg-zinc-100 cursor-pointer inline-block font-medium py-3 px-4 text-center rounded-lg"
                >
                  Save
                </a>
              </li>
            </div>

            <div class="ml-3">
              <div>
                <a
                  href="https://dribbble.com/signup/new"
                  class="bg-pink-500 text-white cursor-pointer inline-block font-medium py-3 px-4 text-center rounded-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enable-background="new 0 0 24 24"
                    viewbox="0 0 24 24"
                    role="img"
                    fill="#ffffff"
                    class="inline h-3 mr-1 -mt-1 w-3"
                  >
                    <path
                      d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"
                      fill="#ffffff"
                    ></path>
                  </svg>

                  Like
                </a>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>

    <div class="items-center flex flex-col">
      <div class="flex my-7 overflow-hidden">
        <div class="flex">
          <div class="flex">
            <div
              class="text-pink-500 object-cover z-[1] rounded-lg overflow-hidden"
            >
              <img
                :src="imageUrl"
                class="object-contain h-[37.17rem] w-[49.56rem] z-[1] rounded-lg overflow-hidden"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex my-7">
        <div>
          <p class="text-2xl">{{ post.title }}</p>
          <p class="text-xl">
            {{ post.desc }}
          </p>
        </div>
      </div>
    </div>

    <div class="items-center flex flex-col mt-16 text-center">
      <div class="items-center flex">
        <a
          href="https://dribbble.com/Rengised"
          class="text-pink-500 cursor-pointer"
          ><div>
            <img
              src="https://cdn.dribbble.com/users/24037/avatars/small/eebc86340b9e8a3bd11152f89bb576b9.png?1615557028"
              class="h-16 mx-6 w-16 rounded-full"
            />
          </div>
        </a>
      </div>

      <a
        href="https://dribbble.com/Rengised"
        class="cursor-pointer text-xl font-medium mt-4"
        >Rengised</a
      >
    </div>

    <div class="mt-16 w-4/5">
      <div class="items-end flex justify-between">
        <h4 class="font-bold mr-4 truncate">More by Rengised</h4>
        <a
          href="https://dribbble.com/Rengised"
          class="text-pink-500 cursor-pointer"
          >View profile</a
        >
      </div>

      <div class="gap-10 grid grid-cols-4 w-full mt-4">
        <div>
          <li class="list-item">
            <div class="pb-72 relative rounded-lg overflow-hidden">
              <div class="bg-zinc-950 overflow-hidden">
                <img
                  src="https://cdn.dribbble.com/users/24037/screenshots/16409838/media/2d25f2df76e2b9234f804d8571286f6e.png?compress=1&amp;resize=400x300&amp;vertical=center"
                  class="bottom-0 h-72 left-0 object-cover absolute top-0 w-96"
                />
              </div>

              <a
                href="https://dribbble.com/shots/16409838-Software-icons-set"
                class="bottom-0 text-pink-500 cursor-pointer left-0 absolute top-0"
              >
              </a>
            </div>
          </li>
        </div>
        <div>
          <li class="list-item">
            <div class="pb-72 relative rounded-lg overflow-hidden">
              <div class="overflow-hidden">
                <img
                  src="https://cdn.dribbble.com/userupload/2952759/file/original-28618d96258e93e03d567a3858f3a233.png?compress=1&amp;resize=400x300&amp;vertical=center"
                  class="bottom-0 h-72 left-0 object-cover absolute top-0 w-96"
                />
              </div>

              <div
                class="items-center flex justify-end left-0 px-3 absolute right-0 top-0"
              >
                <div class="items-center text-white flex ml-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="12"
                    viewbox="0 0 16 12"
                    fill="#ffffff"
                    role="img"
                    stroke="#000000"
                    class="h-4 mr-1 w-4"
                  >
                    <path
                      d="M6.40436 0.522824C6.936 0.0682789 7.79709 0.0682789 8.32873 0.522824C8.59491 0.749733 8.72873 1.04792 8.72727 1.34537V3.12355C12.9542 3.45373 16 6.65955 16 11.6363C16 11.6363 13.5076 9.16719 8.72727 8.93228V10.6545C8.72873 10.9526 8.59491 11.2501 8.32873 11.477C8.06327 11.7039 7.71491 11.8181 7.36654 11.8181C7.01818 11.8181 6.67054 11.7046 6.40436 11.477L-4.76837e-07 5.99992L6.40436 0.522824Z"
                      fill="#ffffff"
                      stroke="#000000"
                    ></path>
                  </svg>

                  <span
                    class="bg-black text-[0.69rem] font-medium px-1 text-center rounded-"
                    >1</span
                  >
                </div>
              </div>

              <a
                href="https://dribbble.com/shots/18555218-Neubrutalism-buttons-style"
                class="bottom-0 text-pink-500 cursor-pointer left-0 absolute top-0"
              >
              </a>
            </div>
          </li>
        </div>
        <div>
          <li class="list-item">
            <div class="pb-72 relative rounded-lg overflow-hidden">
              <div class="overflow-hidden">
                <img
                  src="https://cdn.dribbble.com/userupload/3587759/file/original-db48af84f332ba93040ca7cd563e5d35.png?compress=1&amp;resize=400x300&amp;vertical=center"
                  class="bottom-0 h-72 left-0 object-cover absolute top-0"
                />
              </div>

              <a
                href="https://dribbble.com/shots/19392710-Adobe-buys-Figma"
                class="bottom-0 text-pink-500 cursor-pointer left-0 absolute top-0"
              >
              </a>
            </div>
          </li>
        </div>
        <div>
          <li class="list-item">
            <div class="pb-72 relative rounded-lg overflow-hidden">
              <div class="bg-zinc-950 overflow-hidden">
                <img
                  src="https://cdn.dribbble.com/users/24037/screenshots/16469310/media/72a3d78b7eea9046c07b211cb3d25f93.png?compress=1&amp;resize=400x300&amp;vertical=center"
                  class="bottom-0 h-72 left-0 object-cover absolute top-0 w-96"
                />
              </div>

              <a
                href="https://dribbble.com/shots/16469310-Customize-your-interface-with-my-icons"
                class="bottom-0 text-pink-500 cursor-pointer left-0 absolute top-0"
              >
              </a>
            </div>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PocketBase, { Record } from "pocketbase";

const config = useRuntimeConfig() as any;
const router = useRouter();
const pb = new PocketBase(config.public.PB_ENDPOINT);
const route = useRoute();
const postId = route.params.id as string;
const post = await pb.collection("posts").getOne(postId, { expand: "owner" });
const user = post.expand.owner as Record;

const avatarUrl = pb.getFileUrl(user as any, user?.avatar);
const imageUrl = pb.files.getUrl(post, post.file);
</script>

<style scoped></style>
