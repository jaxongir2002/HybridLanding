<script setup>
import {onMounted, watch, ref, computed} from 'vue'
import gsap from "gsap";
import LoaderBlog from "@/components/LoaderBlog.vue";
import moment from "moment";

const props = defineProps({
  blogList: Array,
  default: []
})

const active = ref(0);
const loading = ref(false);
const selectTitle = ref('All');
const filteredBlogList = ref();
const itemCount = ref( 8);
const btnBlog = ref([
  {
    title: 'All'
  },
  {
    title: 'News'
  },
  {
    title: 'Trends'
  },
  {
    title: 'Insights'
  },
]);

function activeFn(index, title) {
  active.value = index;
  selectTitle.value = title;
}

const displayedItems = computed(() => {
  return props.blogList.slice(0, itemCount.value);
});
function loadMoreItems() {
  loading.value = true
  setTimeout(() => {
    itemCount.value = props.blogList.length;
    loading.value = false
  }, 1000)
}

watch(selectTitle, (newTitle) => {
  if (newTitle) {
    filteredBlogList.value = props.blogList.filter(item =>
        item.attributes.blog_list.title.includes(newTitle)
    );
  }
  if (selectTitle.value === 'All') {
    return filteredBlogList.value = [...props.blogList];
  }
}, {deep: true});


onMounted(() => {
  gsap.registerPlugin(SplitText);
  let mySplitText = new SplitText(".test-animation-blog", {type: "chars"});
  let chars = mySplitText.chars;
  gsap.from(chars, {
    yPercent: 130,
    stagger: 0.02,
    opacity: 0
  });
})
</script>

<template>
  <div class="grid grid-cols-12 mt-[90px] max-sm:mt-[85px]">
    <div class="filter-blog col-span-4">
      <div class="blog-logo relative z-10 test-animation-blog">
        Blog
      </div>
      <div class="flex gap-[10px] mt-[15px] relative z-10">
        <button class="btn-blog-filter" v-for="(item,index) in btnBlog" :key="index" @click="activeFn(index,item.title)"
                :class="{ 'active': active === index }">
          {{ item.title }}
        </button>
      </div>

    </div>
    <div class="col-span-8 grid grid-cols-12 gap-[20px] cards-info-blog">
      <div v-for="item in (filteredBlogList || displayedItems)"
           :key="item"
           class="card-blog flex flex-col justify-between col-span-6 relative z-20 max-sm:mt-[20px]"
           @click="$router.push({name: 'blogView', params: { id: item.attributes.blog_list.id }})">
        <div class="flex justify-between items-start max-sm:justify-between max-sm:items-start">
          <div class="rounded-[9px] max-sm:rounded-[9px] overflow-hidden">
            <video :src="item.attributes?.blog_list.video" autoplay loop muted playsinline>
            </video>
          </div>
          <img src="@/assets/img/Arrow_right.svg" alt="">
        </div>
        <div>
          <div class="text-blog">
            {{ item.attributes.blog_list?.description }} <span
              class="emoji">
          </span>
          </div>
          <div class="flex gap-[16px] mt-[12px]">
            <div class="date">
              {{ moment(new Date(item.attributes.blog_list.date)).format('MM.DD.YYYY') }}
            </div>
            <img src="@/assets/img/LineBlog.svg" alt="">
            <div class="date">
              {{ item.attributes.blog_list.title }}
            </div>

          </div>
        </div>
      </div>

      <div class="col-span-12 grid grid-cols-12">
        <LoaderBlog class="col-span-6 m-auto max-sm:col-span-12" v-if="loading"/>
        <LoaderBlog class="col-span-6 m-auto max-sm:hidden" v-if="loading"/>
      </div>

      <button class="learn-btn col-span-4 left-[100%] relative z-10" @click="loadMoreItems">
        See more
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 992px) {
  .filter-blog {
    grid-column: span 12 / span 12;
  }
  .cards-info-blog {
    grid-column: span 12 / span 12;
  }
  .card-blog {
    grid-column: span 12 / span 12;
  }
  .learn-btn {
    grid-column: span 10 / span 10;
    left: 30px !important;
    right: 0 !important;
  }
}

.blog-logo {
  color: var(--White, #F9F9F9);
  font-family: Alexandria, sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
}

.active {
  border-radius: 500px;
  border: 0.5px solid #828282;
  background: var(--White, #F9F9F9);
  backdrop-filter: blur(64.44999694824219px);
  color: #0E0E0E !important;
  font-weight: 700 !important;
}

.learn-btn {
  color: #FFF;
  text-align: center;
  font-family: Alexandria, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  border-radius: 500px;
  width: 100%;
  border: 1px solid var(--icon-color, #FFF);
  display: inline-flex;
  padding: 12px 64px;
  justify-content: center;
  align-items: center;
  transition: 0.3s;

}

.learn-btn:hover {
  color: #A20AFF;
  border-color: #A20AFF;
}

.learn-btn:active {
  transform: scale(0.9);
}

.btn-blog-filter {
  color: var(--Black, #F9F9F9);
  font-family: Alexandria, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
  text-transform: uppercase;
  display: flex;
  padding: 10px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 500px;
  border: 0.5px solid #828282;
  backdrop-filter: blur(64.44999694824219px);
  transition: 0.5s;
}

.card-blog {
  height: 450px;
  flex-shrink: 0;
  border-radius: 20px;
  padding: 20px;
  overflow: hidden;
  background: linear-gradient(#0E0E0E, #0E0E0E) padding-box,
  linear-gradient(0deg, transparent 5%, #FFFFFF54, #FFFFFF54) border-box;
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transform-origin: right bottom;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.card-blog video {
  width: 100%;
  height: 174px;
  flex-shrink: 0;
  border-radius: 9px !important;
}

.card-blog .text-blog {
  font-family: Alexandria, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 130%; /* 20.8px */
  background: linear-gradient(90deg, #828282 1.73%, #FFF 44.64%, #828282 91.33%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 275px;
}

.card-blog .date {
  color: var(--White, #F9F9F9);
  font-family: Alexandria, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 140%;
}

</style>