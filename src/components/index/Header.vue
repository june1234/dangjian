<template>
	<div>
		<img src="../../assets/top4.jpg" width="100%" alt="">
		<el-menu
		  default-active="/"
		  class="el-menu-demo"
		  mode="horizontal"
		  @select="handleSelect"
		  background-color="#de2810"
		  text-color="#fff"
		  router
		  active-text-color="#ffd04b">
		  <el-menu-item index="/">首页</el-menu-item>
		  <el-menu-item index="/content/speech">主席讲话</el-menu-item>
		  <el-menu-item index="/content/specialEducation">专题教育</el-menu-item>
		  <el-menu-item index="/content/learningDocuments">学习文件</el-menu-item>
		  <el-menu-item index="/content/policies">政策法规</el-menu-item>
		  <el-menu-item index="/content/counselingMaterials">辅导资料</el-menu-item>
		  <el-menu-item index="/content/interactivePlatform">互动平台</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
export default {
	data(){
     return {
     
     } 
	},
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      }
    }
}
</script>

<style scoped lang="less">
 	img{
 		display:block;
 	}
 	.el-menu{
 		.el-menu-item{
 			font-size:20px;
 		}
 	}
</style>
