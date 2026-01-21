<script setup>

import { ref, onMounted, onUnmounted } from 'vue'

import site_policia from "@/assets/images/projects/site_policiacientifica.png"
import site_locmee from "@/assets/images/projects/site_locmee.png"
import site_arte_nobre from "@/assets/images/projects/site_artenobreservice.png"
import site_bartho from "@/assets/images/projects/site_bartho.png"

const projects = [
  {
    title: 'Portal da Polícia Científica',
    period: '2025',
    category: 'Site Institucional',
    image: site_policia,
    description: 'Portal institucional oficial da Polícia Científica de São Paulo, desenvolvido pelo NITI (Núcleo de Inteligência e Tecnologia da Informação). Plataforma moderna que centraliza informações, serviços e comunicação institucional para cidadãos e servidores.',
    techs: ['Laravel', 'Blade', 'MySQL', 'Bootstrap', 'JQuery'],
    link: 'https://www.policiacientifica.sp.gov.br'
  },
  {
    title: 'LOCMEE',
    period: '2026',
    category: 'Sistema WEB',
    image: site_locmee,
    description: 'Plataforma SaaS completa para agentes de turismo, incluindo portal web responsivo e dashboard administrativo. Sistema de gestão de reservas, integração com gateway de pagamento Stripe e infraestrutura containerizada para alta disponibilidade.',
    techs: ['Laravel', 'VueJs', 'TailwindCSS', 'Stripe', 'SQL Server', 'Docker', 'Dokploy'],
    link: 'https://locmee.tur.br'
  },
  {
    title: 'BARTHO',
    period: '2025',
    category: 'Sistema WEB',
    image: site_bartho,
    description: 'Sistema web organizacional para ONGs e abrigos de animais. Gerenciamento completo do processo de adoção, incluindo cadastro de animais, controle de interessados, agendamento de visitas e acompanhamento pós-adoção.',
    techs: ['Laravel', 'Vue.js', 'TailwindCSS', 'SQL Server'],
    link: 'https://bartho.org.br'
  },
  {
    title: 'Arte Nobre Service',
    period: '2025',
    category: 'Loja Virtual',
    image: site_arte_nobre,
    description: 'E-commerce especializado em produtos artesanais de marcenaria. Plataforma com catálogo de produtos customizáveis, painel administrativo completo e infraestrutura containerizada para escalabilidade.',
    techs: ['Laravel', 'Vue.js', 'TailwindCSS', 'MySQL', 'Docker'],
    link: 'https://artenobreservice.com.br'
  }
]

const currentIndex = ref(0)
let carrouselTimer = null

const startTimer = () => {
  carrouselTimer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % projects.length
  }, 5000)
}

const stopTimer = () => {
  if (carrouselTimer) {
    clearInterval(carrouselTimer)
    carrouselTimer = null
  }
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % projects.length
  stopTimer()
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + projects.length) % projects.length
  stopTimer()
}

const goToSlide = (index) => {
  currentIndex.value = index
  stopTimer()
}

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  if (carrouselTimer) {
    clearInterval(carrouselTimer)
  }
})

</script>

<template>

  <section class="container mx-auto flex justify-center px-4 pb-10">
    <div class="max-w-6xl w-full">
      <div class="mb-12">
        <p class="text-sm font-roboto text-purple-500 tracking-widest uppercase mb-2">// PROJETOS</p>

        <h2 class="text-5xl md:text-6xl font-oswald font-bold text-neutral-200 mb-4">
          Trabalhos que Transformam <br>
          <span class="text-4xl md:text-5xl bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Ideias em Realidade</span>
        </h2>
        <p class="text-neutral-400 text-1xl font-roboto max-w-3xl">
          Confira alguns dos projetos que desenvolvi ao longo da minha carreira, cada um com seus desafios únicos e soluções inovadoras.
        </p>
      </div>

      <div class="relative">
        
        <div class="overflow-hidden">
          <div class="flex transition-transform duration-500 ease-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            
            <div 
              v-for="(project, index) in projects" 
              :key="index"
              class="w-full flex-shrink-0"
            >
              <div class="group relative bg-[#18181b] border border-neutral-800 p-8 hover:border-purple-500/50 transition-all duration-300">
                <div class="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 group-hover:w-full transition-all duration-500"></div>
                
                <div class="flex justify-between items-start mb-3">
                  <h4 class="text-neutral-200 font-oswald text-2xl font-bold">
                    {{ project.title }}
                  </h4>
                  <span class="text-purple-500 text-sm font-roboto font-medium px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full">
                    {{ project.period }}
                  </span>
                </div>
                
                <p class="text-neutral-400 text-sm font-roboto mb-4 flex items-center gap-2">
                  <font-awesome-icon :icon="['fas', 'folder']" class="text-purple-500" />
                  {{ project.category }}
                </p>

                <div class="w-full sm:h-140 h-64 bg-neutral-900 rounded-lg mb-6 flex items-center justify-center border border-neutral-800 overflow-hidden">
                  <img v-if="project.image" :alt="'imagem ' + project.title" :src="project.image" class="w-full h-full sm:object-fit object-cover" />
                  <font-awesome-icon v-else :icon="['fas', 'image']" class="text-5xl text-neutral-700" />
                </div>

                <p class="text-neutral-400 font-roboto leading-relaxed mb-6">
                  {{ project.description }}
                </p>

                <div class="flex flex-wrap gap-2 mb-6">
                  <span 
                    v-for="tech in project.techs" 
                    :key="tech"
                    class="px-3 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-roboto font-medium rounded-full"
                  >
                    {{ tech }}
                  </span>
                </div>

                <a 
                  :href="project.link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-roboto font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
                >
                  Ver projeto
                  <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" class="text-sm" />
                </a>
              </div>
            </div>

          </div>
        </div>

        <button 
          @click="prevSlide"
          class="absolute cursor-pointer sm:-left-10 left-[10px] top-1/2 -translate-y-1/2 -translate-x-4 bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/50 z-10"
        >
          <font-awesome-icon :icon="['fas', 'chevron-left']" class="text-xl" />
        </button>

        <button 
          @click="nextSlide"
          class="absolute cursor-pointer sm:-right-10 right-[10px] top-1/2 -translate-y-1/2 translate-x-4 bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/50 z-10"
        >
          <font-awesome-icon :icon="['fas', 'chevron-right']" class="text-xl" />
        </button>

      </div>

      <div class="flex justify-center gap-3 mt-8">
        <button
          v-for="(project, index) in projects"
          :key="`indicator-${index}`"
          @click="goToSlide(index)"
          class="transition-all duration-300"
          :class="index === currentIndex 
            ? 'cursor-pointer w-12 h-3 bg-purple-500 rounded-full'
            : 'cursor-pointer w-3 h-3 bg-neutral-600 rounded-full hover:bg-neutral-500'"
        ></button>
      </div>


    </div>
  </section>

</template>

<style scoped>

</style>