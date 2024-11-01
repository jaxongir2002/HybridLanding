<script setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import {FreeMode} from "swiper/modules";
import {ref} from "vue";
import {Navigation} from 'swiper/modules';
import LastSection from "@/components/LastSection.vue";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {useAxios} from "@/composable/useAxios.js";
import {useRoute} from "vue-router";
import moment from "moment";

const modules = ref([FreeMode, Navigation])
const isMobile = window.matchMedia('(max-width: 767px)').matches;
const route = useRoute();
const infoBlog = ref(null);
const blogList = ref([]);

async function getList() {
  const res = await useAxios(`/blogs?populate=*`)
  blogList.value = res.data
  infoBlog.value = res.data[route.params?.id-1]?.attributes
}

getList()
</script>

<template>
  <div style="padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto">
    <div class="mt-[100px] grid grid-cols-12 mb-[80px] relative z-10 max-sm:mt-[70px]">
      <div class="max-sm:block col-span-12 hidden">
        {{infoBlog}}
        <div class="view-blog-first-text relative z-10">
          {{ infoBlog?.main_title }}
        </div>
        <div class="text-little-first flex  gap-[32px] mt-2.5 items-center relative z-10">
          Written by:
          <div class="flex gap-2.5 items-center">
            <img src="@/assets/img/elllipseBlog.svg" alt="">
            {{ infoBlog?.user_name }}
          </div>
        </div>
      </div>
      <div class="col-span-4 max-sm:col-span-12 flex flex-col justify-between blog-view-video relative z-10">
        <div class="card-video-blob">
          <video autoplay loop muted playsinline :src="infoBlog?.video">
          </video>
        </div>
        <div class="flex gap-[16px] mt-[12px] max-sm:hidden">
          <div class="date">
            {{ moment(new Date(infoBlog?.updatedAt)).format('MM.DD.YYYY') }}
          </div>
          <img src="@/assets/img/LineBlog.svg" alt="">
          <div class="date">
            Updates
          </div>

        </div>
      </div>
      <div class="col-span-8 max-sm:col-span-12">
        <div class="view-blog-first-text max-sm:hidden">
          {{ infoBlog?.main_title }}
        </div>
        <div class="text-little-first flex max-sm:hidden gap-[32px] mt-2.5 items-center">
          Written by:
          <div class="flex gap-2.5 items-center">
            <img src="@/assets/img/elllipseBlog.svg" alt="">
            {{ infoBlog?.user_name }}
          </div>
        </div>
        <div class="bg-[#F9F9F9] h-[1px] w-[120px] mt-[30px]"></div>
        <div class="blob-content mt-[30px]">
          {{ infoBlog?.description }}
        </div>
        <div class="max-sm:flex gap-[16px] mt-[12px] hidden">
          <div class="date">
            14.06.2024
          </div>
          <img src="@/assets/img/LineBlog.svg" alt="">
          <div class="date">
            Updates
          </div>

        </div>
        <div class="text-explore flex items-center mt-[80px] max-sm:hidden">
          Explore more <img class="me-[5px]" src="@/assets/img/Arrow.svg" alt=""/>
        </div>
      </div>
      <div class="col-span-4 max-sm:col-span-12 "></div>
      <div class="col-span-8 max-sm:col-span-12">
        <div class="bg-[#F9F9F9] h-[1px] w-[120px] mt-[60px]"></div>
        <div class="description-blog mt-[40px]">
          {{ infoBlog?.more_description }}
        </div>
        <div v-for="(item,index) in infoBlog?.description_title" :key="index">
          <div class="header-description mt-[60px]">
            {{ item?.title }}
          </div>
          <div class="description-blog mt-[15px]">
            {{ item?.text }}
          </div>
        </div>

      </div>
    </div>
    <div class="slider-header mt-[150px] relative z-[33]">
      latest articles
    </div>
    <swiper
        :slidesPerView="1"
        :spaceBetween="20"
        :freeMode="true"
        :pagination="{ clickable: true }"
        :modules="modules"
        class="mySwiper"
        :navigation="!isMobile"
        :breakpoints="{
      '@0.00': {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      '@0.75': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '@1.00': {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      '@1.50': {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    }"
    >
      <swiper-slide v-for="(item, index) in blogList" :key="index">
        <div class="card-blog grid grid-cols-12 gap-5 relative z-20 mt-[40px]"
             @click="$router.push({name: 'blogView', params: { id: item }})">
          <div class="rounded-[9px] overflow-hidden col-span-4">
            <video :src="item.attributes.blog_list.video" autoplay loop muted playsinline>
            </video>
          </div>
          <div class="col-span-8 flex flex-col justify-between">
            <div class="text-blog">
              {{ item.attributes.blog_list.description }}
            </div>
            <div class="mt-[12px] flex justify-between items-center">
              <div class="flex gap-[16px] mt-[12px]">
                <div class="date">
                  {{ moment(new Date(item.attributes.blog_list.date)).format('MM.DD.YYYY')}}
                </div>
                <img src="@/assets/img/LineBlog.svg" alt="">
                <div class="date">
                  {{ item.attributes.blog_list.title }}
                </div>

              </div>

              <img src="@/assets/img/Arrow_right.svg" alt="">
            </div>

          </div>
        </div>
      </swiper-slide>
    </swiper>
    <LastSection id="srt"/>
  </div>

</template>

<style lang="scss">
.swiper-button-prev {
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

.swiper-button-prev {
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
@media screen and (max-width: 992px) {
  .blog-view-video {
    grid-column: span 12 / span 12;
  }
  .view-blog-first-text {
    font-size: 20px !important;
  }
  .card-video-blob {
    width: 100% !important;
    height: 99% !important;
    margin-top: 20px !important;
  }

  .blob-content {
    font-size: 16px !important;
  }
  .header-description {
    font-size: 20px !important;
  }
  .slider-header {
    margin-top: 5px !important;
  }
}

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
  border-radius: 8.4px !important;

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