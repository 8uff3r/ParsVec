<template>
  <form @submit.prevent="">
    <div class="text-white flex mb-4 flex-col justify-center items-center">
      <div class="pb-2 border border-white rounded-lg w-full">
        <input
          class="bg-transparent flex w-full px-4 py-2 mb-2"
          v-model="newTag"
          @keyup.enter="addTag(newTag)"
          placeholder="New Tag"
        />
        <div class="flex items-center flex-wrap">
          <span class="py-2 invisible">:</span>
          <span
            v-for="(tag, index) in tags"
            class="bg-gray-800 px-4 py-2 mr-1 rounded-full"
            :key="tag"
          >
            <button @click="removeTag(index)" class="mx-1" type="button">
              x
            </button>
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
// ---------------TagsInput-----------------
const tags: Ref<string[]> = ref([]);
const newTag = ref("");

const addTag = (tag: string) => {
  tags.value.push(tag); // add the new tag to the tags array
  newTag.value = "";
};

const removeTag = (index: number) => {
  tags.value.splice(index, 1);
};
</script>

<style scoped></style>
