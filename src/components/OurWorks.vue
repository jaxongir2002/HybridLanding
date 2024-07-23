<script setup>
import {onMounted, ref,} from "vue";
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
const addTab = ref(false);
const showModal = ref(false)
const selectedItem = ref(null)
let bodyOverflow = null;
const listImg = ref([
  {
    src: new URL('@/assets/img/OurWorks1.svg', import.meta.url),
  },
  {
    src: new URL('@/assets/img/OurWorks2.svg', import.meta.url),
  },
  {
    src: new URL('@/assets/img/OurWork3.svg', import.meta.url),
  },
  {
    src: new URL('@/assets/img/OurWork4.svg', import.meta.url),
  },
  {
    src: new URL('@/assets/img/OurWork5.svg', import.meta.url),
  },
  {
    src: new URL('@/assets/img/OurWork6.svg', import.meta.url),
  },
  {
    src: new URL('@/assets/img/OurWork7.svg', import.meta.url),
  },
  {
    src: new URL('@/assets/img/OurWork8.svg', import.meta.url),
  },
  {
    src: new URL('@/assets/img/OurWork9.svg', import.meta.url),
  },
  {
    src: new URL('@/assets/img/OurWork10.svg', import.meta.url),
  },
  {
    src: new URL('@/assets/img/OurWork11.svg', import.meta.url),
  },
  {
    src: new URL('@/assets/img/OurWork12.svg', import.meta.url),
  },
  {
    src: new URL('@/assets/img/OurWork13.svg', import.meta.url),
  },
  {
    src: new URL('@/assets/img/OurWork14.svg', import.meta.url),
  },
  {
    src: new URL('@/assets/img/OurWork15.svg', import.meta.url),
  },
])
const container = ref(null)

function openModal(item) {
  showModal.value = true;
  selectedItem.value = item.src;
  bodyOverflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  showModal.value = false;
  selectedItem.value = null;
  document.body.style.overflow = bodyOverflow || '';
}

function openTab() {
  addTab.value = !addTab.value
}

onMounted(() => {
  const slider = document.querySelector('.dev-card');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5;
    slider.scrollLeft = scrollLeft - walk;
  })

  gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.srt',
      start: 'top top',
      end: '200px',
      scrub: 1,
    }
  });
  tl.to('.cards', {
    animationName:'up-to-down'
  });
});


</script>

<template>
  <div class="pt-[80px] pb-[80px] srt">
    <div class="nav">
      <div class="nav-text">
        Our works
      </div>
      <div class="relative z-20">
        <img src="@/assets/img/LinkText.svg" alt="">
      </div>
    </div>

    <div class="flex justify-center items-center ">
      <div ref="container" class="dev-card h-[700px] overflow-x-auto"
           :class="{'dev-card-tab' : addTab}">
        <div class="cards" v-for="(item,index) in listImg" :key="index"
             :style="{ animationDelay: `${index * 0.2}s` }"
             :class="{'cards-tab' : addTab}" @click="openModal(item)">
          <img class="cards-img" :src="item.src" alt="" :class="{'cards-img-tab' :addTab}">
        </div>
      </div>
    </div>
    <transition name="modal">
      <div class="modal" v-if="showModal" @click.self="closeModal">
        <div class="modal-content">
          <img class="modal-image" :src="selectedItem" alt="">
        </div>
        <div class="name-content">
          Hybrid + Ferrero rocher = Result
        </div>
      </div>
    </transition>
    <div class="w-[2%] active:scale-50 transition-all relative z-20 mt-[80px]" v-if="addTab" @click="openTab">
      <img class="cursor-pointer" src="@/assets/img/menuTabs.svg" alt="">
    </div>
    <div v-else
         class="tabs flex active:scale-50 transition-all items-center gap-[5px] cursor-pointer w-[2%] relative z-20 mt-[80px]"
         @click="openTab">
      <div class="tab w-[10px] h-[20px] rounded-[2px] bg-[#404040] cursor-pointer"></div>
      <div class="active-tab w-[10px] h-[22px] rounded-[2px] bg-[#fff] cursor-pointer"></div>
      <div class="tab w-[10px] h-[20px] rounded-[2px] bg-[#404040] cursor-pointer"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.nav {
  display: flex;
  justify-content: space-between;

  &-text {
    color:  #FFF;
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
  transition: transform 1s;

  &-img {
    border-radius: 6px;
  }
}

.dev-card {
  display: flex;
  width: 910px;
  align-items: flex-start;
  align-content: flex-start;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
  user-select: none;
  overflow-x: scroll;
  overflow-y: hidden;
  transition: all 0.2s;
  max-width: 75vw;
  white-space: nowrap;
  scroll-behavior: smooth;
}

.cards {
  animation:up-to-down 1s forwards;
  animation-direction: revert;
}

@keyframes up-to-down {
  0% {
    transform: translateY(200px);
    animation-delay: 0.2s;
  }
  100% {
    transform: translateY(0);
    animation-delay: 0.2s;
  }
}

.dev-card-tab {
  flex-wrap: nowrap;
  width: 100%;
  gap: 80px;
  align-items: center;

}

.dev-card:active {
  transform: scale(0.97);
  transition: transform 1s;
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
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  flex-direction: column;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  border-radius: 12px;
  background: rgba(222, 222, 222, 0.05);
  backdrop-filter: blur(24px);
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
  animation-name: fadeIn;
  animation-duration: 0.4s
}

.modal::-webkit-scrollbar {
  position: fixed;
  width: 0;
  height: 0;
  display: none;
}

@keyframes fadeIn {
  from {
    opacity: 0
  }
  to {
    opacity: 1
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
  animation-duration: 0.5s
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
  color: #FFF;
  text-align: center;
  font-family: Alexandria, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  text-transform: uppercase;
  margin-top: 43px;
}
</style>