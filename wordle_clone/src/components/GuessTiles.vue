<script setup>
// Importing necessary reactive functions from Vue
import { ref, watch } from "vue";

// Define properties that the component will receive
const props = defineProps({
  guesses: Array,
  checkObject: Object,
});

// Animation related reactive variables
const isAnimated = ref([]); // Track the animation status
const animationCount = ref(0); // Count the number of animations

let prevLength = 0; // Variable to track the previous length of guesses

// Watch for changes in the length of the current guess
watch(
  () => props.guesses[props.checkObject.currentGuess].length,
  (guessLength) => {
    const currentGuess = props.checkObject.currentGuess;

    // If a new letter was added to the current guess
    if (guessLength >= prevLength) {
      const currentRow = "#row" + currentGuess.toString();
      const tiles = document.querySelector(currentRow).children;
      const currentTile = tiles[guessLength - 1];
      // If the current tile has some content
      if (currentTile.innerHTML) {
        // Add a scale transformation to the current tile
        currentTile.style.transform = "scale(1.1, 1.1)";
        setTimeout(() => {
          // Reset the transformation after 100 ms
          currentTile.style.transform = "scale(1, 1)";
        }, 100);
      }
      prevLength++;
    }
    // If a letter was removed from the current guess
    else {
      prevLength--;
    }
  }
);

// Watch for changes in the readyToggle property of checkObject
watch(
  () => props.checkObject.readyToggle,
  () => {
    // Update the tiles when the readyToggle property changes
    updateTiles(props.checkObject);
    prevLength = 0;
  }
);

// Function to update the tiles
const updateTiles = (key) => {
  let currentRow = "#row" + key.currentGuess.toString();
  let tiles = document.querySelector(currentRow).children;
  // Iterate over the tiles and rotate them
  for (let i = 0; i < 5; i++) {
    rotateTiles(tiles, i, key);
  }
};

// Function to rotate tiles
function rotateTiles(tiles, i, key) {
  // Set the animation delay property for each tile
  tiles[i].style.setProperty("animation-delay", (i * 350).toString() + "ms");
  isAnimated.value.push(true);
  setTimeout(() => {
    // Change the color of the tile border and background based on the guess result
    if (key.checkedArr[i] == "yes") {
      tiles[i].firstChild.style.borderColor = "#b49f3b";
      tiles[i].style.backgroundColor = "#b49f3b";
    }
    if (key.checkedArr[i] == "no") {
      tiles[i].style.backgroundColor = "#3a3a3c";
    }
    if (key.checkedArr[i] == "same") {
      tiles[i].firstChild.style.borderColor = "#538d4e";
      tiles[i].style.backgroundColor = "#538d4e";
    }
    // After the animation, set the animated status to false
    isAnimated.value[animationCount.value] = false;
    animationCount.value++;
  }, 350 + i * 350); // The delay before the animation end actions occur
}
</script>

<template>
  <div class="answer-grid">
    <div class="answer-row" id="row0">
      <div :class="{ rotate: isAnimated[0] }">
        <div class="answer-item">{{ guesses[0][0] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[1] }">
        <div class="answer-item">{{ guesses[0][1] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[2] }">
        <div class="answer-item">{{ guesses[0][2] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[3] }">
        <div class="answer-item">{{ guesses[0][3] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[4] }">
        <div class="answer-item">{{ guesses[0][4] }}</div>
      </div>
    </div>
    <div class="answer-row" id="row1">
      <div :class="{ rotate: isAnimated[5] }">
        <div class="answer-item">{{ guesses[1][0] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[6] }">
        <div class="answer-item">{{ guesses[1][1] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[7] }">
        <div class="answer-item">{{ guesses[1][2] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[8] }">
        <div class="answer-item">{{ guesses[1][3] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[9] }">
        <div class="answer-item">{{ guesses[1][4] }}</div>
      </div>
    </div>
    <div class="answer-row" id="row2">
      <div :class="{ rotate: isAnimated[10] }">
        <div class="answer-item">{{ guesses[2][0] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[11] }">
        <div class="answer-item">{{ guesses[2][1] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[12] }">
        <div class="answer-item">{{ guesses[2][2] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[13] }">
        <div class="answer-item">{{ guesses[2][3] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[14] }">
        <div class="answer-item">{{ guesses[2][4] }}</div>
      </div>
    </div>
    <div class="answer-row" id="row3">
      <div :class="{ rotate: isAnimated[15] }">
        <div class="answer-item">{{ guesses[3][0] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[16] }">
        <div class="answer-item">{{ guesses[3][1] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[17] }">
        <div class="answer-item">{{ guesses[3][2] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[18] }">
        <div class="answer-item">{{ guesses[3][3] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[19] }">
        <div class="answer-item">{{ guesses[3][4] }}</div>
      </div>
    </div>
    <div class="answer-row" id="row4">
      <div :class="{ rotate: isAnimated[20] }">
        <div class="answer-item">{{ guesses[4][0] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[21] }">
        <div class="answer-item">{{ guesses[4][1] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[22] }">
        <div class="answer-item">{{ guesses[4][2] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[23] }">
        <div class="answer-item">{{ guesses[4][3] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[24] }">
        <div class="answer-item">{{ guesses[4][4] }}</div>
      </div>
    </div>
    <div class="answer-row" id="row5">
      <div :class="{ rotate: isAnimated[25] }">
        <div class="answer-item">{{ guesses[5][0] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[26] }">
        <div class="answer-item">{{ guesses[5][1] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[27] }">
        <div class="answer-item">{{ guesses[5][2] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[28] }">
        <div class="answer-item">{{ guesses[5][3] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[29] }">
        <div class="answer-item">{{ guesses[5][4] }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}
.answer-grid {
  padding: 10px;
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 5px;
  box-sizing: border-box;
  width: 300px;
  height: 360px;
}
.answer-row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
}
.answer-item {
  padding-bottom: 10%;
  border: 2px solid;
  border-color: #3a3a3c;
  width: 100%;
  height: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  line-height: 1;
  font-family: var(--guess-font);
  font-weight: var(--guess-weight);
  color: white;
  vertical-align: middle;
  box-sizing: border-box;
  text-transform: uppercase;
  user-select: none;
}

.rotate {
  animation: flip 350ms ease forwards;
}
@keyframes flip {
  0% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
}
</style>
