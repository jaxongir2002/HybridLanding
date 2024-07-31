<script setup>
import {onMounted, ref} from "vue";
import gsap from 'gsap-trial';
import {ScrollTrigger} from "gsap-trial/ScrollTrigger";

const missionTitle = ref(null);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.helloWorld',
      start: 'top top',
      pin: true,
      end: '400%',
      scrub: 1,
    }
  });
  tl.to('.one-text', {
    color: 'white',

    duration: 1,
    ease: "power2.inOut"
  });
  tl.to('.two-text', {
    color: 'white',
    duration: 1,
    ease: "power2.inOut"
  });
  tl.to('.first-text', {
    color: 'white',

    duration: 1,
    ease: "power2.inOut"
  });
  tl.to('.second-text', {
    color: 'white',

    duration: 1,
    ease: "power2.inOut"
  });
  tl.to('.third-text', {
    color: 'white',

    duration: 1,
    ease: "power2.inOut"
  });
  tl.to('.four-text', {
    color: 'white',
    duration: 1,
    ease: "power2.inOut"
  });
  tl.to('.five-text', {
    color: 'white',

    duration: 1,
    ease: "power2.inOut"
  });
  tl.to('.six-text', {
    color: 'white',
    duration: 1,
    ease: "power2.inOut"
  });
  tl.to('.seven-text', {
    color: 'white',
    duration: 1,
    ease: "power2.inOut"
  });
  tl.to('.eight-text', {
    color: 'white',
    duration: 1,
    ease: "power2.inOut"
  });
  tl.to('.nine-text', {
    color: 'white',
    duration: 1,
    ease: "power2.inOut"
  });
  tl.to('.tan-text', {
    color: 'white',
    duration: 1,
    ease: "power2.inOut"
  });

  tl.to('.eleven-text', {
    color: 'white',
    duration: 1,
    ease: "power2.inOut"
  });
  tl.to('.twelve-text', {
    color: 'white',
    duration: 1,
    ease: "power2.inOut"
  });
  tl.to('.thirteen-text', {
    color: 'white',
    duration: 1,
    ease: "power2.inOut"
  });
  tl.to('.fourteen-text', {
    color: 'white',
    duration: 1,
    ease: "power2.inOut"
  });
  // card mission
  tl.to('.card-mission', {
    padding: '0',
    transition: .5,
    duration: 1,
    ease: "power2.inOut"
  });
  tl.to('.first-img', {
    opacity: '0',
    transition: .5,
    duration: 1,
    ease: "power2.inOut",
    yoyo: true
  });
  tl.to('.card-mission2', {
    transform: 'translateY(-300px)',
    transition: 0.8,
    transitionProperty: 1,
    visibility: 'visible',
    duration: 1,
    ease: "power2.inOut",
    yoyo: true
  });

  tl.to('.first-name', {
    transition: 0.5,
    transform: 'translateY(-50px)'
  })
  tl.to('.second-name', {
    transition: 0.5,
    transform: 'translateY(-25px)'
  })

  tl.to('.fifteen-text', {
    color: 'white',
  });
  tl.to('.sixteen-text', {
    color: 'white',
  });
  tl.to('.seventeen-text', {
    color: 'white',
  });
  tl.to('.eighteen-text', {
    color: 'white',
  });
  tl.to('.nineteen-text', {
    color: 'white',
  });
  tl.to('.twenty-text', {
    color: 'white',
  });
  tl.to('.twenty-one-text', {
    color: 'white',
  });
  tl.to('.twenty-two-text', {
    color: 'white',
  });
  tl.to('.twenty-three-text', {
    color: 'white',
  });
  tl.to('.twenty-four-text', {
    color: 'white',
  });


  tl.to('.card-mission3', {
    transform: 'translateY(-300px)',
    transition: 0.8,
    visibility: 'visible',
    duration: 1,
    ease: "power2.inOut",
    yoyo: true
  });
  tl.to('.second-name', {
    transition: 0.5,
    transform: 'translateY(-80px)',
    duration: 1,
    ease: "power2.inOut",
    yoyo: true
  })
  tl.to('.third-name', {
    transition: 0.5,
    transform: 'translateY(-50px)',
    duration: 1,
    ease: "power2.inOut",
    yoyo: true
  })

  tl.to('.second-img', {
    opacity: '0',
    duration: 1,
    ease: "power2.inOut",
    yoyo: true
  });
  tl.to('.twenty-five-text', {
    color: 'white',
    duration: 1,
    ease: "power2.inOut"
  });
  tl.to('.twenty-six-text', {
    color: 'white',
    duration: 1,
    ease: "power2.inOut"
  });
  tl.to('.twenty-seven-text', {
    color: 'white',
    duration: 1,
    ease: "power2.inOut"
  });
  tl.to('.twenty-eight-text', {
    color: 'white',
    duration: 1,
    ease: "power2.inOut"
  });
  tl.to('.twenty-nine-text', {
    color: 'white',
    duration: 1,
    ease: "power2.inOut"
  });
  tl.to('.thirty-text', {
    color: 'white',
    duration: 1,
    ease: "power2.inOut"
  });
  tl.to('.thirty-one-text', {
    color: 'white',
    duration: 1,
    ease: "power2.inOut"
  });
  tl.to('.thirty-two-text', {
    color: 'white',
    duration: 1,
    ease: "power2.inOut"
  });
  tl.to('.thirty-third-text', {
    color: 'white',
    duration: 1,
    ease: "power2.inOut"
  });
  tl.to('.thirty-four-text', {
    color: 'white',
    duration: 1,
    ease: "power2.inOut"
  });
  tl.to('.final-text', {
    color: 'white',
    duration: 1,
    ease: "power2.inOut"
  });
});
</script>

