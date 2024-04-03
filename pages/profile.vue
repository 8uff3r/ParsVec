<template>
  <div class="relative">
    <div
      class="absolute inset-0 z-20 flex flex-col items-center justify-center backdrop-blur-xl"
      :class="{ hidden: !pending }"
    >
      <div
        class="inline-block h-8 w-8 animate-spin rounded-full border-[8px] border-current border-t-transparent text-white"
        role="status"
        aria-label="loading"
      ></div>
      <p>Loading...</p>
    </div>
    <!-- Card Section -->
    <div class="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <!-- Card -->
      <div class="rounded-xl bg-white p-4 shadow dark:bg-slate-800 sm:p-7">
        <div class="mb-8">
          <h2 class="text-xl font-bold text-gray-800 dark:text-gray-200">Profile</h2>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Manage your name, password and account settings.
          </p>
        </div>

        <form @submit.prevent="submit" ref="refForm">
          <!-- Grid -->
          <div class="grid gap-2 sm:grid-cols-12 sm:gap-6">
            <div class="sm:col-span-3">
              <label class="mt-2.5 inline-block text-sm text-gray-800 dark:text-gray-200">
                Profile photo
              </label>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-9">
              <div class="flex items-center gap-5">
                <div
                  class="inline-block h-16 w-16 overflow-clip rounded-full bg-black ring-2 ring-white dark:ring-gray-800"
                >
                  <input
                    type="file"
                    name="avatar"
                    ref="file"
                    class="h-full w-full cursor-pointer opacity-0"
                  />
                </div>
                <div class="flex gap-x-2">
                  <div>
                    <button
                      type="button"
                      @click="uploadFile"
                      class="inline-flex items-center justify-center gap-2 rounded-md border bg-white px-3 py-2 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-gray-800"
                    >
                      <svg
                        class="h-3 w-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                        />
                        <path
                          d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"
                        />
                      </svg>
                      Upload photo
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-3">
              <label
                for="af-account-full-name"
                class="mt-2.5 inline-block text-sm text-gray-800 dark:text-gray-200"
              >
                Full name
              </label>
              <div class="hs-tooltip inline-block">
                <button type="button" class="hs-tooltip-toggle ml-1">
                  <svg
                    class="inline-block h-3 w-3 text-gray-400 dark:text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    />
                    <path
                      d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                    />
                  </svg>
                </button>
                <span
                  class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible invisible absolute z-10 inline-block w-40 rounded-md bg-gray-900 px-2 py-1 text-center text-xs font-medium text-white opacity-0 shadow-sm transition-opacity dark:bg-slate-700"
                  role="tooltip"
                >
                  Displayed on public forums, such as Preline
                </span>
              </div>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-9">
              <div class="sm:flex">
                <input
                  id="af-account-full-name"
                  type="text"
                  v-model="data.name"
                  class="relative -ml-px -mt-px block w-full border-gray-200 px-3 py-2 pr-11 text-sm shadow-sm first:rounded-t-lg last:rounded-b-lg focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 sm:mt-0 sm:first:ml-0 sm:first:rounded-l-lg sm:first:rounded-tr-none sm:last:rounded-r-lg sm:last:rounded-bl-none"
                  placeholder="Maria"
                />
                <input
                  type="text"
                  v-model="data.lastname"
                  class="relative -ml-px -mt-px block w-full border-gray-200 px-3 py-2 pr-11 text-sm shadow-sm first:rounded-t-lg last:rounded-b-lg focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 sm:mt-0 sm:first:ml-0 sm:first:rounded-l-lg sm:first:rounded-tr-none sm:last:rounded-r-lg sm:last:rounded-bl-none"
                  placeholder="Boone"
                />
              </div>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-3">
              <label
                for="af-account-username"
                class="mt-2.5 inline-block text-sm text-gray-800 dark:text-gray-200"
              >
                Username
              </label>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-9">
              <input
                type="text"
                v-model="data.username"
                class="block w-full rounded-lg border-gray-200 px-3 py-2 pr-11 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
                placeholder="bernard"
              />
            </div>
            <!-- End Col -->
            <div class="sm:col-span-3">
              <label
                for="af-account-email"
                class="mt-2.5 inline-block text-sm text-gray-800 dark:text-gray-200"
              >
                Email
              </label>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-9">
              <input
                type="email"
                v-model="data.email"
                class="block w-full rounded-lg border-gray-200 px-3 py-2 pr-11 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
                placeholder="maria@site.com"
              />
            </div>
            <!-- End Col -->

            <div class="sm:col-span-3">
              <label
                for="af-account-password"
                class="mt-2.5 inline-block text-sm text-gray-800 dark:text-gray-200"
              >
                Password
              </label>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-9">
              <div class="space-y-2">
                <input
                  id="af-account-password"
                  type="text"
                  v-model="data.oldPassword"
                  class="block w-full rounded-lg border-gray-200 px-3 py-2 pr-11 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
                  placeholder="Enter current password"
                />
                <input
                  type="text"
                  v-model="data.password"
                  class="block w-full rounded-lg border-gray-200 px-3 py-2 pr-11 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
                  placeholder="Enter new password"
                />
              </div>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-3">
              <div class="inline-block">
                <label
                  for="af-account-phone"
                  class="mt-2.5 inline-block text-sm text-gray-800 dark:text-gray-200"
                >
                  Phone
                </label>
                <span class="text-sm text-gray-400 dark:text-gray-600"> (Optional) </span>
              </div>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-9">
              <div class="sm:flex">
                <input
                  id="af-account-phone"
                  type="text"
                  v-model="data.phone"
                  class="relative -ml-px -mt-px block w-full border-gray-200 px-3 py-2 pr-11 text-sm shadow-sm first:rounded-t-lg last:rounded-b-lg focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 sm:mt-0 sm:first:ml-0 sm:first:rounded-l-lg sm:first:rounded-tr-none sm:last:rounded-r-lg sm:last:rounded-bl-none"
                  placeholder="+x(xxx)xxx-xx-xx"
                />
              </div>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-3">
              <label
                for="af-account-gender-checkbox"
                class="mt-2.5 inline-block text-sm text-gray-800 dark:text-gray-200"
              >
                Gender
              </label>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-9">
              <div class="sm:flex">
                <label
                  for="af-account-gender-checkbox"
                  class="relative -ml-px -mt-px block flex w-full border border-gray-200 px-3 py-2 text-sm shadow-sm first:rounded-t-lg last:rounded-b-lg focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 sm:mt-0 sm:first:ml-0 sm:first:rounded-l-lg sm:first:rounded-tr-none sm:last:rounded-r-lg sm:last:rounded-bl-none"
                >
                  <input
                    type="radio"
                    name="af-account-gender-checkbox"
                    v-model="data.gender"
                    value="male"
                    class="pointer-events-none mt-0.5 shrink-0 rounded-full border-gray-200 text-blue-600 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:checked:border-blue-500 dark:checked:bg-blue-500 dark:focus:ring-offset-gray-800"
                    id="af-account-gender-checkbox"
                  />
                  <span class="ml-3 text-sm text-gray-500 dark:text-gray-400">Male</span>
                </label>

                <label
                  for="af-account-gender-checkbox-female"
                  class="relative -ml-px -mt-px block flex w-full border border-gray-200 px-3 py-2 text-sm shadow-sm first:rounded-t-lg last:rounded-b-lg focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 sm:mt-0 sm:first:ml-0 sm:first:rounded-l-lg sm:first:rounded-tr-none sm:last:rounded-r-lg sm:last:rounded-bl-none"
                >
                  <input
                    type="radio"
                    name="af-account-gender-checkbox-female"
                    v-model="data.gender"
                    value="female"
                    class="pointer-events-none mt-0.5 shrink-0 rounded-full border-gray-200 text-blue-600 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:checked:border-blue-500 dark:checked:bg-blue-500 dark:focus:ring-offset-gray-800"
                    id="af-account-gender-checkbox-female"
                  />
                  <span class="ml-3 text-sm text-gray-500 dark:text-gray-400">Female</span>
                </label>

                <label
                  for="af-account-gender-checkbox-other"
                  class="relative -ml-px -mt-px block flex w-full border border-gray-200 px-3 py-2 text-sm shadow-sm first:rounded-t-lg last:rounded-b-lg focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 sm:mt-0 sm:first:ml-0 sm:first:rounded-l-lg sm:first:rounded-tr-none sm:last:rounded-r-lg sm:last:rounded-bl-none"
                >
                  <input
                    type="radio"
                    name="af-account-gender-checkbox-other"
                    class="pointer-events-none mt-0.5 shrink-0 rounded-full border-gray-200 text-blue-600 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:checked:border-blue-500 dark:checked:bg-blue-500 dark:focus:ring-offset-gray-800"
                    v-model="data.gender"
                    value="other"
                    id="af-account-gender-checkbox-other"
                  />
                  <span class="ml-3 text-sm text-gray-500 dark:text-gray-400">Other</span>
                </label>
              </div>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-3">
              <label
                for="af-account-bio"
                class="mt-2.5 inline-block text-sm text-gray-800 dark:text-gray-200"
              >
                BIO
              </label>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-9">
              <textarea
                id="af-account-bio"
                class="block w-full rounded-lg border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
                rows="6"
                v-model="data.bio"
                placeholder="Type your message..."
              ></textarea>
            </div>
            <!-- End Col -->
          </div>
          <!-- End Grid -->

          <div class="mt-5 flex justify-end gap-x-2">
            <button
              type="button"
              @click="router.back()"
              class="inline-flex items-center justify-center gap-2 rounded-md border bg-white px-3 py-2 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 px-3 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            >
              Save changes
            </button>
          </div>
        </form>
      </div>
      <!-- End Card -->
    </div>
    <!-- End Card Section -->
  </div>
