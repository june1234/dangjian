<template>
	<div class="w">
		<app-header></app-header>
		<router-view></router-view>
		<app-footer></app-footer>
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
