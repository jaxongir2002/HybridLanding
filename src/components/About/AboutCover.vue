<script setup>
import gsap from "gsap";
import {onMounted} from "vue";

gsap.registerPlugin(SplitText);
const props = defineProps({
  description:{
    type: String,
    default:''
  }
})

function topScroll() {
  window.scrollTo({
    top: 1000,
    behavior: "smooth",
  });
}

onMounted(() => {
  let mySplitText = new SplitText(".test-animation-about", {type: "chars"});
  let chars = mySplitText.chars;
  gsap.from(chars, {
    yPercent: 130,
    opacity: 0
  });

})
</script>

<template>
  <section id="container">
    <div class="title-container ">
      <div class="title-logo test-animation-about">We are</div>
      <div ref="elementRef" class="title-logo relative lg:left-[240px] mobile-title test-animation-about">misfits</div>
    </div>
  </section>

  <div class="footer-cover flex justify-between items-center">
    <iframe width="140px" height="194px"
            src="https://lottie.host/embed/8e80c604-e0af-4b03-96ce-f75675059aa0/Tyehx7Emkq.json"></iframe>
    <div class="title-footer w-[20%]">
    {{props.description}}
    </div>
    <span class="text-scroll" @click="topScroll">
      Scroll to experience magic
      <img class="animation-arrow" src="@/assets/img/Arrow.svg" alt=""/>
    </span>
  </div>
</template>
<style lang="scss">
body::-webkit-scrollbar {
  display: block;
}
</style>

<style scoped lang="scss">
@media screen and (max-width: 992px) {
  .title-logo {
    font-size: 50px !important;
    line-height: 55px !important;
  }
  .mobile-title {
    left: 55px !important;
  }
  .title-footer {
    display: none;
  }

  .title-footer-mobile {
    position: relative;
    display: block;
    top: 45%;
    width: 65%;
    left: 17%;
  }
  iframe {
    display: none;
  }
  .text-scroll {
    font-size: 12px !important;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5;
    position: relative !important;
    top: 100px !important;
    justify-content: center;
    left: 25%;
  }
  canvas {
    display: none !important;
  }
  .title-container {
    top: 40% !important;
  }
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
  align-items: center;
  height: 100vh;
  position: relative;
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
  font-size: 140px;
  transition: 1s;
  overflow: hidden;
  line-height: 1em;
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
}

.title-footer {
  color: var(--White, #F9F9F9);
  font-family: Urbanist, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 19.2px */
  letter-spacing: -0.48px;
}

.footer-cover {
  position: relative;
  z-index: 22;
  bottom: 310px !important;
}

iframe {
  transform: scaleX(-1);
}
</style>