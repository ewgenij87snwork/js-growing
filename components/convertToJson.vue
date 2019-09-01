<template>
	<div class="out">
		<form
		id="formConvert"
		@submit="convertFunc">
			<textarea class="form-control form-control-alternative" name="unformatedFunc" id="unformatedFunc" v-model="unformatedFunc" cols="100" rows="10"></textarea>
			<input
			  type="submit"
			  value="Convert to JSON"
			>
		</form>
	</div>
</template>
<script>
export default {
	name: 'convertToJson',
	data: function() {
		return {
			unformatedFunc: null
		}
	},
	methods: {
		convertFunc: function(e) {
			var buf
			if (!this.unformatedFunc) {
				document.getElementById("unformatedFunc").innerHTML ="введи что-то"
			} else {
				buf = JSON.stringify(this.unformatedFunc),
			    document.getElementById("unformatedFunc").value = buf;
			}
			e.preventDefault()
		} 
	}
}
</script>
<style lang="sass" scoped>
	.col, .col-sm, .col-6, .col-12
		outline: 1px solid black
	div.col-12.col-md-8
		background: teal 
	.ct-example-row
		margin: 10px 
</style>