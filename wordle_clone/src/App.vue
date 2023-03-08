<!-- eslint-disable prettier/prettier -->
<script setup>
//import { RouterLink, RouterView } from "vue-router";
import UserInput from "./components/UserInput.vue";
</script>

<template>
  <header class="app-header">
    <div class="menu-left">
      <img class="hamburger" src="./assets/menu_icon.png" alt="MENU icon" />
    </div>
    <div class="title">Wordle</div>
    <div class="menu-right">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
      </svg>
      <img class="graph" src="./assets/bar_graph.png" alt="GRAPH icon" />
      <img class="gear" src="./assets/gear.png" alt="GEAR icon" />
    </div>
  </header>
  <div class="main-container">
    <UserInput />
  </div>
</template>

<style scoped>
.app-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  padding: 0;
  height: 65px;
  color: var(--primary-text-color);
  border-bottom: 1px solid var(--border-color);
}
.menu-left {
  margin-left: 1rem;
  margin-right: 5rem;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
.hamburger {
  width: 1.5rem;
}
.bi {
  width: 1.8rem;
  height: 1.8rem;
  margin-left: 5px;
  margin-right: 5px;
}
.graph {
  width: 2rem;
  height: 2rem;
  margin-left: 5px;
  margin-right: 5px;
}
.gear {
  width: 2rem;
  height: 2rem;
  margin-left: 5px;
  margin-right: 5px;
}
.title {
  margin: auto;
  color: var(--primary-text-color);
  font-weight: 700;
  font-size: 2rem;
  font-family: var(--title-font);
  font-weight: var(--title-weight);
}
.menu-right {
  display: flex;
  justify-content: flex-end;

}
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
