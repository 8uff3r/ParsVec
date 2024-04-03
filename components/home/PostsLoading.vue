<template>
  <div class="mx-auto px-4 py-10 sm:px-6 lg:px-32 lg:py-14">
    <div class="grid gap-8 lg:grid-cols-3 [&>div]:rounded-xl">
      <div
        class="relative block h-[350px] w-full animate-pulse bg-gray-600"
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
