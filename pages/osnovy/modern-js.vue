<!-- Надо расширить grain: если веток нету и если веток более чем одна!  -->
<template>
	<div class="out">
<!-- 		<introduction
		:intro=intro
		/> -->
		
		<div class="grain_wrapper">
			<grain
			v-for="grain in grains"
			v-bind:key="grain.id"
			v-bind:name="grain.name"
			v-bind:title="grain.title"
			v-bind:explain="grain.explain"
			v-bind:example="grain.example"
			v-bind:concept="grain.sprout.concept"
			v-bind:code="grain.sprout.code"
			></grain>
		</div>
		
		<base-button @click="pageLoader(onPageLoadingFinished)" type="success">Boom!</base-button>
		<convertToJson></convertToJson>
	</div>
</template>
<script>
import grains from "@/data/grains.json"
export default {
	name: 'modern-js',
	components: {
		'introduction': () => import('@/components/introduction'),
		'convertToJson': () => import('@/components/convertToJson'),
		'grain': () => import('@/components/grain'),
	},

	data: function() {
		return {
			grains: grains,
			friends: this.grains,
			intro: {
				'title': 'Modern JS',
				'blockquote': 'Знание без практики порождает лишь страсти',
				'blockquoteAuthor': 'Лао-Цзы',
				'blockquoteSource': '"Дао Дэ Цзин. Книга о Пути и Силе"',
				'subtitle': 'Что здесь реализовывается',
				'text': [
					'Здесь будет минимум 2 компонента: на шапку страницы и на учебные пункты.', 
					'Учебные пункты -- их названия буду брать с первоисточника. Как раз потренируюсь называть их. Еще к ним сделаю навигацию. По клику будет переход и плавное появление частей учебного пункта, как на сайте барыжных последователй Кастаньеды...(ну чего они достигли, если им приходится зарабатывать на его имени?). В общем, моя задача реализовать "спокойствие" в этой анимации.', 
					'К данному моменту уже была внедрена подсветка синтаксиса JS, где вручную переписал стили по своей теме в Sublime. К сожалению, highlight.js имеет недостаточное количество позиций для изменения цвета. В частности имена переменных, методы и скобки имеют один цвет. Возможно, стоит попробовать взять за основу другую тему или открыть и почитать js самого highlight. Но увы, на это нету времени, я должен бежать дальше '],
			}
		}
	},	
	methods: {
		}
}
</script>
<style scoped lang="sass">
// -----Transition ---------------------

.slideInDown-enter-active
	animation: slideInDown 1.5s

.slideInDown-leave-active
	animation: slideInDown 1.5s reverse

@keyframes slideInDown
	from
		transform: translate3d(0, -100%, 0)
		visibility: visible

	to
		transform: translate3d(0, 0, 0)


@keyframes slideOutDown
	from
		transform: translate3d(0, 0, 0)

	to
		visibility: hidden
		transform: translate3d(0, 100%, 0)
// ----- End Transition ----------------
</style>