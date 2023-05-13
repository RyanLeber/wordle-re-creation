<!-- eslint-disable prettier/prettier -->
<script setup>
import GuessTiles from "./GuessTiles.vue";
import KeyBoard from "../components/KeyBoard.vue";
import { loadCSV } from "../scripts/GetWord.js"
import {checkGuess} from "../scripts/CheckGuess"
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';

let answer;
let currentGuess = 0;

const checkObject = ref();
const guesses = reactive([
  {guess: []},
  {guess: []},
  {guess: []},
  {guess: []},
  {guess: []},
  {guess: []}
]);

const updateGuesses = (key) => {
  // New letter method
  if (guesses[currentGuess].guess.length < 5 && /^[a-zA-Z]$/.test(key)) {
    guesses[currentGuess].guess.push(key)
  }
  // Backspace method
  else if (key === "del" || key === "Backspace") {
    guesses[currentGuess].guess.pop();
  }
  // Enter method
  else if (key.toLowerCase() === "enter" && guesses[currentGuess].guess.length == 5) {
    appendCheckKey()
    currentGuess++;
  }
}

const handleKeydown = (event) => {
  updateGuesses(event.key)
}

function appendCheckKey(){
  let temp = {};
  temp.currentGuess = currentGuess;
  temp.keyArr = checkGuess(guesses[currentGuess].guess, answer);
  temp.guessArr = guesses[currentGuess].guess;
  checkObject.value = temp;
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
  loadCSV().then((value) => {
    answer = value
    console.log(answer)
  });
})
onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown);
  currentGuess = 0;
})
</script>

<template>
  <div class="input-container">
    <GuessTiles :guesses="guesses" :check-object="checkObject" />
  </div>
  <div class="keyboard-container">
    <KeyBoard :check-object="checkObject" @key="updateGuesses" />
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
