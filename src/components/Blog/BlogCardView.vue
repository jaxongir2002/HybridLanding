<script setup>
import NavigationMenu from "@/components/Navigation.vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import {FreeMode} from "swiper/modules";
import {ref} from "vue";
import { Navigation } from 'swiper/modules';
import LastSection from "@/components/LastSection.vue";

const modules = ref([FreeMode,Navigation])
</script>

<template>
  <NavigationMenu/>
  <div class="mt-[100px] grid grid-cols-12 mb-[80px]">
    <div class="col-span-4 flex flex-col justify-between">
      <div class="card-video-blob">
        <video autoplay loop muted playsinline>
          <source src="@/assets/video/91ec3544e41e9afbff63c3d000a9a5296073707d839b265710597bd574d824eb_ndrKpibw.mp4"
                  type="video/mp4">
        </video>
      </div>
      <div class="flex gap-[16px] mt-[12px]">
        <div class="date">
          14.06.2024
        </div>
        <img src="@/assets/img/LineBlog.svg" alt="">
        <div class="date">
          Updates
        </div>

      </div>
    </div>
    <div class="col-span-8">
      <div class="view-blog-first-text">
        A gaming revolution of interactive and interconnected playground of fun and experiences🕹️👾🎮
      </div>
      <div class="text-little-first flex  gap-[32px] mt-2.5 items-center">
        Written by:
        <div class="flex gap-2.5 items-center">
          <img src="@/assets/img/elllipseBlog.svg" alt="">
          Username
        </div>
      </div>
      <div class="bg-[#F9F9F9] h-[1px] w-[120px] mt-[30px]"></div>
      <div class="blob-content mt-[30px]">
        A gaming revolution where an interactive and interconnected playground of fun and experiences awaits. Dive into
        immersive worlds, connect with players globally, and enjoy endless entertainment. Get ready to redefine your
        gaming journey with cutting-edge technology and thrilling adventures.
      </div>
      <div class="text-explore flex items-center mt-[80px]">
        Explore more <img class="me-[5px]" src="@/assets/img/Arrow.svg" alt=""/>
      </div>
    </div>
    <div class="col-span-4"></div>
    <div class="col-span-8">
      <div class="bg-[#F9F9F9] h-[1px] w-[120px] mt-[60px]"></div>
      <div class="description-blog mt-[40px]">
        Embark on a new era of gaming where an interactive and interconnected playground of fun and experiences awaits.
        Discover immersive worlds filled with breathtaking details and compelling storylines. Connect with players
        worldwide to build alliances, compete in epic battles, and share unforgettable moments. Enjoy endless
        entertainment with diverse game genres that cater to every interest and skill level. Prepare to redefine your
        gaming journey with cutting-edge technology, bringing thrilling adventures and innovative gameplay right to your
        screen. Whether you're exploring new realms or mastering complex strategies, this gaming revolution promises to
        elevate your experience to unprecedented heights.
      </div>
      <div class="header-description mt-[60px]">
        A Gaming Revolution
      </div>
      <div class="description-blog mt-[15px]">
        Experience a new era of interactive and interconnected gaming, filled with fun and diverse experiences. Dive
        into immersive worlds where every detail comes to life, and connect globally with players from all corners of
        the world. Engage in epic quests, challenge friends and strangers alike, and enjoy endless entertainment that
        keeps you coming back for more. As you redefine your gaming journey, embrace the latest technology and
        innovations that bring exciting adventures and unique experiences to your fingertips. Whether you're a casual
        player or a dedicated gamer, this revolution promises to elevate your gaming to unprecedented heights.
      </div>
      <div class="header-description mt-[60px]">
        A New Era of Gaming Awaits
      </div>
      <div class="description-blog mt-[15px]">
        Embark on a new era of gaming where an interactive and interconnected playground of fun and experiences awaits.

        <ul class="mt-[20px] mb-[20px] list-disc">
          <li>Discover Immersive Worlds: Dive into breathtakingly detailed environments with compelling storylines.</li>
          <li>Connect Globally: Build alliances and compete with players from around the world.</li>
          <li>Enjoy Endless Entertainment: Explore diverse game genres catering to every interest and skill level.</li>
          <li>Redefine Your Journey: Experience cutting-edge technology that brings thrilling adventures and innovative
            gameplay to your screen.
          </li>
        </ul>

        Prepare to elevate your gaming experience to unprecedented heights with this revolutionary approach to
        interactive entertainment.
      </div>
    </div>
  </div>
  <div class="slider-header mt-[150px]">
    latest articles
  </div>
  <swiper
      :slidesPerView="2"
      :spaceBetween="20"
      :freeMode="true"
      :pagination="{ clickable: true }"
      :modules="modules"
      class="mySwiper"
      :navigation="true"
  >
    <swiper-slide v-for="(item, index) in 5" :key="index">
      <div class="card-blog grid grid-cols-12 gap-5 relative z-20 mt-[40px]">
        <div class="rounded-[9px] overflow-hidden col-span-4">
          <video autoplay loop muted playsinline>
            <source src="@/assets/video/91ec3544e41e9afbff63c3d000a9a5296073707d839b265710597bd574d824eb_ndrKpibw.mp4"
                    type="video/mp4">
          </video>
        </div>
        <div class="col-span-8 flex flex-col justify-between">
          <div class="text-blog">
            A gaming revolution of interactive and interconnected playground of fun
            and experiences🕹️👾🎮
          </div>
          <div class="mt-[12px] flex justify-between items-center">
            <div class="flex gap-[16px]">
              <div class="date">
                14.06.2024
              </div>
              <img src="@/assets/img/LineBlog.svg" alt="">
              <div class="date">
                News
              </div>
            </div>

            <img src="@/assets/img/Arrow_right.svg" alt="">
          </div>

        </div>
      </div>
    </swiper-slide>
  </swiper>
  <LastSection/>
