<template>
  <div class="flex items-center dark:text-gray-400 justify-center m-8">
    <form>
      <input
        type="text"
        name="title"
        class="px-5 block w-full text-[2rem] pt-8 mt-2 mb-0 border-gray-200 rounded-full focus:border-none focus:ring-transparent dark:bg-slate-900 dark:border-transparent font-extrabold dark:text-gray-400"
        placeholder="Input title"
      />
      <div
        @dragenter.prevent="toggleActive"
        @dragleave.prevent="toggleActive"
        @dragover.prevent
        @drop.prevent="toggleActive"
        :class="{ 'active-dropzone': active }"
        class="flex-col justify-center dark:text-gray-400 flex text-center h-96 bg-slate-800 w-[70rem] p-32 px-auto mx-auto m-8 rounded-xl"
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
            class="block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 file:bg-transparent file:border-0 file:bg-gray-100 file:mr-4 file:py-3 file:px-4 file:sm:py-5 dark:file:bg-gray-700 dark:file:text-gray-400"
            ref="file"
          />
        </div>
      </div>
      <textarea
        class="py-3 px-4 block w-full border-transparent ring-transparent rounded-md text-[1.5rem] focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:text-gray-400"
        rows="3"
        placeholder="This is a textarea placeholder"
      ></textarea>
      <button
        type="button"
        class="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
      >
        Create new post
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
const active = ref(false);

const toggleActive = () => {
  active.value = !active.value;
};

const file = ref();
const success = ref(true);
const message = ref("");
const submitFile = () => {
  const formData = new FormData();
  formData.append("file", file.value.files[0]);

  axios
    .post("/api/upload/profile", formData, {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    })
    .then(() => {
      success.value = true;
      message.value = "Upload Was Successful";
    })
    .catch(() => {
      success.value = false;
      message.value = "Error";
    });
};
</script>

<style scoped></style>
