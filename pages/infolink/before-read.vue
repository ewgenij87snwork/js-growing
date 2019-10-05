<template>
	<div>
		<div style="position: relative">
				<h4 class="text-center titlePage">Articles I plan to read:</h4>
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
	name: 'before-read',
	components: {
	},
	data: function() {
		return {
			infolinks: [
				{
					name: '5 вещей, которые чаще всего не понимают новички в JavaScript',
					link: 'https://habr.com/ru/company/otus/blog/466873/'
				},{
					name: 'Используем DOM как Pro',
					link: 'https://webdevblog.ru/ispolzuem-dom-kak-pro/'
				},{
					name: 'Прокачиваем навыки отладки JavaScript с помощью консольных трюков',
					link: 'https://habr.com/ru/company/plarium/blog/468189/'
				},{
					name: 'Шпаргалка по современному JavaScript',
					link: 'https://tproger.ru/translations/javascript-cheatsheet/'
				},
			]
		}
	}
}
</script>
<style lang="sass" scoped>
.infolinki
.list-counter-circle
	--link-color-text: #ffffff
	--link-color-bg: #800080


</style>