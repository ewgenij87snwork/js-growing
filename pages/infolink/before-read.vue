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
					name: 'Front-end Developer Handbook 2019',
					link: 'https://frontendmasters.com/books/front-end-handbook/2019/'
				},{
					name: 'Как делать сайты в 2019 году',
					link: 'https://habr.com/ru/post/456912/'
				},{
					name: '9 Projects You Can Do to Become a Front-End Master in 2020',
					link: 'https://medium.com/better-programming/9-projects-you-can-do-to-become-a-front-end-master-in-2020-97577110cca1'
				},{
					name: 'Building a Relay-compatible GraphQL Server',
					link: 'https://jobs.zalando.com/tech/blog/building-a-relay-compatible-graphql-server/?gh_src=4n3gxh1'
				},{
					name: 'Нужны ли препроцессоры в 2019 году',
					link: 'https://medium.com/@lucyhackwrench/%D0%BD%D1%83%D0%B6%D0%BD%D1%8B-%D0%BB%D0%B8-%D0%BF%D1%80%D0%B5%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D0%BE%D1%80%D1%8B-%D0%B2-2019-%D0%B3%D0%BE%D0%B4%D1%83-727a856d1443'
				},{
					name: 'Важные отличия между Sass и SCSS',
					link: 'https://tpverstak.ru/sass-scss/'
				},{
					name: 'Как подступиться к fullstack-разработке сегодня, если ты проспал десять лет',
					link: 'https://habr.com/ru/post/427181/'
				},{
					name: 'SDLC — жизненный цикл разработки',
					link: 'https://qa-guide.ru/forums/topic/sdlc/'
				},{
					name: 'Переходим с jQuery на чистый JavaScript',
					link: 'https://medium.com/@stasonmars/%D0%BF%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B4%D0%B8%D0%BC-%D1%81-jquery-%D0%BD%D0%B0-%D1%87%D0%B8%D1%81%D1%82%D1%8B%D0%B8%CC%86-javascript-e2b3c2c6ab4'
				},{
					name: '7 secret patterns Vue consultants don\'t want you to know',
					link: 'https://www.vuemastery.com/conferences/vueconf-us-2018/7-secret-patterns-vue-consultants-dont-want-you-to-know-chris-fritz/'
				},{
					name: 'PWA',
					link: 'https://habr.com/ru/post/418923/'
				},{
					name: 'Основные заблуждения о SCRUM',
					link: 'https://habr.com/ru/post/456196/'
				},{
					name: 'Производительность анимаций на сайтах',
					link: 'https://habr.com/ru/post/450484/'
				},{
					name: 'Пагинация во Vue.js',
					link: 'https://habr.com/ru/post/417119/'
				},{
					name: '10 структур данных, которые вы должны знать',
					link: 'https://proglib.io/p/data-structures/'
				},{
					name: 'Топ-5 мегатрендов фронтенд-разработки',
					link: 'https://techrocks.ru/2019/04/18/top-5-frontend-development-megatrends/'
				},{
					name: 'Советы сеньоров: как прокачать знания junior Front-end/JavaScript',
					link: 'https://dou.ua/lenta/articles/senior-frontend-tips/'
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