<script setup>

import {onMounted, ref} from "vue";

onMounted(() => {
  const flipCards = document.querySelectorAll('.flip-card');

  flipCards.forEach(card => {
    card.addEventListener('mousemove', () => {
      card.style.transform = 'rotateY(180deg)';
    });

    card.addEventListener('mouseleave', () => {
      setTimeout(() => {
        card.style.transform = 'rotateY(0deg)';
      }, 500)
    });
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

  window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;
    const isMobile = window.innerWidth < 762;
    if (isMobile) {
      if (currentScrollPos >= 595) {
        flipCards[0].style.transform = 'rotateY(180deg)';
      } else flipCards[0].style.transform = 'rotateY(0)';

      if (currentScrollPos >= 1000) {
        flipCards[0].style.transform = 'rotateY(0deg)';
        flipCards[1].style.transform = 'rotateY(180deg)';
      } else flipCards[1].style.transform = 'rotateY(0)';

      if (currentScrollPos >= 1575 && currentScrollPos <= 2000) {
        flipCards[1].style.transform = 'rotateY(0deg)';
        flipCards[2].style.transform = 'rotateY(180deg)';
      } else {
        flipCards[2].style.transform = 'rotateY(0deg)';
      }
    }
  });
})
</script>

<template>
  <div class="flex gap-[20px] justify-between max-md:flex-col md:pt-[80px] pb-[80px] " style="">
    <router-link to="/installations">
      <div class="flip-card glow-effect">
        <div class="card-front">
          <figure>
            <div class="card-front-text">
              THE TECH / INTERACTIVE
            </div>
            <div class="text-all-hybrid">
              <div class="text-logo">
                 <span class="gradient-h">
                  H
               </span>
                <p class="center-logo-hybrid">
                  Installations
                </p>
                <span class="gradient-x">
                   X
               </span>
              </div>
            </div>
            <div class="footer-btn relative bottom-[46px]">
              <img class="relative top-[20px] img-mobile-first" src="../assets/img/Arrow_right.svg" alt="">
              <div>
                <div>
                  <button class="btn-content-hybrid">
                    Holograms
                  </button>
                  <button class="btn-content-hybrid">
                    Interactive
                  </button>
                </div>
                <div class="footer-content mt-[10px]">
                  <button class="btn-content-hybrid">
                    Gaming
                  </button>
                  <button class="btn-content-hybrid">
                    Hybrid IPS
                  </button>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <div class="card-back">
          <figure class="video-background">

            <div class="text-logo text-logo-mobile-back"
                 style="color: white; position:relative; z-index: 33; font-size: 48px; text-align: center; float: left; top: 80px">
              H
              <p class="center-logo-hybrid center-logo-back-mobile" style="color: white; font-size: 15px">
                Installations
              </p>
              X
            </div>
            <div class="img-bg-hybrid">
              <video autoplay loop muted width="320" height="240" playsinline>
                <source
                    src="../assets/video/91ec3544e41e9afbff63c3d000a9a5296073707d839b265710597bd574d824eb_ndrKpibw.mp4"
                    type="video/mp4">
              </video>
              <div class="footer-btn absolute  bottom-[20px]">
                <img src="../assets/img/Arrow_right.svg" alt="">
                <div class="footer-content ">
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </router-link>
    <router-link to="/studio">
      <div class="flip-card glow-effect">
        <div class="card-front">
          <figure>
            <div class="card-front-text">
              THE
              <br>
              Content
            </div>
            <div class="text-all-hybrid">
              <div class="text-logo " style="color: #FF0000 !important;">
                 <span class="gradient-h">
                  H
               </span>
                <p class="center-logo-hybrid ">
                  Studio
                </p>
                <span class="gradient-x">
                  X
               </span>
              </div>
            </div>
            <div class="footer-btn relative bottom-[4px]">
              <img class="img-mobile" src="../assets/img/Arrow_right.svg" alt="">
              <div class="footer-content ">
                <button class="btn-content-hybrid">
                  Content
                </button>
              </div>
            </div>
          </figure>
        </div>
        <div class="card-back ">
          <figure class="video-background">
            <div class="text-logo text-logo-mobile-back"
                 style="color: white; position:relative; z-index: 33; font-size: 48px; text-align: center; float: left; top: 80px">
              H
              <p class="center-logo-hybrid center-logo-back-mobile" style="color: white; font-size: 15px">
                Studio
              </p>
              X
            </div>
            <div class="img-bg-hybrid">
              <video autoplay loop muted width="320" height="240" playsinline>
                <source
                    src="../assets/video/84d3ee1d02f80623a9f94aaf876be15f12f8030d7abc558fa81e43cf65067340_FU8j2xww.mp4"
                    type="video/mp4">
              </video>
              <div class="footer-btn absolute  bottom-[20px]">
                <img src="../assets/img/Arrow_right.svg" alt="">
                <div class="footer-content ">
                </div>
              </div>
            </div>
          </figure>

        </div>
      </div>
    </router-link>
    <router-link to="/lab">
      <div class="flip-card glow-effect">
        <div class="card-front">
          <figure>
            <div class="card-front-text">
              THE
              <br>
              Experiments
            </div>
            <div class="text-all-hybrid">
              <div class="text-logo" style="color:#FFFF00 ">
               <span class="gradient-h">
                  H
               </span>
                <p class="center-logo-hybrid">
                  lab
                </p>
                <span class="gradient-x">X</span>
              </div>
            </div>
            <div class="footer-btn relative bottom-[5px]">
              <img class="img-mobile" src="../assets/img/Arrow_right.svg" alt="">
              <div class="footer-content mt-[10px] ">
                <button class="btn-content-hybrid">
                  Gaming
                </button>
                <button class="btn-content-hybrid">
                  Hybrid IPS
                </button>
              </div>

            </div>
          </figure>
        </div>

        <div class="card-back ">
          <figure class="video-background">
            <div class="text-logo text-logo-mobile-back"
                 style="color: white; position:relative; z-index: 33; font-size: 48px; text-align: center; float: left; top: 80px">
              H
              <p class="center-logo-hybrid center-logo-back-mobile" style="color: white; font-size: 15px">
                lab
              </p>
              X
            </div>
            <div class="img-bg-hybrid">
              <video autoplay loop muted width="320" height="240" playsinline>
                <source
                    src="../assets/video/ac57976749d126f18128abad5cec0903ee50f1bcaab2b1941b03887e69ae9a29_rbIGpUGF.mp4"
                    type="video/mp4">
              </video>
              <div class="footer-btn absolute bottom-[20px]">
                <img src="../assets/img/Arrow_right.svg" alt="">
                <div class="footer-content ">
                </div>
              </div>
            </div>
          </figure>

        </div>

      </div>
    </router-link>

  </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato');

