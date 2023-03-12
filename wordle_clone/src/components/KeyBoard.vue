<!-- eslint-disable prettier/prettier -->
<script setup>
import { onUpdated } from 'vue';

const props = defineProps({
  checkObject: Object
});

const emits = defineEmits(['key']);

onUpdated(() => {
  let key = props.checkObject;
  let buttons = document.querySelectorAll('.key-key')
  for (let button of buttons) {
    for (let i = 0; i < 5; i++) {
      if (button.innerHTML == key.guessArr[i]) {
        if (key.keyArr[i] == 'yes') {
          button.style.backgroundColor = '#b49f3b';
        }
        if (key.keyArr[i] == 'no') {
          button.style.backgroundColor = '#3a3a3c';
          button.disabled = true;
        }
        if (key.keyArr[i] == 'same') {
          button.style.backgroundColor = '#538d4e';
        }
      }
    }
  }
});

const getKey = (event) => {
  event.target.blur();
  emits('key', event.target.innerHTML);
}
</script>

<template>
  <div class="keyboard-container">
    <div class="key-row">
      <button type="button" @click="getKey" class="key-key">q</button>
      <button type="button" @click="getKey" class="key-key">w</button>
      <button type="button" @click="getKey" class="key-key">e</button>
      <button type="button" @click="getKey" class="key-key">r</button>
      <button type="button" @click="getKey" class="key-key">t</button>
      <button type="button" @click="getKey" class="key-key">y</button>
      <button type="button" @click="getKey" class="key-key">u</button>
      <button type="button" @click="getKey" class="key-key">i</button>
      <button type="button" @click="getKey" class="key-key">o</button>
      <button type="button" @click="getKey" class="key-key">p</button>
    </div>
    <div class="key-row">
      <div data-spacer="spacer" class="key-spacer"></div>
      <button type="button" @click="getKey" class="key-key">a</button>
      <button type="button" @click="getKey" class="key-key">s</button>
      <button type="button" @click="getKey" class="key-key">d</button>
      <button type="button" @click="getKey" class="key-key">f</button>
      <button type="button" @click="getKey" class="key-key">g</button>
      <button type="button" @click="getKey" class="key-key">h</button>
      <button type="button" @click="getKey" class="key-key">j</button>
      <button type="button" @click="getKey" class="key-key">k</button>
      <button type="button" @click="getKey" class="key-key">l</button>
      <div data-spacer="spacer" class="key-spacer"></div>
    </div>
    <div class="key-row">
      <button type="button" @click="getKey" class="key-key key-enter">enter</button>
      <button type="button" @click="getKey" class="key-key">z</button>
      <button type="button" @click="getKey" class="key-key">x</button>
      <button type="button" @click="getKey" class="key-key">c</button>
      <button type="button" @click="getKey" class="key-key">v</button>
      <button type="button" @click="getKey" class="key-key">b</button>
      <button type="button" @click="getKey" class="key-key">n</button>
      <button type="button" @click="getKey" class="key-key">m</button>
      <button type="button" @click="getKey" class="key-key key-remove">del</button>
    </div>
  </div>
</template>

<style>
.keyboard-container {
  height: 200px;
  margin: 0 8px;
  user-select: none;
}
.key-row {
  display: flex;
  width: 100%;
  margin: 0 auto 8px;
  touch-action: manipulation;
}
.key-key {
  font-family: var(--guess-font);
  font-weight: var(--guess-weight);
  border: 0;
  padding: 1rem;
  margin: 0 6px 0 0;
  height: 58px;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  background-color: var(--keyboard-color);
  color: var(--primary-text-color);
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
}
.key-spacer {
  flex: 1.5;
}
.key-enter {
  flex: 1.5;
  font-size: 12px;
}
.key-remove {
  flex: 1.5;
  font-size: 12px;
}
</style>
