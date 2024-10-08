<script setup>
import {onMounted, onBeforeUnmount, ref} from "vue";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(SplitText, ScrollTrigger);

let tl;
const bigDiv = ref(null);

const initAnimations = () => {
  const mySplitText = new SplitText(".animation-text-home", {type: "chars"});
  const chars = mySplitText.chars;

  const mySplitTextTwo = new SplitText(".animation-text-two-home", {type: "chars"});
  const charsTwo = mySplitTextTwo.chars;

  const slides = document.querySelectorAll(".cards-company-home");
  const first = document.querySelectorAll('.first');

  tl = gsap.timeline({
    scrollTrigger: {
      trigger: bigDiv.value,
      start: "top 10%",
      end: `+=${slides.length * 5}%`,
      scrub: true,
    },
    defaults: {ease: "none"},
  });

  tl.from(chars, {
    yPercent: -140,
    stagger: 0.02,
    ease: "back.out",
    opacity: 0,
  });

  tl.from(charsTwo, {
    yPercent: 140,
    stagger: 0.02,
    ease: "back.out",
    opacity: 0,
  }, 0);

  tl.fromTo(first,
      {yPercent: 55, transition: 2.5,},
      {yPercent: 0, transition: 2.5, duration: 2.5, stagger: 0.2}
  );

  return tl;
};

onMounted(() => {
  tl = initAnimations();
  window.addEventListener('popstate', () => {
    tl = initAnimations();
  });
  (function setGlowEffectRx() {
    const glowEffects = document.querySelectorAll(".glow-effect");

    glowEffects.forEach((glowEffect) => {
      const glowLines = glowEffect.querySelectorAll("rect");
      const rx = getComputedStyle(glowEffect).borderRadius;

      glowLines.forEach((line) => {
        line.setAttribute("rx", rx);
      });
    });
  })();
});

onBeforeUnmount(() => {
  if (tl) {
    tl.kill(); // Kill the timeline if it exists
  }
  ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill all ScrollTriggers
});
</script>

