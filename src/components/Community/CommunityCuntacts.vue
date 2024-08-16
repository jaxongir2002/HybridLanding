<script setup>

</script>

<template>
  <div class='relative'>
    <iframe width="200px" height="240px"
            src="https://lottie.host/embed/8e80c604-e0af-4b03-96ce-f75675059aa0/Tyehx7Emkq.json"></iframe>
    <div class="contact-us-text">
      Let’s make some
      magic together! Contact us to
      start your journey.
    </div>
      <video autoplay loop muted playsinline>
        <source src="@/assets/video/wecreatemagic_lsF4u8LF.mp4"
                type="video/mp4">
      </video>
    <div class="contact-title">
      Contact  us
    </div>
  </div>
</template>

<style scoped lang="scss">
iframe {
  transform: scaleX(-1);
  position: absolute;
  top: 40px;
  left: 40px;
}
.contact-us-text{
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
.contact-title{
  font-weight: 900;
  font-size: 120px;
  line-height: 120px;
  color: white;
  text-transform: uppercase;
  position: absolute;
  bottom: 100px;
  left: 30px;
}
video{
  width: 100%;
  height: 900px;
}
</style>