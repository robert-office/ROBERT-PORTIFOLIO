<script setup>

import maos from "@/assets/images/maos.webp"

</script>

<template>

  <section class="flex items-center sm:justify-center justify-start px-4">
    <button class="sm:mx-auto p-2 text-neutral-300 bg-[#18181b] font-medium cursor-pointer font-roboto">AGENDA LIVRE</button>
  </section>

  <section class="container mx-auto px-4 mt-4">
    <h1 class="sm:text-5xl text-4xl text-neutral-300 font-medium font-oswald sm:text-center text-left">
      Transforme sua ideia em realidade <br>com a ajuda de um profissional experiente.
    </h1>
  </section>

  <section class="sm:mt-4 mt-10">
    <img :src="maos" class="w-full" alt="mãos">
  </section>

</template>