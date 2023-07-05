<template>
  <div class="dark:bg-slate-900 overflow-clip">
    <div class="max-w-[90%] mx-auto">
      <NavBar />
    </div>
    <div class="ml-36 mt-2">
      <NavbarMegaPhotos />
    </div>
    <div class="min-h-screen">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped></style>
