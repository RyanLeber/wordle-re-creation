<!-- eslint-disable prettier/prettier -->
<script setup>
import { reactive, onUpdated } from 'vue';

const getAnswer = reactive({answer: ''});

const getGuess = defineProps({
  checkGuess: String
})

//const emit = defineEmits([5])

onUpdated(() => {
  let guess = getGuess['checkGuess'];
  let answer = getAnswer.answer.word;
  if (guess.length > 0 && answer.length > 0) {
    const checkArr = [5];
    let count = 0;
    console.log('answer: ', answer);
    console.log('guess: ', guess);
    for (let i = 0; i < 5; i++) {
      let temp = count;
      for (let j = 0; j < 5; j++) {
        if (guess[i] === answer[j]) {
          if (i === j) {
            checkArr[i] = 'sameIndex';
          }
          else {
            checkArr[i] = 'hasletter';
          }
          count = count + 1;
        }
      }
      if (temp === count) {
        checkArr[i] = 'notIn';
      }
    }
    if (count === 5) {
      console.log('correct');
    }
    else {
      console.log('incorrect, count: ', count);
    }
    console.log(checkArr)
    //emit(checkArr)
  }
})


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
  getAnswer.answer = await res.json();
  console.log(getAnswer.answer.word)
}
</script>

<template>
  <button @click="getWord">New Word</button>
</template>
