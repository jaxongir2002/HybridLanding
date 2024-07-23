<script setup>

</script>

<template>
  <div class="navigation">
    <div>
      <img src="../assets/img/Logo.svg" alt="">
    </div>
    <div class="navigation-menu">
      <span class="first-animation">About</span>
      <span class="second-animation">Reels</span>
      <span class="third-animation">Community</span>
      <span class="four-animation">Blog</span>
      <span class="five-animation">Brief</span>
    </div>
    <div class="navigation-magic">
      <span class="magic-animation">
         Discover magic
      </span>
      <img src="../assets/img/MenuIcon.svg" alt="">
    </div>

  </div>
</template>

<style scoped lang="scss">
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  &-menu {
    display: flex;
    gap: 60px;
    font-size: 14px;
    line-height: 20px;
    font-family: "Alexandria", sans-serif;
    font-weight: 700;
    color: white;
  }
  &-menu span {
    cursor: pointer;
  }
  &-magic{
    display: flex;
    gap: 20px;
    align-items: center;
    font-size: 16px;
    line-height: 20px;
    font-family: "Alexandria", sans-serif;
    font-weight: 700;
    color: white;
  }
}
.first-animation {
  opacity: 0;
  animation: up-to-down .4s forwards;
  transform: translateY(10px);
}

.second-animation {
  opacity: 0;
  animation: up-to-down .4s forwards;
  animation-delay: .3s;
  transform: translateY(10px);
}

.third-animation {
  opacity: 0;
  animation: up-to-down .4s forwards;
  animation-delay: .5s;
  transform: translateY(10px);
}

.four-animation {
  opacity: 0;
  animation: up-to-down .4s forwards;
  animation-delay: .6s;
  transform: translateY(10px);
}
.five-animation {
   opacity: 0;
   animation: up-to-down .4s forwards;
   animation-delay: .7s;
   transform: translateY(10px);
 }


@keyframes up-to-down {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
.magic-animation{
  opacity: 0;
  animation: left-to-right .4s linear forwards;
  transform: translateX(60px);
}
@keyframes left-to-right {
  0% {
    opacity: 0;
    transform: translateX(60px);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>