<script setup>

</script>

<template>
  <div class="pt-[80px] pb-[80px] flex justify-between">
    <div class="">
      <div class="text-touch">
        Get in Touch
        <div class="glass-effect"></div>
      </div>
      <div class="flex gap-[20px] mt-[136px]">
        <div>
          <label class="label-btn">
            Start a project:
            <button class="btn-links-text mt-[15px]">
              info@hybridinstallations.com
            </button>
          </label>
        </div>
        <label class="label-btn">
          Social:
          <button class="btn-links mt-[15px]">
            <img src="@/assets/img/instagram.svg" alt="">
          </button>
        </label>
        <label class="leading-[140%]">
          Social:
          <button class="btn-links mt-[15px]">
            <img src="@/assets/img/tweeter.svg" alt="">
          </button>
        </label>
        <label class="leading-[140%]">
          Social:
          <button class="btn-links mt-[15px]">
            <img src="@/assets/img/mdi_linkedin.svg" alt="">
          </button>
        </label>

      </div>
      <div class="description-text mt-[227px]">
        New media art & entertainment studio creating experiences for the physical & digital world.
      </div>
    </div>
    <div class="line-center"></div>
    <div>
      <div class="text-register">
        Tell us everything..
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
          <label class="container label-name">
            <span class="relative top-[27px] left-[15px]"> I agree to use and processing of my personal data</span>
            <input type="checkbox" checked="checked">
            <div class="checkmark"></div>
          </label>
        </div>
        <button type="submit" class="btn-sent "><img src="@/assets/img/rightArrow.svg" alt="">Send</button>

      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">

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
  line-height: 140%; /* 25.2px */
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
  text-align: center;
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
  text-transform: uppercase;
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
}

.label-btn {
  color: var(--icon-color, #FFF);
  text-align: center;
  font-family: Alexandria, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 140%; /* 19.6px */
}

.btn-links-text {
  display: flex;
  height: 41px;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 500px;
  border: 1px solid #FFF;
  color: var(--icon-color, #FFF);
  font-family: Alexandria, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 140%; /* 19.6px */
}

.description-text {
  color: var(--icon-color, #FFF);

  /* Body/b_16_Semibold */
  font-family: Urbanist, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 19.2px */
  letter-spacing: -0.48px;
  width: 321px;
}

.btn-links img {
  min-width: 24px;
}
</style>