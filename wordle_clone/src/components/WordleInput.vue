<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<script setup>
import { reactive, ref, onMounted, onBeforeUnmount, defineComponent } from 'vue';

const props = defineProps({
  guess: String
})
const temp = ref(props.guess)
//const letterArray = reactive([]);
//lettersArray.value = props.guess.split('')
//const currentRow = ref(['row1', 'row2', 'row3', 'row4', 'row5', 'row6']);
let n = ref(0);
//let guesses = [];
console.log('temp: ', temp)

const nextRow = (event) =>{
  if (event.key === "Enter" && n.value < 5) {
    if(letterArray.value.length % 5 === 0) {
      n.value++;
      console.log(n)
    }
  }
}

onMounted(() => {
  document.addEventListener('keydown', nextRow);
})
onBeforeUnmount(() => {
  document.removeEventListener('keydown', nextRow);
  n.value = 0;
})
</script>

<template>
  <div class="answer-grid">
    <div class="answer-row" id="row1">
      <div class="answer-item"></div>
      <div class="answer-item"></div>
      <div class="answer-item"></div>
      <div class="answer-item"></div>
      <div class="answer-item"></div>
    </div>
    <div class="answer-row" id="row2">
      <div class="answer-item"></div>
      <div class="answer-item"></div>
      <div class="answer-item"></div>
      <div class="answer-item"></div>
      <div class="answer-item"></div>
    </div>
    <div class="answer-row" id="row3">
      <div class="answer-item"></div>
      <div class="answer-item"></div>
      <div class="answer-item"></div>
      <div class="answer-item"></div>
      <div class="answer-item"></div>
    </div>
    <div class="answer-row" id="row4">
      <div class="answer-item"></div>
      <div class="answer-item"></div>
      <div class="answer-item"></div>
      <div class="answer-item"></div>
      <div class="answer-item"></div>
    </div>
    <div class="answer-row" id="row5">
      <div class="answer-item"></div>
      <div class="answer-item"></div>
      <div class="answer-item"></div>
      <div class="answer-item"></div>
      <div class="answer-item"></div>
    </div>
    <div class="answer-row" id="row6">
      <div class="answer-item"></div>
      <div class="answer-item"></div>
      <div class="answer-item"></div>
      <div class="answer-item"></div>
      <div class="answer-item"></div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
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
    border: 2px solid;
    border-color: var(--border-color);
    width: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    line-height: 1;
    font-family: var(--guess-font);
    font-weight: var(--guess-weight);
    vertical-align: middle;
    box-sizing: border-box;
    text-transform: uppercase;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }
}
</style>
