<script setup>
import {LottieAnimation} from "lottie-web-vue"
import {onMounted, ref} from "vue";
import WatermelonJSON from "@/assets/animation/whiteAnimation.json"
import LoaderBlog from "@/components/LoaderBlog.vue";

let anim = ref()
const loading = ref(false);
onMounted(() => {
  setTimeout(() => {
    anim.value
  }, 500)
})

const videos = ref([
  {
    title: 'Holograms',
    src: new URL('@/assets/video/91ec3544e41e9afbff63c3d000a9a5296073707d839b265710597bd574d824eb_ndrKpibw.mp4', import.meta.url),
    animationData: WatermelonJSON,
  },
  {
    title: 'Interactive',
    src: new URL('@/assets/video/wecreatemagic_lsF4u8LF.mp4', import.meta.url),
    animationData: WatermelonJSON,
  },
  {
    title: 'Gaming',
    src: new URL('@/assets/video/ac57976749d126f18128abad5cec0903ee50f1bcaab2b1941b03887e69ae9a29_rbIGpUGF.mp4', import.meta.url),
    animationData: WatermelonJSON,
  },
  {
    title: 'Hybrid ips',
    src: new URL('@/assets/video/ac57976749d126f18128abad5cec0903ee50f1bcaab2b1941b03887e69ae9a29_rbIGpUGF.mp4', import.meta.url),
    animationData: WatermelonJSON,
  },
]);
const getColumnClass = (index) => {
  const isMobile = window.matchMedia('(max-width: 767px)').matches;

  if (isMobile) {
    // Mobile version logic
    if (index === 0) {
      return 'col-span-12 h-[196px]'; // First item
    } else if (index % 3 === 0) {
      return 'col-span-12 h-[196px]'; // Every third item after the first
    } else {
      return 'col-span-12 h-[413px]'; // All others in pairs
    }
  } else {
    // Desktop version logic
    if (index === 0) {
      return 'col-span-12 h-[740px]'; // First item
    } else if (index % 3 === 0) {
      return 'col-span-12 h-[740px]'; // Every third item after the first
    } else {
      return 'col-span-6 h-[740px]'; // All others in pairs
    }
  }
};

function loadMoreItems() {
  loading.value = true
  setTimeout(() => {
    videos.value.push({
          title: 'Hybrid ips',
          src: new URL('@/assets/video/ac57976749d126f18128abad5cec0903ee50f1bcaab2b1941b03887e69ae9a29_rbIGpUGF.mp4', import.meta.url),
          animationData: WatermelonJSON,
        },
        {
          title: 'Hybrid ips',
          src: new URL('@/assets/video/ac57976749d126f18128abad5cec0903ee50f1bcaab2b1941b03887e69ae9a29_rbIGpUGF.mp4', import.meta.url),
          animationData: WatermelonJSON,
        },)
    loading.value = false
  }, 1000)
}
</script>

<template>
  <div style=" padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto">

    <div class="grid grid-cols-12 slider-container gap-[20px] mt-[20%]">
      <div
          v-for="(video, index) in videos"
          :key="index"
          :class="getColumnClass(index)"
          class="card-img-slider mobile-version  relative z-10"
      >
        <div class="absolute flex flex-col  justify-between h-[100%] left-[40px]">
          <div class="text-video-header">
            {{ video.title }}
          </div>
          <div class="lottie-animate">
            <LottieAnimation
                :animation-data="video.animationData"
                :auto-play="true"
                :loop="true"
                :speed="1"
                width="140px"
                height="194px"
                ref="anim"
            />
          </div>
        </div>
        <video autoplay loop muted playsinline>
          <source :src="video.src" type="video/mp4"/>
        </video>
      </div>
    </div>
    <LoaderBlog v-if="loading" class="mt-[24px] m-auto"/>

    <div class="flex justify-center mb-[40px]">
      <button @click="loadMoreItems" class="see-more relative z-[33]">
        See more
      </button>
    </div>
  </div>

</template>

<style lang="scss" scoped>

@media screen and (max-width: 992px) {
  .card-img-slider {
    width: 100% !important;

    padding: 10px !important;
  }
  .text-video-header {
    font-size: 20px !important;
    position: relative;
    right: 10px;
    top: 10px;
  }
  .lottie-animate {
    display: none !important;
  }
  .mobile-version-center {
    height: 413px !important;
  }
}

.slider-container {
  transition: 1s;
}

.see-more {
  display: inline-flex;
  padding: 12px 64px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 500px;
  border: 1px solid var(--icon-color, #FFF);
  color: var(--White, var(--icon-color, #FFF));
  text-align: center;
  font-family: Alexandria, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  margin-top: 43px;
  transition: 0.3s all;
}

.see-more:hover {
  border-color: #BF56FF;
  color: #BF56FF;
  transform: scale(1.1);
}

.text-video-header {
  color: #F9F9F9;
  font-family: Alexandria, sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 900;
  line-height: 130%;
  text-transform: uppercase;
}

.card-img-slider {
  border-radius: 12px;
  border: 1.2px solid rgba(255, 255, 255, 0.17);
  background: rgba(222, 222, 222, 0.05);
  backdrop-filter: blur(70.80000305175781px);
  padding: 18px;
  width: 100%;
  flex-shrink: 0;
  transition: 0.5s all;
  position: relative;

  video {
    border-radius: 12px;
    object-fit: cover;
    height: 100%;
    width: 100%;
    flex-shrink: 0;
  }
}
</style>