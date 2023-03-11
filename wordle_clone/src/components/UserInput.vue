<!-- eslint-disable prettier/prettier -->
<script setup>
import WordleInput from "../components/WordleInput.vue";
import KeyBoard from "../components/KeyBoard.vue";
import CheckAnswer from "../components/CheckAnswer.vue";
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'
// change to reactive
const letters = reactive({arr: []});
//const emit = defineEmits(['response']);
const n = ref(0);
const lettersAmount = ref(5);
const check = ref('');

function updateLetters(key) {
  // New letter method
  if (letters.arr.length < lettersAmount.value && /^[a-zA-Z]$/.test(key)) {
    letters.arr.push(key);
  }
  // Backspace method
  else if (key === "backspace") {
    if (letters.arr.length > lettersAmount.value - 5) {
      letters.arr.pop();
    }
  }
  // Enter method
  else if (key === "enter" && n.value < 6) {
    if(letters.arr.length % 5 === 0) {
      check.value = '';
      for (let i = letters.arr.length - 5; i < lettersAmount.value; i++){
        check.value += letters.arr[i];
      }
      console.log('1: ', check.value)
      n.value++;
      lettersAmount.value += 5;
    }
  }
}

const handleKeydown = (event) => {
  // New letter method
  if (letters.arr.length < lettersAmount.value && /^[a-zA-Z]$/.test(event.key)) {
    letters.arr.push(event.key);
  }
  // Backspace method
  else if (event.key === "Backspace") {
    if (letters.arr.length > lettersAmount.value - 5) {
      letters.arr.pop();
    }
  }
  // Enter method
  else if (event.key === "Enter" && n.value < 6) {
    if(letters.arr.length % 5 === 0) {
      check.value = '';
      for (let i = letters.arr.length - 5; i < lettersAmount.value; i++){
        check.value += letters.arr[i];
      }
      console.log('2: ', check.value)
      n.value++;
      lettersAmount.value += 5;
    }
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
})
onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown);
  n.value = 0;
})
</script>

<template>
  <div class="input-container">
    <WordleInput :guess="letters.arr" />
  </div>
  <div class="keyboard-container">
    <KeyBoard @key="updateLetters" />
  </div>
  <div>
    <CheckAnswer :check-guess="check" />
  </div>
</template>

<style>
.input-container {
  display: flex;
  padding: 5%;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  overflow: hidden;
}
</style>
