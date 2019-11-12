<template>
	<div>
		<div class="search">
			<form v-on:submit.prevent="getResult(query)">
				<input type="text" placeholder="Please, type in your search" v-model="query">
			</form>

			<div class="results" v-if="results">
				<div v-for="result in results" :key="result.id">
					<img v-bind:src="result.links[0].href">
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import axios from "axios"
export default {
	name: 'search-form',
	data() {
		return {
			query: '',
			results: ''
		}
	},
	methods: {
	      getResult(query) {
	        axios.get('https://images-api.nasa.gov/search?q=' + query + '&media_type=image').then( response => {
	            console.log("1111" + this.query);
	            this.results = response.data.collection.items;
	        });
	      }
	  }
}
</script>
<style></style>