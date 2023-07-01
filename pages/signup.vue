<template>
  <div>
    <div class="dark:bg-slate-900 bg-gray-100 flex h-full items-center py-16">
      <main class="w-full max-w-md mx-auto p-6">
        <div
          class="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="p-4 sm:p-7">
            <component :is="view" @success="view = SUSuccess"></component>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Signup from "../components/auth/Signup.vue";
import SUSuccess from "../components/auth/SUSuccess.vue";
const view = shallowRef(Signup);
</script>

<style scoped></style>
