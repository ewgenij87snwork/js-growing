<template>
	<div>
		<swiper-comp/>
		<search-form/>
	</div>
</template>
<script>

export default {
	name: 'vuex-nasa',
	components: {
		'search-form': () => import('@/components/search-form'),
		'swiper-comp': () => import('@/components/swiper-comp')
	},	
}

</script>
<style lang="sass">

</style>
