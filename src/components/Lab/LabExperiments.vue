<script setup>
import {onMounted} from "vue";
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.helloWorld',
      start: 'top top',
      pin: true,
      end: '200%',
      scrub: 1,
    }
  });
  let mySplitText = new SplitText(".first-text", {type: "chars"});
  let chars = mySplitText.chars;
  let secondText = new SplitText(".second-text", {type: "chars"});
  let charsTwo = secondText.chars;
  let thirdText = new SplitText(".third-text", {type: "chars"});
  let charsThird = thirdText.chars;

  tl.to(chars, {
    color: 'white',
    duration: 1,
    stagger: 0.02,
  })

  tl.to(charsTwo, {
    color: 'white',
    duration: 1,
    stagger: 0.02,
  })

  tl.to(charsThird, {
    color: 'white',
    duration: 1,
    stagger: 0.02,
  })
});
</script>

<template>
  <div ref="logo" class="helloWorld flex justify-between pt-[80px] max-sm:block">
    <div class="mobile-version-animation max-sm:block hidden">
        <div class="card-lab-video">
          <video autoplay loop muted class="magic-img"  playsinline>
            <source src="@/assets/video/wecreatemagic_lsF4u8LF.mp4"
                    type="video/mp4">
          </video>
        </div>
        <div class="flex text-font font-light justify-between mt-[20px] text-magic-lab">
          We create magic !
        </div>
    </div>
    <div class="flex flex-col justify-between h-[80vh] max-sm:h-[25vh] max-sm:block">
      <div class="text-mobile-lab uppercase text-font font-bold text-[50px] max-sm:text-[20px leading-[50px] text-white title-mobile w-[396px] max-sm:w-full">
        THE Experiments
      </div>
      <div class="text-description">
        <span class="first-text relative z-[33]">
          Hybrid Lab  is a pioneers in experimental installations, we push the boundaries of creativity and functionality,
        </span>
        <span class="second-text relative z-[33]">delivering unique, immersive experiences. Our team combines cutting-edge technology with artistic vision to </span>
        <span class="third-text relative z-[33]">craft bespoke solutions that captivate and inspire.</span>
      </div>
    </div>
    <div class="flex flex-col h-[80vh] justify-between mobile-version-animation max-sm:hidden">
      <div class="w-[555px] mobile-version">
        <div class="card-mission relative">
          <video autoplay loop muted class="magic-img" width="750" height="340" playsinline>
            <source src="@/assets/video/wecreatemagic_lsF4u8LF.mp4"
                    type="video/mp4">
          </video>
        </div>
        <div class="flex text-font font-light justify-between mt-[20px] text-magic-lab">
          We create magic !
        </div>
      </div>
      <div class="flex justify-end">
        <iframe
            src="https://lottie.host/embed/da8ae85c-72bc-4cd6-b932-38cc0a81adab/1qwUG36rhd.json"
        ></iframe>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
video {
  border-radius: 8.3px !important;
}

@media screen and (max-width: 992px) {
  iframe {
    display: none;
  }
  .text-mobile-lab{
    background: linear-gradient(90deg, #828282 1.73%, #FFF 44.64%, #828282 91.33%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 20px;
    font-weight: 300;
  }
  .text-magic-lab{
    font-size: 16px !important;
  }
  .text-description{
    font-size: 16px !important;
    font-weight: 600 !important;
    width: 280px !important;
  }
  .card-lab-video{
    width:100% !important;
    height: 100% !important;
    padding: 10px !important;
  }
  .card-mission{
    border-radius: 12px;
    border: 1px solid #FFF;
    background: rgba(222, 222, 222, 0.05);
    backdrop-filter: blur(59px);
    padding: 10px !important;
  }
}

.some-class {
  transform: translateY(-50px) !important;
}
.card-mission{
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(222, 222, 222, 0.05);
  backdrop-filter: blur(59px);
  padding: 15px;
}
.text-magic-lab {
  font-family: Alexandria, sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: 130%; /* 41.6px */
  text-transform: uppercase;
  background: linear-gradient(90deg, #828282 1.73%, #FFF 44.64%, #828282 91.33%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.card-lab-video {
  border-radius: 8.4px;
  border: 1px solid #FFFFFF1A;
  padding: 10px;
  background-color: #DEDEDE0D;
  width: 555px;
  height: 320px;
}

.text-font {
  font-family: Alexandria, sans-serif;
}

.text-description {
  font-family: Urbanist, sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 120%;
  letter-spacing: -0.72px;
  color: #FFFFFF99;
  margin-top: 30px;
  width: 598px;
}
</style>