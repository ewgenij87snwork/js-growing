<template>
	<div class="task__container">
		<div class="task" v-for="task in tasks" :key="task.name">
			<div class="decision">
				<button v-on:click="evaluation">{{ task.name }}</button>
				<p class="answer" v-bind:id=task.name>Press button to see result</p>
			</div>
			<pre><code>function() {  
		{{ task.func }} }
			</code></pre>
			<button v-on:click="task.show = !task.show" class="subButton">Show method description</button>
				<div class="methodDescription">
					<transition name="fade" mode="out-in">
						<p v-show="task.show">Метод <b>{{ task.name }}</b> {{ task.description }}</p>
					</transition>
				</div>
		</div>
	</div>
</template>

<script>
export default {
  props: {
	tasks: {
		type:Array,
		required: true
	}
  },
  data: function() {
  	return {
  		stringFunc: Object.values(this.tasks[0])[3],
  	}
  },
  methods: {
	  	evaluation: function() {
	  	      eval(this.stringFunc);
	  	    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
