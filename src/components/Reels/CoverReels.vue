<script setup>
import {onMounted} from "vue";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);
onMounted(() => {
  let mySplitText = new SplitText(".test-animation", {type: "chars"});
  let chars = mySplitText.chars;
  gsap.from(chars, {
    yPercent: 130,
    stagger: 0.02,
  });
})
</script>

<template>
  <section id="container">
    <div class="title-container">
      <div class="title-logo test-animation">Our  <span class="mobile-works">Works</span></div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@media screen and (max-width: 992px) {
  .title-logo {
    font-size: 50px !important;
    line-height: 100% !important;
    text-align: center;
    width:  100%!important;
  }
  .mobile-works{
    display: block;
  }

  .title-container {
    top: 55% !important;
  }
  #container{
    height: 80vh !important;
  }
}

#container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: relative;
  height: 100vh;
}

.title-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 22;
}

.title-logo {
  font-family: "Alexandria", sans-serif;
  text-transform: uppercase;
  color: #fff;
  font-weight: 900;
  font-size: 130px;
  line-height: 130px;
  transition: 1s;
}

@keyframes dashboard-animation {
  from {
    transform: scale(0.8);
  }
  to {
    transform: scale(1);
  }
}
</style>