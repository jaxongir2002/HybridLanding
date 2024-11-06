<script setup>
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {onMounted} from "vue";

function topScroll() {
  window.scrollTo({
    top: 1000,
    behavior: "smooth",
  });
}
gsap.registerPlugin(SplitText, ScrollTrigger);
onMounted(() => {
  let mySplitText = new SplitText(".test-animation", {type: "chars"});
  let chars = mySplitText.chars;
  gsap.from(chars, {
    yPercent: 130,
    stagger: 0.02,
    opacity:0
  });
})
</script>

<template>
  <section id="container" class="">
    <div class="title-container">
      <div class="title-logo test-animation">Community</div>
      <div class="title-text">Hybrid + Artist = magic</div>
    </div>
    <span class="text-scroll" @click="topScroll">
      Scroll to experience magic
      <img class="animation-arrow" src="@/assets/img/Arrow.svg" alt=""/>
    </span>

  </section>

</template>

<style scoped lang="scss">
@media screen and (max-width: 992px) {
  .title-logo {
    font-size: 40px !important;
    line-height: 100% !important;
  }
  .title-text {
    display: none;
  }
  .text-scroll {
    font-size: 12px !important;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5;
    position: relative !important;
    top: 45% !important;
  }
  .title-container {
    top: 40% !important;
  }
}

.srt {
  width: 99.5vw !important;
  top: -75px;
  position: absolute;
}

.project-twelve__background {
  width: 100%;
  height: 60%;
}

.animation-arrow {
  animation: top-bottom 0.8s infinite forwards;
}

@keyframes top-bottom {
  0% {
    transform: translateY(2px);
  }
  100% {
    transform: translateY(-2px);
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

.title-text {
  font-family: "Alexandria", sans-serif;
  text-transform: uppercase;
  color: #fff;
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
}


@keyframes dashboard-animation {
  from {
    transform: scale(0.8);
  }
  to {
    transform: scale(1);
  }
}

.text-scroll {
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  color: white;
  display: flex;
  align-items: center;
  gap: 5px;
  background: transparent;
  margin-bottom: 101px;
  position: relative;
  z-index: 22;
  top: 45% !important;
}
</style>