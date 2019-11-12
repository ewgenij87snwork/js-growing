<template>
	<div>
		<search-form/>
	</div>
</template>
<script>
export default {
	name: 'vuex-nasa',
	components: {
		'search-form': () => import('@/components/search-form')
	}
}

</script>
<style lang="sass">

</style>
