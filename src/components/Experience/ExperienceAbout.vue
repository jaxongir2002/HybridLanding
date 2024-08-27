<script setup>
import {onMounted} from "vue";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

onMounted(() => {
  const isMobile = window.matchMedia('(max-width: 767px)').matches;
  gsap.registerPlugin(ScrollTrigger, SplitText);
  let pin = true;
  if (isMobile) {
    pin = false;
  } else {
    pin = true;
  }
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.scroll-studio-text',
      start: 'top top',
      pin: pin,
      end: '200%',
      scrub: 1,
    }
  });
  let mySplitText = new SplitText(".scrolling-white-text", {type: "chars"});
  let chars = mySplitText.chars;

  tl.to('.first-about-experience', {
    color: 'white',
    duration: 1,
    stagger: 0.02,
    fontWeight: 400
  })
  tl.to('.second-about-experience', {
    color: 'white',
    duration: 1,
    stagger: 0.02,
    fontWeight: 400
  })
  tl.to('.third-about-experience', {
    color: 'white',
    duration: 1,
    stagger: 0.02,
    fontWeight: 400
  })
  tl.to('.four-about-experience', {
    color: 'white',
    duration: 1,
    stagger: 0.02,
    fontWeight: 400
  })
  tl.to('.five-about-experience', {
    color: 'white',
    duration: 1,
    stagger: 0.02,
    fontWeight: 400
  })
  tl.to('.six-about-experience', {
    color: 'white',
    duration: 1,
    stagger: 0.02,
    fontWeight: 400
  })
  tl.to('.scrolling-white-text', {
    color: 'white',
    duration: 1,
    stagger: 0.02,
    fontWeight: 400
  })
});
</script>

<template>
  <div class="scroll-studio-text">
    <div class="relative z-10 text-center about-text-title mt-[180px] mb-[80px] max-sm:mt-0 max-sm:mb-0">
      <div class="text-header">
        Who we are
      </div>
      <div class="text-description w-[913px] m-auto mt-[10px] ">
        <span class="first-about-experience"> Hybrid Xperience is a </span>
        <span class="second-about-experience"> tech studio that creates </span>
        <span class="third-about-experience"> immersive, interactive installations </span>
        <span class="four-about-experience"> for physical and digital </span>
        <span class="five-about-experience"> spaces. We specialize in </span>
        <span class="six-about-experience"> 3D projection mapping, real-time interactivity, holograms,
          AI, and VFX/CGI. We have projects blend art and technology, offering unique experiences through</span>
        <span class="text-[#FF0]"> #technology</span>, <span class="text-[#A42DEA]">#interactive</span>
        <span class="scrolling-white-text"> solutions, and memorable</span>

        <span class="text-[#002BFF]"> #experience</span>.
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
@media screen and (max-width: 992px) {
  .text-header {
    font-size: 20px !important;
  }
  .text-description {
    font-size: 16px !important;
    width: 100% !important;
  }
  .about-text-title {
    margin-top: 0 !important;
  }
}

.text-header {
  color: var(--White, #F9F9F9);
  font-family: Alexandria, sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 41.6px */
  text-transform: uppercase;
}

.text-description {
  color: rgba(255, 255, 255, 0.60);
  font-family: Alexandria, sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: 130%;
}

</style>