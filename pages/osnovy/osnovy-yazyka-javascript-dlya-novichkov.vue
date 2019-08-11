<template>
	<div class="container">
		<h2>Основы работы с JavaScript</h2>
		<div class="task">
			<h1>#1</h1>
			<p>
				<b>Задача</b>
				<span>
					<b>Напишите скрипт, который считает количество секунд в часе.</b>
				</span>
			</p>
			<button v-on:click="task1">Решить</button>
		</div>
		<div class="task">
			<h1>#5</h1>
			<p><b>Задача</b>. Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c. Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат запишите в переменную result. Выведите на экран значение переменной result.</p>
			<button v-on:click="task5">Решить</button>
		</div>
		<div class="task">
			<h1>#10</h1>
			<p><b>Задача</b>. Спросите имя пользователя с помощью методы prompt. Выведите с помощью alert сообщение <b>'Ваше имя %имя%'.</b></p>
			<button v-on:click="task10">Решить</button>
		</div>
		<div class="task">
			<h1>#13</h1>
			<p><b>Задача</b>. Создайте переменную num и присвойте ей значение '12345'. Найдите произведение (умножение) цифр этого числа.</p>
			<button v-on:click="task13">Решить</button>
		</div>
		<div class="task">
			<h1>#100</h1>
			<p><b>Задача</b>.</p>
			<button v-on:click="task100">Решить</button>
		</div>
		<div class="task">
			<h1>taskMatch</h1>
			<p><b>Задача</b>.</p>
			<button v-on:click="taskMatch">Решить</button>
		</div>
		<div class="task">
			<h1>Node Properties: Element.attributes</h1>
			<p><b>Задача</b>.</p>
			<button v-on:click="taskAttr">Решить</button>
		</div>
	</div>
</template>
<script>
export default {
	name: 'osnovy-yazyka-javascript-dlya-novichkov',

	methods: {
		task1: function() {
			console.log(60*60)
		},
		task5: function() {
				var a, b, c, d, result,
				a = 17
				b = 10,
				c = a - b,
				d = 7,
				result = c + d,
				console.log (result)				
		},
		task10: function() {
			var name = prompt('Введите имя')
			alert('Ваше имя: ' + name)
		},
		task13: function() {
			var num, inc, i
			num = '12345',
			inc = 1, 
			i = 0
			for (; i<5; i++) {
				inc *= num[i]
			}
			console.log(inc)
		},
		task100: function() {
			var array = [2, 5, 9];
			console.log(array.indexOf(2));    
			console.log(array.indexOf(7));     
			console.log(array.indexOf(9, 2)); 
			console.log(array.indexOf(2, -1)); 
			console.log(array.indexOf(2, -3)); 
		},
		taskMatch: function() {
			var str = 'Глава 3.4.5.1 содержит дополнительную информацию';
			var re = /(глава \d+(\.\d)*)/i;
			var found = str.match(re);

			console.log(found);
		},
		taskAttr: function() {
			var para = document.getElementsByTagName("h1")[1].textContent;
			var atts = para.attributes;
			console.log(atts)
		}
	}
}
</script>
<style scoped>
	.task {
		background: rgba(80,80,15, .25);
		margin-bottom: 10px;
		padding: 15px;
	}
</style>