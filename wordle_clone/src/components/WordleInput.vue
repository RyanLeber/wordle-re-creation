<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<script setup>
import { ref } from "vue"
import UserInput from "../components/UserInput.vue";

const temp = ref(UserInput.value)

console.log("test: ", temp.value)


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
    width: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    line-height: 1;
    font-weight: bold;
    vertical-align: middle;
    box-sizing: border-box;
    color: rgb(67, 67, 67);
    text-transform: uppercase;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }
}
</style>
