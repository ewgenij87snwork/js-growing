<template>
	<div class="container">
		<div class="titlePage"><h1>Array Methods</h1></div>
		<task
		v-for="task in tasks"
		v-bind:func="task.func"
		v-bind:title="task.title"
		v-bind:codeExemple="task.codeExemple"
		v-bind:description="task.description"
		v-bind:key="task.id"
		/>
		<div class="task">
			<div class="decision">
				<button v-on:click="concat">concat</button>
				<p class="answer" id="concat">Press button to see result</p>
			</div>
			<pre><code><b>concat:</b> function() {
		var alpha = ['a', 'b', 'c'];
		document.getElementById("concat").innerHTML = alpha.concat(1, [2, 3]);
	}</code></pre>
			<button v-on:click="show = !show" class="subButton">Show method description</button>
				<div class="methodDescription">
					<transition name="fade" mode="out-in">
						<p v-show="show">Метод <b>concat()</b> возвращает новый массив, состоящий из массива, на котором он был вызван, соединённого с другими массивами и/или значениями, переданными в качестве аргументов.</p>
					</transition>
				</div>
		</div>

		<div class="task">
			<div class="decision">
				<button v-on:click="every">every</button>
				<p class="answer" id="every">Press button to see result</p>
			</div>
			<pre><code><b>every:</b> function() {
		document.getElementById("every").innerHTML = [12, 54, 18, 130, 44].every(elem => elem >= 10);
	}</code></pre>
			<button v-on:click="show = !show" class="subButton">Show method description</button>
			<div class="methodDescription">
				<transition name="fade" mode="out-in">
					<p v-show="show">Метод <b>every()</b> проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.</p>
				</transition>
			</div>
		</div>


	</div>
</template>
<script>
import	task from "@/components/task";
	export default {
		name: 'arrayz',
		data: function() {
			return {
				show: false,
				tasks: [
					{
						id: 1,
						func: 'concat',
						title: 'concat',
						codeExemple: 'bla bla',
						description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis nulla est quaerat aut amet non, cupiditate expedita. Distinctio quidem voluptatibus vero reprehenderit, consequatur corrupti fugiat sequi eius quos, tempora corporis illo optio vel quia quisquam deleniti autem. Quia, maiores, esse.',
					},
					{
						id: 2,
						func: '2concat',
						title: '2concat',
						codeExemple: '2bla bla',
						description: '2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis nulla est quaerat aut amet non, cupiditate expedita. Distinctio quidem voluptatibus vero reprehenderit, consequatur corrupti fugiat sequi eius quos, tempora corporis illo optio vel quia quisquam deleniti autem. Quia, maiores, esse.',
					},
				]
			}
		},
		methods: {
			concat: function() {
				var alpha = ['a', 'b', 'c'];
				document.getElementById("concat").innerHTML = alpha.concat(1, [2, 3]);
			},	
			every: function() {
				document.getElementById("every").innerHTML = [12, 54, 18, 130, 44].every(elem => elem >= 10);
			},				
		}
	}
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: all .25s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to {
  transform: translateX(100px);
  opacity: 0;
}

</style>