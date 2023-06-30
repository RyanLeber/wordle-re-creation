<script setup>
// Importing the necessary components and scripts
import GuessTiles from "../components/GuessTiles.vue";
import KeyBoard from "../components/KeyBoard.vue";
import { loadCSV } from "../scripts/GetWord.js";
import { checkGuess } from "../scripts/CheckGuess";
import { reactive, onMounted, onBeforeUnmount } from "vue";

// Variable declarations
let answer; // Will be used to store the correct answer
let currentGuess = 0; // Current guess index
let isEnterPressed = false; // Flag to check if enter key was pressed

// A reactive object to store the guess details
const checkObject = reactive({
  currentGuess: 0,
  keyArr: [],
  guessArr: [],
  readyToggle: false,
});

// An array to store the guesses
const guesses = reactive([[], [], [], [], [], []]);

// Function to update guesses based on the key input
const updateGuesses = (key) => {
  checkObject.currentGuess = currentGuess;
  checkObject.guessArr = guesses[currentGuess];
  if (isEnterPressed) {
    isEnterPressed = false;
    return;
  }
  // Call function for 'backspace' key press
  else if (key === "del" || key === "Backspace") {
    removeLetter();
  }
  // Call function for 'enter' key press
  else if (key.toLowerCase() === "enter" && guesses[currentGuess].length == 5) {
    submitGuess();
  }
  // Call function for regular key press
  else {
    addLetter(key);
  }
};

// Function to add a letter to the current guess
const addLetter = (key) => {
  if (guesses[currentGuess].length < 5 && /^[a-zA-Z]$/.test(key)) {
    guesses[currentGuess].push(key);
  }
};

// Function to remove a letter from the current guess
const removeLetter = () => {
  guesses[currentGuess].pop();
};

// Function to submit a guess and check it against the answer
const submitGuess = () => {
  checkObject.checkedArr = checkGuess(guesses[currentGuess], answer);
  checkObject.readyToggle = !checkObject.readyToggle;
  currentGuess++;
  isEnterPressed = true;
  setTimeout(() => {
    isEnterPressed = false;
  }, 100);
};

// Function to handle the keydown event
const handleKeydown = (e) => {
  updateGuesses(e.key);
};

// Lifecycle hook which is called when the component is mounted
onMounted(() => {
  document.addEventListener("keydown", handleKeydown); // Add keydown event listener
  // Load the CSV file and set the answer
  loadCSV().then((value) => {
    answer = value;
    console.log(answer); // REMOVE
  });
});

// Lifecycle hook which is called before the component is unmounted
onBeforeUnmount(() => {
  document.removeEventListener("keydown", handleKeydown); // Remove keydown event listener
  currentGuess = 0; // Reset the guess index
});
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
