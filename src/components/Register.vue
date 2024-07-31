<script setup>
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {onMounted} from "vue";

gsap.registerPlugin(SplitText, ScrollTrigger);

onMounted(() => {
  let mySplitText = new SplitText('.text-register', {type: 'chars'})
  let mySplit = new SplitText('.btn-link-text', {type: 'chars'})

  let mayChars = mySplit.chars
  let chars = mySplitText.chars

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.scroll-register',
      start: 'top 50%',
      end: 'bottom bottom',
      scrub: 1,
    }
  });

  tl.from(chars, {
    yPercent: 130,
    stagger: 0.02,
  });

  tl.from('.label-name', {
    yPercent: -40,
    opacity: 0,
    stagger: .5,
    duration: 1,
    yoyo: true,
    transition: 1
  });

  gsap.from(mayChars, {
    yPercent: 130,
    stagger: 0.02,
    opacity: 0,
    scrollTrigger: {
      trigger: '.scroll-register',
      start: 'top 50%',
      end: 'bottom bottom',
      scrub: 1,
    }
  });
  gsap.from('.text-project', {
    opacity: 0,
    scrollTrigger: {
      trigger: '.scroll-register',
      start: 'top 50%',
      end: 'bottom 50%',
      scrub: 1,
    }
  });
  gsap.from('.description-text', {
    opacity: 0,
    yPercent: 130,
    stagger: 0.02,
    scrollTrigger: {
      trigger: '.scroll-register',
      start: 'top 50%',
      end: 'bottom 50%',
      scrub: 1,
    }
  });
  gsap.from('.btn-sent', {
    duration: 0.5,
    y: '0',
    scale: 0.3,
    transition: .3,
    yoyo: true,
    ease: 'power1.inOut',
    scrollTrigger: {
      trigger: ".scroll-register",
      start: "top 50%",
      end: "bottom bottom",
      scrub: true,
    }
  });
  gsap.from('.btn-animation-links', {
    duration: 0.5,
    y: '0',
    scale: 0.3,
    transition: .3,
    yoyo: true,
    ease: 'power1.inOut',
    scrollTrigger: {
      trigger: ".scroll-register",
      start: "top 50%",
      end: "bottom bottom",
      scrub: true
    }
  });
  tl.from('.checkbox-animation', {
    animation: "check-animation 1s linear infinite",
    scrollTrigger: {
      trigger: ".scroll-register",
      start: "top 50%",
      end: "bottom bottom",
      scrub: true
    }
  })
})
</script>

