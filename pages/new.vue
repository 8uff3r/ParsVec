<template>
  <div class="relative">
    <div
      class="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-xl"
      :class="{ hidden: !showLoading }"
    >
      <div
        class="inline-block h-8 w-8 animate-spin rounded-full border-[8px] border-current border-t-transparent text-white"
        role="status"
        aria-label="loading"
      ></div>
      <p>Uploading...</p>
    </div>
    <div class="relative m-8 flex items-center justify-center dark:text-gray-400">
      <form class="flex w-full flex-col md:w-[80%]" @submit.prevent="submit">
        <input
          type="text"
          name="title"
          v-model="title"
          class="mb-0 mt-2 block w-full rounded-full px-5 pt-8 text-[2rem] font-extrabold focus:border-none focus:ring-transparent dark:border-transparent dark:bg-slate-900 dark:text-gray-400"
          placeholder="Input title"
          required
        />
        <div
          @dragenter.prevent="toggleActive"
          @dragleave.prevent="toggleActive"
          @dragover.prevent
          @drop.prevent="toggleActive"
          :class="{ 'active-dropzone': active }"
          class="px-auto m-8 mx-auto flex h-96 w-full flex-col justify-center rounded-xl bg-slate-800 p-4 text-center dark:text-gray-400 lg:p-32"
        >
          <div>
            <span>Drag and Drop </span>
            <br />
            <span>OR</span>
            <br />
            <label class="large-file-input" for="file-input">Select File:</label>
            <br />
            <br />
            <input
              type="file"
              name="file-input"
              class="block w-full rounded-md border border-gray-200 text-sm shadow-sm file:mr-4 file:border-0 file:bg-gray-100 file:bg-transparent file:px-4 file:py-3 focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:file:bg-gray-700 dark:file:text-gray-400 file:sm:py-5"
              ref="file"
              required
            />
          </div>
        </div>
        <div class="flex">
          <textarea
            class="m-2 block w-full rounded-md border-transparent px-4 pb-7 text-[1.5rem] ring-transparent focus:border-transparent focus:ring-transparent dark:bg-slate-900 dark:text-gray-400"
            v-model="desc"
            placeholder="This is a textarea placeholder"
          ></textarea>
        </div>
        <button
          type="submit"
          class="inline-flex w-full items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
        >
          Create new post
        </button>
      </form>
    </div>
    <Teleport to="body">
      <SuccessModal v-model:show="showModal" :key="fileInputKey" />
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import SuccessModal from '../components/new/SuccessModal.vue';
import PocketBase from 'pocketbase';

const config = useRuntimeConfig() as any;
const router = useRouter();

let submit: any = null;
const active = ref(false);

const toggleActive = () => {
  active.value = !active.value;
};

const fileInputKey = ref(0);
const title = ref('');
const desc = ref('');
const file = ref();
const success = ref(true);
const message = ref('');
const showModal = ref(false);
const showLoading = ref(false);

watch(showModal, () => {
  message.value = '';
  title.value = '';
  desc.value = '';
  file.value.value = null;
});
// -----------------------------------------PocketBase----------------------------------------
onMounted(async () => {
  let pb = new PocketBase(config.public.PB_ENDPOINT);
  const owner = pb.authStore.model?.id;
  if (!owner) router.push('/signin');
  submit = async () => {
    showLoading.value = true;
    if (owner) {
      const formData = new FormData();
      formData.append('file', file.value.files[0]);
      formData.append('owner', owner);
      formData.append('title', title.value);
      formData.append('desc', desc.value);
      // formData.append("tags", JSON.stringify(tags.value));
      await pb
        .collection('posts')
        .create(formData)
        .then(() => {
          success.value = true;
          message.value = 'Upload Was Successful';
          showLoading.value = false;
          showModal.value = true;
          // navigateTo("/");
        })
        .catch((err) => {
          showLoading.value = false;
          success.value = false;
          message.value = 'Error';
          alert(err);
        });
    }
  };
});
</script>

<style scoped></style>
