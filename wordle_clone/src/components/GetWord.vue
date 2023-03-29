<!-- eslint-disable prettier/prettier -->
<script setup>
import Papa from 'papaparse'
import { ref, onMounted } from 'vue'

const emits = defineEmits(['answer']);
const props = defineProps({
  newAnswer: Boolean,
  guess: Array
})
const csvData = ref([]);



function selectAnswer() {
  let index = Math.floor(Math.random() * csvData.value.length)
  emits('answer', csvData.value[index])
}

onMounted(async () => {
  const response = await fetch('/WordList.csv');
  const csvText = await response.text();
  const { data } = Papa.parse(csvText);
  csvData.value = data.map(row => row[0]);
  selectAnswer();
});
</script>

<template>
  <button @click="selectAnswer">New Word</button>
</template>
