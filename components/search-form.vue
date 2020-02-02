<template>
	<div>
		<div class="search">
			<div class="begin">
				<h3>Here search-form for sierching in image in the NASA API. For testing, please write word (such as 'sun', 'moon', 'fly'...) </h3>
			</div>
			<form v-on:submit.prevent="getResult(query)">
				<input type="text" placeholder="Please, type in your search" v-model="query">
				<!-- <button  v-on:submit.prevent="getResult(query)">SpaseShatle</button> -->
			</form>
			<!-- <no-ssr><swiper-comp :srcResult = "srcResult"/></no-ssr> -->
			<js-practice-slider :srcResult = "srcResult"/>
		</div>
	</div>
</template>
<script>
import axios from "axios"
export default {
	name: 'search-form',
	components: {
		'swiper-comp': () => import('@/components/swiper-comp'),
		'js-practice-slider': () => import('@/pages/realize/js-practice-slider.vue')
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
	            this.results = response.data.collection.items;
	            this.srcResult = this.results.map(results =>results.links[0].href);
	        })
	        .catch(function (error) {
	            console.log(error.toJSON());
	          });
	      }
	  }
}
</script>
<style></style>