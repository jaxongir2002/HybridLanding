<script setup>

</script>

<template>
  <div class="spinner relative z-[33]">
    <div class="spinner1"></div>
  </div>
</template>

<style scoped lang="scss">
.spinner {
  background-image: linear-gradient(rgb(126, 6, 189) 35%, rgb(0, 55, 195));
  width: 100px;
  height: 100px;
  animation: spinning82341 1.7s linear infinite;
  text-align: center;
  border-radius: 50px;
  filter: blur(1px);
  box-shadow: 0px -5px 20px 0px rgb(126, 6, 189), 0px 5px 20px 0px rgb(0, 55, 195);
}

.spinner1 {
  background-color: rgb(36, 36, 36);
  width: 100px;
  height: 100px;
  border-radius: 50px;
  filter: blur(10px);
}

@keyframes spinning82341 {
  to {
    transform: rotate(360deg);
  }
}
</style>