@media screen and (max-width: 992px) {
  .flip-card {
    width: 100% !important;
    height: 470px !important;
    justify-content: center !important;
    margin: auto !important;
  }
  .text-logo {
    font-size: 61px !important;
  }
  .center-logo-hybrid {
    font-size: 20px !important;
  }
  .card-front-text {
    font-size: 20px !important;
  }
  .img-mobile {
    position: relative;
    width: 30px;
    height: 30px;
    top: 15px;
  }
  .img-mobile-first {
    position: relative;
    width: 30px;
    height: 30px;
    top: 55px;
  }
  .btn-content-hybrid {
    padding: 8px !important;
    font-size: 12px !important;
  }
  .text-logo-mobile-back {
    font-size: 24px !important;
    top: 150px !important;
    line-height: 10px !important;
  }
  .center-logo-back-mobile {
    font-size: 8px !important;
    line-height: 20px !important;
  }
  .glow-container {
    display: none;
  }
}

.video-background {
  position: relative;
  width: 100%;
  height: 740px;
  margin: 0;
  padding: 0;
}

.img-bg-hybrid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100%;
  z-index: -1;
}

.img-bg-hybrid video {
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  //z-index: 22000000000;

}

.text-logo {

  font-family: Alexandria, sans-serif;
  font-size: 96px;
  font-weight: 900;
  line-height: 0.7;
  margin: 0;
  position: absolute;
  top: 40%;
  transform: translate(0, -40%);
}

.footer-content {
  display: flex;
  gap: 10px;
  float: right;
}

.btn-content-hybrid {
  border-radius: 100px;
  padding: 10px;
  color: white;
  border: 1px solid #828282;
  font-family: Alexandria, sans-serif;
  font-weight: 300;
  line-height: 19px;
  font-size: 14px;
  cursor: default;
}

.center-logo-hybrid {
  font-family: Alexandria, sans-serif;
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  color: white;
  padding: 0;
  margin: 0;
  text-transform: uppercase;
}

.footer-btn {
  display: flex;
  justify-content: space-between;
}

.text-all-hybrid {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 80%;
  width: 100%;
}

.flip-card {
  width: 440px;
  height: 740px;
  position: relative;
  transform-style: preserve-3d;
  transition: .6s .1s;
  z-index: 33;
}

.card-front,
.card-back {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: #111112;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

}

.card-front {
  transform: rotateY(0deg);
  z-index: 2;
  background: #111112;

  &-text {
    font-family: Alexandria, sans-serif;
    font-weight: 300;
    font-size: 32px;
    background: linear-gradient(to left, #828282, #FFFFFF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    width: 212px;
  }
}

.card-back {
  transform: rotateY(180deg);
  z-index: 1;
}

figure {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 40px 30px 40px 30px !important;
  z-index: -1;
}

.gradient-h {
  background: linear-gradient(160deg, #0037C3 15.85%, #7E06BD 105.14%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.gradient-x {
  background: linear-gradient(160deg, #0037C3 13.85%, #7E06BD 55.14%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>