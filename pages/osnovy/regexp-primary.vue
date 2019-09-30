<template>
<div>
	<convertToJson></convertToJson>
	<task
	v-for="item in items"
	v-bind:key="item.name"
	v-bind:name="item.name"
	v-bind:syntax="item.syntax"
	v-bind:description="item.description"
	v-bind:func="item.func"
	/>
	<button v-on:click="proba">asdfaddf</button>
</div>
</template>
<script>
import regexpsprimary from '@/data/regexpsprimary.json'
export default {
	name: 'regexp-primary',
	components: {
		'task': () => import('@/components/task'),
		'convertToJson': () => import('@/components/convertToJson')
	},
	data: function() {
		return {
			items: regexpsprimary,
		}
	},
	methods: {
		proba: function() {
var str = 'https://www.youtube.com/watch?v=0zMLYuS8KeE';
var re = /\< *[img][^\>]*[src] *= *[\"\']{0,1}([^\"\'\ >]*)/;
var k = re.exec('<img src="image.png" alt="image1">');
			console.log(k);
		}
	}
}
</script>
<style></style>