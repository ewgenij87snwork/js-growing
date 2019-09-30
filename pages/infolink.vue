<template>
	<div>
		<div style="position: relative">
		<base-nav type="default"  effect="dark" expand>
			<ul class="navbar-nav flex-column">
					<li class="nav-item" v-for="item in infolinks" v-bind:key="item.name">
							<a class="nav-link nav-link-icon text-primary" :href="item.link" target="_blank">
									{{ item.name }}
							</a>
					</li>
			</ul>
	 </base-nav>
		</div>
	</div>
</template>
<script>
export default {
	name: 'infolink',
	components: {
		'BaseNav': () => import('@/argon/components/BaseNav')
	},
	data: function() {
		return {
			infolinks: [
				{
					name: 'Самый адекватный онлайн-переводчик',
					link: 'https://www.deepl.com'
				},{
					name: 'Czy na pewno wiesz czym jest frontend?',
					link: 'https://geek.justjoin.it/pewno-wiesz-czym-frontend/'
				},{
					name: '5 вещей, которые чаще всего не понимают новички в JavaScript',
					link: 'https://habr.com/ru/company/otus/blog/466873/'
				},{
					name: 'Используем DOM как Pro',
					link: 'https://webdevblog.ru/ispolzuem-dom-kak-pro/'
				},{
					name: 'Прокачиваем навыки отладки JavaScript с помощью консольных трюков',
					link: 'https://habr.com/ru/company/plarium/blog/468189/'
				},{
					name: '33 самые полезные регулярки для веб-разработчика',
					link: 'https://proglib.io/p/33-regexp/'
				},{
					name: 'ТОП-6 рецептов на чистом HTML и CSS',
					link: 'https://proglib.io/p/html-css-tricks/'
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
<style lang="sass" scoped>

</style>