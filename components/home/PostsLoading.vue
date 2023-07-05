<template>
  <div class="px-4 py-10 sm:px-6 lg:px-32 lg:py-14 mx-auto">
    <div class="grid lg:grid-cols-3 gap-8 [&>div]:rounded-xl">
      <div
        class="relative block w-full h-[350px] bg-gray-600 animate-pulse"
        v-for="i in blocks"
        :key="i"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const blocks = [1, 2, 3, 4, 5, 6, 7, 8, 9];
</script>

<style scoped></style>
