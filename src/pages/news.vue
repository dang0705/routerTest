<template>
  <div>
    <p>news</p>
    <ul>
<!--      <router-link
        to="/news"
        exact
        event="mouseover"
        tag="li"
      >
        体育新闻
      </router-link>
      <router-link
        to="/news/entertainment"
        tag="li"
        event="mouseover"
      >
        娱乐新闻
      </router-link>
      <router-link
        to="/news/social"
        tag="li"
        event="mouseover"
      >
        社会新闻
      </router-link>-->
      <router-link
        :to="{name:'体育新闻_默认'}"
        exact
        event="mouseover"
        tag="li"
      >
        体育新闻
      </router-link>
      <router-link
        :to="{name:'社会新闻'}"
        tag="li"
        event="mouseover"
      >
        娱乐新闻
      </router-link>
      <router-link
        :to="{name:'娱乐新闻'}"
        tag="li"
        event="mouseover"
      >
        社会新闻
      </router-link>
    </ul>
    <router-view/>
  </div>

</template>

<script>
  export default {
    name: "news",
    data(){
      return{
      
      }
    },
    watch: {
      '$route'(to, from) {
        console.log(to, from);
      }
    },
  }
</script>

<style scoped lang="stylus">

</style>
