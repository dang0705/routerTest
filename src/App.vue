<template>
  <div id="app">
    <div class="nav">
      <ul>
        <router-link
          tag="li"
          to="/"
          exact
          event="mouseover"
        >首页
        </router-link>
        <router-link
          tag="li"
          to="/news"
          active-class="active-class"
          event="mouseover"
        
        >新闻
        </router-link>
        <router-link
          tag="li"
          to="/my"
          event="mouseover"
        >我的
        </router-link>
        <router-link
          tag="li"
          to="/user"
          event="mouseover"
        >
          用户
        </router-link>
      </ul>
      当前路由下标:{{$route.meta.index}}
    </div>
    <router-view name="slider" class="slider"/>
    <transition :name="transition_name">
      <router-view class="center"/>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        transition_name: 'left'
      }
    },
    watch: {
      $route(to, from) {
        console.log('app.vue',to, from);
        if ( to.meta.index < from.meta.index ) {
          this.transition_name='left'
        } else {
          this.transition_name='right'
        }
      }
    },
    beforeRouteEnter(to,from,next){
      console.log(to, from, next);
    },
    methods: {}
  }
</script>

<style lang="stylus">
  .v-enter
    opacity 0
  
  .v-enter-to
    opacity 1
  
  .v-enter-active
    transition 1.2s
  
  .v-leave
    opacity 1
  
  .v-leave-to
    opacity 0
  
  .v-leave-active
    transition .6s
  
  .left-enter,
  .right-leave-to
    transform translateX(-100%)
  
  /*.left-enter-to
    transform translateX(0)*/
  .left-enter-active,
  .left-leave-active,
  .right-leave-active,
  .right-enter-active
    transition .6s
  
  /* .left-leave
	 transform translateX(0)*/
  .left-leave-to,
  .right-enter
    transform translateX(100%)
</style>
