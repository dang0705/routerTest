<template>
	<div>
    <div v-for="(item,index) in list">
      <button @click="click_fun(index)"></button>
      <div v-show="show_list[index]">{{item.content}}</div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "my",
    data(){
		  return{
		    list:[
          {
            title:'abc',
            content:'cba'
          } ,
          {
            title:'abc',
            content:'abc'
          } ,
          {
            title:'abc',
            content:'aaa'
          }
        ],
        show_list:[
          false,false,false
        ]
      }
    },
    watch: {
      '$route'(to, from) {
        console.log('my.vue',to, from);
      }
    },
    methods:{
      click_fun(index){
        this.show_list=true
      }
    }
	}
</script>

<style scoped lang="stylus">

</style>
