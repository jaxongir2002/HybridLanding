<script setup>
import {computed, onMounted, ref} from "vue";
import {Swiper, SwiperSlide} from 'swiper/vue';
import {FreeMode, Keyboard, Navigation} from "swiper/modules";
import Lenis from "lenis";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import LoaderBlog from "@/components/LoaderBlog.vue";

const lenis = new Lenis();
const props = defineProps({
  videos: {
    type: Array,
    default: []
  }
})

const addTab = ref(false);
const showModal = ref(false);
const selectedItem = ref(null);
const selectedIndex = ref(-1);
const modules = ref([FreeMode, Keyboard, Navigation])
const isMobile = window.matchMedia('(max-width: 767px)').matches;
let bodyOverflow = null;
const videoPlayer = ref(null);
const containerRef = ref(null);
const classAddAnimation = ref(false)
const fixNav = ref(false);
const anotherClass = ref(false);
const loading = ref(false);

function openModal(item, index) {
  showModal.value = true;
  selectedItem.value = item;
  selectedIndex.value = index;
  bodyOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";
  mobile()
}

function mobile() {
  if (showModal.value === true) {
    document.body.classList.add('no-scroll');
    lenis.stop();
  } else {
    document.body.classList.remove('no-scroll');
    lenis.start();
  }
}

document.addEventListener('keydown', closeModal);
mobile()

function closeModal(event) {
  // Check if the Esc key was pressed
  if (event.key === 'Escape') {
    showModal.value = false;
    selectedItem.value = null;
    document.body.style.overflow = bodyOverflow || "";
    mobile();
  } else {
    showModal.value = false;
    selectedItem.value = null;
    document.body.style.overflow = bodyOverflow || "";
    mobile();
  }
}

function openTab() {
  addTab.value = !addTab.value;

  if (addTab.value === false) {
    document.querySelectorAll(".cards").forEach((el) => {
      el.style.transform = "translateY(0px)";
    });
  }
}
const itemCount = ref(isMobile ? 6 : 15);

const displayedItems = computed(() => {
  return props.videos.slice(0, itemCount.value);
});

onMounted(() => {

  const slider = document.querySelector(".dev-card");
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5;
    slider.scrollLeft = scrollLeft - walk;
  });


  window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;
    if (!isMobile) {
      if (currentScrollPos > 1000) {
        classAddAnimation.value = true
        anotherClass.value = false

        fixNav.value = !addTab;
      } else {
        classAddAnimation.value = false
        anotherClass.value = true
        fixNav.value = false
      }
      if (currentScrollPos > 1400) {
        fixNav.value = false
      }
    }
  });
})

function loadMoreItems() {
  loading.value = true;
  setTimeout(() => {
    itemCount.value = props.videos.length;
    loading.value = false;
  }, 1000);
}
</script>
<template>
  <div class="pt-[80px] pb-[80px] scroll-our-works  ">
    <div class="our-works-div relative" :class="{fixNav :fixNav}">
      <div class="nav-our-works relative z-[6060]">
        <div class="nav-our-works-text relative">Our works</div>
        <div class="our-works-img relative z-[20]">
          <button @click="loadMoreItems" v-show="!addTab" class="view-all w-[205px] mt-2">
            View all
          </button>
        </div>
      </div>

      <div class="flex justify-center items-center relative " v-if="!addTab">
        <div
            id="dev-card"
            ref="containerRef"
            class="dev-card h-[550px]"
            :class="{
            transformTop: classAddAnimation,
            transformBottom: anotherClass
             }"
        >
          <div
              v-for="(item, index) in displayedItems"
              :key="index"
              class="cards"
              @click="openModal(item, index)"
          >
            <video ref="firstVideo"  :src="item.video" >
            </video>

          </div>
          <LoaderBlog v-if="loading"/>
        </div>
      </div>

      <div v-if="addTab" class="reels-video">
        <swiper
            :slidesPerView="4"
            :spaceBetween="5"
            :freeMode="true"
            :keyboard="true"
            :navigation="true"
            :modules="modules"
            class="mySwiper mt-[84px]"
        >
          <swiper-slide v-for="(item, index) in props.videos"
                        :key="index">
            <div class="cards cards-tab"
                 @click="openModal(item, index)"
            >
              <video loop muted ref="videoPlayer" width="320" height="240" playsinline
                     class="cards-img cards-img-tab">
                <source :src="item.video"
                        type="video/mp4">
              </video>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <button v-show="isMobile" class="view-all m-auto absolute left-0 right-0 w-[250px] z-[1] bottom-[-270px]">
        See more
      </button>

      <div
          v-if="addTab"
          class="w-[2%] active:scale-50 transition-all relative z-[3333] mt-[80px]"
          @click="openTab"
      >
        <img alt="" src="@/assets/img/menuTabs.svg"/>
      </div>
      <div
          v-else
          class="tabs flex active:scale-50 transition-all items-center gap-[5px] w-[2%] relative z-[3333] mt-[80px]"
          @click="openTab"
      >
        <div class="tab w-[10px] h-[20px] rounded-[2px] bg-[#404040]"></div>
        <div class="active-tab w-[10px] h-[22px] rounded-[2px] bg-[#fff]"></div>
        <div class="tab w-[10px] h-[20px] rounded-[2px] bg-[#404040]"></div>
      </div>
    </div>

    <transition name="modal">
      <div v-if="showModal" class="modal" @click.self="closeModal">
        <div class="modal-content">
          <video loop muted autoplay ref="videoPlayer" width="320" height="240" playsinline class="modal-image">
            <source :src="selectedItem.video"
                    type="video/mp4">
          </video>
        </div>
        <div class="name-content">{{selectedItem.name}}</div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss">
