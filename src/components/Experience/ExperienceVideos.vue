<script setup>

</script>

<template>
  <div class="grid grid-cols-12 slider-container gap-[20px] mt-[20%] z-10">
    <div class="card-img-slider mobile-version col-span-12 relative">
      <div class="absolute flex flex-col justify-between h-[100%] left-[40px]">
        <div class="text-video-header">
          Holograms
        </div>
        <iframe width="140px" height="194px"
                src="https://lottie.host/embed/8e80c604-e0af-4b03-96ce-f75675059aa0/Tyehx7Emkq.json"></iframe>
      </div>
      <video autoplay loop muted playsinline>
        <source src="@/assets/video/91ec3544e41e9afbff63c3d000a9a5296073707d839b265710597bd574d824eb_ndrKpibw.mp4"
                type="video/mp4">
      </video>
    </div>
    <div class="card-img-slider mobile-version-center col-span-6 max-sm:col-span-12 mt-[70px] max-sm:mt-[20px]">
      <div class="absolute flex flex-col justify-between h-[100%] left-[40px]">
        <div class="text-video-header">
          Interactive
        </div>
        <iframe width="140px" height="194px"
                src="https://lottie.host/embed/8e80c604-e0af-4b03-96ce-f75675059aa0/Tyehx7Emkq.json"></iframe>
      </div>
      <video autoplay loop muted playsinline>
        <source src="@/assets/video/wecreatemagic_lsF4u8LF.mp4"
                type="video/mp4">
      </video>
    </div>
    <div class="card-img-slider mobile-version-center col-span-6 max-sm:col-span-12 mt-[70px] max-sm:mt-[20px]">
      <div class="absolute flex flex-col justify-between h-[100%] left-[40px]">
        <div class="text-video-header">
          Gaming
        </div>
        <iframe width="140px" height="194px"
                src="https://lottie.host/embed/8e80c604-e0af-4b03-96ce-f75675059aa0/Tyehx7Emkq.json"></iframe>
      </div>
      <video autoplay loop muted playsinline>
        <source src="@/assets/video/ac57976749d126f18128abad5cec0903ee50f1bcaab2b1941b03887e69ae9a29_rbIGpUGF.mp4"
                type="video/mp4">
      </video>
    </div>
    <div class="card-img-slider mobile-version col-span-12 w-full mt-[70px] max-sm:mt-[20px]">
      <div class="absolute flex flex-col justify-between h-[100%] left-[40px]">
        <div class="text-video-header">
          Hybrid ips
        </div>
        <iframe width="140px" height="194px"
                src="https://lottie.host/embed/8e80c604-e0af-4b03-96ce-f75675059aa0/Tyehx7Emkq.json"></iframe>
      </div>
      <video autoplay loop muted playsinline>
        <source src="@/assets/video/ac57976749d126f18128abad5cec0903ee50f1bcaab2b1941b03887e69ae9a29_rbIGpUGF.mp4"
                type="video/mp4">
      </video>
    </div>
  </div>
  <div class="flex justify-center mb-[40px]">
    <button class="see-more">
      See more
    </button>
  </div>
</template>

<style lang="scss" scoped>

@media screen and (max-width: 992px) {
  .card-img-slider {
    width: 280px !important;
    height: 429px !important;

    padding: 10px !important;
  }
  .text-video-header {
    font-size: 20px !important;
    position: relative;
    right: 10px;
    top: 10px;
  }
  iframe {
    display: none !important;
  }
  .mobile-version{
    height: 196px !important;
  }
  .mobile-version-center{
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
  line-height: 140%; /* 25.2px */
  margin-top: 43px;

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

.card-img-slider {
  border-radius: 12px;
  border: 1.2px solid rgba(255, 255, 255, 0.17);
  background: rgba(222, 222, 222, 0.05);
  backdrop-filter: blur(70.80000305175781px);
  padding: 18px;
  width: 100%;
  height: 740px;
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