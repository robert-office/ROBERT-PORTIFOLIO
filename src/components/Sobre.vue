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
  },
  {
    icon: 'server',
    title: 'DEVOPS & INFRAESTRUTURA',
    description: 'Deploy, configuração de servidores e automação de processos.'
  },
  {
    icon: 'chart-line',
    title: 'MONITORAMENTO & TESTES',
    description: 'Garantia de qualidade com testes automatizados e monitoramento contínuo.'
  }
]

const technologies = [
  { name: 'Vue.js', icon: 'vuejs', color: '#42b883', type: 'fab' },
  { name: 'Laravel', icon: 'laravel', color: '#ff2d20', type: 'fab' },
  { name: 'TailwindCSS', icon: 'css3-alt', color: '#06b6d4', type: 'fab' },
  { name: 'JavaScript', icon: 'js', color: '#f7df1e', type: 'fab' },
  { name: 'PHP', icon: 'php', color: '#777bb4', type: 'fab' },
  { name: 'MySQL', icon: 'database', color: '#00758f', type: 'fas' },
  { name: 'Docker', icon: 'docker', color: '#2496ed', type: 'fab' },
  { name: 'jQuery', icon: 'js', color: '#0769ad', type: 'fab' },
  { name: 'SQL Server', icon: 'database', color: '#cc2927', type: 'fas' },
  { name: 'Bootstrap', icon: 'bootstrap', color: '#7952b3', type: 'fab' },
  { name: 'MongoDB', icon: 'database', color: '#47a248', type: 'fas' },
  { name: 'N8N', icon: 'network-wired', color: '#ea4b71', type: 'fas' }
]

const graduations = [
  {
    title: 'Curso Básico de Informática',
    period: 'dez. 2016 - dez. 2018',
    institution: 'UP EXPRESS',
    image: '',
    description: 'Concluí este curso básico há alguns anos, marcando o início de uma longa trajetória na área de tecnologia. Foi nesse curso que adquiri conhecimentos fundamentais e fui introduzido ao uso de ferramentas essenciais como Word, Excel, Photoshop, entre outras.',
    techs: ['Word', 'Excel', 'Photoshop']
  },
  {
    title: 'Curso Técnico - Análise e Desenvolvimento de Sistemas',
    period: 'jun 2019 - dez. 2021',
    institution: 'ETEC',
    image: '',
    description: 'Curso de Análise e Desenvolvimento de Sistemas, com foco na introdução aos fundamentos da lógica de programação. Este curso me proporcionou a oportunidade de ingressar no mercado de trabalho, resultando na obtenção do meu primeiro estágio na área de tecnologia como Desenvolvedor Web Full-Stack em PHP.',
    techs: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL', 'UML', 'Scrum']
  }
]

const experiences = [
  {
    title: 'Desenvolvedor Junior PHP Fullstack',
    period: 'dez. 2019 - dez. 2020',
    company: 'JL Seguros',
    image: '',
    description: 'Desenvolvimento PHP Full-Stack com sólida experiência em jQuery, Bootstrap e consumo de APIs e webservices externos. Minhas responsabilidades na empresa incluíam a criação de novas funcionalidades, manutenção e refatoração do código do sistema ERP interno. Com minha contribuição, a empresa alcançou maior facilidade, agilidade e produtividade, graças às novas ferramentas que implementei no sistema de forma contínua.',
    techs: ['PHP', 'MySQL', 'Bootstrap', 'jQuery']
  },
  {
    title: 'Desenvolvedor Junior 2',
    period: 'agost. 2022 - Atual',
    company: 'NITI - Polícia Científica',
    image: '',
    description: 'Desenvolvedor PHP Full-Stack Nível 2, com sólida experiência em Laravel, jQuery, Bootstrap e consumo de APIs e webservices externos. Minha principal função na empresa envolve a criação de novos sistemas que atendem tanto aos cidadãos do Estado de São Paulo, como o sistema de gerenciamento de perícias veiculares, quanto a sistemas internos voltados para os funcionários do gabinete da Superintendência, como o sistema de controle de armamentos e munições. Além disso, realizo manutenções nos sistemas existentes, que atualmente utilizam CakePHP, mas estou à frente do projeto de migração dessas plataformas para Laravel e tecnologias mais modernas.',
    techs: ['Laravel', 'SQL Server', 'CakePHP', 'Bootstrap', 'jQuery']
  }
]

</script>

