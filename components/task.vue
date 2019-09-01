<template>
	<div class="task__container">
		<div class="task">
			<div class="decision ct-example-row">
				<div class="row">
					<base-button type="default" v-on:click="evaluation" class="answer__button col col-lg-2">{{ name }}</base-button>
					<p class="answer col text-center" v-bind:id=name><badge type="default">Press button to see result</badge></p>
				</div>
			</div>
			
			<pre><code>function() {  
		{{ func }} }
			</code></pre>
			<button v-on:click="show = !show" class="subButton">Show method description</button>
				<div class="methodDescription">
					<transition name="fade" mode="out-in">
						<p v-show="show">Метод <u>{{ name }}</u> {{ description }}</p>
					</transition>
				</div>
		</div>
	</div>
</template>

<script>
export default {
  props: {
	name: '',
	description: '',
	func: ''
  },
  data: function() {
  	return {
  		show: false,
  		stringFunc: this.func,
  	}
  },
  methods: {
	  	evaluation: function() {
	  	      eval(this.stringFunc);
	  	      console.log(this.stringFunc);
	  	    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

.task 
	background: rgba(0,0,0,.1)
	margin: 20px auto
.decision 
	background: rgba(0,0,0,.1)
	border-bottom: 3px dashed rgba(0,0,0,.7)
	padding: 7px
	.row
		margin: 5px
.answer 
	background: #8898aa
	color: #FFF
	padding: 7px
	letter-spacing: 2px
	border-radius: 0.25rem
	margin: 5px
	&__button
		margin: 5px
.subButton
	font-size: 0.6em
	text-transform: uppercase
	font-weight: bold
	margin-left: 20px
	
.methodDescription
	padding: 10px
</style>