.reels-video {
  position: relative;

  .swiper-button-prev {
    position: absolute !important;
    top: 590px !important;
    left: 85% !important;
    z-index: 3333 !important;
  }

  .swiper-button-next {
    position: absolute !important;
    top: 590px !important;
    right: 5% !important;
    z-index: 3333 !important;
  }

  .swiper {
    position: static !important;

  }
}

.swiper-button-next {
  &::after {
    content: '';
  }
}

.swiper-button-prev {
  &::after {
    content: '';
  }
}
</style>
<style lang="scss" scoped>


.prev-slider {
  width: 50px;
  height: 50px;
  border-radius: 500px;
  border: solid 1px #FFFFFF40;
}

.transformTop {
  transition: 1s;
  transform: translateY(-500px);
  position: relative;
  z-index: 22;
}

.transformBottom {
  transform: translateY(0);
  position: relative;
  z-index: 22;
  transition: 1s;
}

.fixNav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  max-width: 1440px;
  margin: auto;
  z-index: 22;
}

@media screen and (max-width: 992px) {
  .our-works-img {
    display: none;
  }

  .dev-card {
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    width: 100% !important;
    margin-top: 20px;
    right: 15px !important;
  }
  .modal-content {
    border-radius: 8px;
    padding: 5px;
    position: relative;
    right: 10px;
    width: 250px;
    height: 400px;
  }
  .modal-image {
    position: relative;
    bottom: 105px;
  }

  .nav-our-works {
    z-index: 1;
  }
}

.nav-our-works {
  display: flex !important;
  justify-content: space-between;
  align-items: center;

  &-text {
    color: #fff;
    font-family: Alexandria, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    text-transform: uppercase;
    position: relative;
    z-index: 33;
  }
}

.scroll-our-works {
  transition: 2s;
  animation-duration: 1s;
}

.mySwiper {
  position: relative;
  z-index: 22;
}

.cards {
  width: 150px;
  height: 255px;
  flex-shrink: 0;
  border-radius: 6px;
  border: 0.5px solid #DEDEDE0D;
  padding: 7.5px;
  background: rgba(222, 222, 222, 0.05);
  backdrop-filter: blur(29.5px);
  transition: transform 1s !important;
  animation: up-to-down 1s forwards;
  animation-direction: revert;
  will-change: transform;
  z-index: 2;

  &-img {
    border-radius: 6px;
  }
}

.dev-card {
  display: flex;
  width: 75%;
  align-items: flex-start;
  align-content: flex-start;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
  user-select: none;
  max-width: 75vw;
  white-space: nowrap;
  position: relative;
  right: 20px;
  transition: 1s;
}

.dev-card-tab {
  flex-wrap: nowrap;
  width: 100%;
  gap: 80px;
  align-items: center;
  overflow-y: auto;
}

.cards:active {
  transform: scale(0.95) !important;
  transition: transform 1s !important;
}

.dev-card::-webkit-scrollbar {
  width: 8px;
  height: 0;
}

.dev-card::-webkit-scrollbar-track {
  background-color: transparent;
}

.dev-card::-webkit-scrollbar-thumb {
  background-color: transparent;
  border-radius: 4px;
}

.dev-card:hover::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.3);
}

.cards-tab {
  width: 300px !important;
  height: 510px !important;
}

.cards-img-tab {
  width: 100%;
  height: 100%;
}

.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 999;
  border-radius: 12px;
  background: rgba(222, 222, 222, 0.05);
  backdrop-filter: blur(24px);
  transition: opacity 0.3s ease-in-out;
  animation-name: fadeIn;
  animation-duration: 0.4s;
}

.modal::-webkit-scrollbar {
  position: fixed;
  width: 0;
  height: 0;
  display: none;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s ease-in-out;
}

.modal-enter .modal-content,
.modal-leave-to .modal-content {
  transform: scale(0.8);
}

.modal-content {
  border-radius: 14.4px;
  background: rgba(222, 222, 222, 0.05);
  backdrop-filter: blur(70.80000305175781px);
  padding: 18px;
  animation-name: openModal;
  animation-duration: 0.5s;
  display: flex !important;
  flex-direction: column !important;
}

@keyframes openModal {
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
}

.close-button {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close-button:hover,
.close-button:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.modal-image {
  width: 324px;
  height: 576px;
  flex-shrink: 0;
  border-radius: 14.4px;
  user-select: none;
}

.name-content {
  color: #fff;
  text-align: center;
  font-family: Alexandria, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  text-transform: uppercase;
  margin-top: 43px;
}

.view-all {
  display: inline-flex;
  padding: 12px 64px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: #F9F9F9;
  text-align: center;
  font-family: Alexandria, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  border-radius: 500px;
  border: 1px solid #F9F9F9;
  cursor: url("@/assets/img/Polygon.svg"), auto;
}

.view-all:hover {
  border-color: #BF56FF;
  color: #BF56FF;
}
</style>
