<template>
	<div>
		<el-menu
		  default-active="/content/speech"
	      class="el-menu-vertical-demo"
	      background-color="#eee"
	      text-color="#de2810"
	      router
	      active-text-color="#fff">
	      <el-menu-item index="/content/speech">
	        <span slot="title">主席讲话</span>
	      </el-menu-item>
	      <el-menu-item index="/content/specialEducation">
	        <span slot="title">专题教育</span>
	      </el-menu-item>
	      <el-menu-item index="/content/learningDocuments">
	        <span slot="title">学习文件</span>
	      </el-menu-item>
	      <el-menu-item index="/content/policies">
	        <span slot="title">政策法规</span>
	      </el-menu-item>
	      <el-menu-item index="/content/counselingMaterials">
	        <span slot="title">辅导资料</span>
	      </el-menu-item>
	      <el-menu-item index="/content/interactivePlatform">
	        <span slot="title">互动平台</span>
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
div{
	height: 100%;
	.el-menu{
		height: 100%;
		border-right: solid 1px #de2810;
		.el-menu-item{
			border-bottom:1px solid #de2810;
			font-size:18px;
		}
		.el-menu-item.is-active {
		   background-color: #de2810 !important;
		}
	}
}
</style>