<template>

  <section class="container mx-auto flex justify-center px-4 sm:py-20 py-10" id="sobremim">
    <div>
      <div class="mb-4">
        <p class="text-sm font-roboto text-green-500 tracking-widest uppercase mb-2">// SOBRE MIM</p>
        <h2 class="text-5xl md:text-6xl font-oswald font-bold text-neutral-200 mb-4">
          Desenvolvedor Fullstack <br>
          <span class="text-4xl md:text-5xl bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Focado em construir soluções digitais</span>
        </h2>
        <p class="text-neutral-400 text-1xl font-roboto max-w-3xl">
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

        <div class="grid grid-cols-2 sm:flex sm:flex-wrap gap-4">
          <div
              v-for="tech in technologies"
              :key="tech.name"
              class="group flex items-center sm:justify-center gap-3 bg-[#18181b] border border-neutral-800 px-6 py-4 hover:shadow-lg transition-all duration-300"
              :class="`hover:border-[${tech.color}]/50 hover:shadow-[${tech.color}]/10`"
          >
            <font-awesome-icon
                :icon="[tech.type, tech.icon]"
                class="text-2xl group-hover:scale-110 transition-transform duration-300"
                :style="{ color: tech.color }"
            />
            <span class="text-neutral-300 font-roboto font-medium">{{ tech.name }}</span>
          </div>
        </div>
      </div>

      <div class="mt-16 max-w-6xl">
        <h3 class="text-2xl font-oswald font-semibold text-neutral-200 mb-8">
          <span class="text-purple-500"> GRADUAÇÕES </span> & <span class="text-green-500">EXPERIÊNCIAS</span>
        </h3>

        <div class="grid md:grid-cols-2 gap-6">
          
          <div 
            v-for="graduation in graduations" 
            :key="graduation.title"
            class="group relative bg-[#18181b] border border-neutral-800 p-6 hover:border-purple-500/50 transition-all duration-300"
          >
            <div class="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 group-hover:w-full transition-all duration-500"></div>
            
            <div class="absolute left-0 top-6 w-1 h-16 bg-gradient-to-b from-purple-500 to-purple-600"></div>
            
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-shrink-0 bg-purple-500/20 border-2 border-purple-500 rounded-full p-3">
                <font-awesome-icon :icon="['fas', 'graduation-cap']" class="text-2xl text-purple-400" />
              </div>
              
              <div class="flex-1">
                <h4 class="text-neutral-200 font-oswald text-lg font-bold mb-2">
                  {{ graduation.title }}
                </h4>
                
                <div class="flex items-center gap-3 mb-3 text-sm text-neutral-400 font-roboto">
                  <span class="flex items-center gap-1">
                    <font-awesome-icon :icon="['fas', 'calendar']" class="text-purple-500" />
                    {{ graduation.period }}
                  </span>
                  <span class="flex items-center gap-1">
                    <font-awesome-icon :icon="['fas', 'graduation-cap']" class="text-purple-500" />
                    {{ graduation.institution }}
                  </span>
                </div>
              </div>
            </div>

            <p class="text-neutral-400 font-roboto text-sm leading-relaxed mb-4">
              {{ graduation.description }}
            </p>

            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tech in graduation.techs" 
                :key="tech"
                class="px-3 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-roboto font-medium rounded-full"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <div 
            v-for="experience in experiences" 
            :key="experience.title"
            class="group relative bg-[#18181b] border border-neutral-800 p-6 hover:border-green-500/50 transition-all duration-300"
          >
            <div class="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 group-hover:w-full transition-all duration-500"></div>
            
            <div class="absolute left-0 top-6 w-1 h-16 bg-gradient-to-b from-green-500 to-green-600"></div>
            
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-shrink-0 bg-green-500/20 border-2 border-green-500 rounded-full p-3">
                <font-awesome-icon :icon="['fas', 'building']" class="text-2xl text-green-400" />
              </div>
              
              <div class="flex-1">
                <h4 class="text-neutral-200 font-oswald text-lg font-bold mb-2">
                  {{ experience.title }}
                </h4>
                
                <div class="flex items-center gap-3 mb-3 text-sm text-neutral-400 font-roboto">
                  <span class="flex items-center gap-1">
                    <font-awesome-icon :icon="['fas', 'calendar']" class="text-green-500" />
                    {{ experience.period }}
                  </span>
                  <span class="flex items-center gap-1">
                    <font-awesome-icon :icon="['fas', 'building']" class="text-green-500" />
                    {{ experience.company }}
                  </span>
                </div>
              </div>
            </div>

            <p class="text-neutral-400 font-roboto text-sm leading-relaxed mb-4">
              {{ experience.description }}
            </p>

            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tech in experience.techs" 
                :key="tech"
                class="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-roboto font-medium rounded-full"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>