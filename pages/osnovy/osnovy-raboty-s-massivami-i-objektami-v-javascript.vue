<template>
	<div class="container">
		<h2>Основы работы с JavaScript</h2>
		<div class="task">
			<h1>#1</h1>
			<p><b>Задача</b>. Напишите скрипт, который считает количество секунд в часе.</p>
			<button v-on:click="task1">Решить</button>
		</div>
		<div class="task">
			<h1>#5</h1>
			<p><b>Задача</b>. Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c. Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат запишите в переменную result. Выведите на экран значение переменной result.</p>
			<button v-on:click="task5">Решить</button>
		</div>
	</div>
</template>
<script>
export default {
	name: 'osnovy-yazyka-javascript-dlya-novichkov',

	methods: {
		task1: function() {
			console.log(60*60)
		}
	}
}
</script>
<style scoped>
	
</style>