<script setup>
import {onMounted} from 'vue'
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.scroll-community-process',
      start: 'top top',
      pin: true,
      end: '200%',
      scrub: 1,
    }
  });

  tl.to('.first-text-process', {
    color: '#F9F9F9',
    duration: 1,
    stagger: 0.03,
  })
  tl.to('.second-text-process', {
    color: '#F9F9F9',
    duration: 1,
    stagger: 0.03,
  })
  tl.to('.third-text-process', {
    color: '#F9F9F9',
    duration: 1,
    stagger: 0.03,
  })
})
</script>

<template>
  <div class="scroll-community-process">
    <div class="mt-[60px] community-process flex justify-center items-center">
      <div class="community-process-text w-[870px]">
        <span class="first-text-process"> We collaborate</span> <span class="second-text-process"> with global brands to craft </span> <span class="third-text-process"> unique and captivating stories that wow
        every audience.</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 992px) {
  .community-process-text {
    font-size: 20px !important;
    position: relative !important;
    top: 70px !important;
    font-weight: 300 !important;
    line-height: 140%; /* 36px */
    width: 100%;
    margin-top: 15px !important;
  }
}

.community-process-text {
  color: #FFFFFF99;
  font-family: Alexandria, sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 300;
  line-height: 130%;
  text-transform: uppercase;
  text-align: center;
  margin-top: 40px;
  flex-shrink: 0;

}
</style>