<script setup>

</script>

<template>
  <div class="grid grid-cols-12 slider-container gap-[20px] mt-[20%] ">
    <div class="card-img-slider col-span-8 relative z-10 max-sm:top-[15px]">
      <video autoplay loop muted playsinline>
        <source src="@/assets/video/91ec3544e41e9afbff63c3d000a9a5296073707d839b265710597bd574d824eb_ndrKpibw.mp4"
                type="video/mp4">
      </video>
    </div>
    <div class="card-img-slider col-span-4 relative z-10">
      <video autoplay loop muted playsinline>
        <source src="@/assets/video/wecreatemagic_lsF4u8LF.mp4"
                type="video/mp4">
      </video>
    </div>
    <div class="card-img-slider col-span-4 mt-[140px] relative z-10">
      <video autoplay loop muted playsinline>
        <source src="@/assets/video/ac57976749d126f18128abad5cec0903ee50f1bcaab2b1941b03887e69ae9a29_rbIGpUGF.mp4"
                type="video/mp4">
      </video>
    </div>
    <div class="card-img-slider col-span-8 col mt-[140px] w-full relative z-10">
      <video autoplay loop muted playsinline>
        <source src="@/assets/video/ac57976749d126f18128abad5cec0903ee50f1bcaab2b1941b03887e69ae9a29_rbIGpUGF.mp4"
                type="video/mp4">
      </video>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 992px) {
  .card-img-slider {
    height: 429px !important;
    grid-column: span 12 / span 12 !important;
    padding: 10px !important;
    margin-top: 20px !important;
    margin: auto;
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
  width: 100%;
  height: 740px;
  flex-shrink: 0;
  transition: 0.5s all;


  video {
    border-radius: 12px;
    object-fit: cover;
    height: 100%;
    width: 100%;
    flex-shrink: 0;
  }
}
</style>