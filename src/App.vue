<script setup>
import Topbar from "@/Components/Topbar.vue";
import Hero from "@/Components/Hero.vue";
import Sobre from "@/Components/Sobre.vue";
import Projetos from "@/Components/Projetos.vue";
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
