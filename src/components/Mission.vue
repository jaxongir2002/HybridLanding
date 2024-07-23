<script setup>
import {onMounted, ref} from "vue";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const missionTitle = ref(null);

onMounted(() => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.grid',
      start: 'top top',
      pin: true,
      end: '400%',
      scrub: 1,
    }
  });
  tl.to('.one-text', {
    color: 'white',
  });
  tl.to('.two-text', {
    color: 'white',
  });
  tl.to('.first-text', {
    color: 'white',
  });
  tl.to('.second-text', {
    color: 'white',
  });
  tl.to('.third-text', {
    color: 'white',
  });
  tl.to('.four-text', {
    color: 'white',
  });
  tl.to('.five-text', {
    color: 'white',
  });
  tl.to('.six-text', {
    color: 'white',
  });
  tl.to('.seven-text', {
    color: 'white',
  });
  tl.to('.eight-text', {
    color: 'white',
  });
  tl.to('.nine-text', {
    color: 'white',
  });
  tl.to('.tan-text', {
    color: 'white',
  });

  tl.to('.eleven-text', {
    color: 'white',
  });
  tl.to('.twelve-text', {
    color: 'white',
  });
  tl.to('.thirteen-text', {
    color: 'white',
  });
  tl.to('.fourteen-text', {
    color: 'white',
  });
  // card mission
  tl.to('.card-mission', {
    padding: '0',
  });

  tl.to('.card-mission2', {
    transform: 'translateY(-300px)',
    duration: 2,
    visibility: 'visible'

  });
  tl.to('.first-img', {
    opacity: '0',
  });

  // tl.to('.first-name', {
  //   visibility:'hidden'
  // })
  tl.to('.second-name', {
    transform: 'translate3d(0,-25%,0)'
  })


  tl.to('.fifteen-text', {
    color: 'white',
  });
  tl.to('.sixteen-text', {
    color: 'white',
  });
  tl.to('.seventeen-text', {
    color: 'white',
  });
  tl.to('.eighteen-text', {
    color: 'white',
  });
  tl.to('.nineteen-text', {
    color: 'white',
  });
  tl.to('.twenty-text', {
    color: 'white',
  });
  tl.to('.twenty-one-text', {
    color: 'white',
  });
  tl.to('.twenty-two-text', {
    color: 'white',
  });
  tl.to('.twenty-three-text', {
    color: 'white',
  });
  tl.to('.twenty-four-text', {
    color: 'white',
  });


  tl.to('.card-mission3', {
    transform: 'translateY(-300px)',
    duration: 2,
    visibility: 'visible'
  });

  tl.to('.third-name', {
    transform: 'translate3d(0,-50%,0)'
  })

  tl.to('.second-img', {
    opacity: '0',
  });
  tl.to('.twenty-five-text', {
    color: 'white',
  });
  tl.to('.twenty-six-text', {
    color: 'white',
  });
  tl.to('.twenty-seven-text', {
    color: 'white',
  });
  tl.to('.twenty-eight-text', {
    color: 'white',
  });
  tl.to('.twenty-nine-text', {
    color: 'white',
  });
  tl.to('.thirty-text', {
    color: 'white',
  });
  tl.to('.thirty-one-text', {
    color: 'white',
  });
  tl.to('.thirty-two-text', {
    color: 'white',
  });
  tl.to('.thirty-third-text', {
    color: 'white',
  });
  tl.to('.thirty-four-text', {
    color: 'white',
  });
  tl.to('.final-text', {
    color: 'white',
  });


});


</script>

