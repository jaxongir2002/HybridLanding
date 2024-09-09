<script setup>

const props = defineProps({
  videos: {
    type: Array,
    default: []
  }
})
</script>
<template>
  <div class="grid grid-cols-12 slider-container gap-[20px] mt-[20%]">
    <div
        v-for="(video, index) in props.videos"
        :key="index"
        class="card-img-slider"
        :class="index === 0 ? 'col-span-8 relative z-10 max-sm:top-[15px]' :
                index === 1 ? 'col-span-4 relative z-10' : index === 2 ? 'col-span-4 mt-[140px] relative z-10': 'col-span-8 relative z-10 mt-[140px] '"
    >
      <video autoplay loop muted playsinline>
        <source :src="video.video" type="video/mp4">
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