<script setup>
import {onMounted} from "vue";
import {ScrollTrigger} from 'gsap-trial/ScrollTrigger'
import gsap from "gsap-trial";

onMounted(() => {
  gsap.registerPlugin(SplitText, ScrollTrigger, ScrollSmoother);
  let mySplitText = new SplitText('.animation-text', {type: 'chars'})
  let chars = mySplitText.chars


  let mySplitTextTwo = new SplitText('.animation-text-two', {type: 'chars'})
  let charsTwo = mySplitTextTwo.chars


  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.big-div',
      start: 'top top',
      end: 'bottom 30%',
      scrub: 1,
      pin: true
    }
  });
  tl.from(chars, {
    yPercent: -140,
    stagger: 0.02,
    ease: 'back.out',
    opacity: 0,
  });

  tl.from(charsTwo, {
    yPercent: 140,
    stagger: 0.02,
    ease: 'back.out',
    opacity: 0,
    yoyo: true
  }, 0);

  function animateSrtElement() {
    const isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed

    tl.to('.srt', {
      yPercent: isMobile ? -140 : -60,
      duration: 1,
      ease: "power2.inOut",
    });
  }
tl.from('.first',{
  stagger: 0.03,
})
// Call the animation function on window load and resize
  window.addEventListener('load', animateSrtElement);
  window.addEventListener('resize', animateSrtElement);


  const smoother = ScrollSmoother.create({
    smooth: 1,
    normalizeScroll: true,
    speed: 1,
    smoothTouch: 0.1,
    ignoreMobileResize: true,
    effects: true,
    preventDefault: true,

  });

});
</script>

<template>
  <div class="text-center big-div">
    <div class="smooth-wrapper ">
      <div class="title-containers">
        <div class="text-work animation-text">
          We work with humans
        </div>
        <div class="text-work animation-text-two">
          and more than humans
        </div>
      </div>
      <div class="smooth-content relative z-20 content-div ">
        <div class="flex gap-[20px] srt max-sm:gap-[8px] max-sm:justify-center">
          <div data-lag="0.5" class="first">
            <div class="cards-company h-[250px] p-[80px] max-sm:h-[104.478px] max-sm:p-[30px]">
              <img class="w-full h-auto object-cover" src="../assets/img/Netflix.svg" alt="">
            </div>
            <div class="cards-company h-[140px] p-[80px] max-sm:p-[30px] max-sm:h-[58.508px]">
              <img class="w-full h-auto object-cover" src="../assets/img/Dyson.svg" alt="">
            </div>
            <div class="cards-company h-[220px] p-[120px] max-sm:p-[40px] max-sm:h-[91.94px]">
              <img class="w-full h-auto object-cover" src="../assets/img/Unilever.svg" alt="">
            </div>
            <div class="cards-company h-[180px] p-[80px] max-sm:p-[30px] max-sm:h-[75.224px]">
              <img class="w-full h-auto object-cover" src="../assets/img/vodafone.svg" alt="">
            </div>
            <div class="cards-company h-[210px] p-[80px] max-sm:p-[30px] max-sm:h-[87.761px]">
              <img class="w-full h-auto object-cover" src="../assets/img/Sera.svg" alt="">
            </div>
            <div class="cards-company h-[218px] p-[80px] max-sm:p-[30px] max-sm:h-[87.761px]">
<!--              <img class="w-full h-auto object-cover" src="../assets/img/E" alt="">-->
            </div>
            <div class="cards-company h-[220px] p-[80px] max-sm:p-[30px] max-sm:h-[91.94px]">
