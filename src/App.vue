<script setup>
import Topbar from "@/components/Topbar.vue";
import Hero from "@/components/Hero.vue";
import Sobre from "@/components/Sobre.vue";
import Projetos from "@/components/Projetos.vue";
</script>

<template>
  <section>
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
  </section>
</template>

<style scoped></style>
