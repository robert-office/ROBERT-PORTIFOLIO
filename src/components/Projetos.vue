<script setup>

import { ref } from 'vue'

const projects = [
  {
    title: 'Sistema de Gestão de Seguros',
    period: '2020',
    category: 'Sistema Web',
    image: '',
    description: 'Plataforma completa para gestão de apólices, cotações e sinistros de seguros, com integração a múltiplas seguradoras.',
    techs: ['Vue.js', 'Laravel', 'MySQL', 'Bootstrap']
  },
  {
    title: 'Portal de Perícias Veiculares',
    period: '2023',
    category: 'Sistema Governamental',
    image: '',
    description: 'Sistema público para agendamento e acompanhamento de perícias veiculares do Estado de São Paulo.',
    techs: ['Laravel', 'SQL Server', 'jQuery', 'Bootstrap']
  },
  {
    title: 'Sistema de Controle de Armamentos',
    period: '2023',
    category: 'Sistema Interno',
    image: '',
    description: 'Plataforma interna para controle e rastreamento de armamentos e munições da Polícia Científica.',
    techs: ['Laravel', 'SQL Server', 'Vue.js', 'TailwindCSS']
  },
  {
    title: 'E-commerce Moderno',
    period: '2022',
    category: 'Loja Virtual',
    image: '',
    description: 'Loja virtual completa com carrinho de compras, pagamento integrado e painel administrativo.',
    techs: ['Vue.js', 'Laravel', 'Stripe', 'MySQL']
  }
]

const currentIndex = ref(0)

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % projects.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + projects.length) % projects.length
}

const goToSlide = (index) => {
  currentIndex.value = index
}

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
              class="w-full flex-shrink-0 px-2"
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

                <div class="w-full h-64 bg-neutral-900 rounded-lg mb-6 flex items-center justify-center border border-neutral-800">
                  <font-awesome-icon :icon="['fas', 'image']" class="text-5xl text-neutral-700" />
                </div>

                <p class="text-neutral-400 font-roboto leading-relaxed mb-6">
                  {{ project.description }}
                </p>

                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tech in project.techs" 
                    :key="tech"
                    class="px-3 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-roboto font-medium rounded-full"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <button 
          @click="prevSlide"
          class="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/50 z-10"
        >
          <font-awesome-icon :icon="['fas', 'chevron-left']" class="text-xl" />
        </button>

        <button 
          @click="nextSlide"
          class="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/50 z-10"
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
            ? 'w-12 h-3 bg-purple-500 rounded-full' 
            : 'w-3 h-3 bg-neutral-600 rounded-full hover:bg-neutral-500'"
        ></button>
      </div>


    </div>
  </section>

</template>

<style scoped>

</style>