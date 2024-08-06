<script setup>
import {onMounted, ref, computed} from "vue";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {Swiper, SwiperSlide} from 'swiper/vue';
import {FreeMode} from "swiper/modules";
import Lenis from "lenis";

const lenis = new Lenis();

const addTab = ref(false);
const showModal = ref(false);
const selectedItem = ref(null);
const selectedIndex = ref(-1);
const modules = ref([FreeMode])
const isMobile = ref(window.innerWidth < 762);
let bodyOverflow = null;
const listImg = ref([
  {
    src: new URL("@/assets/img/OurWorks1.svg", import.meta.url),
  },
  {
    src: new URL("@/assets/img/OurWorks2.svg", import.meta.url),
  },
  {
    src: new URL("@/assets/img/OurWork3.svg", import.meta.url),
  },
  {
    src: new URL("@/assets/img/OurWork4.svg", import.meta.url),
  },
  {
    src: new URL("@/assets/img/OurWork5.svg", import.meta.url),
  },
  {
    src: new URL("@/assets/img/OurWork6.svg", import.meta.url),
  },
  {
    src: new URL("@/assets/img/OurWork7.svg", import.meta.url),
  },
  {
    src: new URL("@/assets/img/OurWork8.svg", import.meta.url),
  },
  {
    src: new URL("@/assets/img/OurWork9.svg", import.meta.url),
  },
  {
    src: new URL("@/assets/img/OurWork10.svg", import.meta.url),
  },
  {
    src: new URL("@/assets/img/ourworksImg1.jpg", import.meta.url),
  },
  {
    src: new URL("@/assets/img/ourworksImg2.svg", import.meta.url),
  },
  {
    src: new URL("@/assets/img/ourworksImg3.svg", import.meta.url),
  },
  {
    src: new URL("@/assets/img/ourworksImg1.jpg", import.meta.url),
  },
  {
    src: new URL("@/assets/img/ourworksImg2.svg", import.meta.url),
  },
  {
    src: new URL("@/assets/img/ourworksImg3.svg", import.meta.url),
  },
  {
    src: new URL("@/assets/img/ourworksImg3.svg", import.meta.url),
  },
  {
    src: new URL("@/assets/img/ourworksImg1.jpg", import.meta.url),
  },
  {
    src: new URL("@/assets/img/ourworksImg2.svg", import.meta.url),
  },
  {
    src: new URL("@/assets/img/ourworksImg3.svg", import.meta.url),
  },
]);
const containerRef = ref(null);

function openModal(item, index) {
  showModal.value = true;
  selectedItem.value = item.src;
  selectedIndex.value = index;
  bodyOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";
  mobile()
}

function mobile(){
  if (showModal.value===true) {
    document.body.classList.add('no-scroll');
    lenis.stop();
  } else {
    document.body.classList.remove('no-scroll');
    lenis.start();
  }
}
mobile()

function closeModal() {
  showModal.value = false;
  selectedItem.value = null;
  document.body.style.overflow = bodyOverflow || "";
  mobile()
}
function openTab() {
  addTab.value = !addTab.value;
  if (addTab.value === false) {
    document.querySelectorAll(".cards").forEach((el) => {
      el.style.transform = "translateY(0px)";
    });
  }
}

const displayedItems = computed(() => {
  if (isMobile.value) {
    return listImg.value.slice(0, 6);
  } else {
    return listImg.value;
  }
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

    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".our-works-div",
        start: "top top",
        end: "100%",
        scrub: true,
        pin:true,
        lazy: true,
      },
    });
    tl.to(
        ".cards",
        {
          y: -440,
          stagger: 0.01,
        }
    );
    if (showModal.value === true) {
      tl.kill();
    }
});
</script>

<template>
  <div class="pt-[80px] pb-[80px]">
    <div class="our-works-div ">
      <div class="nav relative z-[20]">
        <div class="nav-text">Our works</div>
        <div class="our-works-img">
          <button v-show="!addTab" class="view-all w-[205px]">
            View all
          </button>
        </div>
      </div>

      <div class="flex justify-center items-center" v-show="!addTab">
        <div
          id="dev-card"
          ref="containerRef"
          class="dev-card  h-[550px]"
        >
          <div
            v-for="(item, index) in displayedItems"
            :key="index"
            class="cards"
            @click="openModal(item, index)"
          >
            <img
              :src="item.src"
              alt=""
              class="cards-img"
            />
          </div>
        </div>

      </div>

      <swiper v-if="addTab"
              :slidesPerView="4"
              :spaceBetween="5"
              :freeMode="true"
              :pagination="{ clickable: true }"
              :modules="modules"
              class="mySwiper mt-[84px]"
      >
        <swiper-slide v-for="(item, index) in listImg"
                      :key="index">
          <div class="cards cards-tab"
               @click="openModal(item, index)"
          >
            <img
                :src="item.src"
                alt=""
                class="cards-img cards-img-tab"
            />
          </div>
        </swiper-slide>
      </swiper>
      <button v-show="isMobile" class="view-all m-auto absolute left-0 right-0 w-[250px] z-[1] bottom-[-180px]">
        See all
      </button>
      <button v-show="addTab" class="view-all m-auto absolute left-0 right-0 w-[250px] z-[1] bottom-[-50px]">
        View all
      </button>
      <div
          v-if="addTab"
          class="w-[2%] active:scale-50 transition-all relative z-20 mt-[80px]"
          @click="openTab"
      >
        <img alt="" src="@/assets/img/menuTabs.svg" />
      </div>
      <div
          v-else
          class="tabs flex active:scale-50 transition-all items-center gap-[5px] w-[2%] relative z-20 mt-[80px]"
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
            <img :src="selectedItem" alt="" class="modal-image" />
          </div>
          <div class="name-content">Hybrid + Ferrero rocher = Result</div>
        </div>
      </transition>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 992px){
  .our-works-img {
    display: none;
  }

  .dev-card {
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    width: 600px !important;
    margin-top: 20px;
  }
  .modal-content {
    border-radius: 8px;
    padding: 5px;
    position: relative;
    right: 10px;
    width: 250px;
    height: 400px;
  }
  .modal-image{
    position: relative;
    bottom: 105px;
  }
  .cards {
    width: 131.03px !important;
    height: 222.751px !important;
  }
}
.nav {
  display: flex;
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

.cards {
  width: 150px;
  height: 255px;
  flex-shrink: 0;
  border-radius: 6px;
  padding: 7.5px;
  background: rgba(222, 222, 222, 0.05);
  backdrop-filter: blur(29.5px);
  transition: transform 1s !important;
  animation: up-to-down 1s forwards;
  animation-direction: revert;
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
  transition: all 0.2s;
  max-width: 75vw;
  white-space: nowrap;
  position: relative;
  right: 20px;
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
  z-index: 1;
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
