<template>
	<div class="container">
		<div class="annotationTask">
			<p>У меня есть 3 строки:</p>
			<p><b>stri0:</b> 'When a person really desires something, all the universe conspires to help that person to realize his dream.',</p>
			<p><b>stri1:</b> 'There is only one thing that makes a dream impossible to achieve: the fear of failure.',</p>
			<p><b>stri2:</b> 'Be brave. Take risks. Nothing can substitute experience.'</p>
		</div>
		<div class="task">
			<div class="decision">
				<button v-on:click="charAtZ">charAtZ</button>
				<p class="answer" id="charAtZ">Press button to see result</p>
			</div>
			<pre><code><b>charAtZ:</b> function() {
		var stringTest = this.stri0;
		document.getElementById("charAtZ").innerHTML = stringTest.charAt(1);
	}</code></pre>
			<button v-on:click="show = !show" class="subButton">Show method description</button>
			<div class="methodDescription"><p v-show="show">привет</p></div>
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
			charAtZ: function() {
				var stringTest = "this.stri0";
				document.getElementById("charAtZ").innerHTML = stringTest.charAt(0);
			},				
		}
	}
</script>
<style lang="sass">
</style>