<template>
  <div ref="logo" class="helloWorld grid grid-cols-12 pt-[80px] pb-[80px]">
    <div class="col-span-6 w-[555px] mobile-version">
      <div class="card-mission relative">
        <img class="first-img" src="@/assets/img/monkey.svg" alt="">
        <div class="card-mission2 ">
          <img class="second-img" src="@/assets/img/monkey2.svg" alt="">
        </div>
        <div class="card-mission3">
          <img src="@/assets/img/Monkey3.svg" alt="">
        </div>
      </div>
      <div class="flex text-font font-light justify-between text-white mt-[20px] leading-6">
        <ul class="overflow-hidden h-[20px]">
          <li class="first-name">WE</li>
          <li class="second-name">MAGIC</li>
          <li class="third-name">CREATEli</li>
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
        <span class="text-white"> We are a modern</span> <span class="one-text"> and</span><span class="two-text"> innovative</span>
        <span class="first-text"> new</span> <span class="second-text">media</span> <span
          class="third-text"> arts</span>

        <span class="four-text"> tech</span> <span class="five-text">studio,</span> <span
          class="six-text">creatively</span> <span class="seven-text">combining</span> <span
          class="eight-text">art</span>
        <span class="nine-text">and</span> <span class="tan-text">tech</span> <span class="eleven-text">to</span> <span
          class="twelve-text">create</span>
        <span class="thirteen-text"> unique</span>
        <span class="fourteen-text">immersive</span> <span class="fifteen-text">experiences.</span> <span
          class="sixteen-text">Our</span>
        <span class="seventeen-text">mission</span> <span class="eighteen-text">is</span><span
          class="eighteen-text">to</span>
        <span class="nineteen-text">bridge</span> <span class="twenty-text">the</span> <span
          class="twenty-one-text">gap</span> <span class="twenty-two-text">between</span> <span
          class="twenty-three-text">the</span> <span class="twenty-four-text">virtual</span>
        <span class="twenty-five-text">and</span>
        <span class="twenty-six-text"> physical</span> <span class="twenty-seven-text">worlds,</span>
        <span class="twenty-eight-text"> offering</span>
        <span class="twenty-nine-text"> concepts</span>
        <span class="thirty-text"> that</span>
        <span class="thirty-one-text"> empower</span>

        <span class="thirty-two-text"> you</span>
        <span class="thirty-third-text"> to</span>
        <span class="thirty-four-text"> dream</span>
        <span class="final-text"> beyond boundaries.</span>
      </div>
      <button class="btn-about-us flex gap-[5px] items-center">
        <i class="pi pi-arrow-right text-[16px] mr-[3px] mt-[3px] h-[24px] mobile-icon"></i> About us
        <!--        <img src="@/assets/img/ArrowRightBtn.svg" alt="">-->
      </button>
    </div>

    <div class="col-span-6 flex flex-col justify-between mobile-version">
      <div>
      </div>

      <div>
        <div class="text-social mb-[15px]">
          Social:
        </div>
        <div class="flex gap-[15px]">
          <button class="btn-links">
            <!--            <img src="@/assets/img/instagram.svg" alt="">-->
            <i class="pi pi-instagram text-white text-[20px]"></i>
          </button>
          <button class="btn-links">
            <!--            <img src="@/assets/img/tweeter.svg" alt="">-->
            <i class="pi pi-twitter text-white text-[20px]"></i>
          </button>
          <button class="btn-links">
            <!--            <img src="@/assets/img/mdi_linkedin.svg" alt="">-->
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

<style scoped lang="scss">
@media (max-width: 768px) {
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
    line-height: 140% !important; /* 21px */
  }
  .mobile-icon {
    font-size: 14px !important;
    margin-top: 10px;
  }
  .mobile-version-animation {
    grid-column: span 12 / 12 !important;
    margin-left: 0;
    margin-top: 40px;

  }
  iframe {
    width: 270px !important;
    height: 185px !important;
    transform: scaleX(-1);
  }
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
  overflow: hidden;
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
  color: #FFFFFF99;
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