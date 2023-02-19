<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<script setup>
defineProps({
  guess: Array
})
//const currentRow = ref(['row1', 'row2', 'row3', 'row4', 'row5', 'row6']);
</script>

<template>
  <div class="answer-grid">
    <div class="answer-row" id="row1">
      <div class="answer-item">{{ guess[0] }}</div>
      <div class="answer-item">{{ guess[1] }}</div>
      <div class="answer-item">{{ guess[2] }}</div>
      <div class="answer-item">{{ guess[3] }}</div>
      <div class="answer-item">{{ guess[4] }}</div>
    </div>
    <div class="answer-row" id="row2">
      <div class="answer-item">{{ guess[5] }}</div>
      <div class="answer-item">{{ guess[6] }}</div>
      <div class="answer-item">{{ guess[7] }}</div>
      <div class="answer-item">{{ guess[8] }}</div>
      <div class="answer-item">{{ guess[9] }}</div>
    </div>
    <div class="answer-row" id="row3">
      <div class="answer-item">{{ guess[10] }}</div>
      <div class="answer-item">{{ guess[11] }}</div>
      <div class="answer-item">{{ guess[12] }}</div>
      <div class="answer-item">{{ guess[13] }}</div>
      <div class="answer-item">{{ guess[14] }}</div>
    </div>
    <div class="answer-row" id="row4">
      <div class="answer-item">{{ guess[15] }}</div>
      <div class="answer-item">{{ guess[16] }}</div>
      <div class="answer-item">{{ guess[17] }}</div>
      <div class="answer-item">{{ guess[18] }}</div>
      <div class="answer-item">{{ guess[19] }}</div>
    </div>
    <div class="answer-row" id="row5">
      <div class="answer-item">{{ guess[20] }}</div>
      <div class="answer-item">{{ guess[21] }}</div>
      <div class="answer-item">{{ guess[22] }}</div>
      <div class="answer-item">{{ guess[23] }}</div>
      <div class="answer-item">{{ guess[24] }}</div>
    </div>
    <div class="answer-row" id="row6">
      <div class="answer-item">{{ guess[25] }}</div>
      <div class="answer-item">{{ guess[26] }}</div>
      <div class="answer-item">{{ guess[27] }}</div>
      <div class="answer-item">{{ guess[28] }}</div>
      <div class="answer-item">{{ guess[29] }}</div>
    </div>
  </div>
</template>

<style scoped>
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
