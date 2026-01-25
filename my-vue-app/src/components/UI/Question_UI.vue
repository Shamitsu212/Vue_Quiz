<script setup lang="ts">

import type { Question } from '../../data/questions';

const props = defineProps<{
    question: Question;
    correct: number[];
    userInput: number[];
}>()

const emits = defineEmits <{
    (e: 'select', id: number):void
}>()

import ProgressBar_UI from './ProgressBar_UI.vue';
import Answer_UI from './Answer_UI.vue';


</script>

<template>
    
    <div class="Question">

        <ProgressBar_UI :correct="correct" :userInput="userInput"/>

        <h1 class="Question__label">
            {{ question.label }}
        </h1>

        <div class="Question__AnswerContainer">
            <Answer_UI 
                v-for="q in question.q"
                :key="q.id"
                :answer="q"
                @select="emits('select', $event)"

            />
        </div>

    </div>


</template>

<style scoped>
.Question{
    display: flex;
    flex-direction: column;

    width: 100%;
}
.Question__label{
    font-size: 24px;
    font-weight: bold;

    margin-top: 10px;
}
.Question__AnswerContainer{
    display: flex;
    flex-direction: column;
    gap: 12px;

    margin-top: 20px;
}
</style>
