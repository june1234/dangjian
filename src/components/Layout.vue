<template>
	<div>
		<el-container>
		  <el-aside width="150px">
		  	<app-asides></app-asides> 
		  </el-aside>
		  <el-main>
		  	<router-view></router-view>
		  </el-main>
		</el-container>
	</div>
</template>

<script>
  import AppAsides from '@/components/index/Aside.vue'
	export default {
		data(){
         return {
         
         } 
		},
		components:{
			AppAsides
		}
	}
</script>

<style>

</style>