<template>
  <div class="pt-[80px] flex justify-between scroll-register mt-[20px]">
    <div>
      <div class="text-touch">
        Get in Touch
        <div class="glass-effect"></div>
      </div>
      <div class="flex gap-[20px] mt-[136px] info-container">
        <div>
          <label class="label-btn">
            <span class="text-project">Start a project:</span>
            <button class="btn-links-text btn-links mt-[15px]">
              info@hybridinstallations.com
            </button>
          </label>
        </div>
        <div class="flex gap-[20px]">
          <label class="label-btn">
            <span class="btn-link-text">Social:</span>
            <button class="btn-links mt-[15px] btn-animation-links">
              <i class="pi pi-instagram text-white text-[20px]"></i>
              <!-- <img src="@/assets/img/instagram.svg" alt="">-->
            </button>
          </label>
          <label class="leading-[140%] text-transparent">
            Social:
            <button class="btn-links mt-[15px] btn-animation-links">
              <i class="pi pi-twitter text-white text-[20px]"></i>
              <!-- <img src="@/assets/img/tweeter.svg" alt="">-->
            </button>
          </label>
          <label class="leading-[140%] text-transparent">
            Social:
            <button class="btn-links mt-[15px] btn-animation-links">
              <i class="pi pi-linkedin text-white text-[20px]"></i>
              <!-- <img src="@/assets/img/mdi_linkedin.svg" alt="">-->
            </button>
          </label>
        </div>
      </div>
      <div class="description-text mt-[227px]">
        New media art & entertainment studio creating experiences for the physical & digital world.
      </div>
    </div>
    <div class="line-center"></div>
    <div>
      <div>
        <div class="text-register">
          Tell us
        </div>
        <div class="text-register">
          everything..
        </div>
      </div>

      <form>
        <div class="form-group mt-[30px]">
          <label for="name" class="label-name">Name
            <input type="text" class="form-control" id="name" placeholder="John Smith">
          </label>
        </div>
        <div class="form-group mt-[30px]">
          <label for="Email" class="label-name">Your Email
            <input type="email" class="form-control" id="Email" placeholder="email@gmail.com">
          </label>
        </div>
        <div class="form-group mt-[30px]">
          <label for="Phone" class="label-name">Your Phone
            <input type="number" class="form-control" id="Phone" placeholder="Enter your phone">
          </label>
        </div>
        <div class="form-group mt-[30px]">
          <label for="Message" class="label-name">Message
            <input type="text" class="form-control" id="Message" placeholder="Write about your project">
          </label>
        </div>

        <div class="checkbox-container mt-[32px] mb-[32px]">
          <label class="container label-name ">
            <span class="relative top-[27px] left-[15px] text-checkbox-mobile"> I agree to use and processing of my personal data</span>
            <input type="checkbox" checked="checked">
            <div class="checkmark checkbox-animation"></div>
          </label>
        </div>
        <button type="submit" class="btn-sent ">
          <img src="@/assets/img/rightArrow.svg" alt="">Send
        </button>

      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media (max-width: 768px) {
  .text-touch {
    font-size: 40px !important;
    width: 188px !important;
  }
  .glass-effect {
    width: 166px !important;
    height: 40px !important;
    bottom: 20px !important;
    right: 5px;
  }
  .scroll-register {
    flex-direction: column !important;
  }
  .line-center {
    display: none;
  }
  .info-container {
    flex-direction: column;
    margin-top: 0;
  }
  .description-text {
    margin-top: 8px !important;
    margin-bottom: 40px !important;
    font-size: 14px !important;
    width: 204px !important;
  }
  .btn-links-text {
    display: flex;
    width: 100%;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .text-project {
    color: #F9F9F9 !important;
    font-size: 14px;
  }
  .btn-links {
    height: 41px;
    padding: 12px 24px;
  }
  .text-register {
    font-size: 30px !important;
  }
  .label-name {
    font-size: 16px !important;
    text-align: left !important;

  }
  .text-checkbox-mobile {
    top: 35px !important;
    left: 40px !important;
  }
}

.container {
  --input-focus: #2d8cf0;
  --input-out-of-focus: #ccc;
  --bg-color: #fff;
  --bg-color-alt: #666;
  --main-color: #323232;
  position: relative;
  cursor: pointer;

}

.container input {
  position: absolute;
  opacity: 0;
}

.checkmark {
  width: 30px;
  height: 30px;
  position: relative;
  top: 0;
  left: 0;
  padding: 5px;
  border: 2px solid var(--main-color);
  box-shadow: 1px var(--main-color);
  background-color: white;
  transition: all 0.3s;
  border-radius: 10px;
  cursor: pointer;
}

.container input:checked ~ .checkmark {
  background-color: #A42DEA;
}

.checkmark:after {
  content: "";
  width: 7px;
  height: 15px;
  position: absolute;
  top:3px;
  left: 9px;
  display: none;
  border: solid var(--bg-color);
  border-width: 0 2.5px 2.5px 0;
  transform: rotate(45deg);
}
.container input:checked ~ .checkmark:after {
  display: block;
}


.checkbox-container {
  display: flex;
  align-items: center;
  gap: 4px;
}

.checkbox-container input[type="checkbox"] {
  margin-right: 10px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  border-radius: 100px;
}

.checkbox-container input[type="checkbox"]:checked:focus {
  background-color: red !important;
  background-image: url("@/assets/img/checked.svg");
}

.checkbox-container label {
  font-size: 16px;
}

.label-check {
  color: var(--icon-color, #FFF);
  text-align: center;
  font-family: Alexandria, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
}

.btn-sent {
  display: inline-flex;
  padding: 12px 64px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 500px;
  background: var(--icon-color, #FFF);
  color: #000;
  text-align: center;
  font-family: Alexandria, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  transition: .3s;
  cursor: url("@/assets/img/Polygon.svg"), auto;
}

.line-center {
  width: 2px;
  height: 750px;
  opacity: 0.25;
  background: #FFF;
}

.label-name {
  color: var(--icon-color, #FFF);
  text-align: center;
  font-family: Alexandria, sans-serif;;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
}

.form-control {
  display: flex;
  width: 450px;
  padding: 0 230px 10px 0;
  align-items: center;
  gap: 10px;
  margin-top: 25px;
  background: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.20);
  outline: none;
}

.form-control[type=text]:focus {
  border: none;
}

.form-control::placeholder {
  color: rgba(255, 255, 255, 0.20) !important;
  font-family: Alexandria, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  text-align: left;
}

.text-register {
  color: var(--icon-color, #FFF);
  width: 420px;
  font-family: Alexandria, sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  position: relative;
  text-transform: uppercase;
  overflow: hidden;
}

.text-touch {
  color: #FFF;
  font-family: Alexandria, sans-serif;
  font-size: 120px;
  font-style: normal;
  font-weight: 900;
  line-height: 100%;
  text-transform: uppercase;
  width: 440px;
}

.glass-effect {
  width: 440px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 30px;
  background: rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(4px);
  position: relative;
  bottom: 50px;
}

.btn-links {
  display: flex;
  height: 41px;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 500px;
  border: 1px solid #FFF;
  transition: 0.3s;
}

.btn-links:hover {
  border-color: #FFFF00;
  cursor: url("@/assets/img/Polygon.svg"), auto;

  i {
    color: #FFFF00;
  }
}

.label-btn {
  color: #FFFF;
  text-align: center;
  font-family: Alexandria, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
}

.btn-links-text {
  display: flex;
  height: 41px;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 500px;
  border: 1px solid #FFF;
  color: #FFF;
  font-family: Alexandria, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 140%;
}

.description-text {
  color: #FFF;
  font-family: Urbanist, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -0.48px;
  width: 321px;
}

.btn-links img {
  min-width: 24px;
}

.checkbox-animation {
  animation: check-animation 1s;
  animation-timing-function: ease-in-out;
}

@keyframes check-animation {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  20% {
    transform: scale(0.8) rotate(10deg);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.2) rotate(-15deg);
    opacity: 1;
  }
  80% {
    transform: scale(0.9) rotate(5deg);
    opacity: 0.7;
  }
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
}
</style>