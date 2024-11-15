<script setup>
import {onMounted, ref, onBeforeUnmount} from "vue";

const props = defineProps({
  items: {
    type: Array,
    default: []
  }
})
const flipCards = ref([])

onMounted(() => {

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (flipCards.value.length > 0) {
      if (currentScrollPos >= 4000) {
        flipCards.value[0].classList.add('card-full');
      } else {
        flipCards.value[0].classList.remove('card-full');
      }

      if (currentScrollPos >= 4700) {
        flipCards.value[0].classList.remove('card-full');
        flipCards.value[1].classList.add('card-full');
      } else {
        flipCards.value[1].classList.remove('card-full');
      }

      if (currentScrollPos >= 5215) {
        flipCards.value[1].classList.remove('card-full');
        flipCards.value[2].classList.add('card-full');
      } else {
        flipCards.value[2].classList.remove('card-full');
      }
    }
  };

  window.addEventListener('scroll', handleScroll);

  // Cleanup event listener on component unmount
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
  });
});
</script>

<template>
  <div class="flex justify-between items-center max-sm:hidden m-auto">
    <div class="text-left-right relative z-10">
      Team
    </div>
    <div class="flex flex-col slider-container items-center mt-[20%] relative z-10">
      <div ref="flipCards" class="card-img-slider relative" v-for="(item, index) in props.items" :key="index">
        <div class="nav-title">
          {{ item.title }}
        </div>
        <video preload="metadata" loop muted autoplay playsinline>
          <source :src="item.video"
                  type="video/mp4">
        </video>
        <div class="btn-container grid grid-cols-12 gap-[10px] absolute bottom-[40px] left-[30px]">
          <button class="button-team col-span-6">
            Holograms
          </button>
          <button class="button-team col-span-6">
            Interactive
          </button>
          <button class="button-team col-span-6">
            Gaming
          </button>
          <button class="button-team col-span-6">
            Hybrid IPS
          </button>
        </div>
      </div>
    </div>
    <div class="text-left-right relative z-10">
      Lets create
      <br>
      <div class="text-right">magic!</div>
    </div>
  </div>
  <div class="mobile-version mt-[80px] relative z-10">
    <div class="text-left-right relative z-10">
      Department
    </div>
    <div class="flex flex-col items-center mt-[20%] relative z-10">
      <div class="card-img-slider relative" v-for="(item, index) in items" :key="index">
        <div class="nav-title">
          {{ item.title }}
        </div>
        <video :src="item.video" preload="metadata" loop muted autoplay playsinline>
        </video>
        <div class="btn-container grid grid-cols-12 gap-[10px] absolute bottom-[40px] left-[30px]">
          <button class="button-team col-span-6">
            Holograms
          </button>
          <button class="button-team col-span-6">
            Interactive
          </button>
          <button class="button-team col-span-6">
            Gaming
          </button>
          <button class="button-team col-span-6">
            Hybrid IPS
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 992px) {
  .mobile-version {
    display: block !important;
  }
  .card-img-slider {
    opacity: 1 !important;
    transform: scale(1) !important;
    width: 100% !important;
    height: 429px !important;
    margin-top: 20px !important;
  }
  .text-left-right {
    font-size: 20px !important;
    position: relative;
    top: 50px;
  }
  .nav-title {
    font-size: 20px !important;
  }
  .button-team {
    padding: 8px !important;
    font-size: 12px !important;
  }
}

.mobile-version {
  display: none;
}

.slider-container {
  transition: 1s;
}

.text-left-right {
  color: var(--White, #F9F9F9);
  font-family: Alexandria, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 31.2px */
  text-transform: uppercase;
}

.card-img-slider {
  border-radius: 12px;
  border: 1.2px solid rgba(255, 255, 255, 0.05);
  background: rgba(222, 222, 222, 0.05);
  backdrop-filter: blur(70.80000305175781px);
  padding: 18px;
  width: 440px;
  height: 612px;
  flex-shrink: 0;
  transition: 0.5s all;
  transform: scale(0.8);
  opacity: 0.5;

  video {
    border-radius: 12px;
    object-fit: cover;
    height: 100%;
    width: 100%;
    flex-shrink: 0;
  }

  .nav-title {
    position: absolute;
    color: var(--White, #F9F9F9);
    text-align: center;
    font-family: Alexandria, sans-serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 900;
    line-height: 130%; /* 65px */
    text-transform: uppercase;
    left: 30px;
    top: 20px;
  }

  .button-team {
    border-radius: 500px;
    border: 0.5px solid #828282;
    background: radial-gradient(533.15% 49.81% at 50.19% 50.62%, rgba(250, 250, 250, 0.30) 0%, rgba(250, 250, 250, 0.00) 100%);
    backdrop-filter: blur(64.44999694824219px);
    display: flex;
    padding: 10px;
    align-items: center;
    gap: 10px;
    color: var(--White, #F9F9F9);
    font-family: Alexandria, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
}

.card-full {
  width: 670px;
  height: 612px;
  flex-shrink: 0;
  transform: scale(1.05);
  opacity: 1;
}
</style>