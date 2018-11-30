<template>
	<div class="header">
	  	<span>用户名</span>
		<el-button type="primary" @click="logout">退出</el-button>
	</div>
</template>

<script>
	export default {
		data(){
         return {
         
         } 
      },
      methods:{
         logout(){
            this.$store.dispatch('LogOut').then(() => {
            location.reload() // 为了重新实例化vue-router对象 避免bug
            })
         }
      }
	}
</script>

<style scoped lang="less">
.header{
   background-color:#fff;
   height: 60px;
   span{
      font-size:16px;
      line-height:60px;
      margin-left:80%;
   }
}
</style>
