<template>
  <div
    class="relative flex h-full w-full flex-col items-stretch justify-between overflow-clip bg-white dark:bg-slate-900"
  >
    <div class="relative z-[100] mx-auto flex h-full w-full flex-col">
      <NavBar />
    </div>
    <slot />
    <Footer />
  </div>
</template>
