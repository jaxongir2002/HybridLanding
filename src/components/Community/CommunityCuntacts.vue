<script setup>

</script>

<template>
  <div class='relative padding-no'>
    <iframe width="200px" height="240px"
            src="https://lottie.host/embed/8e80c604-e0af-4b03-96ce-f75675059aa0/Tyehx7Emkq.json"></iframe>
    <div class="contact-us-text">
      Let’s make some
      magic together! Contact us to
      start your journey.
    </div>
    <video autoplay loop muted playsinline class="desktop-video" >
      <source src="@/assets/video/wecreatemagic_lsF4u8LF.mp4"
              type="video/mp4">

    </video>
    <video autoplay loop muted playsinline class="mobile-video hidden" >
      <source src="@/assets/video/84d3ee1d02f80623a9f94aaf876be15f12f8030d7abc558fa81e43cf65067340_FU8j2xww.mp4"
              type="video/mp4">

    </video>

    <div class="contact-title">
      Contact us
    </div>
  </div>
</template>
<style lang="scss">
.padding-no {
    padding: 0 !important;
}
</style>
<style scoped lang="scss">
@media screen and (max-width: 992px) {
  .contact-title {
    font-size: 40px !important;
    top: 380px;
    left: 22px !important;
  }
  iframe {
    width: 100px;
    height: 100px;
    top: 320px !important;
  }
  .contact-us-text {
    font-size: 20px !important;
    font-weight: 400 !important;
    width: 235px !important;
    left: 10% !important;
    line-height: 120% !important;
    top: 30px !important;
  }
  video {
    width: 100%;
    height: 500px !important;
    margin-top: 100px;
  }
  .mobile-video{
    display: block !important;
  }
  .desktop-video{
    display: none !important;
  }
}

iframe {
  transform: scaleX(-1);
  position: absolute;
  top: 40px;
  left: 40px;
}

.contact-us-text {
  font-weight: 700;
  font-size: 50px;
  line-height: 65px;
  color: white;
  text-transform: uppercase;
  position: absolute;
  left: 732px;
  top: 80px;
  width: 550px;
  height: 260px;
}

.contact-title {
  font-weight: 900;
  font-size: 120px;
  line-height: 120px;
  color: white;
  text-transform: uppercase;
  position: absolute;
  bottom: 100px;
  left: 30px;
}

video {
  width: 1440px;
  height: 900px;
}
</style>