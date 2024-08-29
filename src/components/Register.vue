<script setup>
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {onBeforeUnmount, onMounted, ref} from "vue";
import Lenis from "lenis";

const lenis = new Lenis();

const isMobile = window.matchMedia('(max-width: 767px)').matches;
let tl;
const btnSent = ref(null);
const btnAnimationLinks = ref(null);
const checkBox = ref(null);
const textProject = ref(null);
const labelName = ref(null);
const descriptionText = ref(null);
const scrollRegister = ref(null);
const showModal = ref(false);
let bodyOverflow = null;

function initRegisterAnimation() {
  if (!isMobile) {
    gsap.registerPlugin(SplitText, ScrollTrigger);
    let mySplitText = new SplitText(".text-register", {type: "chars"});
    let mySplit = new SplitText(".btn-link-text", {type: "chars"});

    let mayChars = mySplit.chars;
    let chars = mySplitText.chars;

    tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollRegister.value,
        start: "top 50%",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    tl.from(chars, {
      yPercent: 130,
      stagger: 0.02,
    });

    tl.from(labelName.value, {
      yPercent: -40,
      opacity: 0,
      stagger: 0.5,
      duration: 1,
      transition: 1,
    });

    tl.from(mayChars, {
      yPercent: 130,
      stagger: 0.02,
      opacity: 0,
    });
    gsap.from(textProject.value, {
      opacity: 0,
      scrollTrigger: {
        trigger: ".scroll-register",
        start: "top 50%",
        end: "bottom 50%",
        scrub: 1,
      },
    });
    gsap.from(descriptionText.value, {
      opacity: 0,
      yPercent: 130,
      stagger: 0.02,
      scrollTrigger: {
        trigger: ".scroll-register",
        start: "top 50%",
        end: "bottom 50%",
        scrub: 1,
      },
    });

    gsap.from(btnSent.value, {
      duration: 0.5,
      y: "0",
      scale: 0.3,
      transition: 0.3,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".scroll-register",
        start: "top 50%",
        end: "bottom bottom",
        scrub: 1,
      }
    });

    gsap.from(btnAnimationLinks.value, {
      duration: 0.5,
      y: "0",
      scale: 0.3,
      transition: 0.3,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".scroll-register",
        start: "top 50%",
        end: "bottom bottom",
        scrub: 1,
      }
    });
    tl.from(checkBox.value, {
      animation: "check-animation 1s linear infinite",
    });
  }
  return tl;
}

onMounted(() => {
  tl = initRegisterAnimation();
  window.addEventListener('popstate', () => {
    tl = initRegisterAnimation();
  });
});
onBeforeUnmount(() => {
  if (tl) {
    tl.kill(); // Kill the timeline if it exists
  }
  ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill all ScrollTriggers
});
function openModal(item, index) {
  showModal.value = true;

  bodyOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";
  mobile()
}
function mobile() {
  if (showModal.value === true) {
    document.body.classList.add('no-scroll');
    lenis.stop();
  } else {
    document.body.classList.remove('no-scroll');
    lenis.start();
  }
}
function closeModal(event) {
  // Check if the Esc key was pressed
  if (event.key === 'Escape') {
    showModal.value = false;
    document.body.style.overflow = bodyOverflow || "";
    mobile();
  } else {
    showModal.value = false;
    document.body.style.overflow = bodyOverflow || "";
    mobile();
  }
}
</script>

