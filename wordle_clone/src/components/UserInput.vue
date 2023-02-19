<!-- eslint-disable prettier/prettier -->
<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'
// change to reactive
const letters = reactive({arr: []});
const emit = defineEmits(['response']);
const n = ref(0);
const lettersAmount = ref(5);
const answer = reactive({answer: ''});

const handleKeydown = (event) => {
  // New letter method
  if (letters.arr.length < lettersAmount.value && /^[a-zA-Z]$/.test(event.key)) {
    letters.arr.push(event.key);
  }
  // Backspace method
  else if (event.key === "Backspace") {
    if (letters.arr.length > lettersAmount.value - 5) {
      letters.arr.pop();
    }
  }
  // Enter method
  else if (event.key === "Enter" && n.value < 5) {
    if(letters.arr.length % 5 === 0) {
      let check = "";
      for (let i = letters.arr.length - 5; i < lettersAmount.value; i++){
        check += letters.arr[i];
      }
      if (answer.answer.word === check) {
        console.log('correct!')
      }
      n.value++;
      lettersAmount.value += 5;
    }
  }
  emit('response', letters.arr);
}

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

onMounted(() => {
  getWord();
  document.addEventListener('keydown', handleKeydown);
})
onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown);
  n.value = 0;
})
</script>
