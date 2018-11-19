<template>
	<div id="app" style="height: 100%;">
		<router-view></router-view>
	</div>
</template>

<script>
    import AppHeader from '@/components/index/Header.vue'
    import AppFooter from '@/components/index/Footer.vue'
	export default {
		data(){
         return {
            
         } 
		},
		components:{
			AppHeader,
			AppFooter
		}
	}
</script>

<style>

</style>
