<script setup>
import {nextTick, onMounted, ref} from "vue";
import Masonry from "masonry-layout";
import {ScrollTrigger} from 'gsap-trial/ScrollTrigger'
import { gsap } from "gsap";
// import { SplitText } from "gsap/SplitText";
const logo = ref([
  {
    id: 1,
    src: new URL('@/assets/img/netflix.svg', import.meta.url),
  },
  {
    id: 2,
    src: new URL('@/assets/img/tiktok.svg', import.meta.url),
  },
  {
    id: 3,

    src: new URL('@/assets/img/olee.svg', import.meta.url),
  },
  {
    id: 4,
    src: new URL('@/assets/img/srt.svg', import.meta.url),
  },
  {
    id: 5,
    src: new URL('@/assets/img/Dyson.svg', import.meta.url),
  },
  {
    id: 6,
    src: new URL('@/assets/img/redBUll.svg', import.meta.url),
  },
  {
    id: 7,

    src: new URL('@/assets/img/Ikea.svg', import.meta.url),
  },
  {
    id: 8,
    src: new URL('@/assets/img/2022Logo.svg', import.meta.url),
  },
  {
    id: 9,
    src: new URL('@/assets/img/Unilever.svg', import.meta.url),
  },
  {
    id: 10,
    src: new URL('@/assets/img/vuseLogo.svg', import.meta.url),
  },
  {
    id: 11,
    src: new URL('@/assets/img/events.svg', import.meta.url),
  },
  {
    id: 12,
    src: new URL('@/assets/img/ESCWA.svg', import.meta.url),
  },
  {
    id: 12,
    src: new URL('@/assets/img/vodafone.svg', import.meta.url),
  },
  {
    id: 12,
    src: new URL('@/assets/img/g3011.svg', import.meta.url),
  },
  {
    id: 12,
    src: new URL('@/assets/img/Expo2020.svg', import.meta.url),
  },
  {
    id: 12,
    src: new URL('@/assets/img/srmo.svg', import.meta.url),
  },
  {
    id: 12,
    src: new URL('@/assets/img/Sera.svg', import.meta.url),
  },
  {
    id: 12,
    src: new URL('@/assets/img/Sharaf.svg', import.meta.url),
  },
  {
    id: 12,
    src: new URL('@/assets/img/Boeker.svg', import.meta.url),
  },
  {
    id: 12,
    src: new URL('@/assets/img/NOZOMI.svg', import.meta.url),
  },
  {
    id: 12,
    src: new URL('@/assets/img/RTA.svg', import.meta.url),
  },
  {
    id: 12,
    src: new URL('@/assets/img/EMPIRE.svg', import.meta.url),
  },
  {
    id: 12,
    src: new URL('@/assets/img/CLAP.svg', import.meta.url),
  },
  {
    id: 12,
    src: new URL('@/assets/img/IRIS.svg', import.meta.url),
  },
  {
    id: 12,
    src: new URL('@/assets/img/BIVWORLD.svg', import.meta.url),
  },
  {
    id: 12,
    src: new URL('@/assets/img/CPYA.svg', import.meta.url),
  },

])
const containerRef = ref(null);
onMounted(() => {


  gsap.registerPlugin(SplitText, ScrollTrigger); // Register ScrollTrigger
  let mySplitText = new SplitText('.animation-text', {type: 'chars'})
  let chars = mySplitText.chars

  gsap.from(chars, {
    yPercent: -140,
    stagger: 0.02,
    ease: 'back.out',
    duration: 1,
    scrollTrigger: {
      trigger: '.title-containers',
      start: 'top 80%',
      end: '30px',
      scrub: 1,
    }
  });

  // let mySplitTextTwo = new SplitText('.animation-text-two', {type: 'chars'})
  // let charsTwo = mySplitTextTwo.chars

  // gsap.from(charsTwo, {
  //   yPercent: 140,
  //   stagger: 0.02,
  //   ease: 'back.out',
  //   duration: 1,
  //   scrollTrigger: {
  //     trigger: '.title-containers',
  //     start: 'top 80%',
  //     end: '30px',
  //     scrub: 1,
  //   }
  // });
  gsap.to('.cards-company', {
    stagger: 0.2,
    ease: 'back.out',
    duration: 1,
    opacity:1,
    scrollTrigger: {
      trigger: '.title-containers',
      start: 'top 80%',
      end: '30px',
      scrub: 1,
    }
  });
  setTimeout(() => {
    nextTick(() => {
      if (containerRef.value) {
        new Masonry(containerRef.value, {
          itemSelector: '.cards-company',
          columnWidth: 325,
          stagger: 0.3,
          gap: 15,
          columns: 4,
          gutter: 20,
          percentPosition: true,
        });
      }
    });
  }, 250);
});
</script>

<template>
  <div class="text-center big-div">
    <div class="title-containers">
      <div class="text-work animation-text">
        We work with humans
      </div>
      <div ref="jacon" class="text-work animation-text-two">
        and more than humans
      </div>
    </div>
    <div ref="containerRef" class="grid grid-cols-12 gap-[20px] content-div">
      <div class="col-span-4 cards-company grid-sizer" v-for="(item, index) in logo" :key="item.id">
        <img class="w-full h-auto object-cover" :src="item.src" alt="">
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.text-work {
  color: #FFF;
  font-family: Alexandria, sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;

}

.grid-sizer {
  width: 20%;
}

.title-containers {
  width: 50%;
  height: 100px;
  position: absolute;
}

.cards-company {
  border-radius: 12px;
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(222, 222, 222, 0.05);
  backdrop-filter: blur(59px);
  transition: transform 0.5s ease-in-out;
  padding: 60px 60px 60px 88px;
  margin-top: 20px;
  width: 325px;
  max-width: 100%;
}


@keyframes cardAnimation {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>