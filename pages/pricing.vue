<template>
  <div class="dark:bg-slate-900">
    <!-- Pricing -->
    <!-- Pricing -->
    <div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <!-- Title -->
      <div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
        <h2 class="text-2xl font-bold dark:text-white md:text-4xl md:leading-tight">Pricing</h2>
        <p class="mt-1 text-gray-600 dark:text-gray-400">
          Whatever your status, our offers evolve according to your needs.
        </p>
      </div>
      <!-- End Title -->

      <!-- Switch -->
      <div class="flex items-center justify-center">
        <label class="mr-3 min-w-[3.5rem] text-sm text-gray-500 dark:text-gray-400">Monthly</label>

        <input
          type="checkbox"
          id="hs-basic-with-description"
          class="relative h-7 w-[3.25rem] shrink-0 cursor-pointer appearance-none rounded-full border border-2 border-transparent border-transparent bg-gray-100 ring-1 ring-transparent ring-offset-white transition-colors duration-200 ease-in-out before:inline-block before:h-6 before:w-6 before:translate-x-0 before:transform before:rounded-full before:bg-white before:shadow before:ring-0 before:transition before:duration-200 before:ease-in-out checked:bg-blue-600 checked:bg-none checked:before:translate-x-full checked:before:bg-blue-200 focus:border-blue-600 focus:outline-none focus:ring-blue-600 dark:bg-gray-700 dark:before:bg-gray-400 dark:checked:bg-blue-600 dark:checked:before:bg-blue-200 dark:focus:ring-offset-gray-800"
          checked
        />

        <label class="relative ml-3 min-w-[3.5rem] text-sm text-gray-500 dark:text-gray-400">
          Annual
          <span class="absolute -right-28 -top-10 left-auto">
            <span class="flex items-center">
              <svg
                class="-mr-6 h-8 w-14"
                width="45"
                height="25"
                viewBox="0 0 45 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M43.2951 3.47877C43.8357 3.59191 44.3656 3.24541 44.4788 2.70484C44.5919 2.16427 44.2454 1.63433 43.7049 1.52119L43.2951 3.47877ZM4.63031 24.4936C4.90293 24.9739 5.51329 25.1423 5.99361 24.8697L13.8208 20.4272C14.3011 20.1546 14.4695 19.5443 14.1969 19.0639C13.9242 18.5836 13.3139 18.4152 12.8336 18.6879L5.87608 22.6367L1.92723 15.6792C1.65462 15.1989 1.04426 15.0305 0.563943 15.3031C0.0836291 15.5757 -0.0847477 16.1861 0.187863 16.6664L4.63031 24.4936ZM43.7049 1.52119C32.7389 -0.77401 23.9595 0.99522 17.3905 5.28788C10.8356 9.57127 6.58742 16.2977 4.53601 23.7341L6.46399 24.2659C8.41258 17.2023 12.4144 10.9287 18.4845 6.96211C24.5405 3.00476 32.7611 1.27399 43.2951 3.47877L43.7049 1.52119Z"
                  fill="currentColor"
                  class="fill-gray-300 dark:fill-gray-700"
                />
              </svg>
              <span
                class="mt-3 inline-block whitespace-nowrap rounded-full bg-blue-600 px-2.5 py-1 text-[11px] font-semibold uppercase leading-5 tracking-wide text-white"
                >Save up to 10%</span
              >
            </span>
          </span>
        </label>
      </div>
      <!-- End Switch -->

      <!-- Grid -->
      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:items-center">
        <!-- Card -->
        <div
          class="flex flex-col rounded-xl border border-gray-200 p-8 text-center dark:border-gray-700"
        >
          <h4 class="text-lg font-medium text-gray-800 dark:text-gray-200">Free</h4>
          <span class="mt-7 text-5xl font-bold text-gray-800 dark:text-gray-200">Free</span>
          <p class="mt-2 text-sm text-gray-500">Forever free</p>

          <ul class="mt-7 space-y-2.5 text-sm">
            <li class="flex space-x-2">
              <svg
                class="h-5 w-5 flex-shrink-0 text-blue-600"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                  fill="currentColor"
                />
              </svg>
              <span class="text-gray-800 dark:text-gray-400"> 1 user </span>
            </li>

            <li class="flex space-x-2">
              <svg
                class="h-5 w-5 flex-shrink-0 text-blue-600"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                  fill="currentColor"
                />
              </svg>
              <span class="text-gray-800 dark:text-gray-400"> Plan features </span>
            </li>

            <li class="flex space-x-2">
              <svg
                class="h-5 w-5 flex-shrink-0 text-blue-600"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                  fill="currentColor"
                />
              </svg>
              <span class="text-gray-800 dark:text-gray-400"> Product support </span>
            </li>
          </ul>

          <a
            class="mt-5 inline-flex items-center justify-center gap-2 rounded-md border-2 border-blue-600 px-4 py-3 text-sm font-semibold text-blue-600 transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-blue-600 dark:text-blue-500 dark:hover:border-blue-700"
            href="#"
          >
            Sign up
          </a>
        </div>
        <!-- End Card -->

        <!-- Card -->
        <div
          class="flex flex-col rounded-xl border-2 border-blue-600 p-8 text-center shadow-xl dark:border-blue-700"
        >
          <p class="mb-3">
            <span
              class="inline-flex items-center gap-1.5 rounded-md bg-blue-100 px-3 py-1.5 text-xs font-semibold uppercase text-blue-800 dark:bg-blue-600 dark:text-white"
              >Most popular</span
            >
          </p>
          <h4 class="text-lg font-medium text-gray-800 dark:text-gray-200">Startup</h4>
          <span class="mt-5 text-5xl font-bold text-gray-800 dark:text-gray-200">
            <span class="-mr-2 text-2xl font-bold">$</span>
            39
          </span>
          <p class="mt-2 text-sm text-gray-500">All the basics for starting a new business</p>

          <ul class="mt-7 space-y-2.5 text-sm">
            <li class="flex space-x-2">
              <svg
                class="h-5 w-5 flex-shrink-0 text-blue-600"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                  fill="currentColor"
                />
              </svg>
              <span class="text-gray-800 dark:text-gray-400"> 2 users </span>
            </li>

            <li class="flex space-x-2">
              <svg
                class="h-5 w-5 flex-shrink-0 text-blue-600"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                  fill="currentColor"
                />
              </svg>
              <span class="text-gray-800 dark:text-gray-400"> Plan features </span>
            </li>

            <li class="flex space-x-2">
              <svg
                class="h-5 w-5 flex-shrink-0 text-blue-600"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                  fill="currentColor"
                />
              </svg>
              <span class="text-gray-800 dark:text-gray-400"> Product support </span>
            </li>
          </ul>

          <a
            class="mt-5 inline-flex items-center justify-center gap-x-3 rounded-md bg-blue-600 px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
            href="https://github.com/htmlstreamofficial/preline/tree/main/examples/html"
          >
            Sign up
          </a>
        </div>
        <!-- End Card -->

        <!-- Card -->
        <div
          class="flex flex-col rounded-xl border border-gray-200 p-8 text-center dark:border-gray-700"
        >
          <h4 class="text-lg font-medium text-gray-800 dark:text-gray-200">Team</h4>
          <span class="mt-5 text-5xl font-bold text-gray-800 dark:text-gray-200">
            <span class="-mr-2 text-2xl font-bold">$</span>
            89
          </span>
          <p class="mt-2 text-sm text-gray-500">Everything you need for a growing business</p>

          <ul class="mt-7 space-y-2.5 text-sm">
            <li class="flex space-x-2">
              <svg
                class="h-5 w-5 flex-shrink-0 text-blue-600"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                  fill="currentColor"
                />
              </svg>
              <span class="text-gray-800 dark:text-gray-400"> 5 users </span>
            </li>

            <li class="flex space-x-2">
              <svg
                class="h-5 w-5 flex-shrink-0 text-blue-600"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                  fill="currentColor"
                />
              </svg>
              <span class="text-gray-800 dark:text-gray-400"> Plan features </span>
            </li>

            <li class="flex space-x-2">
              <svg
                class="h-5 w-5 flex-shrink-0 text-blue-600"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                  fill="currentColor"
                />
              </svg>
              <span class="text-gray-800 dark:text-gray-400"> Product support </span>
            </li>
          </ul>

          <a
            class="mt-5 inline-flex items-center justify-center gap-2 rounded-md border-2 border-blue-600 px-4 py-3 text-sm font-semibold text-blue-600 transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-blue-600 dark:text-blue-500 dark:hover:border-blue-700"
            href="#"
          >
            Sign up
          </a>
        </div>
        <!-- End Card -->

        <!-- Card -->
        <div
          class="flex flex-col rounded-xl border border-gray-200 p-8 text-center dark:border-gray-700"
        >
          <h4 class="text-lg font-medium text-gray-800 dark:text-gray-200">Enterprise</h4>
          <span class="mt-5 text-5xl font-bold text-gray-800 dark:text-gray-200">
            <span class="-mr-2 text-2xl font-bold">$</span>
            149
          </span>
          <p class="mt-2 text-sm text-gray-500">Advanced features for scaling your business</p>

          <ul class="mt-7 space-y-2.5 text-sm">
            <li class="flex space-x-2">
              <svg
                class="h-5 w-5 flex-shrink-0 text-blue-600"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                  fill="currentColor"
                />
              </svg>
              <span class="text-gray-800 dark:text-gray-400"> 10 users </span>
            </li>

            <li class="flex space-x-2">
              <svg
                class="h-5 w-5 flex-shrink-0 text-blue-600"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                  fill="currentColor"
                />
              </svg>
              <span class="text-gray-800 dark:text-gray-400"> Plan features </span>
            </li>

            <li class="flex space-x-2">
              <svg
                class="h-5 w-5 flex-shrink-0 text-blue-600"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                  fill="currentColor"
                />
              </svg>
              <span class="text-gray-800 dark:text-gray-400"> Product support </span>
            </li>
          </ul>

          <a
            class="mt-5 inline-flex items-center justify-center gap-2 rounded-md border-2 border-blue-600 px-4 py-3 text-sm font-semibold text-blue-600 transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-blue-600 dark:text-blue-500 dark:hover:border-blue-700"
            href="#"
          >
            Sign up
          </a>
        </div>
        <!-- End Card -->
      </div>
      <!-- End Grid -->

      <!-- Comparison table -->
      <div class="mt-20 lg:mt-32">
        <div class="mb-10 lg:mb-20 lg:text-center">
          <h3 class="text-2xl font-semibold dark:text-white">Compare plans</h3>
        </div>

        <!-- xs to lg -->
        <div class="space-y-24 lg:hidden">
          <section>
            <div class="mb-4 px-4">
              <h2 class="text-lg font-medium leading-6 text-gray-800">Free</h2>
            </div>
            <table class="w-full">
              <caption
                class="border-t border-gray-200 bg-gray-50 px-4 py-3 text-left text-sm font-bold text-gray-800 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                Financial data
              </caption>
              <thead class="sticky inset-x-0 top-0 bg-white dark:bg-slate-900">
                <tr>
                  <th class="sr-only" scope="col">Feature</th>
                  <th class="sr-only" scope="col">Included</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Open/High/Low/Close
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Check -->
                    <svg
                      class="ml-auto h-7 w-7 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- End Solid Check -->
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Price-volume difference indicator
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Minus -->
                    <svg
                      class="ml-auto h-7 w-7 text-gray-400"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- Minus -->
                    <span class="sr-only">No</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table class="w-full">
              <caption
                class="border-t border-gray-200 bg-gray-50 px-4 py-3 text-left text-sm font-bold text-gray-800 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                On-chain data
              </caption>
              <thead>
                <tr>
                  <th class="sr-only" scope="col">Feature</th>
                  <th class="sr-only" scope="col">Included</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Network growth
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Minus -->
                    <svg
                      class="ml-auto h-7 w-7 text-gray-400"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- Minus -->
                    <span class="sr-only">No</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Average token age consumed
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Check -->
                    <svg
                      class="ml-auto h-7 w-7 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- End Solid Check -->
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Exchange flow
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Minus -->
                    <svg
                      class="ml-auto h-7 w-7 text-gray-400"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- Minus -->
                    <span class="sr-only">No</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Total ERC20 exchange funds flow
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Minus -->
                    <svg
                      class="ml-auto h-7 w-7 text-gray-400"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- Minus -->
                    <span class="sr-only">No</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Transaction volume
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Check -->
                    <svg
                      class="ml-auto h-7 w-7 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- End Solid Check -->
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Total circulation (beta)
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Minus -->
                    <svg
                      class="ml-auto h-7 w-7 text-gray-400"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- Minus -->
                    <span class="sr-only">No</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Velocity of tokens (beta)
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Check -->
                    <svg
                      class="ml-auto h-7 w-7 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- End Solid Check -->
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    ETH gas used
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Minus -->
                    <svg
                      class="ml-auto h-7 w-7 text-gray-400"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- Minus -->
                    <span class="sr-only">No</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table class="w-full">
              <caption
                class="border-t border-gray-200 bg-gray-50 px-4 py-3 text-left text-sm font-bold text-gray-800 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                Social data
              </caption>
              <thead>
                <tr>
                  <th class="sr-only" scope="col">Feature</th>
                  <th class="sr-only" scope="col">Included</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Dev activity
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Minus -->
                    <svg
                      class="ml-auto h-7 w-7 text-gray-400"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- Minus -->
                    <span class="sr-only">No</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Topic search
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Check -->
                    <svg
                      class="ml-auto h-7 w-7 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- End Solid Check -->
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Relative social dominance
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Minus -->
                    <svg
                      class="ml-auto h-7 w-7 text-gray-400"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- Minus -->
                    <span class="sr-only">No</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Total social volume
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Minus -->
                    <svg
                      class="ml-auto h-7 w-7 text-gray-400"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- Minus -->
                    <span class="sr-only">No</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <div class="mb-4 px-4">
              <h2 class="text-lg font-medium leading-6 text-gray-800">Startup</h2>
            </div>
            <table class="w-full">
              <caption
                class="border-t border-gray-200 bg-gray-50 px-4 py-3 text-left text-sm font-bold text-gray-800 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                Financial data
              </caption>
              <thead>
                <tr>
                  <th class="sr-only" scope="col">Feature</th>
                  <th class="sr-only" scope="col">Included</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Open/High/Low/Close
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Check -->
                    <svg
                      class="ml-auto h-7 w-7 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- End Solid Check -->
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Price-volume difference indicator
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Check -->
                    <svg
                      class="ml-auto h-7 w-7 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- End Solid Check -->
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table class="w-full">
              <caption
                class="border-t border-gray-200 bg-gray-50 px-4 py-3 text-left text-sm font-bold text-gray-800 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                On-chain data
              </caption>
              <thead>
                <tr>
                  <th class="sr-only" scope="col">Feature</th>
                  <th class="sr-only" scope="col">Included</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Network growth
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Minus -->
                    <svg
                      class="ml-auto h-7 w-7 text-gray-400"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- Minus -->
                    <span class="sr-only">No</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Average token age consumed
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Minus -->
                    <svg
                      class="ml-auto h-7 w-7 text-gray-400"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- Minus -->
                    <span class="sr-only">No</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Exchange flow
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Minus -->
                    <svg
                      class="ml-auto h-7 w-7 text-gray-400"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- Minus -->
                    <span class="sr-only">No</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Total ERC20 exchange funds flow
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Minus -->
                    <svg
                      class="ml-auto h-7 w-7 text-gray-400"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- Minus -->
                    <span class="sr-only">No</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Transaction volume
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Check -->
                    <svg
                      class="ml-auto h-7 w-7 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- End Solid Check -->
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Total circulation (beta)
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Check -->
                    <svg
                      class="ml-auto h-7 w-7 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- End Solid Check -->
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Velocity of tokens (beta)
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Check -->
                    <svg
                      class="ml-auto h-7 w-7 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- End Solid Check -->
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    ETH gas used
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Check -->
                    <svg
                      class="ml-auto h-7 w-7 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- End Solid Check -->
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table class="w-full">
              <caption
                class="border-t border-gray-200 bg-gray-50 px-4 py-3 text-left text-sm font-bold text-gray-800 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                Social data
              </caption>
              <thead>
                <tr>
                  <th class="sr-only" scope="col">Feature</th>
                  <th class="sr-only" scope="col">Included</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Dev activity
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Check -->
                    <svg
                      class="ml-auto h-7 w-7 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- End Solid Check -->
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Topic search
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Check -->
                    <svg
                      class="ml-auto h-7 w-7 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- End Solid Check -->
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Relative social dominance
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Minus -->
                    <svg
                      class="ml-auto h-7 w-7 text-gray-400"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- Minus -->
                    <span class="sr-only">No</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Total social volume
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Check -->
                    <svg
                      class="ml-auto h-7 w-7 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- End Solid Check -->
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <div class="mb-4 px-4">
              <h2 class="text-lg font-medium leading-6 text-gray-800">Team</h2>
            </div>
            <table class="w-full">
              <caption
                class="border-t border-gray-200 bg-gray-50 px-4 py-3 text-left text-sm font-bold text-gray-800 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                Financial data
              </caption>
              <thead>
                <tr>
                  <th class="sr-only" scope="col">Feature</th>
                  <th class="sr-only" scope="col">Included</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Open/High/Low/Close
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Check -->
                    <svg
                      class="ml-auto h-7 w-7 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- End Solid Check -->
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Price-volume difference indicator
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Check -->
                    <svg
                      class="ml-auto h-7 w-7 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- End Solid Check -->
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table class="w-full">
              <caption
                class="border-t border-gray-200 bg-gray-50 px-4 py-3 text-left text-sm font-bold text-gray-800 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                On-chain data
              </caption>
              <thead>
                <tr>
                  <th class="sr-only" scope="col">Feature</th>
                  <th class="sr-only" scope="col">Included</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Network growth
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Check -->
                    <svg
                      class="ml-auto h-7 w-7 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- End Solid Check -->
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Average token age consumed
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Check -->
                    <svg
                      class="ml-auto h-7 w-7 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- End Solid Check -->
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Exchange flow
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Check -->
                    <svg
                      class="ml-auto h-7 w-7 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- End Solid Check -->
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Total ERC20 exchange funds flow
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Check -->
                    <svg
                      class="ml-auto h-7 w-7 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- End Solid Check -->
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Transaction volume
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Check -->
                    <svg
                      class="ml-auto h-7 w-7 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- End Solid Check -->
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Total circulation (beta)
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Check -->
                    <svg
                      class="ml-auto h-7 w-7 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- End Solid Check -->
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Velocity of tokens (beta)
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Minus -->
                    <svg
                      class="ml-auto h-7 w-7 text-gray-400"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- Minus -->
                    <span class="sr-only">No</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    ETH gas used
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Check -->
                    <svg
                      class="ml-auto h-7 w-7 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- End Solid Check -->
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table class="w-full">
              <caption
                class="border-t border-gray-200 bg-gray-50 px-4 py-3 text-left text-sm font-bold text-gray-800 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                Social data
              </caption>
              <thead>
                <tr>
                  <th class="sr-only" scope="col">Feature</th>
                  <th class="sr-only" scope="col">Included</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Dev activity
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Minus -->
                    <svg
                      class="ml-auto h-7 w-7 text-gray-400"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- Minus -->
                    <span class="sr-only">No</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Topic search
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Check -->
                    <svg
                      class="ml-auto h-7 w-7 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- End Solid Check -->
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Relative social dominance
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Check -->
                    <svg
                      class="ml-auto h-7 w-7 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- End Solid Check -->
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Total social volume
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Minus -->
                    <svg
                      class="ml-auto h-7 w-7 text-gray-400"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- Minus -->
                    <span class="sr-only">No</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <div class="mb-4 px-4">
              <h2 class="text-lg font-medium leading-6 text-gray-800">Enterprise</h2>
            </div>
            <table class="w-full">
              <caption
                class="border-t border-gray-200 bg-gray-50 px-4 py-3 text-left text-sm font-bold text-gray-800 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                Financial data
              </caption>
              <thead>
                <tr>
                  <th class="sr-only" scope="col">Feature</th>
                  <th class="sr-only" scope="col">Included</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Open/High/Low/Close
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Check -->
                    <svg
                      class="ml-auto h-7 w-7 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- End Solid Check -->
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Price-volume difference indicator
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Check -->
                    <svg
                      class="ml-auto h-7 w-7 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- End Solid Check -->
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table class="w-full">
              <caption
                class="border-t border-gray-200 bg-gray-50 px-4 py-3 text-left text-sm font-bold text-gray-800 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                On-chain data
              </caption>
              <thead>
                <tr>
                  <th class="sr-only" scope="col">Feature</th>
                  <th class="sr-only" scope="col">Included</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Network growth
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Check -->
                    <svg
                      class="ml-auto h-7 w-7 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- End Solid Check -->
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Average token age consumed
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Check -->
                    <svg
                      class="ml-auto h-7 w-7 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- End Solid Check -->
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Exchange flow
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Check -->
                    <svg
                      class="ml-auto h-7 w-7 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- End Solid Check -->
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Total ERC20 exchange funds flow
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Check -->
                    <svg
                      class="ml-auto h-7 w-7 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- End Solid Check -->
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Transaction volume
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Check -->
                    <svg
                      class="ml-auto h-7 w-7 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- End Solid Check -->
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Total circulation (beta)
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Check -->
                    <svg
                      class="ml-auto h-7 w-7 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- End Solid Check -->
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Velocity of tokens (beta)
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Check -->
                    <svg
                      class="ml-auto h-7 w-7 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- End Solid Check -->
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    ETH gas used
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Check -->
                    <svg
                      class="ml-auto h-7 w-7 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- End Solid Check -->
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table class="w-full">
              <caption
                class="border-t border-gray-200 bg-gray-50 px-4 py-3 text-left text-sm font-bold text-gray-800 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                Social data
              </caption>
              <thead>
                <tr>
                  <th class="sr-only" scope="col">Feature</th>
                  <th class="sr-only" scope="col">Included</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Dev activity
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Check -->
                    <svg
                      class="ml-auto h-7 w-7 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- End Solid Check -->
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Topic search
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Check -->
                    <svg
                      class="ml-auto h-7 w-7 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- End Solid Check -->
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Relative social dominance
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Check -->
                    <svg
                      class="ml-auto h-7 w-7 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- End Solid Check -->
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>

                <tr class="border-t border-gray-200 dark:border-gray-700">
                  <th
                    class="px-4 py-5 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                    scope="row"
                  >
                    Total social volume
                  </th>
                  <td class="py-5 pr-4">
                    <!-- Check -->
                    <svg
                      class="ml-auto h-7 w-7 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                        fill="currentColor"
                      />
                    </svg>
                    <!-- End Solid Check -->
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
        <!-- End xs to lg -->

        <!-- lg+ -->
        <div class="hidden lg:block">
          <table class="h-px w-full">
            <caption class="sr-only">
              Pricing plan comparison
            </caption>
            <thead>
              <tr>
                <th class="pb-4 pl-6 pr-6 text-left text-sm font-medium text-gray-800" scope="col">
                  <span class="sr-only">Feature by</span>
                  <span class="dark:text-white">Plans</span>
                </th>

                <th
                  class="w-1/4 px-6 pb-4 text-center text-lg font-medium leading-6 text-gray-800 dark:text-white"
                  scope="col"
                >
                  Free
                </th>
                <th
                  class="w-1/4 px-6 pb-4 text-center text-lg font-medium leading-6 text-gray-800 dark:text-white"
                  scope="col"
                >
                  Startup
                </th>
                <th
                  class="w-1/4 px-6 pb-4 text-center text-lg font-medium leading-6 text-gray-800 dark:text-white"
                  scope="col"
                >
                  Team
                </th>
                <th
                  class="w-1/4 px-6 pb-4 text-center text-lg font-medium leading-6 text-gray-800 dark:text-white"
                  scope="col"
                >
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody
              class="divide-y divide-gray-200 border-t border-gray-200 dark:divide-gray-700 dark:border-gray-700"
            >
              <tr>
                <th
                  class="bg-gray-50 py-3 pl-6 text-left font-bold text-gray-800 dark:bg-slate-800 dark:text-white"
                  colspan="5"
                  scope="colgroup"
                >
                  Financial data
                </th>
              </tr>

              <tr>
                <th
                  class="py-5 pl-6 pr-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                  scope="row"
                >
                  Open/High/Low/Close
                </th>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Free</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Startup</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Team</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Enterprise</span>
                </td>
              </tr>

              <tr>
                <th
                  class="py-5 pl-6 pr-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                  scope="row"
                >
                  Price-volume difference indicator
                </th>

                <td class="px-6 py-5">
                  <!-- Minus -->
                  <svg
                    class="mx-auto h-7 w-7 text-gray-400"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- Minus -->
                  <span class="sr-only">Not included in Free</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Startup</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Team</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Enterprise</span>
                </td>
              </tr>

              <tr>
                <th
                  class="bg-gray-50 py-3 pl-6 text-left font-bold text-gray-800 dark:bg-slate-800 dark:text-white"
                  colspan="5"
                  scope="colgroup"
                >
                  On-chain data
                </th>
              </tr>

              <tr>
                <th
                  class="py-5 pl-6 pr-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                  scope="row"
                >
                  Network growth
                </th>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Free</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-gray-400"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Startup</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Team</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Enterprise</span>
                </td>
              </tr>

              <tr>
                <th
                  class="py-5 pl-6 pr-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                  scope="row"
                >
                  Average token age consumed
                </th>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Not included in Free</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-gray-400"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Startup</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Team</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Enterprise</span>
                </td>
              </tr>

              <tr>
                <th
                  class="py-5 pl-6 pr-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                  scope="row"
                >
                  Exchange flow
                </th>

                <td class="px-6 py-5">
                  <!-- Minus -->
                  <svg
                    class="mx-auto h-7 w-7 text-gray-400"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- Minus -->
                  <span class="sr-only">Not included in Free</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-gray-400"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Startup</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Team</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Enterprise</span>
                </td>
              </tr>

              <tr>
                <th
                  class="py-5 pl-6 pr-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                  scope="row"
                >
                  Total ERC20 exchange funds flow
                </th>

                <td class="px-6 py-5">
                  <!-- Minus -->
                  <svg
                    class="mx-auto h-7 w-7 text-gray-400"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- Minus -->
                  <span class="sr-only">Not included in Free</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-gray-400"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Startup</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Team</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Enterprise</span>
                </td>
              </tr>

              <tr>
                <th
                  class="py-5 pl-6 pr-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                  scope="row"
                >
                  Transaction volume
                </th>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Free</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Startup</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Team</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Enterprise</span>
                </td>
              </tr>

              <tr>
                <th
                  class="py-5 pl-6 pr-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                  scope="row"
                >
                  Total circulation (beta)
                </th>

                <td class="px-6 py-5">
                  <!-- Minus -->
                  <svg
                    class="mx-auto h-7 w-7 text-gray-400"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- Minus -->
                  <span class="sr-only">Not included in Free</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Startup</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Team</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Enterprise</span>
                </td>
              </tr>

              <tr>
                <th
                  class="py-5 pl-6 pr-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                  scope="row"
                >
                  Velocity of tokens (beta)
                </th>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Not included in Free</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Startup</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-gray-400"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Team</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Enterprise</span>
                </td>
              </tr>

              <tr>
                <th
                  class="py-5 pl-6 pr-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                  scope="row"
                >
                  ETH gas used
                </th>

                <td class="px-6 py-5">
                  <!-- Minus -->
                  <svg
                    class="mx-auto h-7 w-7 text-gray-400"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- Minus -->
                  <span class="sr-only">Not included in Free</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Startup</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Team</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Enterprise</span>
                </td>
              </tr>

              <tr>
                <th
                  class="bg-gray-50 py-3 pl-6 text-left font-bold text-gray-800 dark:bg-slate-800 dark:text-white"
                  colspan="5"
                  scope="colgroup"
                >
                  Social data
                </th>
              </tr>

              <tr>
                <th
                  class="py-5 pl-6 pr-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                  scope="row"
                >
                  Dev activity
                </th>

                <td class="px-6 py-5">
                  <!-- Minus -->
                  <svg
                    class="mx-auto h-7 w-7 text-gray-400"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- Minus -->
                  <span class="sr-only">Included in Free</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Startup</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-gray-400"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Team</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Enterprise</span>
                </td>
              </tr>

              <tr>
                <th
                  class="py-5 pl-6 pr-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                  scope="row"
                >
                  Topic search
                </th>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Free</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Startup</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Team</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Enterprise</span>
                </td>
              </tr>

              <tr>
                <th
                  class="py-5 pl-6 pr-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                  scope="row"
                >
                  Relative social dominance
                </th>

                <td class="px-6 py-5">
                  <!-- Minus -->
                  <svg
                    class="mx-auto h-7 w-7 text-gray-400"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- Minus -->
                  <span class="sr-only">Included in Free</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Minus -->
                  <svg
                    class="mx-auto h-7 w-7 text-gray-400"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- Minus -->
                  <span class="sr-only">Included in Startup</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Minus -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- Minus -->
                  <span class="sr-only">Included in Team</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Minus -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- Minus -->
                  <span class="sr-only">Included in Enterprise</span>
                </td>
              </tr>

              <tr>
                <th
                  class="py-5 pl-6 pr-6 text-left text-sm font-normal text-gray-600 dark:text-gray-400"
                  scope="row"
                >
                  Relative social dominance
                </th>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Free</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Startup</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-gray-400"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Team</span>
                </td>

                <td class="px-6 py-5">
                  <!-- Check -->
                  <svg
                    class="mx-auto h-7 w-7 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                      fill="currentColor"
                    />
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Included in Enterprise</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- End lg+ -->
      </div>
      <!-- End Comparison table -->
    </div>
    <!-- End Pricing -->
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
