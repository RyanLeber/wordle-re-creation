<!-- eslint-disable prettier/prettier -->
<script setup>
import { ref } from "vue"
//import { RouterLink, RouterView } from "vue-router";
import UserInput from "./components/UserInput.vue";
import WordleInput from "./components/WordleInput.vue";

const titleClass =ref('title')
const answer = ref([])
const getValue = (e) => {
  answer.value = e;
  //console.log('testing: ', answer.value)
};
</script>

<template>
  <header>
    <nav>
      <h1 :class="titleClass">Wordle</h1>
    </nav>
  </header>
  <main>
    <UserInput @response="getValue" />
    <WordleInput :guess="answer" />
  </main>
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
  font-size: 2rem;
  font-family: var(--title-font);
  font-weight: var(--title-weight);
}

main  {
  align-items: center;
}
</style>
