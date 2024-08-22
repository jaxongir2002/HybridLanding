<script setup>
import {onMounted, ref} from 'vue'
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.community-process',
      start: 'top top',
      pin: true,
      end: '200%',
      scrub: 1,
    }
  });
  let mySplitText = new SplitText(".community-process-text", {type: "chars"});
  let chars = mySplitText.chars;
  tl.to(chars, {
    color: '#F9F9F9',
    duration: 1,
    stagger: 0.03,
    fontWeight: 600

  })
})
</script>

<template>
  <div class="mt-[60px] community-process flex justify-center items-center">
    <div class="community-process-text w-[877px]">
      We collaborate with global brands to craft unique and captivating stories that wow every audience.
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
    line-height: 140% !important;
    margin-top: 15px !important;
    width: 280px !important;
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

}
</style>