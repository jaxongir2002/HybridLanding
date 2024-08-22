<script setup>
import {onMounted} from "vue";

onMounted(() => {
  const flipCards = document.querySelector('#idSlider');

  window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos >= 3561) {
      flipCards.classList.add('animateClass')
    }
  });
})
</script>

<template>
  <div class="relative mb-[50px]">
    <div class="absolute top-0 z-30 left-0 right-0 container-breath">
      <div class="text-breath">
        Breathe life
      </div>
      <div class="text-breath">
        Into your ideas
      </div>
    </div>
    <div id="idSlider" class="card-img-slider col-span-4 mt-[80px] m-auto relative z-10">
      <video autoplay loop muted playsinline>
        <source src="@/assets/video/wecreatemagic_lsF4u8LF.mp4"
                type="video/mp4">
      </video>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 992px) {
  .card-img-slider {
    height: 196px !important;
    margin-top: 20px !important;
    animation: translateYAnimation 2s linear forwards, widthChange 2s forwards;
    position: relative !important;
    top: 60px !important;
    width: 100% !important;
    padding: 10px !important;
  }
  .text-breath{
    font-size: 20px !important;
    line-height: 100% !important;
    font-weight: 500 !important;
    text-align: left !important;
  }
  .container-breath{
   position: relative !important;
  }
}

.slider-container {
  transition: 1s;
}

.card-img-slider {
  border-radius: 12px;
  border: 1.2px solid rgba(255, 255, 255, 0.17);
  background: rgba(222, 222, 222, 0.05);
  backdrop-filter: blur(70.80000305175781px);
  padding: 18px;
  width: 300px;
  height: 510px;
  flex-shrink: 0;
  transition: 0.5s;
  transform: translateY(600px);
}
.container-breath{
  transform: translateY(130%);
}
.card-img-slider video {
  border-radius: 12px;
  object-fit: cover;
  height: 100%;
  width: 100%;
  flex-shrink: 0;
}

.text-breath {
  font-weight: 700;
  font-family: Alexandria, sans-serif;
  font-size: 50px;
  line-height: 65px;
  color: white;
  text-transform: uppercase;
  text-align: center;
}
.animateClass {
  animation: translateYAnimation 2s linear forwards, widthChange 2s forwards;
}

@keyframes translateYAnimation {
  0% {
    transform: translateY(600px);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes widthChange {
  100% {
    width: 100%;
  }
}

</style>