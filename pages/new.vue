<template>
  <div class="flex items-center relative dark:text-gray-400 justify-center m-8">
    <div
      class="absolute inset-0 backdrop-blur-xl flex flex-col justify-center items-center"
      :class="{ hidden: !showLoading }"
    >
      <div
        class="animate-spin inline-block w-8 h-8 border-[8px] border-current border-t-transparent text-white rounded-full"
        role="status"
        aria-label="loading"
      ></div>
      <p>Uploading...</p>
    </div>
    <form class="flex flex-col w-full md:w-[80%]" @submit.prevent="submit">
      <input
        type="text"
        name="title"
        v-model="title"
        class="px-5 block w-full text-[2rem] pt-8 mt-2 mb-0 rounded-full focus:border-none focus:ring-transparent dark:bg-slate-900 dark:border-transparent font-extrabold dark:text-gray-400"
        placeholder="Input title"
        required
      />
      <div
        @dragenter.prevent="toggleActive"
        @dragleave.prevent="toggleActive"
        @dragover.prevent
        @drop.prevent="toggleActive"
        :class="{ 'active-dropzone': active }"
        class="flex-col justify-center dark:text-gray-400 flex text-center h-96 bg-slate-800 w-full p-4 lg:p-32 px-auto mx-auto m-8 rounded-xl"
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
            required
          />
        </div>
      </div>
      <div class="flex">
        <textarea
          class="pb-7 px-4 block w-full border-transparent ring-transparent rounded-md text-[1.5rem] focus:border-transparent focus:ring-transparent dark:bg-slate-900 dark:text-gray-400 m-2"
          v-model="desc"
          placeholder="This is a textarea placeholder"
        ></textarea>
      </div>
      <button
        type="submit"
        class="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
      >
        Create new post
      </button>
    </form>
  </div>
  <Teleport to="body">
    <SuccessModal v-model:show="showModal" :key="fileInputKey" />
  </Teleport>
</template>

<script setup lang="ts">
import SuccessModal from "../components/new/SuccessModal.vue";
import PocketBase from "pocketbase";

const config = useRuntimeConfig() as any;
const router = useRouter();

let submit: any = null;
const active = ref(false);

const toggleActive = () => {
  active.value = !active.value;
};

const fileInputKey = ref(0);
const title = ref("");
const desc = ref("");
const file = ref();
const success = ref(true);
const message = ref("");
const showModal = ref(false);
const showLoading = ref(false);

watch(showModal, () => {
  message.value = "";
  title.value = "";
  desc.value = "";
  file.value.value = null;
});
// -----------------------------------------PocketBase----------------------------------------
onMounted(async () => {
  let pb = new PocketBase(config.public.PB_ENDPOINT);
  const owner = pb.authStore.model?.id;
  if (!owner) router.push("/signin");
  submit = async () => {
    showLoading.value = true;
    if (owner) {
      console.log("owner is:", owner);
      const formData = new FormData();
      formData.append("file", file.value.files[0]);
      formData.append("owner", owner);
      formData.append("title", title.value);
      formData.append("desc", desc.value);
      // formData.append("tags", JSON.stringify(tags.value));
      await pb
        .collection("posts")
        .create(formData)
        .then(() => {
          success.value = true;
          message.value = "Upload Was Successful";
          showLoading.value = false;
          showModal.value = true;
          // navigateTo("/");
        })
        .catch((err) => {
          showLoading.value = false;
          success.value = false;
          message.value = "Error";
          alert(err);
        });
    }
  };
});
</script>

<style scoped></style>
