<template>

  <HeaderComponente />


  <div class="text-center">
    <div class="my-0 mx-auto px-60 py-20">

      <h1 v-if="portugues
      " class="font-semibold text-2xl text-white-900">Olá, meu nome é Paulo Junior e eu sou Desenvolvedor Front-end,
        Tecnologias que tenho experiência:</h1>



      <h1 v-if="ingles" class="font-semibold text-2xl text-white-900">Hi, my name is Paulo Junior and I'm a Front-end
        Developer, Technologies I have experience:</h1>


      <h1 v-if="espanhol" class="font-semibold text-2xl text-white-900">Hola, mi nombre es Paulo Junior y soy
        Desarrollador Front-end, Tecnologías en las que tengo experiencia:</h1>

    </div>
  </div>

  <div class="bg-dark-400 rounded-lg border border-orange py-10 w-7/12 mx-auto">
    <div class="text-2xl text-white-900 inline-flex ">
      <ul class="list-disc ml-20 text-lg">
        <li v-for="(technology, index) in list_01" v-bind:key="index">{{ technology }}</li>
      </ul>
      <ul class="list-disc ml-36 text-lg">
        <li v-for="(technology, index) in list_02" v-bind:key="index">{{ technology }}</li>  
      </ul>
      <ul class="list-disc ml-36 text-lg">
        <li v-for="(technology, index) in list_03" v-bind:key="index">{{ technology }}</li>
      </ul>
    </div>
  </div>

  <div class="text-white-900">
    <button @click="showPortugues()" class="bg-dark-400 rounded-lg h-12 w-32 ml-96 mt-20">
      <div class="inline-flex">
        <img class="ml-1 mt-2" src="./assets/icons/brazil.svg">
        <p class="ml-3 mt-2">Português</p>
      </div>
    </button>
    <button @click="showIngles()" class="bg-dark-400 rounded-lg h-12 w-32 ml-20">
      <div class="inline-flex">
        <img class=" mt-2" src="./assets/icons/united-states.svg">
        <p class="ml-3 mt-2">Inglês</p>
      </div>
    </button>
    <button @click="showEspanhol()" class="bg-dark-400 rounded-lg h-12 w-32 ml-20">
      <div class="inline-flex">
        <img class="ml-1 mt-2" src="./assets/icons/spain.svg">
        <p class="ml-3 mt-2">Espanhol</p>
      </div>

    </button>
  </div>

</template>

<script>

import HeaderComponente from './components/HeaderComponente.vue'

export default {
  name: 'App',
  components: {
    HeaderComponente
  },
  data() {
    return {
      portugues: true,
      ingles: false,
      espanhol: false,
      list_01: ["JavaScript", "React", "Vue Js", "Tailwind CSS"],
      list_02: ["Styled Components", "Saas", "Node", "TypeScript"],
      list_03: ["Angular", "Java"],
    }
  },
  methods: {
    showPortugues() {
      console.log("teste")
      this.portugues = true;
      this.ingles = false;
      this.espanhol = false;
    },

    showIngles() {
      console.log("ingles")
      this.ingles = true;
      this.portugues = false;
      this.espanhol = false;
    },

    showEspanhol() {
      this.espanhol = true;
      this.ingles = false;
      this.portugues = false;
    }
  }
}



</script>

<style>

</style>
