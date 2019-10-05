<template>
	<div class="container">
		<br>
		<h1>String и её методы</h1>
		<div class="annotationTask">
			<p>У меня есть 3 строки:</p>
			<p><b>stri0:</b> 'When a person really desires something, all the universe conspires to help that person to realize his dream.',</p>
			<p><b>stri1:</b> 'There is only one thing that makes a dream impossible to achieve: the fear of failure.',</p>
			<p><b>stri2:</b> 'Be brave. Take risks. Nothing can substitute experience.'</p>
		</div>
		<br>

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
		document.getElementById("match").innerHTML = stringTest.replace('a person really desires', 'I want');
	}</code></pre>
		</div>

		<div class="task">
			<div class="decision">
				<button v-on:click="search">search</button>
				<p class="answer" id="search">Press button to see result</p>
			</div>
			<pre><code><b>search:</b> function() {
		var stringTest = this.stri0;
		document.getElementById("match").innerHTML = stringTest.search('a person really desires');
	}</code></pre>
		</div>

		<div class="task">
			<div class="decision">
				<button v-on:click="slice">slice</button>
				<p class="answer" id="slice">Press button to see result</p>
			</div>
			<pre><code><b>slice:</b> function() {
		var stringTest = this.stri0;
		document.getElementById("slice").innerHTML = this.stri0 + stringTest.slice(-6, -1);
	}</code></pre>
		</div>

		<div class="task">
			<div class="decision">
				<button v-on:click="split">split</button>
				<p class="answer" id="split">Press button to see result</p>
			</div>
			<pre><code><b>split:</b> function() {
		var stringTest = this.stri0;
		document.getElementById("split").innerHTML = this.stri0 +  stringTest.split(',').reverse().join('');
	}</code></pre>
		</div>

		<div class="task">
			<div class="decision">
				<button v-on:click="substring">substring</button>
				<p class="answer" id="substring">Press button to see result</p>
			</div>
			<pre><code><b>substring:</b><b> function() {
	var stringTest = this.stri0;
	function replaceString(olds, newS, fulls) {
		for (var i = 0; i &lt; fulls.length; ++i) { </b><i>-- цикл от начала до конца длины данной строки</i>
		<b>if (fulls.substring(i, i + olds.length) == olds) { </b><i>--  если в строке fulls кусок от i до длины строки olds равен содержимому строки olds, то: </i>
	<b>fulls = fulls.substring(0, i) + newS + fulls.substring(i + olds.length, fulls.length);</b>  <i>--  то строке fulls присвоить 3 последовательных значения: fulls(от самого начала до найденного совпадения olds) + вставляем newS + fulls(текущее значение i суммируем с длиной olds + до конца длины fulls </i>
<b>	}
}
return fulls;
}

	document.getElementById("substring").innerHTML = this.stri0 + replaceString('When', 'Kiedy', stringTest);
	}</b></code></pre>
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

			search: function() {
				var stringTest = this.stri0;
				document.getElementById("search").innerHTML = this.stri0 + '<br>' + '<br>' + stringTest.search('a person really desires');
			},

			slice: function() {
				var stringTest = this.stri0;
				document.getElementById("slice").innerHTML = this.stri0 + '<br>' + '<br>' + stringTest.slice(-6, -1);
			},

			split: function() {
				var stringTest = this.stri0
				document.getElementById("split").innerHTML = this.stri0 + '<br>' + '<br>' + stringTest.split(',').reverse().join('rrrrrr');
			},

			substring: function() {
				var stringTest = this.stri0
				function replaceString(olds, newS, fulls) {
					for (var i = 0; i < fulls.length; ++i) {
						if (fulls.substring(i, i + olds.length) == olds) { 
							fulls = fulls.substring(0, i) + newS + fulls.substring(i + olds.length, fulls.length);
						}
					}
					return fulls;
				}

				document.getElementById("substring").innerHTML = this.stri0 + '<br>' + '<br>' + replaceString('When', 'Kiedy', stringTest);
			},
		}
	}
</script>
<style scoped lang="sass">
.task 
	background: rgba(0,0,0,.1) 
	background: #fff
	margin: 10px auto
	margin-bottom: 30px 
	max-width: 95%

.decision 
	background: rgba(0,0,0,.1)
	display: grid
	grid-gap: 50px
	grid-template-columns: 1fr 5fr 
	border-bottom: 3px dashed rgba(0,0,0,.7)
	padding-bottom: 10px
	padding: 10px

.answer 
	background: black
	color: #FFF
	padding: 7px
	letter-spacing: 2px
	width: 100%

.subButton
	font-size: 0.6em
	text-transform: uppercase
	font-weight: bold
	margin-left: 20px

.methodDescription
	padding: 10px
</style>