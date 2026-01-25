<script setup lang="ts">

const props = defineProps<{
  userInput: number[];       
  correct: number[];      
}>()

import { computed } from 'vue';

const progress = computed(() => {
    return Math.round((props.userInput.length / props.correct.length) * 100)
})

</script>

<template>
  
    <div class="ProgressBar">

        <div class="ProgressBar__progression" :style="{width: progress + '%'}"></div>

    </div>

</template>

<style scoped>
.ProgressBar{
    background-color: #F5F6F7;

    width: 516px;
    height: 20px;
    
    border-radius: 12px;
}
.ProgressBar__progression{
    background-color: green;

    height: 100%;

    border-radius: 12px;

    transition: width 0.3s ease;
}
</style>
