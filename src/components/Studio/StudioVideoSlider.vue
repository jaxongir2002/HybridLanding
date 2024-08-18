<script setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import {ref} from "vue";
import {FreeMode, Navigation} from "swiper/modules";

const modules = ref([FreeMode, Navigation])
</script>

<template>
  <div class="studio-video">
    <swiper
        :slidesPerView="1"
        :spaceBetween="20"
        :pagination="{ clickable: true }"
        :modules="modules"
        class="mySwiper"
        :navigation="true"
    >
      <swiper-slide v-for="(item, index) in 5" :key="index">
        <div class="card-blog gap-5 relative z-20 mt-[40px]">
          <div class="absolute flex flex-col justify-between h-[100%] left-[40px]">
            <div class="text-video-header">
              Hybrid ips
            </div>
            <iframe width="140px" height="194px"
                    src="https://lottie.host/embed/8e80c604-e0af-4b03-96ce-f75675059aa0/Tyehx7Emkq.json"></iframe>
          </div>
          <div class="rounded-[9px] overflow-hidden h-[783px]">
            <video autoplay loop muted playsinline>
              <source src="@/assets/video/91ec3544e41e9afbff63c3d000a9a5296073707d839b265710597bd574d824eb_ndrKpibw.mp4"
                      type="video/mp4">
            </video>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>

</template>
<style lang="scss">
.studio-video {
  .swiper-button-prev{
    position: absolute !important;
    top: 770px !important;
    left: 85% !important;
  }
  .swiper-button-next{
    position: absolute !important;
    top: 770px !important;
    right:5% !important;
  }
}
</style>
<style scoped lang="scss">
video{
  width: 100%;
  object-fit: cover;

}
.card-blog{
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