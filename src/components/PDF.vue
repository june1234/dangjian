<template>
	<div>
		<iframe :src="url" frameborder="0" style="width: 100%;height: 1000px"></iframe>
	</div>
</template>

<script>
import { findPdf } from "@/api/pdf";
	export default {
		data(){
         return {
			url:'',
			form:{}
         } 
		},
		created(){
		    this.form=this.$route.query
			console.log(this.form)
			this.form.moduleName=decodeURI(this.form.moduleName)
			console.log(this.form.moduleName)
			findPdf(this.form).then(res=>{
				this.url=res.data.pdfUrl
			})
		}
	}
</script>

<style>

</style>
