<script setup>
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {onMounted} from "vue";

const isMobile = window.matchMedia('(max-width: 767px)').matches;

onMounted(() => {
  if (!isMobile) {
    gsap.registerPlugin(SplitText, ScrollTrigger);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scrolling-last",
        start: "top 50%",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    tl.fromTo(
        ".rest-text",
        {
          y: 80,
          x: -150,
          opacity: 0,
          transition: 0.5,
        },
        {
          y: 0,
          x: 0,
          opacity: 1,
          ease: "power2.out",
          delay: 0.2,
        }
    );

    tl.fromTo(
        ".first-letter",
        {
          y: 220,
          transition: 0.5,
          opacity: 0,
        },
        {
          y: 0,
          duration: 0.3,
          opacity: 1,
          ease: "power2.out",
        }
    );
    tl.fromTo(
        ".footer-text-second",
        {
          y: 300,
          transition: 0.5,
        },
        {
          y: 140,
          duration: 1,
          ease: "power2.out",
          delay: 0.4,
        }
    );
    tl.fromTo(
        ".second-first-letter",
        {
          y: 320,
          transition: 0.5,
        },
        {
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        }
    );
    gsap.from(".text-content", {
      duration: 0.5,
      y: "0",
      scale: 0.3,
      transition: 0.3,
      yoyo: true,
      ease: "power1.inOut",
    });
  }
});
</script>

<template>
  <div class="mt-[80px] scrolling-last">
    <div class="flex justify-between items-center relative z-[33]">
      <div class="text-info">info@hybridinstallations.com</div>
      <div class="text-info max-sm:hidden relative z-[33]">discover magic</div>
    </div>
    <div class="hidden max-sm:flex justify-between mt-[25px]">
      <div class="text-info w-[125px]">Bay Square, Business Bay, Dubai</div>
      <div class="text-info">discover magic</div>
    </div>
    <div class="flex justify-around items-center mt-[121px] relative z-[33]">
      <div class="text-content">
        Let`s make some magic
      </div>
      <div>
        <iframe
            src="https://lottie.host/embed/da8ae85c-72bc-4cd6-b932-38cc0a81adab/1qwUG36rhd.json"
        ></iframe>
      </div>
    </div>
    <div class="flex justify-between items-center mt-[119px] max-sm:mt-[20px]">
      <div class="text-info max-sm:hidden relative z-[33]">Bay Square, Business Bay, Dubai</div>
      <div class="text-info relative z-[33]">©2024 by HYBRID Xperience.</div>
    </div>
    <div class="big-div-last relative z-10">
      <div id="footer-text" class="footer-text hover-text">
        <span class="first-letter">H</span>
        <span class="rest-text">ybrid</span>
      </div>
      <div class="footer-text-second hover-text">
        <span class="second-first-letter">x</span>perience
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 992px) {
  .info-mobile {
    flex-direction: column;
    font-size: 12px !important;
  }
  .text-content {
    font-size: 14px !important;
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
  iframe {
    width: 100% !important;
    position: relative;
    right: 0 !important;
  }
  .big-div-last {
    //height: auto !important;
    height: 140px !important;
    overflow: visible !important;
  }
  .gradient-overlay {
    display: none !important;
  }
}

.first-letter,
.rest-text {
  display: inline-block;
  color: rgba(255, 255, 255, 0.1);
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
  color: #f9f9f9;
  font-family: Alexandria, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}

.text-content {
  color: #f9f9f9;
  font-family: Alexandria, sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
  transition: 0.3s;
}

.gradient-overlay {
  position: absolute;
  width: 50px;
  height: 50px;
  mix-blend-mode: difference;
  border-radius: 50%;
  pointer-events: none;
  z-index: 999;
  transition: top 0.025s ease, left 0.025s ease, transform 0.25s ease, opacity 0.25s ease;
  opacity: 0.8;
  background: linear-gradient(to top, rgb(0, 43, 255), rgb(162, 10, 255));
  filter: blur(46px);
  -webkit-filter: blur(46px);
}

.footer-text {
  color: rgba(255, 255, 255, 0.1);
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
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.footer-text-second {
  color: rgba(255, 255, 255, 0.1);
  text-align: center;
  font-family: Alexandria, sans-serif;
  font-size: 220px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  text-transform: uppercase;
  transform: translateY(140px);
}

.big-div-last {
  margin-bottom: 5px;
  overflow: hidden;
  height: 470px;
}
</style>
