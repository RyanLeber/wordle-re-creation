<!-- eslint-disable prettier/prettier -->
<script>


</script>

<template>
  <div class="keyboard-container">
    <div class="key-row">
      <button type="button" data-key="q" class="key-key">q</button>
      <button type="button" data-key="w" class="key-key">w</button>
      <button type="button" data-key="e" class="key-key">e</button>
      <button type="button" data-key="r" class="key-key">r</button>
      <button type="button" data-key="t" class="key-key">t</button>
      <button type="button" data-key="y" class="key-key">y</button>
      <button type="button" data-key="u" class="key-key">u</button>
      <button type="button" data-key="i" class="key-key">i</button>
      <button type="button" data-key="o" class="key-key">o</button>
      <button type="button" data-key="p" class="key-key">p</button>
    </div>
    <div class="key-row">
      <div data-spacer="spacer" class="key-spacer"></div>
      <button type="button" data-key="a" class="key-key">a</button>
      <button type="button" data-key="s" class="key-key">s</button>
      <button type="button" data-key="d" class="key-key">d</button>
      <button type="button" data-key="f" class="key-key">f</button>
      <button type="button" data-key="g" class="key-key">g</button>
      <button type="button" data-key="h" class="key-key">h</button>
      <button type="button" data-key="j" class="key-key">j</button>
      <button type="button" data-key="k" class="key-key">k</button>
      <button type="button" data-key="l" class="key-key">l</button>
      <div data-spacer="spacer" class="key-spacer"></div>
    </div>
    <div class="key-row">
      <button type="button" data-key="enter" class="key-key key-enter">enter</button>
      <button type="button" data-key="x" class="key-key">z</button>
      <button type="button" data-key="c" class="key-key">x</button>
      <button type="button" data-key="v" class="key-key">c</button>
      <button type="button" data-key="b" class="key-key">v</button>
      <button type="button" data-key="n" class="key-key">b</button>
      <button type="button" data-key="m" class="key-key">n</button>
      <button type="button" data-key="m" class="key-key">m</button>
      <button type="button" data-key="backspace" class="key-key key-remove">del</button>
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
