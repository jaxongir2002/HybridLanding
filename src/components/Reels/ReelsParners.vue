<script setup>
import {onMounted} from "vue";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from "gsap";

onMounted(() => {
  const isMobile = window.matchMedia('(max-width: 767px)').matches;
  if (!isMobile) {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    let mySplitText = new SplitText(".animation-text-reels", {type: "chars"});
    let chars = mySplitText.chars;

    let mySplitTextTwo = new SplitText(".animation-text-two-reels", {type: "chars"});
    let charsTwo = mySplitTextTwo.chars;
    const slides = document.querySelectorAll(".cards-company-reels");
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".big-div-reels",
        start: "top 10%",
        end: `+=${slides.length * 5}%`,
        scrub: true,
        lazy: true,
      },
      defaults: {ease: "none"},
    });
    tl.from(chars, {
      yPercent: -140,
      stagger: 0.02,
      ease: "back.out",
      opacity: 0,
    });

    tl.from(
        charsTwo,
        {
          yPercent: 140,
          stagger: 0.02,
          ease: "back.out",
          opacity: 0,
          yoyo: true,
        },
        0);
    tl.fromTo(
        ".first-reels",
        {
          yPercent: 55,
          yoyo: true,
          transition: 2.5,
          stagger: 0.2,
        },
        {
          yPercent: 0,
          stagger: 0.2,
          yoyo: true,
          transition: 2.5,
        }
    );
  }
  
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
})

</script>

