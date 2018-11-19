<template>
	<div class="index">
		<el-container>
		  <el-aside width="200px">
		  	<app-aside></app-aside>
		  </el-aside>
		  <el-container>
		    <el-header>
		    	<app-header></app-header>
		    </el-header>
		    <el-main>
		    	<router-view></router-view>
		    </el-main>
		  </el-container>
		</el-container>
	</div>
</template>

<script>
    import AppAside from '@/components/backgroundIndex/Asider.vue'
    import AppHeader from '@/components/backgroundIndex/Header.vue'
	export default {
		data(){
         return {
         
         } 
		},
		components:{
			AppAside,
			AppHeader
		}
	}
</script>

<style scoped lang="less">
.index{
	height: 100%;
	.el-container{
		  height: 100%;
		  width: 100%;
		  .el-aside{
		        background-color:#121a2b;
		        float:left;
		        overflow:hidden;
		   }
	      .el-container{
	            height:100%;
	            float:left;
	              .el-header{
	                padding:0;
	              }
	      }
	}
}
</style>
