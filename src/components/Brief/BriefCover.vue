<script setup>

import BriefCoverMobile from "@/components/Brief/BriefCoverMobile.vue";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {onMounted} from "vue";
gsap.registerPlugin(SplitText, ScrollTrigger);
onMounted(() => {
  let mySplitText = new SplitText(".test-animation", {type: "chars"});
  let chars = mySplitText.chars;
  gsap.from(chars, {
    yPercent: 130,
    stagger: 0.02,
  });
})
function clickTop() {
  console.log('sss')
  window.scrollTo({
    top: 850,
    behavior: "smooth",
  });
}
</script>

<template>
  <BriefCoverMobile class="hidden max-sm:block relative z-[33]"/>
  <div class="mt-[150px] mb-[100px] max-sm:hidden ">
    <div class="flex justify-between items-center relative z-10">
      <div class="cover-text-brief test-animation">
        Let`s make
      </div>
      <iframe
          src="https://lottie.host/embed/da8ae85c-72bc-4cd6-b932-38cc0a81adab/1qwUG36rhd.json"
      ></iframe>
    </div>
    <div class="grid grid-cols-12 mt-[40px]">
      <div class="col-span-4">
        <div class="card-magic relative z-10">
          <video autoplay loop muted playsinline>
            <source src="@/assets/video/91ec3544e41e9afbff63c3d000a9a5296073707d839b265710597bd574d824eb_ndrKpibw.mp4"
                    type="video/mp4">
          </video>
        </div>
        <div class="magic-text mt-2 relative z-10"> WE CREATE MAGIC</div>
      </div>
      <div class="col-span-8 flex flex-col justify-between">
        <div>
          <div class="cover-text-brief relative z-10 test-animation">
            Some magic !
          </div>
          <button class="contact-us mt-[40px] relative z-10">
            <img src="@/assets/img/smsTracking.svg" alt=""> Contact us
          </button>
        </div>

        <div class="flex justify-between">
          <div class="description-text-brief w-[397px] relative z-10">
            We are misfits; we are not an agency,
            and we don’t just do production; we are
            a combination of both thinkers and
            doers. We’re a combination of human
            and more than human. A collaboration
            between art and tech.
          </div>
          <span class="text-scroll flex items-center mt-[50px] relative z-10"  @click="clickTop">
              Contact form
            <img class="animation-arrow" src="@/assets/img/Arrow.svg" alt=""/>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cover-text-brief {
  color: #F9F9F9;
  font-family: Alexandria, sans-serif;
  font-size: 120px;
  font-style: normal;
  font-weight: 900;
  line-height: 100%;
  text-transform: uppercase;
}

iframe {
  width: 180px;
  height: 119px;
}

.card-magic {
  width: 210px;
  height: 357px;
  flex-shrink: 0;
  border-radius: 8.4px;
  border: 0.7px solid rgba(255, 255, 255, 0.25);
  background: rgba(222, 222, 222, 0.05);
  backdrop-filter: blur(41.29999923706055px);
  padding: 10.5px;
}

.card-magic video {
  border-radius: 8.4px;
}

.magic-text {
  color: #F9F9F9;
  font-family: Alexandria, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 160%;
}

.contact-us {
  display: flex;
  padding: 12px 64px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 500px;
  background: #F9F9F9;
  color: var(--Black, #0E0E0E);
  text-align: center;
  font-family: Alexandria, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
}

.description-text-brief {
  color: #F9F9F9;
  font-family: Urbanist, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -0.48px;
}

.text-scroll {
  color: #FFF;
  font-family: Urbanist, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -0.48px;
}
</style>