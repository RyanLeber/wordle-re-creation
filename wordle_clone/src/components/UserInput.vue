<!-- eslint-disable prettier/prettier -->
<script setup>
import GuessTiles from "./GuessTiles.vue";
import KeyBoard from "../components/KeyBoard.vue";
import CheckGuess from "./CheckGuess.vue";
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';

const check = ref();
const checkArr = ref();
const guesses = reactive([
  {guess: []},
  {guess: []},
  {guess: []},
  {guess: []},
  {guess: []},
  {guess: []}
]);
let currentGuess = 0;

function updateGuesses(key) {
  // New letter method
  if (guesses[currentGuess].guess.length < 5 && /^[a-zA-Z]$/.test(key)) {
    guesses[currentGuess].guess.push(key)
  }
  // Backspace method
  else if (key === "backspace") {
    guesses[currentGuess].guess.pop();
  }
  // Enter method
  else if (key === "enter" && guesses[currentGuess].guess.length == 5) {
    check.value = guesses[currentGuess].guess;
    console.log('1: ', check.value);
    currentGuess++;
  }
}

const handleKeydown = (event) => {
  // New letter method
  if (guesses[currentGuess].guess.length < 5 && /^[a-zA-Z]$/.test(event.key)) {
    guesses[currentGuess].guess.push(event.key)
  }
  // Backspace method
  if (event.key === "Backspace") {
    guesses[currentGuess].guess.pop();
  }
  // Enter method
  if (event.key === "Enter" && guesses[currentGuess].guess.length == 5) {
    check.value = guesses[currentGuess].guess;
    console.log('2: ', check.value);
    currentGuess++;
  }
}
const appendCheckKey = (checkKey) =>{
  checkArr.value = checkKey;
  checkArr.value.push(currentGuess)
  console.log(checkArr.value)
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
})
onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown);
  currentGuess = 0;
})
</script>

<template>
  <div class="input-container">
    <GuessTiles :guesses="guesses" :check-key="checkArr" />
  </div>
  <div class="keyboard-container">
    <KeyBoard :check-key="checkArr" @key="updateGuesses" />
  </div>
  <div>
    <CheckGuess :check-guess="check" @check-key="appendCheckKey" />
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
