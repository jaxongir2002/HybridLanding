<script setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import {ref} from "vue";
import {FreeMode, Navigation} from "swiper/modules";
import WatermelonJSON from "@/assets/animation/whiteAnimation.json";
import {LottieAnimation} from "lottie-web-vue";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const modules = ref([FreeMode, Navigation])
const props = defineProps({
  sliderVideo:{
    type:Array,
    default:[]
  }
})
</script>

<template>
  <div class="studio-video relative z-10">
    <swiper
        :slidesPerView="1"
        :spaceBetween="20"
        :pagination="{ clickable: true }"
        :modules="modules"
        class="mySwiper"
        :navigation="true"
    >
      <swiper-slide v-for="(item, index) in props.sliderVideo" :key="index">
        <div class="card-blog gap-5 relative z-20 mt-[40px] max-sm:mt-0 mb-[80px]">
          <div class="absolute flex flex-col justify-between h-[100%] left-[40px] max-sm:left-[20px] max-sm:top-[15px]">
            <div class="text-video-header">
              {{ item.title }}
            </div>
            <div class="lottie-animate">
              <LottieAnimation
                  :animation-data="WatermelonJSON"
                  :auto-play="true"
                  :loop="true"
                  :speed="1"
                  width="140px" height="194px"
                  ref="anim" />
            </div>
          </div>
          <div class="rounded-[9px] overflow-hidden h-[783px] max-sm:h-[180px]">
            <video autoplay loop muted playsinline :src="item.video">
            </video>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>

</template>
<style lang="scss">
.studio-video {
  .swiper-button-prev {
    position: absolute !important;
    top: 770px !important;
    left: 85% !important;
  }

  .swiper-button-next {
    position: absolute !important;
    top: 770px !important;
    right: 5% !important;
  }
}
</style>
<style scoped lang="scss">
@media screen and (max-width: 992px) {
  .text-video-header{
    font-size: 20px !important;
  }
  iframe{
    display: none;
  }
  .card-blog{
    padding: 10px !important;
  }

}

video {
  width: 100%;
  object-fit: cover;
}

.card-blog {
  border-radius: 16px;
  border: 1.467px solid rgba(255, 255, 255, 0.25);
  background: rgba(222, 222, 222, 0.05);
  backdrop-filter: blur(86.53334045410156px);
  padding: 20px;
  position: relative;
}

iframe {
  transform: scaleX(-1);
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
</style>