</template>

<style lang="scss">
.swiper-button-prev{
  width: 60px !important;
  height: 60px !important;
  border-radius: 500px !important;
  background: linear-gradient(#0E0E0E, #0E0E0E) padding-box,
  linear-gradient(0deg, transparent 20%, #FFFFFF54, #FFFFFF54) border-box;
  border: 1px solid transparent;
  cursor: pointer;
  transform-origin: right bottom;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}
.swiper-button-next{
  width: 60px !important;
  height: 60px !important;
  border-radius: 500px !important;
  background: linear-gradient(#0E0E0E, #0E0E0E) padding-box,
  linear-gradient(0deg, transparent 20%, #FFFFFF54, #FFFFFF54) border-box;
  border: 1px solid transparent;
  cursor: pointer;
  transform-origin: right bottom;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

 .swiper-button-next {
  &::after {
    content: '';
  }

  &::before {
    content: '';
    display: block;
    background-image: url('@/assets/img/ArrowRightBlob.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 34px;
    height: 34px;
  }
   &:hover {
     background: var(--Purple, #BF56FF) !important;
     cursor: url("@/assets/img/Polygon.svg"), auto;
   }
}
.swiper-button-prev{
  &::after {
    content: '';
  }

  &::before {
    content: '';
    display: block;
    background-image: url('@/assets/img/ArrowLeft.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 34px;
    height: 34px;
  }
  &:hover {
    background: var(--Purple, #BF56FF) !important;
    cursor: url("@/assets/img/Polygon.svg"), auto;
  }
}
</style>
<style scoped lang="scss">
.card-video-blob {
  border-radius: 8.4px;
  border: 0.7px solid rgba(255, 255, 255, 0.2);
  background: rgba(222, 222, 222, 0.05);
  backdrop-filter: blur(41.29999923706055px);
  width: 210px;
  height: 357px;
  flex-shrink: 0;
  padding: 10px;
}

.blob-content {
  color: var(--White, var(--icon-color, #FFF));
  font-family: Alexandria, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 160%; /* 38.4px */
}

.card-video-blob video {
  border-radius: 8.4px;
}

.date {
  color: var(--White, #F9F9F9);
  font-family: Urbanist, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 140%;
}

.view-blog-first-text {
  color: var(--White, var(--icon-color, #FFF));
  font-family: Alexandria, sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 65px */
  text-transform: uppercase;
}

.text-little-first {
  color: var(--White, #F9F9F9);
  font-family: Urbanist, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 19.2px */
  letter-spacing: -0.48px;
}

.text-explore {
  color: var(--White, var(--icon-color, #FFF));
  font-family: Urbanist, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -0.48px;
}

.description-blog {
  color: var(--White, var(--icon-color, #FFF));
  font-family: Alexandria, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 160%;
}

.header-description {
  color: var(--White, var(--icon-color, #FFF));
  font-family: Alexandria, sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 41.6px */
  text-transform: uppercase;
}

.card-blog {
  height: 350px;
  flex-shrink: 0;
  border-radius: 20px;
  padding: 20px;
  overflow: hidden;
  background: linear-gradient(#0E0E0E, #0E0E0E) padding-box,
  linear-gradient(0deg, transparent 5%, #FFFFFF54, #FFFFFF54) border-box;
  border: 1px solid transparent;
  transform-origin: right bottom;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.card-blog video {
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 9px !important;
}

.card-blog .text-blog {
  font-family: Alexandria, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 130%; /* 20.8px */
  background: linear-gradient(90deg, #828282 1.73%, #FFF 44.64%, #828282 91.33%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.card-blog .date {
  color: var(--White, #F9F9F9);
  font-family: Alexandria, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 140%;
}

.slider-header {
  color: var(--White, #F9F9F9);
  font-family: Alexandria, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 31.2px */
  text-transform: uppercase;
}
</style>