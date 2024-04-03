<template>
  <div class="m-8 flex items-center justify-center dark:text-gray-400">
    <form>
      <input
        type="text"
        name="title"
        class="mb-0 mt-2 block w-full rounded-full border-gray-200 px-5 pt-8 text-[2rem] font-extrabold focus:border-none focus:ring-transparent dark:border-transparent dark:bg-slate-900 dark:text-gray-400"
        placeholder="Input title"
      />
      <div
        @dragenter.prevent="toggleActive"
        @dragleave.prevent="toggleActive"
        @dragover.prevent
        @drop.prevent="toggleActive"
        :class="{ 'active-dropzone': active }"
        class="px-auto m-8 mx-auto flex h-96 w-[70rem] flex-col justify-center rounded-xl bg-slate-800 p-32 text-center dark:text-gray-400"
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
          />
        </div>
      </div>
      <textarea
        class="block w-full rounded-md border-transparent px-4 py-3 text-[1.5rem] ring-transparent focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:text-gray-400"
        rows="3"
        placeholder="This is a textarea placeholder"
      ></textarea>
      <button
        type="button"
        class="inline-flex w-full items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
      >
        Create new post
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
const active = ref(false);

const toggleActive = () => {
  active.value = !active.value;
};

const file = ref();
const success = ref(true);
const message = ref('');
const submitFile = () => {
  const formData = new FormData();
  formData.append('file', file.value.files[0]);

  axios
    .post('/api/upload/profile', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      withCredentials: true
    })
    .then(() => {
      success.value = true;
      message.value = 'Upload Was Successful';
    })
    .catch(() => {
      success.value = false;
      message.value = 'Error';
    });
};
</script>

<style scoped></style>