<template>
  <div class="text-center big-div-home relative" ref="bigDiv">
    <div class="smooth-wrapper">
      <div class="title-containers relative z-10">
        <div class="text-work animation-text-home">We work with humans</div>
        <div class="text-work animation-text-two-home">and more than humans</div>
      </div>
      <div class="relative z-20 content-div">
        <div
            class="flex gap-[20px] all-cards-partners max-sm:gap-[8px] max-sm:justify-center"
        >
          <div ref="first" class="first">
            <div
                class="cards-company-home h-[250px] p-[80px] max-sm:h-[104.478px] max-sm:p-[30px] glow-effect"
            >
              <img
                  class="w-full h-auto object-cover"
                  src="../assets/img/Netflix.svg"
                  alt=""
              />
              <svg class="glow-container">
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-blur"
                ></rect>
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-line"
                ></rect>
              </svg>
            </div>
            <div
                class="cards-company-home h-[140px] p-[80px] max-sm:p-[30px] max-sm:h-[58.508px] glow-effect"
            >
              <img
                  class="w-full h-auto object-cover"
                  src="../assets/img/Dyson.svg"
                  alt=""
              />
              <svg class="glow-container">
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-blur"
                ></rect>
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-line"
                ></rect>
              </svg>
            </div>
            <div
                class="cards-company-home h-[220px] p-[120px] max-sm:p-[40px] max-sm:h-[91.94px] glow-effect"
            >
              <img
                  class="w-full h-auto object-cover"
                  src="../assets/img/Unilever.svg"
                  alt=""
              />
              <svg class="glow-container">
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-blur"
                ></rect>
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-line"
                ></rect>
              </svg>
            </div>
            <div
                class="cards-company-home h-[180px] p-[80px] max-sm:p-[30px] max-sm:h-[75.224px] glow-effect"
            >
              <img
                  class="w-full h-auto object-cover"
                  src="../assets/img/vodafone.svg"
                  alt=""
              />
              <svg class="glow-container">
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-blur"
                ></rect>
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-line"
                ></rect>
              </svg>
            </div>
            <div
                class="cards-company-home h-[210px] p-[80px] max-sm:p-[30px] max-sm:h-[87.761px] glow-effect">
              <img
                  class="w-full h-auto object-cover"
                  src="../assets/img/SelaOrginal.svg"
                  alt=""
              />
              <svg class="glow-container">
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-blur"
                ></rect>
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-line"
                ></rect>
              </svg>
            </div>
            <div
                class="cards-company-home h-[210px] p-[80px] max-sm:p-[30px] max-sm:h-[87.761px] glow-effect"
            ><img class="w-full h-auto object-cover" src="../assets/img/empireEnter.png" alt="">
              <svg class="glow-container">
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-blur"
                ></rect>
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-line"
                ></rect>
              </svg>
            </div>
            <div
                class="cards-company-home h-[213px] p-[100px] max-sm:p-[30px] max-sm:h-[91.94px] glow-effect"
            >
              <img
                  class="w-full h-auto object-cover last-img"
                  src="../assets/img/NOZOMI.svg"
                  alt=""
              />
              <svg class="glow-container">
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-blur"
                ></rect>
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-line"
                ></rect>
              </svg>
            </div>
          </div>
          <div ref="first"  class="second first">
            <div
                class="cards-company-home h-[180px] p-[80px] max-sm:p-[30px] max-sm:h-[75.224px] glow-effect"
            >
              <img
                  class="w-full h-auto object-cover"
                  src="../assets/img/Tiktok.svg"
                  alt=""
              />
              <svg class="glow-container">
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-blur"
                ></rect>
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-line"
                ></rect>
              </svg>
            </div>
            <div
                class="cards-company-home h-[230px] p-[80px] max-sm:p-[30px] max-sm:h-[96.119px] glow-effect"
            >
              <img
                  class="w-full h-auto object-cover"
                  src="../assets/img/redBUll.svg"
                  alt=""
              />
              <svg class="glow-container">
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-blur"
                ></rect>
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-line"
                ></rect>
              </svg>
            </div>
            <div
                class="cards-company-home h-[210px] p-[80px] max-sm:p-[30px] max-sm:h-[87.761px] glow-effect"
            >
              <img
                  class="w-full h-auto object-cover"
                  src="../assets/img/vuseLogo.svg"
                  alt=""
              />
              <svg class="glow-container">
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-blur"
                ></rect>
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-line"
                ></rect>
              </svg>
            </div>
            <div
                class="cards-company-home h-[160px] p-[80px] max-sm:p-[30px] max-sm:h-[66.866px] glow-effect"
            >
              <img
                  class="w-full h-auto object-cover"
                  src="../assets/img/madic.svg"
                  alt=""
              />
              <svg class="glow-container">
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-blur"
                ></rect>
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-line"
                ></rect>
              </svg>
            </div>

            <div
                class="cards-company-home h-[240px] p-[80px] max-sm:p-[30px] max-sm:h-[100.299px] glow-effect"
            >
              <img
                  class="w-full h-auto object-cover"
                  src="../assets/img/Sharaf.svg"
                  alt=""
              />
              <svg class="glow-container">
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-blur"
                ></rect>
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-line"
                ></rect>
              </svg>
            </div>
            <div
                class="cards-company-home h-[240px] p-[80px] max-sm:p-[30px] max-sm:h-[100.299px] glow-effect"
            >
              <img
                  class="w-full h-auto object-cover"
                  src="../assets/img/clap.png"
                  alt=""
              />
              <svg class="glow-container">
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-blur"
                ></rect>
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-line"
                ></rect>
              </svg>
            </div>
            <div
                class="cards-company-home h-[180px] p-[100px] max-sm:p-[30px] max-sm:h-[91.94px] glow-effect"
            >
              <img
                  class="w-full h-auto object-cover last-img"
                  src="../assets/img/DubaiPlace.png"
                  alt=""
              />
              <svg class="glow-container">
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-blur"
                ></rect>
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-line"
                ></rect>
              </svg>
            </div>
          </div>
          <div ref="first"  class="third first">
            <div class="cards-company-home h-[220px] p-[80px] max-sm:p-[30px] glow-effect">
              <img
                  class="w-full h-auto object-cover"
                  src="../assets/img/angahami.png"
                  alt=""
              />
              <svg class="glow-container">
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-blur"
                ></rect>
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-line"
                ></rect>
              </svg>
            </div>
            <div class="cards-company-home h-[250px] p-[80px] max-sm:p-[30px] glow-effect">
              <img
                  class="w-full h-auto object-cover"
                  src="../assets/img/Ikea.svg"
                  alt=""
              />
              <svg class="glow-container">
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-blur"
                ></rect>
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-line"
                ></rect>
              </svg>
            </div>
            <div class="cards-company-home h-[220px] p-[80px] max-sm:p-[30px] glow-effect">
              <img
                  class="w-full h-auto object-cover"
                  src="../assets/img/events.svg"
                  alt=""
              />
              <svg class="glow-container">
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-blur"
                ></rect>
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-line"
                ></rect>
              </svg>
            </div>
            <div class="cards-company-home h-[200px] p-[80px] max-sm:p-[30px] glow-effect">
              <img
                  class="w-full h-auto object-cover"
                  src="../assets/img/Expo2020.svg"
                  alt=""
              />
              <svg class="glow-container">
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-blur"
                ></rect>
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-line"
                ></rect>
              </svg>
            </div>

            <div class="cards-company-home h-[180px] p-[80px] max-sm:p-[30px] glow-effect">
              <img
                  class="w-full h-auto object-cover"
                  src="../assets/img/Boeker.svg"
                  alt=""
              />
              <svg class="glow-container">
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-blur"
                ></rect>
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-line"
                ></rect>
              </svg>
            </div>
            <div class="cards-company-home h-[190px] p-[80px] max-sm:p-[30px] glow-effect">
              <img
                  class="w-full h-auto object-cover"
                  src="../assets/img/IRIS.svg"
                  alt=""
              />
              <svg class="glow-container">
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-blur"
                ></rect>
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-line"
                ></rect>
              </svg>
            </div>
            <div class="cards-company-home h-[180px] p-[80px] max-sm:p-[30px] glow-effect">
              <img
                  class="w-full h-auto object-cover"
                  src="../assets/img/BIVWORLD.svg"
                  alt=""
              />
              <svg class="glow-container">
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-blur"
                ></rect>
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-line"
                ></rect>
              </svg>
            </div>
          </div>
          <div ref="first"  class="four first">
            <div class="cards-company-home h-[190px] p-[80px] max-sm:p-[30px] glow-effect">
              <img
                  class="w-full h-auto object-cover"
                  src="../assets/img/srt.svg"
                  alt=""
              />
              <svg class="glow-container">
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-blur"
                ></rect>
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-line"
                ></rect>
              </svg>
            </div>
            <div class="cards-company-home h-[230px] p-[80px] max-sm:p-[30px] glow-effect">
              <img
                  class="w-full h-auto object-cover"
                  src="../assets/img/2022Logo.svg"
                  alt=""
              />
              <svg class="glow-container">
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-blur"
                ></rect>
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-line"
                ></rect>
              </svg>
            </div>
            <div class="cards-company-home h-[220px] p-[80px] max-sm:p-[30px] glow-effect">
              <img
                  class="w-full h-auto object-cover"
                  src="../assets/img/SunsetGroup.png"
                  alt=""
              />
              <svg class="glow-container">
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-blur"
                ></rect>
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-line"
                ></rect>
              </svg>
            </div>
            <div class="cards-company-home h-[220px] p-[80px] max-sm:p-[30px] glow-effect">
              <img
                  class="w-full h-auto object-cover"
                  src="../assets/img/srmo.svg"
                  alt=""
              />
              <svg class="glow-container">
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-blur"
                ></rect>
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-line"
                ></rect>
              </svg>
            </div>

            <div class="cards-company-home h-[170px] p-[80px] max-sm:p-[30px] glow-effect">
              <img
                  class="w-full h-auto object-cover"
                  src="../assets/img/RTA.svg"
                  alt=""
              />
              <svg class="glow-container">
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-blur"
                ></rect>
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-line"
                ></rect>
              </svg>
            </div>
            <div class="cards-company-home h-[240px] p-[80px] max-sm:p-[30px] glow-effect">
              <img
                  class="w-full h-auto object-cover"
                  src="../assets/img/ESCWA.svg"
                  alt=""
              />
              <svg class="glow-container">
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-blur"
                ></rect>
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-line"
                ></rect>
              </svg>
            </div>
            <div class="cards-company-home h-[170px] p-[80px] max-sm:p-[30px] glow-effect">
              <img
                  class="w-full h-auto object-cover "
                  src="../assets/img/lastImg.svg"
                  alt=""
              />
              <svg class="glow-container">
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-blur"
                ></rect>
                <rect
                    pathLength="100"
                    stroke-linecap="round"
                    class="glow-line"
                ></rect>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 992px) {
  .text-work {
    font-size: 20px !important;
  }
  .cards-company-home {
    width: 100% !important;
    margin-top: 8px !important;
  }
  .third {
    display: none;
  }
  .four {
    display: none;
  }
  .last-img {
    width: 70.833px;
    height: 70.881px;
  }
}

.text-work {
  color: #fff;
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

.first {
  transition: 0.5s;
  position: sticky;
}

.title-containers {
  width: 100%;
  height: 50vh;
  position: sticky;
  left: 0;
  top: 0;
  transform: translate(0%, 70%);
}

.cards-company-home {
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(222, 222, 222, 0.05);
  backdrop-filter: blur(59px);
  transition: transform 0.5s ease-in-out;
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
