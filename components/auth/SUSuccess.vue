<template>
  <div class="text-center dark:text-white">
    <div
      class="m-2 mb-4 flex justify-center gap-4 rounded-lg border-2 border-green-600 bg-green-700 p-2"
    >
      <CheckCircleIcon class="inline h-6 rounded-full bg-white text-green-700" />
      <span>Signup was successful </span>
    </div>
    <div>Please check your inbox for the verification email.</div>
    <br />
    <div>
      If you have verified your email,
      <NuxtLink to="/signin" class="text-blue-600 underline">Signin</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckCircleIcon } from '@heroicons/vue/24/solid';
</script>

<style scoped></style>
