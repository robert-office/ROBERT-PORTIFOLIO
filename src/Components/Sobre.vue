<script setup>

const skills = [
  {
    icon: 'code',
    title: 'DESENVOLVIMENTO FULL-STACK',
    description: 'Aplicações web completas e escaláveis, do front-end ao back-end.'
  },
  {
    icon: 'palette',
    title: 'DESIGN RESPONSIVO',
    description: 'Interfaces modernas e adaptáveis para todos os dispositivos.'
  },
  {
    icon: 'database',
    title: 'BANCO DE DADOS',
    description: 'Modelagem e otimização de bancos de dados relacionais e NoSQL.'
  },
  {
    icon: 'rocket',
    title: 'PERFORMANCE & SEO',
    description: 'Sites rápidos e otimizados para mecanismos de busca.'
  }
]

const technologies = [
  { name: 'Vue.js', icon: 'vuejs' },
  { name: 'Laravel', icon: 'laravel' },
  { name: 'TailwindCSS', icon: 'css3-alt' },
  { name: 'JavaScript', icon: 'js' },
  { name: 'PHP', icon: 'php' },
  { name: 'MySQL', icon: 'database' }
]

</script>

<template>

  <section class="container mx-auto flex justify-center px-4 sm:py-20 py-10">
    <div>
      <div class="mb-4">
        <p class="text-sm font-roboto text-green-500 tracking-widest uppercase mb-2">// SOBRE MIM</p>
        <h2 class="text-5xl md:text-6xl font-oswald font-bold text-neutral-200 mb-4">
          Desenvolvedor Fullstack <br>
          <span class="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Focado em construir soluções digitais</span>
        </h2>
        <p class="text-neutral-400 text-lg font-roboto max-w-3xl">
          Desenvolvedor especializado em criar experiências web modernas, utilizando Vue.js, Laravel e TailwindCSS.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6 mt-12 max-w-6xl">

        <div
            v-for="skill in skills"
            :key="skill.title"
            class="group relative bg-[#18181b] border border-neutral-800 p-8 hover:border-green-500/50 transition-all duration-300"
        >
          <div class="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 group-hover:w-full transition-all duration-500"></div>

          <div class="mb-4">
            <font-awesome-icon
                :icon="['fas', skill.icon]"
                class="text-3xl text-green-500 group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          <h3 class="text-neutral-200 font-oswald text-xl font-semibold mb-3 tracking-wide">
            {{ skill.title }}
          </h3>

          <p class="text-neutral-400 font-roboto leading-relaxed">
            {{ skill.description }}
          </p>
        </div>

      </div>

      <div class="mt-16 max-w-6xl">
        <h3 class="text-2xl font-oswald font-semibold text-neutral-200 mb-8">
          TECNOLOGIAS & <span class="text-green-500">FERRAMENTAS</span>
        </h3>

        <div class="flex flex-wrap gap-4">
          <div
              v-for="tech in technologies"
              :key="tech.name"
              class="group flex items-center gap-3 bg-[#18181b] border border-neutral-800 px-6 py-4 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300"
          >
            <font-awesome-icon
                :icon="['fab', tech.icon]"
                class="text-2xl text-green-500 group-hover:scale-110 transition-transform duration-300"
            />
            <span class="text-neutral-300 font-roboto font-medium">{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </div>

  </section>

</template>

<style scoped>

</style>