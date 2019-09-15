<template>
	<div>
		<base-button @click="pageLoader(onPageLoadingFinished)" type="success">Boom!</base-button>
		<div class="letVar">
			<h1>let, var</h1>
			<p>Если внутри функции переназначаем переменную объявленную через <strong>var</strong>, то она изменяется повсеместно в пределах функции, елси переменная объявлена через <strong>let</strong>, то она изменится только в пределах "блока"</p>
		</div>
	</div>
</template>
<script>
export default {
	name: 'promise-async',
	methods: {
		async pageLoader(callback) {
		  const data = await 'ffff'
		  callback(data)
		},
		onPageLoadingFinished(pageData) {
		  console.log('Page was sucessfully loaded!')
		  console.log('Response:')
		  console.log(pageData)
		}

		
	}
}
</script>
<style scoped lang="sass">
	
</style>