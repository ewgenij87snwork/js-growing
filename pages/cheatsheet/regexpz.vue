<template>
	<div class="container">
		<h2>RegExp</h2>	
		<div class="task">
			<button v-on:click="testRegExp">testRegExp</button>
		</div>

	</div>
</template>
<script>
	export default	{
		name: 'regexpz',
		methods: {
			testRegExp: function() {
				var unFormatText = document.getElementById("unFormatText");
				var inRegExp = /\+[0-9]+/g;
				var outRegExp = '</p><p class="textParagraph">';
				var buffer  = unFormatText.textContent.replace(inRegExp, outRegExp);
				var alreadyFormated = (buffer + '</p>');
				var firstInsert = /<\/p>/;
				alreadyFormated = alreadyFormated.replace(firstInsert, '');
				document.getElementById("unFormatText").innerHTML = alreadyFormated;
				console.log(alreadyFormated);
			},
		}

	}
</script>
<style>
	.container {
		display: block;
	}
	.textParagraph {
		margin: 30px;
		border-bottom: 3px solid teal;
		background: rgba(0,0,0,.2);
		text-indent: 30px;
		font-weight: bold;
		padding: 15px;
	}
	.my-class {
		margin-bottom: 30px;
	}
	.blad {
		background: teal;
	}
</style>