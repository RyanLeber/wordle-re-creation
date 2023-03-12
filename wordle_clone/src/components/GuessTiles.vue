<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<script setup>
defineProps({
  guesses: Array,
  checkObject: Object
});
</script>

<template>
  <div class="answer-grid">
    <div class="answer-row" id="row1">
      <div class="answer-item">{{ guesses[0].guess[0] }}</div>
      <div class="answer-item">{{ guesses[0].guess[1] }}</div>
      <div class="answer-item">{{ guesses[0].guess[2] }}</div>
      <div class="answer-item">{{ guesses[0].guess[3] }}</div>
      <div class="answer-item">{{ guesses[0].guess[4] }}</div>
    </div>
    <div class="answer-row" id="row2">
      <div class="answer-item">{{ guesses[1].guess[0] }}</div>
      <div class="answer-item">{{ guesses[1].guess[1] }}</div>
      <div class="answer-item">{{ guesses[1].guess[2] }}</div>
      <div class="answer-item">{{ guesses[1].guess[3] }}</div>
      <div class="answer-item">{{ guesses[1].guess[4] }}</div>
    </div>
    <div class="answer-row" id="row3">
      <div class="answer-item">{{ guesses[2].guess[0] }}</div>
      <div class="answer-item">{{ guesses[2].guess[1] }}</div>
      <div class="answer-item">{{ guesses[2].guess[2] }}</div>
      <div class="answer-item">{{ guesses[2].guess[3] }}</div>
      <div class="answer-item">{{ guesses[2].guess[4] }}</div>
    </div>
    <div class="answer-row" id="row4">
      <div class="answer-item">{{ guesses[3].guess[0] }}</div>
      <div class="answer-item">{{ guesses[3].guess[1] }}</div>
      <div class="answer-item">{{ guesses[3].guess[2] }}</div>
      <div class="answer-item">{{ guesses[3].guess[3] }}</div>
      <div class="answer-item">{{ guesses[3].guess[4] }}</div>
    </div>
    <div class="answer-row" id="row5">
      <div class="answer-item">{{ guesses[4].guess[0] }}</div>
      <div class="answer-item">{{ guesses[4].guess[1] }}</div>
      <div class="answer-item">{{ guesses[4].guess[2] }}</div>
      <div class="answer-item">{{ guesses[4].guess[3] }}</div>
      <div class="answer-item">{{ guesses[4].guess[4] }}</div>
    </div>
    <div class="answer-row" id="row6">
      <div class="answer-item">{{ guesses[5].guess[0] }}</div>
      <div class="answer-item">{{ guesses[5].guess[1] }}</div>
      <div class="answer-item">{{ guesses[5].guess[2] }}</div>
      <div class="answer-item">{{ guesses[5].guess[3] }}</div>
      <div class="answer-item">{{ guesses[5].guess[4] }}</div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
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
    color: white;
    vertical-align: middle;
    box-sizing: border-box;
    text-transform: uppercase;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }
}
</style>
