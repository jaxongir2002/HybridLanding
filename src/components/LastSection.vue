<script setup>
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {computed, onMounted, ref} from "vue";

function topScroll() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

const mousePosition = ref({x: 0, y: 0});

const handleMouseMove = (event) => {
  mousePosition.value = {
    x: event.clientX,
    y: event.clientY,
  };
};

const computedStyle = computed(() => {
  const {x, y} = mousePosition.value;
  const gradientAngle =
      Math.atan2(y - window.innerHeight / 2, x - window.innerWidth / 2) *
      (180 / Math.PI) +
      180;

  return {
    '--gradient-angle': `${gradientAngle}deg`,
    'border-radius': '650px',
    opacity: '0.4',
    background: `linear-gradient(var(--gradient-angle), #002BFF 0.94%, #A20AFF 99.8%)`,
    filter: 'blur(372.6000061035156px)',
    transform: `translate(${-y / 5}px, ${x / 5}px)`,
  };
});


gsap.registerPlugin(SplitText, ScrollTrigger);
onMounted(() => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.scrolling-last',
      start: 'top 50%',
      end: 'bottom bottom',
      scrub: 1,
    }
  });

  tl.fromTo(".rest-text", {
        y: 80,
        x: -150,
        opacity: 0,
        transition: 0.5
      },
      {
        y: 0,
        x: 0,
        opacity: 1,
        ease: "power2.out",
        delay: 0.2
      });

  tl.fromTo(".first-letter", {
    y: 220,
    transition: .5,
    opacity: 0,
  }, {
    y: 0,
    duration: .3,
    opacity: 1,
    ease: "power2.out"
  });
  tl.fromTo(".footer-text-second", {
        y: 300,
        transition: 0.5
      },
      {
        y: 140,
        duration: 1,
        ease: "power2.out",
        delay: 0.4
      });
  tl.fromTo('.second-first-letter', {
    y: 320,
    transition: .5,
  }, {
    y: 0,
    duration: .5,
    ease: "power2.out"
  })

  gsap.from('.text-content', {
    duration: 0.5,
    y: '0',
    scale: 0.3,
    transition: .3,
    yoyo: true,
    ease: 'power1.inOut',
    scrollTrigger: {
      trigger: ".scrolling-last",
      start: "top 80%",
      end: "bottom bottom",
      scrub: true,
    }
  })

})
</script>

<template>
  <div class="mt-[80px] scrolling-last">
    <div class="flex justify-between items-center ">
      <div class="text-info">
        info@hybridinstallations.com
      </div>
      <div class="text-info max-sm:hidden">
        discover magic
      </div>
      <div class="flex gap-[15px] items-center">
        <span class="text-info max-sm:hidden">
          social:
        </span>
        <div>
          <img src="@/assets/img/instagram.svg" alt="">
        </div>
        <div>
          <img src="@/assets/img/tweeter.svg" alt="">
        </div>
        <div>
          <img src="../assets/img/linkedin.svg" alt="">
        </div>
      </div>
    </div>
    <div class="hidden max-sm:flex justify-between mt-[25px]">
      <div class="text-info w-[125px]">
        Bay Square, Business Bay, Dubai
      </div>
      <div class="text-info">
        discover magic
      </div>
    </div>
    <div class="flex justify-around items-center mt-[121px]">
      <div class="text-content">
        Let`s make some magic
        <div class="glass-effect"></div>
      </div>
      <div>
        <iframe src="https://lottie.host/embed/da8ae85c-72bc-4cd6-b932-38cc0a81adab/1qwUG36rhd.json"></iframe>
      </div>
    </div>
    <div class="flex justify-between items-center mt-[119px] max-sm:mt-[20px]">
      <div class="text-info max-sm:hidden">
        Bay Square, Business Bay, Dubai
      </div>
      <div class="text-info">
        ©2024 by HYBRID Xperience.
      </div>
      <div @click="topScroll" class="text-info flex gap-[10px] relative z-20 items-center">
        Back to top <img class="animation-arrow" src="@/assets/img/ArrowUp.svg" alt="">
      </div>
    </div>
    <div @mousemove="handleMouseMove">
      <div id="footer-text" class="footer-text">
        <span class="first-letter">H</span>
        <span class="rest-text">ybrid</span>
      </div>
      <div class="footer-text-second">
        <span class="second-first-letter">x</span>perience
        <div class="gradient-overlay" :style="computedStyle"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media (max-width: 768px) {
  .info-mobile {
    flex-direction: column;
    font-size: 12px !important;
  }
  .text-content {
    font-size: 14px !important;
  }
  .glass-effect {
    width: 220px !important;
    height: 20px !important;
    bottom: 8px !important;
    left: -10px;
  }
  iframe {
    width: 275.147px !important;
    height: 111.64px !important;
    position: relative;
    right: 90px;
  }
  .footer-text {
    font-size: 69.887px !important;
    font-style: normal !important;
    line-height: normal !important;
    transform: translateY(50px) !important;
  }
  .footer-text-second {
    font-size: 46.425px !important;
    line-height: normal !important;
    transform: translateY(30px) !important;
  }
  .text-info {
    font-size: 10px !important;
  }
}

.first-letter, .rest-text {
  display: inline-block;
  color: rgba(255, 255, 255, 0.10);
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

.text-info {
  color: #F9F9F9;
  font-family: Alexandria, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}

.text-content {
  color: #F9F9F9;
  font-family: Alexandria, sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
  transition: 0.3s;
}

.glass-effect {
  width: 770px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 30px;
  background: rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(4px);
  position: relative;
  bottom: 30px;
  right: 50px;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.footer-text {
  color: rgba(255, 255, 255, 0.10);
  text-align: center;
  font-family: Alexandria, sans-serif;
  font-size: 336px;
  font-style: normal;
  font-weight: 900;
  line-height: 124px;
  text-transform: uppercase;
  transform: translateY(100px);
  animation: last-text 2s linear infinite;
  transition: 1s;
  position: relative;
}

.text-container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  /* Other styles */
}

.footer-text-second {
  color: rgba(255, 255, 255, 0.10);
  text-align: center;
  font-family: Alexandria, sans-serif;
  font-size: 220px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  text-transform: uppercase;
  transform: translateY(140px);
}
</style>