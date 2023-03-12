<!-- eslint-disable prettier/prettier -->
<script setup>
import GuessTiles from "./GuessTiles.vue";
import KeyBoard from "../components/KeyBoard.vue";
import CheckGuess from "./CheckGuess.vue";
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';

const check = ref();
const checkObject = ref();
const guesses = reactive([
  {guess: []},
  {guess: []},
  {guess: []},
  {guess: []},
  {guess: []},
  {guess: []}
]);

let currentGuess = 0;
let disabledKeys = [];

function updateGuesses(key) {
  // New letter method
  if (guesses[currentGuess].guess.length < 5 && /^[a-zA-Z]$/.test(key)) {
    guesses[currentGuess].guess.push(key)
  }
  // Backspace method
  else if (key === "del") {
    guesses[currentGuess].guess.pop();
  }
  // Enter method
  else if (key === "enter" && guesses[currentGuess].guess.length == 5) {
    check.value = guesses[currentGuess].guess;
    //console.log('1: ', check.value);
    currentGuess++;
  }
}

const handleKeydown = (event) => {
  // New letter method
  if (guesses[currentGuess].guess.length < 5 && /^[a-zA-Z]$/.test(event.key) && disabledKeys.indexOf(event.key) === -1) {
    guesses[currentGuess].guess.push(event.key)
  }
  // Backspace method
  if (event.key === "Backspace") {
    guesses[currentGuess].guess.pop();
  }
  // Enter method
  if (event.key === "Enter" && guesses[currentGuess].guess.length == 5) {
    check.value = guesses[currentGuess].guess;
    //console.log('2: ', check.value);
    currentGuess++;
  }
}
const appendCheckKey = (checkKey) =>{
  let temp = {};
  temp.currentGuess = currentGuess;
  temp.keyArr = checkKey;
  temp.guessArr = check.value;
  for (let i = 0; i < 5; i++) {
    if (checkKey[i] === 'no') {
      disabledKeys.push(check.value[i])
    }
  }
  checkObject.value = temp;
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
    <GuessTiles :guesses="guesses" :check-object="checkObject" />
  </div>
  <div class="keyboard-container">
    <KeyBoard :check-object="checkObject" @key="updateGuesses" />
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
