<!-- eslint-disable prettier/prettier -->
<script setup>
import { ref, onUpdated } from 'vue';
import GetWord from "../components/GetWord.vue"

const newAnswer = ref('');

const getGuess = defineProps({
  checkGuess: Array
})

const emits = defineEmits(['checkKey', 'isCorrect'])

const getAnswer = (answer) => {
  newAnswer.value = answer;
}

onUpdated(() => {
  let guess = getGuess['checkGuess'];
  let answer = newAnswer.value;
  console.log(getGuess['checkGuess'], answer)
  if (guess && answer) {
    const checkArr = [5];
    let count = 0;
    console.log(answer)
    for (let i = 0; i < 5; i++) {
      let temp = count;
      for (let j = 0; j < 5; j++) {
        if (guess[i] === answer[j]) {
          if (i === j) {
            checkArr[i] = 'same';
          }
          else {
            checkArr[i] = 'yes';
          }
          count = count + 1;
        }
      }
      if (temp === count) {
        checkArr[i] = 'no';
      }
    }
    if (count === 5) {
      emits('isCorrect', true)
      console.log('correct');
    }
    emits('checkKey', checkArr)
  }
});
</script>

<template>
  <GetWord :newAnswer="newAnswer" @answer="getAnswer" />
</template>
