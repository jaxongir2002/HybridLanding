<script setup>
import {gsap} from 'gsap';
import {onMounted, ref} from "vue";

const btnHome = ref(null);
onMounted(() => {
  let mySplitText = new SplitText(".not-found", {type: "chars"});
  let chars = mySplitText.chars;
  let Ops = new SplitText(".oops-sorry", {type: "chars"});
  let  oopsChars = Ops.chars;
  gsap.from(chars, {
    yPercent: -130,
    stagger: 0.02,
    opacity: 0
  });
  gsap.from(oopsChars, {
    yPercent: 130,
    stagger: 0.02,
    opacity: 0
  });
  gsap.from(btnHome.value, {
    duration: 0.5,
    y: "0",
    scale: 0.3,
    transition: 0.3,
    ease: "power1.inOut",
  });
})

</script>

<template>
  <section id="container" style="padding: 34px 40px 34px 40px; max-width: 1440px; margin: auto">
    <div class="title-container">
      <div class="title-logo flex gap-3 not-found">4
        <div class="rotate-number">0</div>
        4
      </div>
      <div class="mt-[32px] relative z-[33]">
        <div ref="oops" class="oops-sorry">
          Oops.. sorry..
          <div class="text-[#F9F9F999]">
            Something went wrong...
          </div>
        </div>
        <div class="flex justify-center">
          <button  ref="btnHome" class="btn-go-home mt-[38px] " @click="$router.push('/landing')">
            Go to home
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@media screen and (max-width: 992px) {
  .title-logo {
    font-size:137.09px!important;
    line-height: 55px !important;
  }
  .oops-sorry{
    font-size: 14px !important;
    margin-top: 16px !important;
  }
  .btn-go-home{
    width:160px !important;
    height: 40px !important;
    font-size: 14px !important;
    line-height: 140% !important;
    padding: 12px 34px !important;
  }
  .title-container {
    top: 40% !important;
    height: 90% !important;
  }
  #container{
    height: 100vh !important;
  }
}

#container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: relative;
  height: 93vh;
}

.rotate-number {
  transform: rotate(-14.268deg);
}

.title-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  position: absolute;
  top: 50%;
  transform: translate(0, -35%);
  z-index: 22;
}

.oops-sorry {
  color: var(--White, #F9F9F9);
  text-align: center;
  font-family: Alexandria, sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 41.6px */
  text-transform: uppercase;
}

.btn-go-home {
  display: inline-flex;
  padding: 12px 64px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 500px;
  background: var(--White, #F9F9F9);
  color: var(--Black, #0E0E0E);
  text-align: center;
  font-family: Alexandria, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 25.2px */
}

.title-logo {
  color: var(--White, #F9F9F9);
  text-align: center;
  font-family: Alexandria, sans-serif;
  font-size: 400px;
  font-style: normal;
  font-weight: 900;
  line-height: 100%; /* 400px */
  text-transform: uppercase;
  transition: 1s;
}

</style>