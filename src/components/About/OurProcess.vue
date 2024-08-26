<script setup>
import {onMounted, ref} from 'vue'
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const itemTitle = ref([
  {
    text: '01',
    title: 'Client brief'
  },
  {
    text: '02',
    title: 'Creative Brief'
  },
  {
    text: '03',
    title: 'Research and development'
  },
  {
    text: '04',
    title: 'Design sketch'
  },
  {
    text: '05',
    title: 'Tech integration'
  },
  {
    text: '06',
    title: 'Visuals, content & art directions'
  },
  {
    text: '07',
    title: 'Magic out'
  },
]);
gsap.registerPlugin(ScrollTrigger, SplitText);
onMounted(() => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.our-process',
      start: 'top top',
      pin: true,
      end: '200%',
      anticipatePin: 1,
      scrub: 1,
    }
  });
  let mySplitText = new SplitText(".text-process", {type: "chars"});
  let chars = mySplitText.chars;
  tl.to(chars, {
    color: '#F9F9F9',
    duration: 1,
    stagger: 0.02,
  })
})
</script>

<template>
  <div class="mt-[60px] our-process relative z-[33]">
    <div class="header-text relative top-[60px]">
      Our process
    </div>
    <div class="text-process" v-for="(item,index) in itemTitle" :key="index">
      <span class="text-process-number mr-[10px] relative bottom-[28px]">{{ item.text }}</span>
      {{ item.title }}
    </div>
  </div>

</template>

<style scoped lang="scss">
@media screen and (max-width: 992px) {
  .text-process {
    font-size: 20px !important;
    position: relative;
    top: 70px;
    margin-top: 15px !important;

    &-number {
      font-size: 8px !important;
      bottom: 10px !important;
    }
  }
  .header-text {
    font-size: 20px !important;
  }
}

.text-process {
  color: rgba(249, 249, 249, 0.28);
  font-family: Alexandria, sans-serif;
  font-size: 60px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  text-transform: uppercase;
  text-align: center;
  margin-top: 40px;

  &-number {
    color: rgba(249, 249, 249, 0.28);
    text-align: center;
    font-family: Alexandria, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
  }
}

.header-text {
  color: #F9F9F9;
  font-family: Alexandria, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  text-transform: uppercase;
}
</style>