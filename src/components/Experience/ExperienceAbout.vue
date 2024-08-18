<script setup>

import {onMounted} from "vue";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger,SplitText);
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.about-text-title',
      start: 'top top',
      pin: true,
      end: '200%',
      scrub: 1,
    }
  });
  let mySplitText = new SplitText(".scrolling-white-text", {type: "chars"});
  let chars = mySplitText.chars;


  tl.to(chars, {
    color: 'white',
    duration: 1,
    stagger: 0.02,
  })
});
</script>

<template>
  <div class="relative z-10 text-center about-text-title mt-[180px] mb-[80px]">
    <div class="text-header">
      Who we are
    </div>
    <div class="text-description w-[913px] m-auto mt-[10px] ">
     <span class="scrolling-white-text"> Hybrid Xperience is a tech studio that creates immersive, interactive installations for physical and digital
      spaces.
      We specialize in 3D projection mapping, real-time interactivity, holograms, AI, and VFX/CGI. We have projects
       blend art and technology, offering unique experiences through</span>
      <span class="text-[#FF0]"> #technology</span>, <span class="text-[#A42DEA]">#interactive</span>
      <span class="scrolling-white-text"> solutions, and memorable</span>

      <span class="text-[#002BFF]"> #experience</span>.
    </div>
  </div>
</template>

<style scoped lang="scss">
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