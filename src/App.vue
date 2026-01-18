<script setup>
import Topbar from "@/Components/Topbar.vue";
import Hero from "@/Components/Hero.vue";
import Sobre from "@/Components/Sobre.vue";
</script>

<template>
  <section>
    <Topbar/>

    <div class="sm:mt-20 mt-14">
      <Hero/>
    </div>

    <div class="sm:mt-20 mt-8">
      <Sobre/>
    </div>
  </section>
</template>

<style scoped></style>