</template>

<script setup lang="ts">
import PocketBase, { Record, Admin } from 'pocketbase';

const config = useRuntimeConfig() as any;
const file = ref();
let submit: any = null;
let uploadFile: any;

const initData = {
  name: '',
  email: '',
  lastname: '',
  gender: '',
  bio: '',
  phone: '',
  password: '',
  passwordConfirm: '',
  oldPassword: '',
  username: ''
};
const data = ref(initData);

let owner: Record | Admin | null;
let pb = new PocketBase(config.public.PB_ENDPOINT);
owner = pb.authStore.model;
if (!owner?.id) {
  navigateTo('/signin');
}
const router = useRouter();
const { pending } = useLazyAsyncData(async () => {
  if (!owner?.id || !owner) {
    return;
  }
  const record = await pb.collection('users').getOne(owner?.id);
  data.value = record as any;
  const refForm = ref(null);

  uploadFile = async () => {
    const formData = new FormData();
    formData.append('avatar', file.value.files[0]);
    await pb.collection('users').update(owner?.id!, formData);
  };

  submit = async () => {
    const record = await pb.collection('users').update(owner?.id!, {
      email: data.value.email,
      name: data.value.name,
      lastname: data.value.lastname,
      gender: data.value.gender,
      bio: data.value.bio,
      phone: data.value.phone,
      oldPassword: data.value.oldPassword,
      password: data.value.password,
      passwordConfirm: data.value.password
    });
  };
});

onUnmounted(() => {
  owner = null;
  data.value = initData;
});
</script>

<style scoped></style>
