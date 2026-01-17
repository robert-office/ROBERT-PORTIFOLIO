<script setup>

import maos from "@/assets/images/maos.webp"

</script>

<template>

  <section class="flex items-center sm:justify-center justify-start px-4">
    <button class="sm:mx-auto p-2 text-neutral-300 bg-[#18181b] font-medium cursor-pointer font-roboto flex items-center gap-2">
      <span class="relative flex h-3 w-3">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
      AGENDA LIVRE
    </button>
  </section>

  <section class="container mx-auto px-4 mt-4">
    <h1 class="sm:text-6xl text-4xl text-neutral-300 font-medium font-oswald sm:text-center text-left">
      Transforme sua <span class="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent font-bold">ideia em realidade</span> <br>com a ajuda de um <span class="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent font-bold">profissional experiente.</span>
    </h1>
  </section>

  <section class="flex px-4 mt-4">
    <button class="sm:ml-auto p-2 bg-neutral-300 text-[#18181b] font-medium cursor-pointer font-roboto flex items-center gap-2">
      Conversar agora  
      <span class="relative flex h-5 w-5">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <font-awesome-icon :icon="['fab', 'whatsapp']" class="mt-0.5 relative text-green-500" />
      </span>
    </button>
    <button class="sm:mr-auto p-2 text-neutral-300 bg-[#18181b] font-medium cursor-pointer font-roboto flex items-center gap-2">
      Ver projetos

      <span class="relative flex h-5 w-5">
        <font-awesome-icon :icon="['far', 'arrow-alt-circle-down']" class="mt-0.5 relative text-purple-500" />
      </span>

    </button>
  </section>

  <section class="sm:mt-4 mt-10">
    <img :src="maos" class="w-full" alt="mãos">
  </section>

</template>