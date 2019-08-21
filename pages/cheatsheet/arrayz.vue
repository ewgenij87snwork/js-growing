<template>
	<div class="container">
		<div class="titlePage"><h1>Array Methods</h1></div>

		<div class="task">
			<div class="decision">
				<button v-on:click="concat">concat</button>
				<p class="answer" id="concat">Press button to see result</p>
			</div>
			<pre><code><b>concat:</b> function() {
		var alpha = ['a', 'b', 'c'];
		var alphaNumeric = alpha.concat(1, [2, 3]);
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
			<div class="methodDescription"><p v-show="show">Метод <b>every()</b> проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.</p></div>
		</div>


	</div>
</template>
<script>
	export default {
		name: 'arrayz',
		data: function() {
			return {
				show: false,
			}
		},
		methods: {
			concat: function() {
				var alpha = ['a', 'b', 'c'];

				var alphaNumeric = alpha.concat(1, [2, 3]);
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