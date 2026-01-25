<script setup lang="ts">
import { ref } from 'vue'

import Questions_Form from './components/Form/Questions_Form.vue';

import { questions } from './data/questions';

const correct:number[] = [0, 0, 0, 0, 0]
const userInput = ref<number[]>([])  

</script>

<template>
    
    <div class="App">
      <Questions_Form :questions="questions" :correct="correct" v-model:userInput="userInput" />      
    </div>

</template>

<style scoped>
.App{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
}
</style>
