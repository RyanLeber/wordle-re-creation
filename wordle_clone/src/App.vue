<!-- eslint-disable prettier/prettier -->
<script setup>
import { ref } from "vue"
//import { RouterLink, RouterView } from "vue-router";
import UserInput from "./components/UserInput.vue";
import WordleInput from "./components/WordleInput.vue";

const titleClass =ref('title')
const answer = ref('')
const getValue = (e) => {
  answer.value = e.value;
  console.log('testing: ', answer.value)
};
</script>

<template>
  <UserInput @response="getValue" />
  <header>
    <nav>
      <h1 :class="titleClass">Wordle</h1>
    </nav>
  </header>
  <WordleInput :guess="answer" />
</template>

<style scoped>
nav {
  background-color: rgb(121, 171, 154);
  margin-top: 0%;
  border-bottom: 2px;
  border-color: var(--border-color);
  text-align: center;
}

.title {
  color: var(--primary-text-color);
  font-weight: 700;
  font-size: 4rem;
  font-family: var(--title-font);
  font-weight: var(--title-weight);
}
</style>
