<script setup>
  import logo_easyecontech from '@/assets/images/logo_easyecontech.png'
</script>

<template>
  <section class="container mx-auto flex justify-center px-4 py-16">
    <div class="max-w-6xl w-full">
      <div class="mb-8 text-center">
        <p class="text-sm font-roboto tracking-widest uppercase mb-2" style="color: #09F4B2;">// PARCEIROS</p>
        <h2 class="text-4xl md:text-5xl font-oswald font-bold text-neutral-200 mb-4">
          Trabalhando em Conjunto com
        </h2>
      </div>

      <div class="relative bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 border border-neutral-800 rounded-2xl p-12 overflow-hidden group transition-all duration-500" style="--hover-border: #09F4B2;">
        
        <div class="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl transition-all duration-500" style="background-color: rgba(9, 244, 178, 0.05);"></div>
        
        <div class="relative z-10 flex flex-col md:flex-row items-center gap-8">
          
          <div class="flex-1 text-center md:text-left">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style="background-color: rgba(9, 244, 178, 0.1); border: 1px solid rgba(9, 244, 178, 0.3);">
              <span class="text-xs font-roboto font-medium uppercase tracking-wider" style="color: #09F4B2;">Parceiro Oficial</span>
            </div>

            <h3 class="text-3xl md:text-4xl font-oswald font-bold text-neutral-200 mb-4">
              <span class="bg-clip-text text-transparent" style="background-image: linear-gradient(to right, #09F4B2, #07c28f);">EasyEconTech</span>
            </h3>

            <p class="text-neutral-400 text-lg font-roboto leading-relaxed mb-6">
              Empresa especializada em soluções tecnológicas inovadoras, focada em desenvolvimento de sistemas web e automação de processos empresariais.
            </p>

            <div class="flex flex-wrap gap-3 mb-6 justify-center md:justify-start">
              <span class="px-3 py-1 text-sm font-roboto font-medium rounded-full" style="background-color: rgba(9, 244, 178, 0.1); border: 1px solid rgba(9, 244, 178, 0.3); color: #09F4B2;">
                Desenvolvimento Web
              </span>
              <span class="px-3 py-1 text-sm font-roboto font-medium rounded-full" style="background-color: rgba(9, 244, 178, 0.1); border: 1px solid rgba(9, 244, 178, 0.3); color: #09F4B2;">
                Automação
              </span>
              <span class="px-3 py-1 text-sm font-roboto font-medium rounded-full" style="background-color: rgba(9, 244, 178, 0.1); border: 1px solid rgba(9, 244, 178, 0.3); color: #09F4B2;">
                Consultoria Tech
              </span>
            </div>

            <a 
              href="https://easyecontech.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 px-6 py-3 text-white font-roboto font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style="background-color: #09F4B2;"
              onmouseover="this.style.backgroundColor='#07c28f'; this.style.boxShadow='0 20px 25px -5px rgba(9, 244, 178, 0.5), 0 8px 10px -6px rgba(9, 244, 178, 0.5)';"
              onmouseout="this.style.backgroundColor='#09F4B2'; this.style.boxShadow='';"
            >
              Visitar Site
              <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" class="text-sm" />
            </a>
          </div>

          <div class="flex-shrink-0">
            <div class="w-48 h-48 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-all duration-500 p-6">
              <img :src="logo_easyecontech" alt="Logo EasyEconTech" class="w-full h-full object-contain" />
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