<!--              <img class="w-full h-auto object-cover" src="../assets/img/E" alt="">-->
            </div>
          </div>
          <div data-lag="1" class="second first">
            <div class="cards-company h-[180px]  p-[80px] max-sm:p-[30px] max-sm:h-[75.224px]">
              <img class="w-full h-auto object-cover" src="../assets/img/Tiktok.svg" alt="">
            </div>
            <div class="cards-company h-[230px]  p-[80px] max-sm:p-[30px] max-sm:h-[96.119px]">
              <img class="w-full h-auto object-cover" src="../assets/img/redBUll.svg" alt="">
            </div>
            <div class="cards-company h-[210px] p-[80px] max-sm:p-[30px] max-sm:h-[87.761px]">
              <img class="w-full h-auto object-cover" src="../assets/img/vuseLogo.svg" alt="">
            </div>
            <div class="cards-company h-[160px] p-[80px] max-sm:p-[30px] max-sm:h-[66.866px]">
              <img class="w-full h-auto object-cover" src="../assets/img/madic.svg" alt="">
            </div>

            <div class="cards-company h-[240px] p-[80px] max-sm:p-[30px] max-sm:h-[100.299px]">
              <img class="w-full h-auto object-cover" src="../assets/img/Sharaf.svg" alt="">
            </div>
            <div class="cards-company h-[240px] p-[80px] max-sm:p-[30px] max-sm:h-[100.299px]">
              <img class="w-full h-auto object-cover" src="../assets/img/CLAP.svg" alt="">
            </div>
            <div class="cards-company h-[180px] p-[80px] max-sm:p-[30px] max-sm:h-[91.94px]">
              <img class="w-full h-auto object-cover" src="../assets/img/CLAP.svg" alt="">
            </div>
          </div>
          <div data-lag="2" class="third first">
            <div class="cards-company h-[220px]  p-[80px] max-sm:p-[30px]">
              <img class="w-full h-auto object-cover" src="../assets/img/Tiktok.svg" alt="">
            </div>
            <div class="cards-company h-[250px]  p-[80px] max-sm:p-[30px]">
              <img class="w-full h-auto object-cover" src="../assets/img/redBUll.svg" alt="">
            </div>
            <div class="cards-company h-[220px] p-[80px] max-sm:p-[30px]">
              <img class="w-full h-auto object-cover" src="../assets/img/vuseLogo.svg" alt="">
            </div>
            <div class="cards-company h-[200px] p-[80px] max-sm:p-[30px]">
              <img class="w-full h-auto object-cover" src="../assets/img/madic.svg" alt="">
            </div>

            <div class="cards-company h-[180px] p-[80px] max-sm:p-[30px]">
              <img class="w-full h-auto object-cover" src="../assets/img/Sharaf.svg" alt="">
            </div>
            <div class="cards-company h-[190px] p-[80px] max-sm:p-[30px]">
              <img class="w-full h-auto object-cover" src="../assets/img/CLAP.svg" alt="">
            </div>
            <div class="cards-company h-[180px] p-[80px] max-sm:p-[30px]">
              <img class="w-full h-auto object-cover" src="../assets/img/CLAP.svg" alt="">
            </div>
          </div>
          <div data-lag="3" class="four first">
            <div class="cards-company h-[190px]  p-[80px] max-sm:p-[30px]">
              <img class="w-full h-auto object-cover" src="../assets/img/Tiktok.svg" alt="">
            </div>
            <div class="cards-company h-[230px]  p-[80px] max-sm:p-[30px]">
              <img class="w-full h-auto object-cover" src="../assets/img/redBUll.svg" alt="">
            </div>
            <div class="cards-company h-[220px] p-[80px] max-sm:p-[30px]">
              <img class="w-full h-auto object-cover" src="../assets/img/vuseLogo.svg" alt="">
            </div>
            <div class="cards-company h-[220px] p-[80px] max-sm:p-[30px]">
              <img class="w-full h-auto object-cover" src="../assets/img/madic.svg" alt="">
            </div>

            <div class="cards-company h-[170px] p-[80px] max-sm:p-[30px]">
              <img class="w-full h-auto object-cover" src="../assets/img/Sharaf.svg" alt="">
            </div>
            <div class="cards-company h-[240px] p-[80px] max-sm:p-[30px]">
              <img class="w-full h-auto object-cover" src="../assets/img/CLAP.svg" alt="">
            </div>
            <div class="cards-company h-[170px] p-[80px] max-sm:p-[30px]">
              <img class="w-full h-auto object-cover" src="../assets/img/CLAP.svg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media (max-width: 768px) {
  .text-work {
    font-size: 20px !important;
  }
  .cards-company {
    width: 135.821px !important;
    margin-top: 8px !important;
  }
  .third {
    display: none;
  }
  .four {
    display: none;
  }
}

.smooth-content {
  transform: translateY(900px);
}
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
  width: 100%;
  height: 50vh;
  position: fixed;
  left: 0;
  transform: translate(0%, 50%);
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
  //padding: 60px 60px 60px 88px;
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