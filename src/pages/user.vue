<template>
  <div>user
    <ul>
      <router-link
        tag="li"
        v-for="(item,index) of dataList"
        :to="{
          path:`/user/${item.tip}/${item.id}`,
          query:{
            info:query_str
          }
        }"
        :key="index"
      >
        {{ item.userName }}
      </router-link>
    </ul>
    <p v-show="userInfo.content">{{userInfo.content}}</p>
    <hr>
    <div v-if="userInfo.content" class="query_box">
      <ul>
        <router-link
          v-for="(item,index) of query_list"
          :key="index"
          :to="{query:{info:`${item.query_info}`}}"
          active-class="info_active_class"
          tag="li"
          exact
          @click.native="router_click($route.query.info)"
        >
          {{item.query_Name}}
        </router-link>
       <!-- <router-link
          :to="{query:{info:'share'}}"
          tag="li"
          exact
          @click.native="router_click($route.query.info)"
        >
          我的分享
        </router-link>-->
      </ul>
      <div>
        {{$route.query}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "user",
    data() {
      return {
        dataList: [
          {
            id: 1,
            tip: 'vip',
            userName: '用户1',
            content: 'abc'
          },
          {
            id: 2,
            tip: 'vip',
            userName: '用户2',
            content: 'a_b_c'
          },
          {
            id: 3,
            tip: 'common',
            userName: '用户3',
            content: 'cba'
          },
        ],
        userInfo: {},
        query_list:[
          {
            query_info:'follow',
            query_Name:'他的关注'
          },
          {
            query_info:'share',
            query_Name:'他的分享'
          },
          {
            query_info:'msg',
            query_Name:'他的信息'
          }

        ],
        query_str:'follow'
      }
    },
    watch: {
      $route() {
        console.log(this.$route);
        this.getUserInfo()
      }
    },
    methods: {
      getUserInfo() {
        let id = this.$route.params.user_Id;
        if ( id ) {
          this.userInfo = this.dataList.filter((item) => {
            return item.id == id
          })[ 0 ];
        } else {
          this.userInfo = {}
        }
        // console.log(this.userInfo);
      },
      router_click(query){
        this.query_str=query
        console.log(query);
      }
    },
    mounted() {
      this.getUserInfo()
    }
    
  }
</script>

<style scoped lang="stylus">

</style>
