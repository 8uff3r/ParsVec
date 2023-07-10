<template>
  <div class="dark:bg-slate-900 z-50">
    <!-- Hero -->
    <div class="relative overflow-visible z-50 bg-cover">
      <div
        class="absolute bg-[url('/svg/hexa.svg')] dark:bg-[url('/svg/hexa-dark.svg')] h-screen w-screen inset-0 z-[-3] -mt-40"
      ></div>
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-5">
        <!-- Announcement Banner -->
        <div class="flex justify-center">
          <NuxtLink
            class="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 pl-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-cyan-700 dark:text-gray-200"
            to="pricing"
          >
            SignUp for PRO
            <span
              class="py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-gray-700 dark:text-gray-400"
            >
              <svg
                class="w-2.5 h-2.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          </NuxtLink>
        </div>
        <!-- End Announcement Banner -->

        <!-- Title -->
        <div class="mt-5 max-w-2xl text-center mx-auto">
          <h1
            class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200"
          >
            Let's Design
            <span
              class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent"
              >Together</span
            >
          </h1>
        </div>
        <!-- End Title -->

        <div class="mt-5 max-w-3xl text-center mx-auto">
          <p class="text-lg text-gray-600 dark:text-gray-400">
            Collaborate and connect with fellow designers from around the world
            on our platform, where creativity knows no bounds.
          </p>
        </div>

        <!-- Buttons -->
        <div class="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
          <NuxtLink
            class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800"
            to="/signin"
          >
            Get started
            <svg
              class="w-3 h-3"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </NuxtLink>
        </div>
        <!-- End Buttons -->

        <div class="mt-5 flex justify-center items-center">
          <IndexSearchInput />
        </div>
      </div>
    </div>
    <!-- End Hero -->
    <!-- Icon Blocks -->
    <div class="max-w-[85rem] pb-10 px-4 sm:px-6 lg:px-8 lg:pb-14 mx-auto">
      <div class="max-w-4xl mx-auto">
        <!-- Grid -->
        <div
          class="grid md:grid-rows-2 lg:gap-6 py-8 px-10 shadow-[0_3px_6px_hsla(0,0%,0%,0.15),0_6px_4px_hsla(0,0%,0%,0.12),0_-1px_4px_hsla(0,0%,0%,0.05)] rounded-xl gap-4"
        >
          <div class="grid md:grid-cols-2 gap-4 items-baseline">
            <!-- Icon Block -->
            <div class="flex">
              <svg
                class="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z"
                />
                <path
                  d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z"
                />
              </svg>
              <div class="ml-5 sm:ml-8">
                <h3
                  class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200"
                >
                  Creative minds
                </h3>
                <p class="mt-1 text-gray-600 dark:text-gray-400">
                  Unleash your creativity and connect with like-minded
                  individuals on platform designed exclusively for the world's
                  most innovative and imaginative minds.
                </p>
              </div>
            </div>
            <!-- End Icon Block -->

            <!-- Icon Block -->
            <div class="flex">
              <svg
                class="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"
                />
              </svg>
              <div class="ml-5 sm:ml-8">
                <h3
                  class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200"
                >
                  Strong empathy
                </h3>
                <p class="mt-1 text-gray-600 dark:text-gray-400">
                  Experience the power of design through the lens of empathy,
                  with our platform built to connect and inspire designers
                  worldwide.
                </p>
              </div>
            </div>
            <!-- End Icon Block -->
          </div>
          <!-- End Col -->

          <div class="justify-between grid items-baseline gap-4 md:grid-cols-2">
            <!-- Icon Block -->
            <div class="flex">
              <svg
                class="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"
                />
              </svg>
              <div class="ml-5 sm:ml-8">
                <h3
                  class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200"
                >
                  Simple and affordable
                </h3>
                <p class="mt-1 text-gray-600 dark:text-gray-400">
                  User-friendly and budget-friendly, designed to simplify the
                  process of showcasing your design work to a global audience.
                </p>
              </div>
            </div>
            <!-- End Icon Block -->

            <!-- Icon Block -->
            <div class="flex">
              <svg
                class="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"
                />
              </svg>
              <div class="ml-5 sm:ml-8">
                <h3
                  class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200"
                >
                  Conquer the best
                </h3>
                <p class="mt-1 text-gray-600 dark:text-gray-400">
                  Join our community of top designers and showcase your best
                  work to conquer the design world.
                </p>
              </div>
            </div>
            <!-- End Icon Block -->
          </div>
          <!-- End Col -->
        </div>
        <!-- End Grid -->
      </div>
    </div>

    <h2
      class="text-center block font-bold text-[2rem] text-gray-600 dark:text-white pb-8"
    >
      Checkout the latest posts from our commiunity
    </h2>
    <div
      class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-8 sm:px-24"
    >
      <div v-for="(post, index) in posts" :key="index" class="">
        <IndexPost
          :record="post"
          class="text-sm flex-shrink-0 relative rounded-xl overflow-hidden w-full min-h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]"
        />
      </div>
    </div>

    <div class="flex justify-center w-full">
      <NuxtLink
        class="text-blue-100 m-8 py-3 px-6 rounded-xl bg-blue-600 w-fit"
        to="/latest"
      >
        View more

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 inline"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </NuxtLink>
    </div>

    <section class="bg-slate-100 dark:bg-slate-900">
      <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h2
            class="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl"
          >
            Trusted by designers around the globe
          </h2>
        </div>

        <div class="mt-8 sm:mt-12">
          <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div
              class="flex flex-col rounded-lg bg-blue-100 dark:bg-slate-800 px-4 py-8 text-center"
            >
              <dt class="order-last text-lg font-medium text-gray-500">
                Total Sales
              </dt>

              <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
                $4.8m
              </dd>
            </div>

            <div
              class="flex flex-col rounded-lg bg-blue-100 dark:bg-slate-800 px-4 py-8 text-center"
            >
              <dt class="order-last text-lg font-medium text-gray-500">
                Official Addons
              </dt>

              <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
                24
              </dd>
            </div>

            <div
              class="flex flex-col rounded-lg bg-blue-100 px-4 py-8 dark:bg-slate-800 text-center"
            >
              <dt class="order-last text-lg font-medium text-gray-500">
                Total Addons
              </dt>

              <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
                86
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <!--
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
-->

    <section
      class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center dark:bg-slate-900 bg-inherit"
    >
      <div class="p-8 md:p-12 lg:px-16 lg:py-24">
        <div
          class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
        >
          <h2
            class="text-2xl font-bold text-gray-900 dark:text-gray-100 md:text-3xl"
          >
            Join our community of photo enthusiasts
          </h2>

          <p class="hidden text-gray-500 md:mt-4 md:block">
            Start sharing your favorite moments with the world! Sign up now to
            discover new inspiration, connect with like-minded individuals, and
            showcase your creativity. Don't miss out on the fun - create your
            account today!
          </p>

          <div class="mt-4 md:mt-8">
            <a
              href="#"
              class="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>

      <img
        alt="Violin"
        src="/afoot.jpg"
        class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import PocketBase from "pocketbase";

const config = useRuntimeConfig() as any;
const posts =
  ref();
  // Array(15).fill({
  //   file: "",
  //   id: "",
  //   expand: { owner: { avatar: "", username: "" } },
  // })
const masonaryClass = (index: number) => {
  if (index % 4 === 0) {
    return `aspect-h-9 aspect-w-16`;
  }
  if (index % 4 === 1) {
    return `aspect-w-9 aspect-h-16`;
  }
  if (index % 4 === 2) {
    return `aspect-w-3 aspect-h-4`;
  }
  if (index % 4 === 3) {
    return `aspect-h-3 aspect-w-4`;
  }
};

onMounted(async () => {
  const pb = new PocketBase(config.public.PB_ENDPOINT);
  posts.value = (
    await pb.collection("posts").getList(1, 15, {
      sort: "-created",
      expand: "owner",
    })
  ).items;
  console.log("posts are: ", posts);
});
</script>

<style scoped></style>
