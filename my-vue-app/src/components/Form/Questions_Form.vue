<script setup lang="ts">
import type { Question } from '../../data/questions';

const props = defineProps<{
  questions: Question[];
  correct: number[];
  userInput: number[];
}>()

import { computed, ref } from 'vue';


const answerId = ref<number>(0)

const answerObject = computed(() =>
  props.questions.find(q => q.id === answerId.value)
)

const emits = defineEmits<{
  (e: 'update:userInput', value: number[]): void
}>()

function handleClick(id: number) {
  const updated = [...props.userInput]
  updated[answerId.value] = id

  emits('update:userInput', updated)

  answerId.value++
}

let trueAnswers = computed(() => {
    let result = 0
    for(let i = 0; i < props.correct.length; i++){

        if(props.correct[i] == props.userInput[i]){
            result++
        }
    }
    return result
})

import Question_UI from '../UI/Question_UI.vue';

</script>

<template>
    <div class="Form">

        <Question_UI
            v-if="answerObject"
            :question="answerObject"
            :correct="correct"
            :userInput="userInput"
            @select="handleClick"
        />

        <div v-else class="Form__result">
          Вы ответили правильно на {{ trueAnswers }} из {{ correct.length }}
        </div>

    </div>
    


</template>

<style scoped>
.Form{
    padding: 22px;
    border-radius: 16px;
    background-color: white;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.4);

    min-width: 564px;
    min-height: 350px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.Form__result{
    font-size: 20px;
    font-weight: bold;
    margin-top: 20px;
}
</style>
