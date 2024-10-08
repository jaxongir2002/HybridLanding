<script setup>
import {onMounted, watch, ref, watchEffect} from "vue";

const props = defineProps({
  cards: {
    type: Array,
    default: []
  }
})

const isMobile = ref(window.matchMedia('(max-width: 992px)').matches);
const flipCard = ref([]);

function cardRote() {
  if (isMobile.value) {
    flipCard.value.forEach(card => {
      card.style.transform = 'rotateY(180deg)';
    });
  }
}

const rotate = (index) => {
  if (flipCard.value[index]) {
    flipCard.value[index].style.transform = 'rotateY(180deg)';
  }
};
const removeRotate = () => {
  flipCard.value.forEach((el) => {
    if (el) {
        el.style.transform = 'rotateY(0deg)';
    }
  });
};

watch(props.cards, cardRote,{deep:true});
</script>

<template>
  <div class="text-header relative z-[33]">
    Our Services
  </div>
  <div class="grid grid-cols-12 gap-[20px]">

    <div
        v-for="(item, index) in props.cards"
        :key="index"
        ref="flipCard"
        @mousemove="rotate(index)"
        @mouseleave="removeRotate"
        class="flip-card glow-effect max-sm:col-span-12"
        :class="{'col-span-4': index < 3, 'col-span-3 mobile-hidden': index >= 3}"
    >
      <div class="card-front">
        <figure class="flex items-end justify-between">
          <div class="card-text-dev relative uppercase">{{ item?.title }}</div>
          <div class="number-card absolute top-[5%] left-[92%]">0{{ index + 1 }}</div>
        </figure>
      </div>

      <div class="card-back">
        <figure class="video-background">
          <div class="text-logo text-logo-mobile-back" style="color: white;
           position:relative; z-index: 33; font-size: 48px; text-align: center; float: left; top: 40px">
            H
            <p class="center-logo-hybrid center-logo-back-mobile" style="color: white; font-size: 15px">Experience</p>
            X
          </div>
          <div class="img-bg-hybrid relative">
            <video :src="item?.video" autoplay loop muted width="320" height="240" playsinline></video>
            <div class="hidden card-text-dev left-[10px] top-[90%] max-sm:block absolute uppercase">{{
                item?.title
              }}
            </div>
            <div class="number-card absolute bottom-[110%] left-[90%]">0{{ index + 1 }}</div>
          </div>
        </figure>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato');

@media screen and (max-width: 992px) {
  .mobile-hidden {
    display: none;
  }
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
  .text-logo-mobile-back {
    font-size: 24px !important;
    top: -60px !important;
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
  height: 315px;
  margin: 0;
  padding: 0;
}

.text-header {
  color: var(--White, #F9F9F9);
  font-family: Alexandria, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  text-transform: uppercase;
  position: relative;
  bottom: 60px;
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
}

.text-logo {
  color: #CC11B2;
  font-family: Alexandria, sans-serif;
  font-size: 96px;
  font-weight: 900;
  line-height: 0.7;
  margin: 0;
  position: absolute;
  top: 40%;
  transform: translate(0, -40%);
}

.center-logo-hybrid {
  font-family: Alexandria, sans-serif;
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  color: #CC11B2;
  padding: 0;
  margin: 0;
  text-transform: uppercase;
}

.flip-card {
  width: 100%;
  height: 315px;
  position: relative;
  transform-style: preserve-3d;
  transition: .7s .1s;
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
}

.card-text-dev {
  font-family: Alexandria, sans-serif;
  font-weight: 300;
  font-size: 32px;
  background: linear-gradient(to left, #828282, #FFFFFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 100%;
  text-transform: uppercase;
}

.card-back {
  transform: rotateY(180deg);
  z-index: 1;
}

.number-card {
  color: var(--White, #F9F9F9);
  text-align: center;
  font-family: Alexandria, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
}

figure {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px 30px 20px 30px !important;
  z-index: -1;
}
</style>