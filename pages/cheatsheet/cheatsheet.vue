<template>
	<div class="container">
		<h2>cheatsheet</h2>
		<nav class="links">
			<nuxt-link to="/cheatsheet/regexpz"><h2>regexp</h2></nuxt-link>
			<nuxt-link to="/cheatsheet/stringz"><h2>stringz</h2></nuxt-link>
		</nav>
		<div class="task">
			<h1>Node Methods: insertBeforeZ</h1>
			<button v-on:click="insertBeforeZ">Решить</button>
		</div>
	</div>
</template>
<script>
export default {
	name: 'cheatsheet',

	methods: {
		insertBeforeZ: function() {
			console.log(60*60)
		},
     
	}
}
</script>
<style scoped>
	a {
		text-decoration: none;
		text-transform: uppercase;
		color: teal;
	}
</style>