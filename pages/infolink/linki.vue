<template>
	<div>
		<div style="position: relative">
			<h4 class="text-center titlePage">Selected articles, which need in future:</h4>
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
					name: 'Css to SASS with variable separation',
					link: 'https://beautifyconverter.com/css-to-sass-converter.php'
				},{
					name: 'Самый адекватный онлайн-переводчик',
					link: 'https://www.deepl.com'
				},{
					name: '33 самые полезные регулярки для веб-разработчика',
					link: 'https://proglib.io/p/33-regexp/'	
				},{
					name: 'Шаблон лендинга',
					link: 'https://castaneda.com/'
				},{
					name: 'Шпаргалка по современному JavaScript',
					link: 'https://tproger.ru/translations/javascript-cheatsheet/'
				},{
					name: 'Проверка RegExp',
					link: 'https://regexr.com/'
				},
			]
		}
	}
}
</script>
<style lang="sass">
.list-counter-circle
	--link-color-text: #ffffff
	--link-color-bg: #32325d

</style>