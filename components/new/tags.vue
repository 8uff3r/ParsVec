<template>
  <form @submit.prevent="">
    <div class="mb-4 flex flex-col items-center justify-center text-white">
      <div class="w-full rounded-lg border border-white pb-2">
        <input
          class="mb-2 flex w-full bg-transparent px-4 py-2"
          v-model="newTag"
          @keyup.enter="addTag(newTag)"
          placeholder="New Tag"
        />
        <div class="flex flex-wrap items-center">
          <span class="invisible py-2">:</span>
          <span
            v-for="(tag, index) in tags"
            class="mr-1 rounded-full bg-gray-800 px-4 py-2"
            :key="tag"
          >
            <button @click="removeTag(index)" class="mx-1" type="button">x</button>
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
const newTag = ref('');

const addTag = (tag: string) => {
  tags.value.push(tag); // add the new tag to the tags array
  newTag.value = '';
};

const removeTag = (index: number) => {
  tags.value.splice(index, 1);
};
</script>

<style scoped></style>
