<script setup>
import Topbar from "@/components/Topbar.vue";
import Hero from "@/components/Hero.vue";
import Sobre from "@/components/Sobre.vue";
import Projetos from "@/components/Projetos.vue";
</script>

<template>
  <section  id="topo">
    <Topbar/>

    <div class="sm:mt-20 mt-6">
      <Hero/>
    </div>

    <div class="sm:mt-20 mt-8">
      <Sobre/>
    </div>

    <div class="mt-8" id="projetos">
      <Projetos/>
    </div>

    <a href="#topo" class="absolute sticky bottom-4 ml-auto mr-4 w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center cursor-pointer">
      <font-awesome-icon :icon="['far', 'circle-up']" class="text-white text-3xl" />
    </a>
  </section>
</template>

<style scoped></style>
