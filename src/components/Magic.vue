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
    <div>
      <img class="magic-img" src="@/assets/img/MagicCreate.svg" alt="">
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
.magic-img{
  width: 100%;
}
</style>