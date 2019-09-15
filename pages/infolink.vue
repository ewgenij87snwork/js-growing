<template>
	<div>
		<div style="position: relative">
		<base-nav type="default"  effect="dark" expand>
			<ul class="navbar-nav">
					<li class="nav-item" v-for="item in infolinks" v-bind:key="item.name">
							<a class="nav-link nav-link-icon text-primary" :href="item.link">
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
					name: '33 самые полезные регулярки для веб-разработчика',
					link: 'https://proglib.io/p/33-regexp/'
				},
				{
					name: 'ТОП-6 рецептов на чистом HTML и CSS',
					link: 'https://proglib.io/p/html-css-tricks/'
				},
				{
					name: 'Шаблон лендинга',
					link: 'https://castaneda.com/'
				},
				{
					name: 'Шпаргалка по современному JavaScript',
					link: 'https://tproger.ru/translations/javascript-cheatsheet/'
				},
			]
		}
	}
}
</script>
<style lang="sass" scoped>

</style>