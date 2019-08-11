<template>
	<div class="container">
		<h2>RegExp</h2>	
		<div class="task">
			<button v-on:click="testRegExp">testRegExp</button>
		</div>
		<div class="allText" id="unFormatText">
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
				var alreadyFormated = buffer;
				document.getElementById("unFormatText").innerHTML = alreadyFormated;
				console.log(alreadyFormated);
			},
		}

	}
</script>
<style scoped>
	.textParagraph {
		margin-bottom: 5px;
		border-bottom: 1px solid teal;
		background: rgba(0,0,0,.2);
		text-indent: 30px
	}
	.blad {
		background: teal;
	}
</style>