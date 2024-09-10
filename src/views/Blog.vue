<script setup>
import LastSection from "@/components/LastSection.vue";
import BlogCards from "@/components/Blog/BlogCards.vue";
import {useAxios} from "@/composable/useAxios.js";
import {ref} from 'vue'

const blogList = ref([])

async function getMethod() {
  const res = await useAxios(`/blogs?populate=*`)
  blogList.value = res.data
}

getMethod()
</script>

<template>
  <div class="screen-width" style="padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto">
    <BlogCards :blog-list="blogList"/>
    <LastSection/>
  </div>
</template>

<style scoped lang="scss">
</style>