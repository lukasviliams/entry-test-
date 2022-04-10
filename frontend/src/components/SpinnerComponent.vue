<template>
  <transition name="appear" mode="out-in" appear>
    <div class="spinner"></div>
  </transition>
</template>

<script>
export default {};
</script>

<style scoped>
.spinner {
  display: block;
  width: 40px;
  height: 40px;
  border: 3px solid transparent;
  border-radius: 50%;
  margin: 20% auto;
  border-top-color: #f8f9fa;
  border-right-color: #ced4da;
  border-bottom-color: #ced4da;
  border-left-color: #ced4da;
  animation: spinner 1s infinite;
}
@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
.appear-enter-active,
.appear-leave-active {
  transition: all 0.5s;
}
.appear-enter-from,
.appear-leave-to {
  opacity: 0;
}
</style>
