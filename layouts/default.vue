<template>
  <div class="dark:bg-slate-900 bg-white overflow-clip relative">
    <div class="max-w-[90%] mx-auto z-[100] relative">
      <NavBar />
    </div>
    <div class="min-h-screen">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
