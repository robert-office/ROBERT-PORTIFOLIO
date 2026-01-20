<script setup>

</script>

<template>
  <section class="container mx-auto flex justify-center px-4 pt-20 pb-10">
    <div class="max-w-6xl w-full">
      <div class="relative bg-gradient-to-br from-purple-900/20 to-purple-600/10 border border-purple-500/30 rounded-2xl p-12 overflow-hidden">
        
        <div class="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
        
        <div class="relative z-10 text-center">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span class="text-green-400 text-sm font-roboto font-medium uppercase tracking-wider">Disponível para novos projetos</span>
          </div>

          <h2 class="text-4xl md:text-5xl font-oswald font-bold text-neutral-200 mb-4">
            Vamos Transformar Sua <br>
            <span class="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Ideia em Realidade?</span>
          </h2>

          <p class="text-neutral-400 text-lg font-roboto max-w-2xl mx-auto mb-8">
            Entre em contato agora mesmo e vamos conversar sobre como posso ajudar a desenvolver seu próximo projeto com qualidade e profissionalismo.
          </p>

          <a 
            href="https://wa.me/5511983521013?text=Olá!%20Gostaria%20de%20conversar%20sobre%20um%20projeto"
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white text-lg font-roboto font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50"
          >
            <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-2xl" />
            Conversar no WhatsApp
          </a>

          <p class="text-neutral-500 text-sm font-roboto mt-6">
            Resposta rápida garantida • Sem compromisso
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>