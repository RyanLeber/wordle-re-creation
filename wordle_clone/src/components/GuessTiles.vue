<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<script setup>
import { ref, watch } from 'vue';
const props = defineProps({
  guesses: Array,
  checkObject: Object,
});
const isAnimated = ref([false, false, false, false, false, false])

watch(() => props.checkObject.readyToggle, () => {
  updateTiles(props.checkObject)
});


const updateTiles = (key) => {
  let currentRow = '#row' + key.currentGuess.toString();
  let tiles = document.querySelector(currentRow).children;
  for (let i = 0; i < 5; i++) {
    rotateTiles(tiles, i, key)
  } 
}

function rotateTiles(tiles, i, key) {
  isAnimated.value[key.currentGuess] = true;
  setTimeout(() => {
    //console.log('rotate' + key.currentGuess.toString() + i.toString())
      if (key.keyArr[i] == 'yes') {
        tiles[i].style.borderColor = '#b49f3b';
        tiles[i].style.backgroundColor = '#b49f3b';
      }
      if (key.keyArr[i] == 'no') {
        tiles[i].style.backgroundColor = '#3a3a3c';
      }
      if (key.keyArr[i] == 'same') {
        tiles[i].style.borderColor = '#538d4e';
        tiles[i].style.backgroundColor = '#538d4e';
      }
    isAnimated.value[key.currentGuess] = false;
  }, 800)
}

</script>

<template>
  <div class="answer-grid">
    <div class="answer-row" id="row0">
      <div :class="{ rotate: isAnimated[0] }" style="animation-delay: 0ms">
        <div class="answer-item">{{ guesses[0][0] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[0] }" style="animation-delay: 100ms">
        <div class="answer-item">{{ guesses[0][1] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[0] }" style="animation-delay: 200ms">
        <div class="answer-item">{{ guesses[0][2] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[0] }" style="animation-delay: 300ms">
        <div class="answer-item">{{ guesses[0][3] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[0] }" style="animation-delay: 400ms">
        <div class="answer-item">{{ guesses[0][4] }}</div>
      </div>
    </div>
    <div class="answer-row" id="row1">
      <div :class="{ rotate: isAnimated[1] }" style="animation-delay: 0ms">
        <div class="answer-item">{{ guesses[1][0] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[1] }" style="animation-delay: 100ms">
        <div class="answer-item">{{ guesses[1][1] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[1] }" style="animation-delay: 200ms">
        <div class="answer-item">{{ guesses[1][2] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[1] }" style="animation-delay: 300ms">
        <div class="answer-item">{{ guesses[1][3] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[1] }" style="animation-delay: 400ms">
        <div class="answer-item">{{ guesses[1][4] }}</div>
      </div>
    </div>
    <div class="answer-row" id="row2">
      <div :class="{ rotate: isAnimated[2] }" style="animation-delay: 0ms">
        <div class="answer-item">{{ guesses[2][0] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[2] }" style="animation-delay: 100ms">
        <div class="answer-item">{{ guesses[2][1] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[2] }" style="animation-delay: 200ms">
        <div class="answer-item">{{ guesses[2][2] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[2] }" style="animation-delay: 300ms">
        <div class="answer-item">{{ guesses[2][3] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[2] }" style="animation-delay: 400ms">
        <div class="answer-item">{{ guesses[2][4] }}</div>
      </div>
    </div>
    <div class="answer-row" id="row3">
      <div :class="{ rotate: isAnimated[3] }" style="animation-delay: 0ms">
        <div class="answer-item">{{ guesses[3][0] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[3] }" style="animation-delay: 100ms">
        <div class="answer-item">{{ guesses[3][1] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[3] }" style="animation-delay: 200ms">
        <div class="answer-item">{{ guesses[3][2] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[3] }" style="animation-delay: 300ms">
        <div class="answer-item">{{ guesses[3][3] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[3] }" style="animation-delay: 400ms">
        <div class="answer-item">{{ guesses[3][4] }}</div>
      </div>
    </div>
    <div class="answer-row" id="row4">
      <div :class="{ rotate: isAnimated[4] }" style="animation-delay: 0ms">
        <div class="answer-item">{{ guesses[4][0] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[4] }" style="animation-delay: 100ms">
        <div class="answer-item">{{ guesses[4][1] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[4] }" style="animation-delay: 200ms">
        <div class="answer-item">{{ guesses[4][2] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[4] }" style="animation-delay: 300ms">
        <div class="answer-item">{{ guesses[4][3] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[4] }" style="animation-delay: 400ms">
        <div class="answer-item">{{ guesses[4][4] }}</div>
      </div>
    </div>
    <div class="answer-row" id="row5">
      <div :class="{ rotate: isAnimated[5] }" style="animation-delay: 0ms">
        <div class="answer-item">{{ guesses[5][0] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[5] }" style="animation-delay: 100ms">
        <div class="answer-item">{{ guesses[5][1] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[5] }" style="animation-delay: 200ms">
        <div class="answer-item">{{ guesses[5][2] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[5] }" style="animation-delay: 300ms">
        <div class="answer-item">{{ guesses[5][3] }}</div>
      </div>
      <div :class="{ rotate: isAnimated[5] }" style="animation-delay: 400ms">
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
  border-color: var(--border-color);
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
  animation: rotate 800ms linear;
}
@keyframes rotate {
  from {
    transform: rotateX(0deg);
  }
  to {
    transform: rotateX(180deg);
  }
}
</style>
