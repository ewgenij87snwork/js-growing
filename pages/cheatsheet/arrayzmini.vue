<template>
	<div class="container">
		<div class="titlePage"><h1>Array Methods</h1></div>
		<div v-for="item in items" v-bind:key="item.name">
			<p class=""><strong class="font-weight-bold lead"><b>{{item.name}}</b></strong> - {{item.description}}</p>
		</div>
	</div>
</template>
<script>
import arraytask from "@/data/arraytask.json";
	export default {
		name: 'arrayz',
		components: {
			'task': () => import('@/components/task')
		},
		data: function() {
			return {
				items: arraytask
			}
		},	
	}
</script>
<style>


</style>