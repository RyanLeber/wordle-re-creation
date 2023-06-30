<script setup>
// Recieve the isOpen value from App.vue
defineProps({ isOpen: Boolean });
</script>

<template>
  <div v-if="isOpen" class="modal">
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.modal {
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 0;
  border: none;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2000;
}

.modal-content {
  position: relative;
  border-radius: 8px;
  border: 1px solid #1a1a1b;
  background-color: #121213;
  color: #ffffff;
  box-shadow: 0 4px 23px 0 rgba(0,0,0,.2);
  width: 90%;
  max-height: 100%;
  overflow-y: auto;
  animation: Modal-slide-in 200ms;
  max-width: 500px;
  padding: 16px;
  box-sizing: border-box;
}

@keyframes modal-slide-in {
  0% {
    transform: translateY(30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
</style>
