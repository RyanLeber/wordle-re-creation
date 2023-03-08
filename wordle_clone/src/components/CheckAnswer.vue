<!-- eslint-disable prettier/prettier -->
<script setup>
import { reactive } from 'vue';

const answer = reactive({answer: ''});

async function getWord() {
  const options = {
    method: 'GET',
	  headers: {
      'X-RapidAPI-Key': '14ef35e71fmsh23f5263afc6e55ep1e1633jsn9c3fbae78461',
      'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
	  }
  }
  const res = await fetch(
    'https://wordsapiv1.p.rapidapi.com/words/?random=true&letters=5',
    options
  );
  answer.answer = await res.json();
  console.log(answer.answer.word)
}
</script>

<template>
  <button @click="getWord">New Word</button>
</template>
