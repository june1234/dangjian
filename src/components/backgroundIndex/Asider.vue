<template>
	<div class="aside">
		 <p class="title">后台管理平台</p>
		  <el-menu
		      default-active="2"
		      class="el-menu-vertical-demo"
		      background-color="#1b233b"
		      text-color="#fff"
		      active-text-color="#409EFF"
		      router>
		      <el-menu-item index="/BackgroundManagement/index">
		        <i class="el-icon-menu"></i>
		        <span slot="title">首页编辑</span>
		      </el-menu-item>
		      <el-menu-item index="/BackgroundManagement/moudle">
		        <i class="el-icon-document"></i>
		        <span slot="title">模块编辑</span>
		      </el-menu-item>
		    </el-menu>
	</div>
</template>

<script>
	export default {
		data(){
         return {
         
         } 
		}
	}
</script>

<style scoped lang="less">
.aside{
	height: 100%;
	.title{
        color:#fff;
        font-size:18px;
        text-align:center;
        line-height:60px;
    }
	.el-menu{
		height: 100%;
		border-right:0;
	}
}
</style>