<template>
  <div ref="scrollRegister" class="pt-[80px] flex justify-between scroll-register mt-[80px]">
    <div>
      <div class="text-touch relative z-[33]">
        Get in Touch
        <div class="glass-effect"></div>
      </div>
      <div class="flex gap-[20px] mt-[136px] info-container">
        <div>
          <label class="label-btn relative z-[33]">
            <span ref="textProject" class="text-project">Start a project:</span>
            <button class="btn-links-text btn-links mt-[15px]">
              info@hybridinstallations.com
            </button>
          </label>
        </div>
        <div class="flex gap-[20px] relative z-[33]">
          <label class="label-btn">
            <span class="btn-link-text">Social:</span>
            <button class="btn-links mt-[15px] btn-animation-links">
              <i class="pi pi-instagram text-white text-[20px]"></i>
            </button>
          </label>
          <label class="leading-[140%] text-transparent">
            Social:
            <button class="btn-links mt-[15px] btn-animation-links">
              <i class="pi pi-twitter text-white text-[20px]"></i>
            </button>
          </label>
          <label class="leading-[140%] text-transparent">
            Social:
            <button class="btn-links mt-[15px] btn-animation-links">
              <i class="pi pi-linkedin text-white text-[20px]"></i>
            </button>
          </label>
        </div>
      </div>
      <div ref="descriptionText" class="description-text mt-[227px] relative z-[33]">
        New media art & entertainment studio creating experiences for the
        physical & digital world.
      </div>
    </div>
    <div class="line-center"></div>
    <div>
      <div class="relative z-[33]">
        <div class="text-register">Tell us</div>
        <div class="text-register">everything..</div>
      </div>

      <form>
        <div class="form-group mt-[30px]">
          <label ref="labelName" for="name" class="label-name"
          >Name
            <input
                type="text"
                class="form-control"
                id="name"
                placeholder="John Smith"
            />
          </label>
        </div>
        <div class="form-group mt-[30px]">
          <label ref="labelName" for="Email" class="label-name"
          >Your Email
            <input
                type="email"
                class="form-control"
                id="Email"
                placeholder="email@gmail.com"
            />
          </label>
        </div>
        <div class="form-group mt-[30px]">
          <label ref="labelName" for="Phone" class="label-name"
          >Your Phone
            <input
                type="number"
                class="form-control number-input"
                id="Phone"
                placeholder="Enter your phone"
            />
          </label>
        </div>
        <div class="form-group mt-[30px]">
          <label ref="labelName" for="Message" class="label-name"
          >Message
            <input
                type="text"
                class="form-control"
                id="Message"
                placeholder="Write about your project"
            />
          </label>
        </div>

        <div ref="checkBox" class="checkbox-container mt-[32px] mb-[32px]">
          <label class="container label-name">
            <span class="relative top-[27px] left-[15px] text-checkbox-mobile">
              I agree to use and processing of my personal data</span
            >
            <input type="checkbox" checked="checked"/>
            <div class="checkmark checkbox-animation"></div>
          </label>
        </div>

      </form>
      <button ref="btnSent" @click="openModal"  class="btn-sent relative z-[33]">
        <img src="@/assets/img/rightArrow.svg" alt=""/>Send
      </button>
    </div>
  </div>
  <transition name="modal">
    <div v-if="showModal" class="modal" @click.self="closeModal">
      <div class="modal-content">
      <div class="text-modal-form px-[90px] py-[80px] w-[80%] m-auto">
        Thank you for completing the form!
        <div class="text-description-form text-center mt-[24px] w-[70%] m-auto">
          We will definitely get in touch with you soon.
          Please stay tuned.
        </div>
        <button ref="btnSent" @click="closeModal" class="btn-sent relative z-[33] mt-[34px]">
          Got it!
        </button>
      </div>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.text-description-form{
  color: var(--White, #F9F9F9);
  text-align: center;
  font-family: Urbanist,sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 28.8px */
  letter-spacing: -0.72px;
}
.text-modal-form{
  color: var(--White, #F9F9F9);
  text-align: center;
  font-family: Alexandria,sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 65px */
  text-transform: uppercase;
}
.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 999;
  border-radius: 12px;
  background: rgba(11, 11, 11, 0.70);
  transition: opacity 0.3s ease-in-out;
  animation-name: fadeIn;
  animation-duration: 0.4s;
}

.modal::-webkit-scrollbar {
  position: fixed;
  width: 0;
  height: 0;
  display: none;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s ease-in-out;
}

.modal-enter .modal-content,
.modal-leave-to .modal-content {
  transform: scale(0.8);
}

.modal-content {
  border-radius: 12px;
  background: #181818;
  backdrop-filter: blur(70.80000305175781px);
  padding: 18px;
  animation-name: openModal;
  animation-duration: 0.5s;
  display: flex !important;
  flex-direction: column !important;
}

@keyframes openModal {
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
}

@media screen and (max-width: 992px) {
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
    color: #f9f9f9 !important;
    font-size: 14px;
  }
  .btn-links {
    height: 41px;
    padding: 12px 24px;
  }
  .text-register {
    font-size: 30px !important;
    width: 90% !important;
  }
  .form-control {
    width: 90% !important;
    padding: 0 !important;
  }
  .text-checkbox-mobile {
    top: 35px !important;
    left: 40px !important;
  }
  .checkbox-container{
    font-size: 14px !important;
    width: 90%!important;
  }
  .label-name {
    text-align: left !important;
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
  background-color: #a42dea;
}

.checkmark:after {
  content: "";
  width: 7px;
  height: 15px;
  position: absolute;
  top: 3px;
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
  color: var(--icon-color, #fff);
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
  background: var(--icon-color, #fff);
  color: #000;
  text-align: center;
  font-family: Alexandria, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  cursor: url("@/assets/img/Polygon.svg"), auto;
  transition: 0.3s all;
}

.btn-sent:hover {
  transform: scale(1.1) !important;
}

.line-center {
  width: 2px;
  height: 750px;
  opacity: 0.25;
  background: #fff;
}

.label-name {
  color: var(--icon-color, #fff);
  text-align: center;
  font-family: Alexandria, sans-serif;
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
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  outline: none;
  position: relative;

}

.form-control[type="text"]:focus {
  border: none;
}

.form-control::placeholder {
  color: rgba(255, 255, 255, 0.2) !important;
  font-family: Alexandria, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  text-align: left;
}

.text-register {
  color: var(--icon-color, #fff);
  width: 90%;
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
  color: #fff;
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
  border: 1px solid #fff;
  transition: 0.3s;
}

.btn-links:hover {
  border-color: #ffff00;
  cursor: url("@/assets/img/Polygon.svg"), auto;

  i {
    color: #ffff00;
  }
}

.label-btn {
  color: #ffff;
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
  border: 1px solid #fff;
  color: #fff;
  font-family: Alexandria, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 140%;
}

.description-text {
  color: #fff;
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

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield !important;
}

form {
  position: relative !important;
  z-index: 33 !important;
}
</style>
