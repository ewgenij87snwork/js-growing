<template>
	<form
	id="formConvert"
	@submit="convertFunc">
		<textarea class="form-control form-control-alternative" name="unformatedFunc" id="unformatedFunc" v-model="unformatedFunc" cols="100" rows="30"></textarea>
		<input
		  type="submit"
		  value="Отправить"
		>
	</form>
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
			if (!this.unformatedFunc) {
				document.getElementById("unformatedFunc").innerHTML ="введи что-то"
			}

			e.preventDefault()
		} 
	}
}
</script>
<style lang="sass" scoped></style>