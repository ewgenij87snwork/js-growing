<template>
	<div class="task__container">
		<div class="task" v-for="item in tasks" :key="item.name">
			<div class="decision">
				<!-- <button v-on:click="{{ item.func }}">{{ item.name }}</button> -->
				<!-- <p class="answer" :id="{{ item.name }}">Press button to see result</p> -->

				<!-- Как через пропсы передавать функцию на выполнение?
				Почему не могу передать в id пропс? :id="{{ item.name }}
				Почему не могу передать в кнопку название обработчика? v-on:click="{{ item.func }}"> -->
			</div>
			<pre><code><b>{{ item.name }}</b> function() {
		{{ item.codeExemple }}
			}</code></pre>
			<button v-on:click="show = !show" class="subButton">Show method description</button>
				<div class="methodDescription">
					<transition name="fade" mode="out-in">
						<p v-show="show">Метод <b>{{ item.name }}</b> {{ item.description }}</p>
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
  		show: false,
  	}
  },
  methods: {
  	item.func()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
