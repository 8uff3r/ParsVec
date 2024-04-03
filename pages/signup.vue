<template>
  <div>
    <div class="flex h-full items-center bg-gray-100 py-16 dark:bg-slate-900">
      <main class="mx-auto w-full max-w-md p-6">
        <div
          class="mt-7 rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
        >
          <div class="p-4 sm:p-7">
            <component :is="view" @success="view = SUSuccess"></component>
          </div>
        </div>
      </main>
    </div>
  </div>
  <Signin />
</template>

<script setup lang="ts">
import Signup from '../components/auth/Signup.vue';
import Signin from '../components/auth/SignIn.vue';
import SUSuccess from '../components/auth/SUSuccess.vue';
const view = shallowRef(Signup);
</script>

<style scoped></style>
