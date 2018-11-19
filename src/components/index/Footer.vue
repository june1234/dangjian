<template>
	<div>
		<footer style="position:relative;">
			<img src="../../assets/footer.png" alt="" style="width: 100%;">
			<el-button type="danger" style="position:absolute;right:0;bottom:5px;" icon="el-icon-message" circle @click="management"></el-button>
			<el-button type="danger" style="position:absolute;right:50px;bottom:5px;" icon="el-icon-edit" circle @click="login"></el-button>			
		</footer>
	</div>
</template>

<script>
	export default {
		data(){
         return {
         
         } 
		},
		methods:{
			management(){
				this.$router.push('/BackgroundManagement/index')
			},
			login(){
				this.$router.push('/login')
			}

		}
	}
</script>

<style>

</style>
