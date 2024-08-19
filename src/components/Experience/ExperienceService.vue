<script setup>

</script>

<template>
  <div class="relative z-10">
    <div class="title-header">
      Our services
    </div>
    <div class="mt-[9px] w-[1021px] m-auto big-div-service">
      <div class="flex justify-start text-hover-animation relative">
        <div class="hover-video opacity-[1] absolute bottom-[-60px] left-[-100px] max-sm:left-[260px]">
          <video autoplay loop muted class="rounded-[4px]" playsinline>
            <source src="@/assets/video/91ec3544e41e9afbff63c3d000a9a5296073707d839b265710597bd574d824eb_ndrKpibw.mp4"
                    type="video/mp4">
          </video>
        </div>
        <div class="">3D PROJECTION MAPPING</div>
      </div>
      <div class="flex justify-end mt-[40px] text-hover-animation">
        <div class="hover-video opacity-[1] absolute bottom-[-60px] left-[110px] max-sm:left-[265px]">
          <video autoplay loop muted class="rounded-[4px]" playsinline>
            <source src="@/assets/video/91ec3544e41e9afbff63c3d000a9a5296073707d839b265710597bd574d824eb_ndrKpibw.mp4"
                    type="video/mp4">
          </video>
        </div>
        <div class="">REAL-TIME INTERACTIVITY</div>
      </div>
      <div class="flex justify-center text-hover-animation">
        <div class="hover-video opacity-[1] absolute bottom-[-60px] left-[205px] max-sm:left-[140px]">
          <video autoplay loop muted class="rounded-[4px]" playsinline>
            <source src="@/assets/video/91ec3544e41e9afbff63c3d000a9a5296073707d839b265710597bd574d824eb_ndrKpibw.mp4"
                    type="video/mp4">
          </video>
        </div>
        <div class="mt-[40px] max-sm:mt-0">
          HOLOGRAMS
        </div>
      </div>
      <div class="flex justify-start mt-[40px] text-hover-animation">
        <div class="hover-video opacity-[1] absolute bottom-[-60px] left-[-100px] max-sm:left-[260px]">
          <video autoplay loop muted class="rounded-[4px]" playsinline>
            <source src="@/assets/video/91ec3544e41e9afbff63c3d000a9a5296073707d839b265710597bd574d824eb_ndrKpibw.mp4"
                    type="video/mp4">
          </video>
        </div>
        <div class="">ARTIFICIAL INTELLIGENCE</div>
      </div>
      <div class="flex justify-end mt-[40px] text-hover-animation">
        <div class="hover-video opacity-[1] absolute bottom-[-60px] left-[290px] max-sm:left-[200px]">
          <video autoplay loop muted class="rounded-[4px]" playsinline>
            <source src="@/assets/video/91ec3544e41e9afbff63c3d000a9a5296073707d839b265710597bd574d824eb_ndrKpibw.mp4"
                    type="video/mp4">
          </video>
        </div>
        <div class="">CONTENT CREATION</div>
      </div>
      <div class="flex justify-center text-hover-animation">
        <div class="hover-video opacity-[1] absolute bottom-[-60px] left-[175px] max-sm:left-[155px]">
          <video autoplay loop muted class="rounded-[4px]" playsinline>
            <source src="@/assets/video/91ec3544e41e9afbff63c3d000a9a5296073707d839b265710597bd574d824eb_ndrKpibw.mp4"
                    type="video/mp4">
          </video>
        </div>
        <div class=" mt-[40px] max-sm:mt-0">
          3D ANIMATION
        </div>
      </div>
      <div class="flex justify-end text-hover-animation">
        <div class="hover-video opacity-[1] absolute bottom-[-60px] left-[610px] max-sm:left-[110px]">
          <video autoplay loop muted class="rounded-[4px]" playsinline>
            <source src="@/assets/video/91ec3544e41e9afbff63c3d000a9a5296073707d839b265710597bd574d824eb_ndrKpibw.mp4"
                    type="video/mp4">
          </video>
        </div>
        <div class="mt-[40px] max-sm:mt-0">
          VFX & CGI
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 992px) {
  .text-hover-animation {
    font-size: 20px !important;
    line-height: 100% !important;
    margin-top: 20px !important;
    display: block !important;
  }
  .title-header {
    font-size: 20px !important;
  }
  .big-div-service {
    width: 320px !important;
  }
  .hover-video {
    width: 47.25px !important;
    height: 84.706px !important;
    padding: 2px !important;
  }
}

.title-header {
  color: var(--White, #F9F9F9);
  font-family: Alexandria, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 31.2px */
  text-transform: uppercase;
}

.text-hover-animation {
  color: var(--White, #F9F9F9);
  font-family: Alexandria, sans-serif;
  font-size: 60px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 60px */
  text-transform: uppercase;
  opacity: 0.3;
  transition: 0.5s;
}

.big-div-service .text-hover-animation:hover {
  opacity: 1;
  transform: scale(1.1, 1.1);
}

.big-div-service .text-hover-animation:hover .hover-video {
  opacity: 1;
  transform: scale(1.1, 1.1);
}

.big-div-service:hover > .text-hover-animation:not(:hover) {
  filter: blur(4px);
  transform: scale(0.9, 0.9);
}

.hover-video {
  width: 105px;
  height: 180px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 0.35px solid rgba(255, 255, 255, 0.2);
  background: rgba(222, 222, 222, 0.05);
  backdrop-filter: blur(20.649999618530273px);
  padding: 5px;
  opacity: 0;
  transition: 400ms;
  transform: scale(0.5);
}

.hover-video video {
  width: 100%;
  height: 100%;
}
</style>