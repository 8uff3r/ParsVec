<template>
  <div class="dark:bg-slate-900">
    <!-- Hero -->
    <div
      class="relative overflow-hidden before:absolute before:top-0 before:left-1/2 bg-[url('/svg/polygon.svg')] before:bg-no-repeat before:bg-top bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:bg-[url('/svg/polygon-dark.svg')]"
    >
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <!-- Announcement Banner -->
        <div class="flex justify-center">
          <NuxtLink
            class="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 pl-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-200"
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
            Preline UI is an open-source set of prebuilt UI components,
            ready-to-use examples and Figma design system based on the
            utility-first Tailwind CSS framework.
          </p>
        </div>

        <!-- Buttons -->
        <div class="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
          <a
            class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800"
            href="#"
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
          </a>
        </div>
        <!-- End Buttons -->

        <div class="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3">
          <span class="text-sm text-gray-600 dark:text-gray-400"
            >Package Manager:</span
          >
          <span class="text-sm font-bold text-gray-900 dark:text-white"
            >npm</span
          >
          <svg
            class="h-5 w-5 text-gray-300 dark:text-gray-600"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M6 13L10 3" stroke="currentColor" stroke-linecap="round" />
          </svg>
          <a
            class="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium"
            href="#"
          >
            Installation Guide
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
          </a>
        </div>
      </div>
    </div>
    <!-- End Hero -->
    <!-- Icon Blocks -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="max-w-4xl mx-auto">
        <!-- Grid -->
        <div class="grid md:grid-cols-2 gap-6 lg:gap-12">
          <div class="space-y-6 lg:space-y-10">
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
                  We choose our teams carefully. Our people are the secret to
                  great work.
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
                  d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"
                />
              </svg>
              <div class="ml-5 sm:ml-8">
                <h3
                  class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200"
                >
                  Effortless updates
                </h3>
                <p class="mt-1 text-gray-600 dark:text-gray-400">
                  Benefit from automatic updates to all boards any time you need
                  to make a change to your website.
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
                  We've user tested our own process by shipping over 1k products
                  for clients.
                </p>
              </div>
            </div>
            <!-- End Icon Block -->
          </div>
          <!-- End Col -->

          <div class="space-y-6 lg:space-y-10">
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
                  We stay lean and help your product do one thing well.
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
                  fill-rule="evenodd"
                  d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z"
                />
              </svg>
              <div class="ml-5 sm:ml-8">
                <h3
                  class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200"
                >
                  Designing for people
                </h3>
                <p class="mt-1 text-gray-600 dark:text-gray-400">
                  We actively pursue the right balance between functionality and
                  aesthetics, creating delightful experiences.
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
                  From boarding passes to movie tickets, there's pretty much
                  nothing you can't store with Preline.
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
      class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 px-8 sm:px-24"
    >
      <div v-for="(post, index) in posts" :key="index" class="">
        <Post
          :record="post"
          class="flex-shrink-0 relative rounded-xl overflow-hidden w-full min-h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]"
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
    <div class="px-16">
      <!-- Card Blog -->
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <!-- Title -->
        <div class="max-w-2xl mb-10">
          <h2
            class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white"
          >
            Customer stories
          </h2>
          <p class="mt-1 text-gray-600 dark:text-gray-400">
            See how game-changing companies are making the most of every
            engagement with Preline.
          </p>
        </div>
        <!-- End Title -->

        <!-- Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Card -->
          <a class="group block" href="#">
            <div class="aspect-w-16 aspect-h-9">
              <img
                class="w-full object-cover rounded-xl"
                nuxt-link="https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
                alt="Image Description"
              />
            </div>
            <h3
              class="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white"
            >
              Unity’s inside sales team drives 80% of its revenue with Preline.
            </h3>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
              September 12, 2022
            </p>
          </a>
          <!-- End Card -->

          <!-- Card -->
          <a class="group block" href="#">
            <div class="aspect-w-16 aspect-h-9">
              <img
                class="w-full object-cover rounded-xl"
                nuxt-link="https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3465&q=80"
                alt="Image Description"
              />
            </div>
            <h3
              class="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white"
            >
              Living Spaces creates a unified experience across the customer
              journey.
            </h3>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
              September 12, 2022
            </p>
          </a>
          <!-- End Card -->

          <!-- Card -->
          <a class="group block" href="#">
            <div class="aspect-w-16 aspect-h-9">
              <img
                class="w-full object-cover rounded-xl"
                nuxt-link="https://images.unsplash.com/photo-1668863699009-1e3b4118675d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80"
                alt="Image Description"
              />
            </div>
            <h3
              class="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white"
            >
              Atlassian powers sales and support at scale with Preline.
            </h3>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
              September 12, 2022
            </p>
          </a>
          <!-- End Card -->

          <!-- Card -->
          <a class="group block" href="#">
            <div class="aspect-w-16 aspect-h-9">
              <img
                class="w-full object-cover rounded-xl"
                nuxt-link="https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                alt="Image Description"
              />
            </div>
            <h3
              class="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white"
            >
              Everything you need to know about Preline Pro.
            </h3>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
              September 12, 2022
            </p>
          </a>
          <!-- End Card -->
        </div>
        <!-- End Grid -->
      </div>
      <!-- End Card Blog -->
    </div>
  </div>
  <div class="relative block h-[17rem] my-8">
    <img
      src="https://static.vecteezy.com/packs/media/components/home/sign-up-free/img/sign-up-free-mobile-18b5e43254aa2e23f5907b3ae4abee6f.jpg"
      class="text-white absolute h-full object-cover z-10 w-full block"
    />
    <div class="text-white text-lg px-8 z-10 absolute">
      <h2 class="text-[2.88rem] leading-none font-bold -mt-6">
        Sign up free today!
      </h2>

      <p class="mb-8 mt-6">
        Ready for a world of free vectors, photos and video from amazing artists
        all over the world? Sign up free today.
      </p>

      <a
        href="https://www.vecteezy.com/users/sign_up?referring_conversions_category=Homepage"
        class="items-center bg-white block text-orange-500 cursor-pointer flex-wrap font-semibold justify-center mb-8 py-3.5 px-6 text-center whitespace-nowrap rounded-"
        >Sign Up Free</a
      >

      <span
        >Want access to our entire library?
        <NuxtLink to="/pricing" class="cursor-pointer"
          >Join Pro.</NuxtLink
        ></span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import PocketBase from "pocketbase";
import Post from "@/components/home/Post.vue";

const config = useRuntimeConfig() as any;
const posts = ref();
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
    await pb.collection("posts").getList(1, 12, {
      sort: "-created",
      expand: "owner",
    })
  ).items;
  console.log("posts are: ", posts);
});
</script>

<style scoped></style>
