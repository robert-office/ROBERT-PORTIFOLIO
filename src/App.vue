<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Topbar from "@/components/Topbar.vue";
import Hero from "@/components/Hero.vue";
import Sobre from "@/components/Sobre.vue";
import Projetos from "@/components/Projetos.vue";
import CTA from "@/components/CTA.vue";
import Parceiros from "@/components/Parceiros.vue";
import Footer from "@/components/Footer.vue";

const showScrollTop = ref(false)

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 300
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div>
    <section id="topo">
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

      <div class="sm:mt-8">
        <CTA/>
      </div>

      <div class="sm:mt-8">
        <Parceiros/>
      </div>

      <a 
        v-show="showScrollTop"
        href="#topo" 
        class="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 group"
      >
        <font-awesome-icon :icon="['fas', 'arrow-up']" class="text-white text-xl group-hover:translate-y-[-2px] transition-transform duration-300" />
      </a>
    </section>

    <Footer/>
  </div>
</template>

<style scoped></style>
