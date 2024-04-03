<template>
  <div>
    <div class="flex h-full items-center bg-gray-100 py-16 dark:bg-slate-900">
      <main class="mx-auto w-full max-w-md p-6">
        <div
          class="mt-7 rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
        >
          <div class="p-4 sm:p-7">
            <div class="text-center">
              <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Sign in</h1>
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Don't have an account yet?
                <NuxtLink
                  class="font-medium text-blue-600 decoration-2 hover:underline"
                  to="/signup"
                >
                  Sign up here
                </NuxtLink>
              </p>
            </div>

            <div class="mt-5">
              <button
                type="button"
                class="inline-flex w-full items-center justify-center gap-2 rounded-md border bg-white px-4 py-3 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-gray-800"
              >
                <svg class="h-auto w-4" width="46" height="47" viewBox="0 0 46 47" fill="none">
                  <path
                    d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                    fill="#34A853"
                  />
                  <path
                    d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                    fill="#EB4335"
                  />
                </svg>
                Sign in with Google
              </button>

              <div
                class="flex items-center py-3 text-xs uppercase text-gray-400 before:mr-6 before:flex-[1_1_0%] before:border-t before:border-gray-200 after:ml-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600"
              >
                Or
              </div>

              <!-- Form -->
              <form @submit.prevent="submit">
                <div class="grid gap-y-4">
                  <!-- Form Group -->
                  <div>
                    <label for="email" class="mb-2 block text-sm dark:text-white"
                      >Email address</label
                    >
                    <div class="relative">
                      <input
                        type="email"
                        id="email"
                        v-model="email"
                        name="email"
                        class="block w-full rounded-md border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                        required
                        aria-describedby="email-error"
                      />
                      <div
                        class="pointer-events-none absolute inset-y-0 right-0 flex hidden items-center pr-3"
                      >
                        <svg
                          class="h-5 w-5 text-red-500"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                          />
                        </svg>
                      </div>
                    </div>
                    <p class="mt-2 hidden text-xs text-red-600" id="email-error">
                      Please include a valid email address so we can get back to you
                    </p>
                  </div>
                  <!-- End Form Group -->

                  <!-- Form Group -->
                  <div>
                    <div class="flex items-center justify-between">
                      <label for="password" class="mb-2 block text-sm dark:text-white"
                        >Password</label
                      >
                      <a
                        class="text-sm font-medium text-blue-600 decoration-2 hover:underline"
                        href="../examples/html/recover-account.html"
                        >Forgot password?</a
                      >
                    </div>
                    <div class="relative">
                      <input
                        type="password"
                        id="password"
                        v-model="password"
                        name="password"
                        class="block w-full rounded-md border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                        required
                        aria-describedby="password-error"
                      />
                      <div
                        class="pointer-events-none absolute inset-y-0 right-0 flex hidden items-center pr-3"
                      >
                        <svg
                          class="h-5 w-5 text-red-500"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                          />
                        </svg>
                      </div>
                    </div>
                    <p class="mt-2 hidden text-xs text-red-600" id="password-error">
                      8+ characters required
                    </p>
                  </div>
                  <!-- End Form Group -->

                  <!-- Checkbox -->
                  <div class="flex items-center">
                    <div class="flex">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        class="pointer-events-none mt-0.5 shrink-0 rounded border-gray-200 text-blue-600 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:checked:border-blue-500 dark:checked:bg-blue-500 dark:focus:ring-offset-gray-800"
                      />
                    </div>
                    <div class="ml-3">
                      <label for="remember-me" class="text-sm dark:text-white">Remember me</label>
                    </div>
                  </div>
                  <!-- End Checkbox -->

                  <button
                    type="submit"
                    class="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                  >
                    Sign in
                  </button>
                </div>
              </form>
              <!-- End Form -->
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '../stores/user';
import PocketBase from 'pocketbase';

let pb: any = null;
const store = useAuthStore();

const config = useRuntimeConfig() as any;
onMounted(async () => {
  pb = new PocketBase(config.public.PB_ENDPOINT);
});

const email = ref();
const password = ref();
const router = useRouter();

const submit = async () => {
  await doLogin();
};
const doLogin = async () => {
  try {
    const authData = await pb
      .collection('users')
      .authWithPassword(email.value, password.value)
      .then((res: any) => {
        store.setAuthed(true);
        router.push('/latest');
        return res;
      });
  } catch (error: any) {
    alert(error.message);
  }
};

onUnmounted(() => {
  email.value = undefined;
  password.value = undefined;
});
</script>

<style scoped></style>
