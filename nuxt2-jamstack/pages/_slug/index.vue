<template>
  <main class="main">
    <h1 class="title">{{ title }}</h1>
    <p class="publishedAt">{{ publishedAt }}</p>
    <div class="post" v-html="body"></div>
  </main>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'

export default  Vue.extend({
  name: 'SlugPage',
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://ki0i0ro0.microcms.io/api/v1/nuxt-jamstack/${params.slug}`,
      {
        headers: { 'X-MICROCMS-API-KEY': 'e882cb286ca1422c8ebdbd594b43d5fd3515' }
      }
    )
    return data
  }
})
</script>

<style lang="scss" scoped>
.main {
  width: 960px;
  margin: 0 auto;
}

.title {
  margin-bottom: 20px;
}

.publishedAt {
  margin-bottom: 40px;
}

.post ::v-deep {
  & > h1 {
    font-size: 30px;
    font-weight: bold;
    margin: 40px 0 20px;
    background-color: #eee;
    padding: 10px 20px;
    border-radius: 5px;
  }

  & > h2 {
    font-size: 24px;
    font-weight: bold;
    margin: 40px 0 16px;
    border-bottom: 1px solid #ddd;
  }

  & > p {
    line-height: 1.8;
    letter-spacing: 0.2px;
  }

  & > ol {
    list-style-type: decimal;
    list-style-position: inside;
  }
}
</style>
