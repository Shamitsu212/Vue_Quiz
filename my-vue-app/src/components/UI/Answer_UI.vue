<script setup lang="ts">

const props = defineProps<{
  answer: { id: number; text: string };
}>()

const emits = defineEmits<{
  (e: 'select', id: number): void
}>()

function handleClick() {
  emits('select', props.answer.id)
}

</script>

<template>

  <button class="button" @click.prevent="handleClick">

    {{ answer.id + 1 }}. {{ answer.text }}

  </button>

</template>

<style scoped>
.button{
    color: black;
    font-size: 18px;
    text-align: left;

    padding: 7px;

    border-radius: 8px;
    border: 1px solid #ccc;
    
    cursor: pointer;
}
</style>