<template>
  <div ref="logo" class=" grid grid-cols-12 pt-[80px] pb-[80px]">
    <div class="col-span-6 w-[555px]">
      <div class="card-mission relative">
        <img class="first-img" src="@/assets/img/monkey.svg" alt="">
        <div class="card-mission2 ">
          <img class="second-img" src="@/assets/img/monkey2.svg" alt="">
        </div>
        <div class="card-mission3">
          <img src="@/assets/img/Monkey3.svg" alt="">
        </div>
      </div>
      <div class="flex text-font font-light justify-between text-white mt-[20px] leading-6">
        <ul class="overflow-hidden h-[20px]">
          <li class="first-name">WE</li>
          <li class="second-name">MAGIC</li>
          <li class="third-name">CREATEli</li>
        </ul>
        <ul class="overflow-hidden h-[20px]">
          <li class="first-name">01</li>
          <li class="second-name">02</li>
          <li class="third-name">03</li>
        </ul>
      </div>

    </div>
    <div class="col-span-6">
      <h1 class="uppercase text-font font-bold text-[50px] leading-[50px] text-white">
        mission & vision
      </h1>
      <div ref="missionTitle" class="text-description">
        <span class="text-white"> We are a modern</span> <span class="one-text"> and</span><span class="two-text"> innovative</span>
        <span class="first-text">new</span> <span class="second-text">media</span> <span
          class="third-text">arts</span>

        <span class="four-text">tech</span> <span class="five-text">studio,</span> <span
          class="six-text">creatively</span> <span class="seven-text">combining</span> <span
          class="eight-text">art</span>
        <span class="nine-text">and</span> <span class="tan-text">tech</span> <span class="eleven-text">to</span> <span
          class="twelve-text">create</span>
        <span class="thirteen-text"> unique</span>
        <span class="fourteen-text">immersive</span> <span class="fifteen-text">experiences.</span> <span
          class="sixteen-text">Our</span>
        <span class="seventeen-text">mission</span> <span class="eighteen-text">is</span><span
          class="eighteen-text">to</span>
        <span class="nineteen-text">bridge</span> <span class="twenty-text">the</span> <span
          class="twenty-one-text">gap</span> <span class="twenty-two-text">between</span> <span
          class="twenty-three-text">the</span> <span class="twenty-four-text">virtual</span>
        <span class="twenty-five-text">and</span>
        <span class="twenty-six-text"> physical</span> <span class="twenty-seven-text">worlds,</span>
        <span class="twenty-eight-text"> offering</span>
        <span class="twenty-nine-text"> concepts</span>
        <span class="thirty-text"> that</span>
        <span class="thirty-one-text"> empower</span>

        <span class="thirty-two-text"> you</span>
        <span class="thirty-third-text"> to</span>
        <span class="thirty-four-text"> dream</span>
        <span class="final-text"> beyond boundaries.</span>
      </div>
      <button class="btn-about-us flex gap-[5px]">
        <img src="@/assets/img/ArrowRightBtn.svg" alt="">About us
      </button>
    </div>

    <div class="col-span-6 flex flex-col justify-between">
      <div>
      </div>
      <div class="flex gap-[15px]">
        <button class="btn-links">
          <img src="@/assets/img/instagram.svg" alt="">
        </button>
        <button class="btn-links">
          <img src="@/assets/img/tweeter.svg" alt="">
        </button>
        <button class="btn-links">
          <img src="@/assets/img/mdi_linkedin.svg" alt="">
        </button>
      </div>

    </div>
    <div class="col-span-6">
      <video autoplay loop muted src="@/assets/video/Pf6gCjoF.gif.mp4"></video>
    </div>
  </div>

</template>

<style scoped lang="scss">
.btn-links {
  display: flex;
  height: 41px;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;

  border-radius: 500px;
  border: 1px solid #FFF;
}
.btn-links img{
  min-width: 24px;
}

.btn-about-us {
  border-radius: 500px;
  border: 1px solid #ffff;
  padding: 12px 64px 12px 64px;
  color: white;
  font-family: Alexandria, sans-serif;
  font-size: 18px;
  line-height: 25px;
  font-weight: 500;
  margin-top: 40px;
}

.card-mission {
  border-radius: 8.4px;
  border: 1px solid #FFFFFF1A;
  padding: 10px;
  background-color: #DEDEDE0D;
  overflow: hidden;
}

.card-mission2 {
  border-radius: 8.4px;
  border: 1px solid #FFFFFF1A;
  padding: 10px;
  background: #DEDEDE0D;
  position: absolute;
  visibility: hidden;
}

.card-mission3 {
  border-radius: 8.4px;
  border: 1px solid #FFFFFF1A;
  padding: 10px;
  background: #DEDEDE0D;
  position: absolute;
  visibility: hidden;
}

.text-font {
  font-family: Alexandria, sans-serif;
}

.text-description {
  font-family: Urbanist, sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -3%;
  color: #FFFFFF99;
  margin-top: 30px;
  width: 640px;
}

body {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #34495e;
}
</style>