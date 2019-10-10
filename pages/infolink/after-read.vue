<template>
	<div>
		<div style="position: relative">
			<h4 class="text-center titlePage">Articles I've already read:</h4>
			<nav class="navbar">
				<ol class="list-counter-circle">
					<a class="nav-link nav-link-icon" v-for="item in infolinks" v-bind:key="item.name" :href="item.link" target="_blank">
						<li class="nav-item" >{{ item.name }}</li>
					</a>					
				</ol>
			</nav>
		</div>
	</div>
</template>
<script>
export default {
	name: 'after-read',
	components: {
	},
	data: function() {
		return {
			infolinks: [
				{
					name: 'Сравнение React и Vue на практическом примере',
					link: 'https://habr.com/ru/company/ruvds/blog/419373/'
				},{
					name: 'Czy na pewno wiesz czym jest frontend?',
					link: 'https://geek.justjoin.it/pewno-wiesz-czym-frontend/'
				},{
					name: 'ТОП-6 рецептов на чистом HTML и CSS',
					link: 'https://proglib.io/p/html-css-tricks/'
				},{
					name: 'Css переменные',
					link: 'http://webupblog.ru/css-peremennye-opisanie-i-primery-ispolzovaniya/'
				},
			]
		}
	}
}
</script>
<style lang="sass">
.list-counter-circle
	--link-color-text: #ffffff
	--link-color-bg: #2B6E19
</style>