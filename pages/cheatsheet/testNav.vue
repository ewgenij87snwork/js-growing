<template>
	<navigate></navigate>
</template>
<script>
	export default {
		name: 'testNav',
		components: {
			'navigate': () => import('@/components/navigate')
		}
	}
</script>