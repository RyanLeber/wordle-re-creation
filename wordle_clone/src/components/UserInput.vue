<!-- eslint-disable prettier/prettier -->
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const answer = ref('');
const emit = defineEmits(['response'])

const handleKeydown = (event) => {
  if (answer.value.length < 5 && /^[a-zA-Z]$/.test(event.key)) {
    answer.value += event.key;
  }
  else if (event.key === "Backspace") {
    answer.value = answer.value.slice(0, answer.value.length - 1);
  }
  emit('response', answer)
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
})
onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown);
})
</script>