<template>
  <div class="text-center big-div-reels relative">
    <div class="smooth-wrapper">
      <div class="title-containers relative z-10">
        <div class="text-work animation-text-reels">We work with humans</div>
        <div class="text-work animation-text-two-reels">and more than humans</div>
      </div>
      <div class="relative z-20 content-div">
        <div
            class="flex gap-[20px] all-cards-partners max-sm:gap-[8px] max-sm:justify-center"
        >
          <div class="first-reels">
            <div
                class="cards-company-reels h-[250px] p-[80px] max-sm:h-[104.478px] max-sm:p-[30px] glow-effect"
            >
              <img
                  class="w-full h-auto object-cover"
                  src="@/assets/img/Netflix.svg"
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
                class="cards-company-reels h-[140px] p-[80px] max-sm:p-[30px] max-sm:h-[58.508px] glow-effect"
            >
              <img
                  class="w-full h-auto object-cover"
                  src="@/assets/img/Dyson.svg"
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
                class="cards-company-reels h-[220px] p-[120px] max-sm:p-[40px] max-sm:h-[91.94px] glow-effect"
            >
              <img
                  class="w-full h-auto object-cover"
                  src="@/assets/img/Unilever.svg"
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
                class="cards-company-reels h-[180px] p-[80px] max-sm:p-[30px] max-sm:h-[75.224px] glow-effect"
            >
              <img
                  class="w-full h-auto object-cover"
                  src="@/assets/img/vodafone.svg"
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
                class="cards-company-reels h-[210px] p-[80px] max-sm:p-[30px] max-sm:h-[87.761px] glow-effect">
              <img
                  class="w-full h-auto object-cover"
                  src="@/assets/img/SelaOrginal.svg"
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
                class="cards-company-reels h-[210px] p-[80px] max-sm:p-[30px] max-sm:h-[87.761px] glow-effect"
            ><img class="w-full h-auto object-cover" src="@/assets/img/empireEnter.png" alt="">
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
                class="cards-company-reels h-[213px] p-[100px] max-sm:p-[30px] max-sm:h-[91.94px] glow-effect"
            >
              <img
                  class="w-full h-auto object-cover"
                  src="@/assets/img/NOZOMI.svg"
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
          <div class="second first-reels">
            <div
                class="cards-company-reels h-[180px] p-[80px] max-sm:p-[30px] max-sm:h-[75.224px] glow-effect"
            >
              <img
                  class="w-full h-auto object-cover"
                  src="@/assets/img/Tiktok.svg"
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
                class="cards-company-reels h-[230px] p-[80px] max-sm:p-[30px] max-sm:h-[96.119px] glow-effect"
            >
              <img
                  class="w-full h-auto object-cover"
                  src="@/assets/img/redBUll.svg"
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
                class="cards-company-reels h-[210px] p-[80px] max-sm:p-[30px] max-sm:h-[87.761px] glow-effect"
            >
              <img
                  class="w-full h-auto object-cover"
                  src="@/assets/img/vuseLogo.svg"
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
                class="cards-company-reels h-[160px] p-[80px] max-sm:p-[30px] max-sm:h-[66.866px] glow-effect"
            >
              <img
                  class="w-full h-auto object-cover"
                  src="@/assets/img/madic.svg"
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
                class="cards-company-reels h-[240px] p-[80px] max-sm:p-[30px] max-sm:h-[100.299px] glow-effect"
            >
              <img
                  class="w-full h-auto object-cover"
                  src="@/assets/img/Sharaf.svg"
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
                class="cards-company-reels h-[240px] p-[80px] max-sm:p-[30px] max-sm:h-[100.299px] glow-effect"
            >
              <img
                  class="w-full h-auto object-cover"
                  src="@/assets/img/clap.png"
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
                class="cards-company-reels h-[180px] p-[100px] max-sm:p-[30px] max-sm:h-[91.94px] glow-effect"
            >
              <img
                  class="w-full h-auto object-cover"
                  src="@/assets/img/DubaiPlace.png"
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
          <div class="third first-reels">
            <div class="cards-company-reels h-[220px] p-[80px] max-sm:p-[30px] glow-effect">
              <img
                  class="w-full h-auto object-cover"
                  src="@/assets/img/angahami.png"
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
            <div class="cards-company-reels h-[250px] p-[80px] max-sm:p-[30px] glow-effect">
              <img
                  class="w-full h-auto object-cover"
                  src="@/assets/img/Ikea.svg"
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
            <div class="cards-company-reels h-[220px] p-[80px] max-sm:p-[30px] glow-effect">
              <img
                  class="w-full h-auto object-cover"
                  src="@/assets/img/events.svg"
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
            <div class="cards-company-reels h-[200px] p-[80px] max-sm:p-[30px] glow-effect">
              <img
                  class="w-full h-auto object-cover"
                  src="@/assets/img/Expo2020.svg"
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

            <div class="cards-company-reels h-[180px] p-[80px] max-sm:p-[30px] glow-effect">
              <img
                  class="w-full h-auto object-cover"
                  src="@/assets/img/Boeker.svg"
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
            <div class="cards-company-reels h-[190px] p-[80px] max-sm:p-[30px] glow-effect">
              <img
                  class="w-full h-auto object-cover"
                  src="@/assets/img/IRIS.svg"
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
            <div class="cards-company-reels h-[180px] p-[80px] max-sm:p-[30px] glow-effect">
              <img
                  class="w-full h-auto object-cover"
                  src="@/assets/img/BIVWORLD.svg"
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
          <div class="four first-reels">
            <div class="cards-company-reels h-[190px] p-[80px] max-sm:p-[30px] glow-effect">
              <img
                  class="w-full h-auto object-cover"
                  src="@/assets/img/srt.svg"
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
            <div class="cards-company-reels h-[230px] p-[80px] max-sm:p-[30px] glow-effect">
              <img
                  class="w-full h-auto object-cover"
                  src="@/assets/img/2022Logo.svg"
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
            <div class="cards-company-reels h-[220px] p-[80px] max-sm:p-[30px] glow-effect">
              <img
                  class="w-full h-auto object-cover"
                  src="@/assets/img/SunsetGroup.png"
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
            <div class="cards-company-reels h-[220px] p-[80px] max-sm:p-[30px] glow-effect">
              <img
                  class="w-full h-auto object-cover"
                  src="@/assets/img/srmo.svg"
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

            <div class="cards-company-reels h-[170px] p-[80px] max-sm:p-[30px] glow-effect">
              <img
                  class="w-full h-auto object-cover"
                  src="@/assets/img/RTA.svg"
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
            <div class="cards-company-reels h-[240px] p-[80px] max-sm:p-[30px] glow-effect">
              <img
                  class="w-full h-auto object-cover"
                  src="@/assets/img/ESCWA.svg"
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
            <div class="cards-company-reels h-[170px] p-[80px] max-sm:p-[30px] glow-effect">
              <img
                  class="w-full h-auto object-cover"
                  src="@/assets/img/lastImg.svg"
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
  .cards-company-reels {
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

.first-reels {
  transition: 0.5s;
  position: sticky;
}

.title-containers {
  width: 100%;
  height: 50vh;
  position: sticky;
  left: 0;
  top: 0;
  transform: translate(0%, 85%);
}

.cards-company-reels {
  border-radius: 12px;
  border: 1px solid;
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
