<template>
  <div class="dark:text-white text-center">
    <div
      class="m-2 mb-4 bg-green-700 border-green-600 p-2 flex gap-4 justify-center border-2 rounded-lg"
    >
      <CheckCircleIcon
        class="h-6 inline text-green-700 bg-white rounded-full"
      />
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
import { CheckCircleIcon } from "@heroicons/vue/24/solid";
</script>

<style scoped></style>
