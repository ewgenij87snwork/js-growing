<template>
	<div class="container">
		<h1>String и её методы</h1>
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
		</div>

		<div class="task">
			<div class="decision">
				<button v-on:click="charCodeAtZ">charCodeAtZ</button>
				<p class="answer" id="charCodeAtZ">Press button to see result</p>
			</div>
			<pre><code><b>charCodeAtZ:</b> function() {
		var stringTest = this.stri0;
		document.getElementById("charCodeAtZ").innerHTML = stringTest.charCodeAt(0);
	}</code></pre>
		</div>

		<div class="task">
			<div class="decision">
				<button v-on:click="concatZ">concatZ</button>
				<p class="answer" id="concatZ">Press button to see result</p>
			</div>
			<pre><code><b>concatZ:</b> function() {
		var stringTest;
		stringTest = (this.stri0 + this.stri1);
		document.getElementById("concatZ").innerHTML = stringTest;
		
		<i>// stringTest = this.stri0.concat('\n.!.\n ',this.stri1); 
		- TOO BAD FOR  PERFORMANCE (произовдительность)</i>
	}</code></pre>
		</div>

		<div class="task">
			<div class="decision">
				<button v-on:click="fromCharCodeZ">fromCharCodeZ</button>
				<p class="answer" id="fromCharCodeZ">Press button to see result</p>
			</div>
			<pre><code><b>fromCharCodeZ:</b> function() {
		document.getElementById("fromCharCodeZ").innerHTML = String.fromCharCode(87);
	}</code></pre>
		</div>

		<div class="task">
			<div class="decision">
				<button v-on:click="indexOf">indexOf</button>
				<p class="answer" id="indexOf">Press button to see result</p>
			</div>
			<pre><code><b>indexOf:</b> function() {
		var stringTest = this.stri0;
		document.getElementById("indexOf").innerHTML = stringTest.indexOf('desires');
	}</code></pre>
		</div>

		<div class="task">
			<div class="decision">
				<button v-on:click="lastIndexOf">lastIndexOf</button>
				<p class="answer" id="lastIndexOf">Press button to see result</p>
			</div>
			<pre><code><b>lastIndexOf:</b> function() {
		var stringTest = this.stri0;
		document.getElementById("lastIndexOf").innerHTML = stringTest.lastIndexOf('desires');
	}</code></pre>
		</div>

		<div class="task">
			<div class="decision">
				<button v-on:click="match">match</button>
				<p class="answer" id="match">Press button to see result</p>
			</div>
			<pre><code><b>match:</b> function() {
		var stringTest = this.stri0;
		document.getElementById("match").innerHTML = stringTest.match('desi');
	}</code></pre>
		</div>

		<div class="task">
			<div class="decision">
				<button v-on:click="replace">replace</button>
				<p class="answer" id="replace">Press button to see result</p>
			</div>
			<pre><code><b>replace:</b> function() {
		var stringTest = this.stri0;
		document.getElementById("match").innerHTML = stringTest.match('desi');
	}</code></pre>
		</div>

	</div>
</template>
<script>
	export default {
		name: 'stringz',
		data: function() {
			return {
				stri0: 'When a person really desires something, all the universe conspires to help that person to realize his dream.',
				stri1: 'There is only one thing that makes a dream impossible to achieve: the fear of failure.',
				stri2: 'Be brave. Take risks. Nothing can substitute experience.',
			}
		},
		methods: {
			charAtZ: function() {
				var stringTest = this.stri0;
				document.getElementById("charAtZ").innerHTML = stringTest.charAt(0);
			},

			charCodeAtZ: function() {
				var stringTest = this.stri0;
				document.getElementById("charCodeAtZ").innerHTML = stringTest.charCodeAt(0);
			},

			concatZ: function() {
				var stringTest;
				stringTest = (this.stri0 + '<br>' + '.!.' + '<br>' + this.stri1);
				document.getElementById("concatZ").innerHTML = stringTest;
			},

			fromCharCodeZ: function() {
				document.getElementById("fromCharCodeZ").innerHTML = String.fromCharCode(87);
			},

			indexOf: function() {
				var stringTest = this.stri0;
				document.getElementById("indexOf").innerHTML = stringTest.indexOf('desires');
			},

			lastIndexOf: function() {
				var stringTest = this.stri0;
				document.getElementById("lastIndexOf").innerHTML = stringTest.lastIndexOf('desires');
			},

			match: function() {
				var stringTest = this.stri0;
				document.getElementById("match").innerHTML = stringTest.match('desi');
			},

			replace: function() {
				var stringTest = this.stri0;
				document.getElementById("replace").innerHTML = this.stri0 + '<br>' + '<br>' + stringTest.replace('a person really desires', 'I want');
			},
		}
	}
</script>
<style scoped>
	pre {
		color: teal;
		font-size: 1.05em;
		line-height: 1.4;
		padding: 10px;
		padding-top: 15px;
		white-space: pre-wrap;
		word-wrap: break-word;
	}
	button {
		font-size: 1.5em;
		align-self: flex-end;
	}
	.task {
		background: rgba(0,0,0,.1);
		margin: 10px auto;
		margin-bottom: 30px; 
		max-width: 95%;
	}
	.decision {
		background: rgba(0,0,0,.1);
		display: grid;
		grid-gap: 50px;
		grid-template-columns: 1fr 5fr; 
		border-bottom: 3px dashed rgba(0,0,0,.7);
		padding-bottom: 10px;
		padding: 10px;
	}
	.answer {
		background: black;
		color: #FFF;
		padding: 7px;
		letter-spacing: 2px;
		width: 100%;
	}


</style>