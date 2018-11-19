<template>
	<div>
		<iframe :src="'../../static/web/viewer.html?file='+url" frameborder="0" style="width: 100%;height: 1000px"></iframe>
	</div>
</template>

<script>
	export default {
		data(){
         return {
            url:'../../static/pdf/index.pdf'
         } 
		}
	}
</script>

<style>

</style>
