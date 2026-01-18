<template>
  <header class="sticky top-0 z-50 backdrop-blur-md bg-black/30 border-b border-neutral-800/50 py-4 sm:py-0">
    <div class="container mx-auto pt-4 pb-4 flex gap-6 items-center h-10 px-4">

    <section class="flex items-center gap-6 h-6">
      <p class="text-2xl text-neutral-300 font-light cursor-pointer hover:text-neutral-100 font-gravitas">Portfólio</p>
      <span class="sm:block hidden bg-gray-400 font-bold h-full w-0.5"></span>
    </section>

    <section class="items-center gap-8 h-6 sm:flex hidden">
      <p class="text-1xl text-neutral-300 font-medium cursor-pointer hover:text-neutral-100 font-roboto">SOBRE MIM</p>
      <p class="text-1xl text-neutral-300 font-medium cursor-pointer hover:text-neutral-100 font-roboto">PROJETOS</p>
    </section>

    <section class="ml-auto">
      <button class="sm:rounded-none rounded-full p-2 flex items-center gap-2 bg-neutral-300 text-neutral-900 font-medium cursor-pointer hover:bg-neutral-100 font-roboto">
        CONTATO
        <span class="relative flex h-5 w-5">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <font-awesome-icon :icon="['fab', 'whatsapp']" class="mt-0.5 relative text-green-500" />
        </span>
      </button>
    </section>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>