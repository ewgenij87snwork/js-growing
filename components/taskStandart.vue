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
			<div class="bottomTask">
				<base-button type="secondary" v-on:click="show = !show" class="subButton">Show description</base-button>
				<base-button type="secondary" v-on:click="showSyntax = !showSyntax" class="subButton">Show syntax</base-button>
			</div>
			
			<div class="methodDescription">
				<transition name="fade" mode="out-in">
					<p v-show="show">Метод <u>{{ name }}</u> {{ description }}</p>
				</transition>
			</div>
			<div class="methodDescription">
				<transition name="fade" mode="out-in">
					<div v-show="showSyntax">
						<p class="syntax text-muted text-default" >{{ syntax }}</p>
						<code><pre class="text-muted">{{ syntaxDescr }}</pre></code>
					</div>
				</transition>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  props: {
	name: '',
	syntax: '',
	syntaxDescr: '',
	description: '',
	func: ''
  },
  data: function() {
  	return {
  		show: false,
  		showSyntax: false,
  		stringFunc: this.func,
  	}
  },
  methods: {
	  	evaluation: function() {
	  	      eval(this.stringFunc);
	  	    }
  }
}
</script>

<style scoped lang="sass">
.task 
	background: rgba(0,0,0,.1)
	margin: 20px auto
	padding: 5px 15px
.decision 
	background: rgba(0,0,0,.1)
	border-bottom: 3px dashed rgba(0,0,0,.7)
	padding: 7px
	margin: -5px -15px
	margin-bottom: 10px
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
.bottomTask
	display: flex
	justify-content: space-between
	padding-bottom: 5px
.syntax
	margin-top: 10px
.methodDescription
	padding-left: 10px
	padding-bottom: 5px
pre
	margin-bottom: 0

</style>
