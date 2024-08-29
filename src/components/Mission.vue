<script setup>
import {onMounted, ref} from "vue";
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";

const missionTitle = ref(null);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger,SplitText);
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

  tl.to('.first-name', {
    transition: '.5s',
    transform: 'translateY(-50px)',
  })
  tl.to('.second-name', {
    transition: '.5s',
    transform: 'translateY(-25px)',
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
  tl.to('.second-name', {
    delay: 0.5,
    transition: '.5s',
    className: 'some-class'

  })

  tl.to('.third-name', {
    transition: '.5s',
    transform: 'translateY(-50px)',
    ease: "power2.inOut",
  })
// document.querySelector('.pin-spacer').style.zIndex = 999;
});
</script>

<template>
  <div ref="logo" class="helloWorld grid grid-cols-12 pt-[80px] pb-[80px]">
    <div class="col-span-6 w-[555px] mobile-version">
      <div class="card-mission relative">
        <video autoplay loop muted class="magic-img" width="750" height="340" playsinline>
          <source src="@/assets/video/wecreatemagic_lsF4u8LF.mp4"
                  type="video/mp4">
        </video>
      </div>
      <div class="flex text-font font-light justify-between text-white mt-[20px] leading-6">
        <ul class="overflow-hidden h-[20px]">
          <li class="first-name">WE</li>
          <li class="second-name">CREATE</li>
          <li class="third-name">MAGIC</li>
        </ul>
        <ul class="overflow-hidden h-[20px]">
          <li class="first-name">01</li>
          <li class="second-name">02</li>
          <li class="third-name">03</li>
        </ul>
      </div>

    </div>
    <div class="col-span-6 big-div-mobile">
      <h1 class="uppercase text-font font-bold text-[50px] leading-[50px] text-white title-mobile">
        mission & vision
      </h1>
      <div ref="missionTitle" class="text-description">
        <span class="first-text relative z-[33]"> We are a modern
        and innovative new media arts tech studio, creatively combining art and tech to create unique immersive experiences.</span>
        <span class="second-text relative z-[33]">Our mission is to bridge the gap between the virtual and physical worlds,</span>
        <span class="third-text relative z-[33]" >offering concepts that empower you to dream beyond boundaries.</span>
      </div>
      <button class="btn-about-us flex gap-[5px] items-center" style="position:relative; z-index: 33 !important;">
        <i class="pi pi-arrow-right text-[16px] mr-[3px] mt-[3px] h-[24px] mobile-icon"></i> About us
      </button>
    </div>

    <div class="col-span-6 flex flex-col justify-between mb-[70px] mobile-version">
      <div>
      </div>
      <div>
        <div class="text-social mb-[15px] relative z-[33]">
          Social:
        </div>
        <div class="flex gap-[15px] relative z-[33]">
          <button class="btn-links">
            <i class="pi pi-instagram text-white text-[20px]"></i>
          </button>
          <button class="btn-links">
            <i class="pi pi-twitter text-white text-[20px]"></i>
          </button>
          <button class="btn-links">
            <i class="pi pi-linkedin text-white text-[20px]"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="col-span-6 ml-[200px] mobile-version-animation">
      <iframe width="440px" height="494px"
              src="https://lottie.host/embed/8e80c604-e0af-4b03-96ce-f75675059aa0/Tyehx7Emkq.json"></iframe>
    </div>
  </div>

</template>
<style lang="scss">
.pin-spacer{
  position: relative;
  z-index: 33 !important;
}
</style>
<style scoped lang="scss">
video{
  border-radius: 8.3px !important;
}

@media screen and (max-width: 992px) {
  .mobile-version {
    display: none;
  }
  .title-mobile {
    font-size: 20px;
    line-height: 130%;
  }
  .big-div-mobile {
    grid-column: span 12 / 12;
  }
  .text-description {
    font-size: 16px !important;
    max-width: 251px !important;
    line-height: 110% !important;
    letter-spacing: -0.48px !important;
  }
  .btn-about-us {
    width: 170px !important;
    height: 40px !important;
    padding: 12px 34px !important;
    font-size: 15px !important;
    line-height: 140% !important;
  }
  .mobile-icon {
    font-size: 14px !important;
    margin-top: 10px;
  }
  .mobile-version-animation {
    grid-column: span 12 / 12 !important;
    margin-left: 0;
    margin-top: 40%;

  }
  iframe {
    width: 270px !important;
    height: 185px !important;
    transform: scaleX(-1);
  }
}
.some-class{
  transform: translateY(-50px) !important;
}
.text-social {
  color: var(--White, #F9F9F9);
  text-align: left;
  font-family: Alexandria, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 140%;
}
.btn-links {
  display: flex;
  height: 41px;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;

  border-radius: 500px;
  border: 1px solid #FFF;
}

.btn-links:hover {
  border-color: #FFFF00;
  cursor: url("@/assets/img/Polygon.svg"), auto;
  i {
    color: #FFFF00;
  }
}
.btn-links img{
  min-width: 24px;
}

.btn-about-us {
  border-radius: 500px;
  border: 1px solid #ffff;
  padding: 12px 64px 12px 64px;
  color: white;
  font-family: Alexandria, sans-serif;
  font-size: 18px;
  line-height: 25px;
  font-weight: 500;
  margin-top: 40px;
  cursor: url("@/assets/img/Polygon.svg"), auto;
  position: relative !important;
  z-index: 33 !important;
}

.btn-about-us:hover {
  color: #FFFF00;
  border-color: #FFFF00;
}

.card-mission {
  border-radius: 8.4px;
  border: 1px solid #FFFFFF1A;
  padding: 10px;
  background-color: #DEDEDE0D;
  width: 555px;
  height: 320px;
}

.card-mission2 {
  border-radius: 8.4px;
  border: 1px solid #FFFFFF1A;
  padding: 10px;
  background: #DEDEDE0D;
  position: absolute;
  visibility: hidden;
  width: 555px;
  height: 320px;
}

.card-mission3 {
  border-radius: 8.4px;
  border: 1px solid #FFFFFF1A;
  padding: 10px;
  background: #DEDEDE0D;
  position: absolute;
  visibility: hidden;
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
  line-height: 28px;
  letter-spacing: -3%;
  color: rgba(255, 255, 255, 0.2);
  margin-top: 30px;
  width: 640px;
}

body {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #34495e;
}
</style>