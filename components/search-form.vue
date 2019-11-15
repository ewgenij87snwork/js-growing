<template>
	<div>
		<div class="search">
			<form v-on:submit.prevent="getResult(query)">
				<input type="text" placeholder="Please, type in your search" v-model="query">
			</form>
			<swiper-comp :srcResult = "srcResult"/>
<!-- 			<div class="results" v-if="results">
				<div v-for="result in results" :key="result.id">
					<img v-bind:src="result.links[0].href">
				</div>
			</div>
 -->		</div>
	</div>
</template>
<script>
import axios from "axios"
export default {
	name: 'search-form',
	components: {
		'swiper-comp': () => import('@/components/swiper-comp')
	},
	data() {
		return {
			query: '',
			results: '',
			srcResult: ''
		}
	},
	methods: {
	      getResult(query) {
	        axios.get('https://images-api.nasa.gov/search?q=' + query + '&media_type=image')
	        .then( response => {
	        	// console.log(response.config)
	            this.results = response.data.collection.items;
	            this.srcResult = this.results.map(results =>results.links[0].href);
	            console.log(this.srcResult)
	        })
	        .catch(function (error) {
	            console.log(error.toJSON());
	          });
	      }
	  }
}
</script>
<style></style>