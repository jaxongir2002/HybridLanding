<script setup>
</script>


<template>
  <div class="flex justify-between pt-[30px] mt-[30px] mb-[80px] pb-[30px] magic-div">
    <div class="flex flex-col justify-between">
      <img class="section-img" src="@/assets/img/Section.svg" alt="">
      <div class="mobile-img">
        Who we are?
      </div>
      <div class="description">
        We are misfits. We are not an agency, and we don’t just do production; we are a combination of both thinkers and
        doers. We’re a combination of human and more than human. A collaboration between art and tech.
      </div>
    </div>
    <div class="relative video-div">
      <video autoplay loop muted class="magic-img" width="750" height="340" playsinline>
        <source src="../assets/video/videoMission.mp4"
                type="video/mp4">
      </video>
      <div class="text-magic-video">
        we do it for the curious
      </div>
      <div class="text-magic-video-mobile">
        We are misfits
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.mobile-img{
  display: none;
  font-family: Alexandria,sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 30px */
  text-transform: uppercase;
  background: var(--Gr2, linear-gradient(90deg, #BF56FF 0%, #DC2E2D 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.text-magic-video-mobile{
  display: none;
}

.description{
  color:  #FFF;
  font-family: Urbanist,sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -0.72px;
  width: 477px;
}
.magic-img video{
  min-width: 100%;
  min-height: 100%;
  width: auto !important;
  height: auto;

}
.magic-img{
  width: 220% !important;
  height: 800px !important;
  border-radius: 30px !important;

}
.text-magic-video{
  color: var(--Yellow, #FF0);
  text-align: right;
  font-family: Alexandria,sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  text-transform: uppercase;
  position: absolute;
  bottom: 0;
  padding: 30px;
}
@media screen and (max-width: 992px){
  .mobile-img{
    display: block;
  }
  .section-img{
    display: none;
  }
  .description{
    font-size: 16px !important;
    width: 262px !important;
    margin-top: 15px;
  }
  .magic-div{
    flex-direction: column;
    gap: 30px;
  }
  .text-magic-video-mobile{
    color: var(--Yellow, #FF0);
    text-align: right;
    font-family: Alexandria,sans-serif;
    font-size: 30px !important;
    font-style: normal;
    font-weight: 900;
    line-height: 100%; /* 30px */
    text-transform: uppercase;
    display: block;
    position: absolute;
    bottom: -20px;
    padding: 30px;
    width: 80%;
    right: 0%;
  }
  .text-magic-video{
    display: none;
  }
  .magic-img{
    border-radius: 30px !important;
    height: auto !important;
    width: 100%;
    position: relative;
    //right: 18%;
  }
  .magic-img video source{
    border-radius: 30px !important;
  }
  .video-div{
    border-radius: 12px !important;
    width: 100%;
    //overflow: hidden;
    //border: solid white;
  }
}

</style>