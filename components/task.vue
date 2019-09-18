<template>
	<div class="task__container">
		<div class="task">
			<div class="decision ct-example-row">
				<div class="row">
					<base-button type="default" v-on:click="evaluation" class="answer__button col col-lg-2">{{ name }}</base-button>
					<p class="answer col text-center" v-bind:id=name><badge type="default">Press button to see result</badge></p>
				</div>
			</div>
			<div class="functionBlock">
				<pre v-show="funcText" v-highlightjs="stringFunc"><code class="javascript">function() { <br> }
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
							<p class="syntax text-primary" >{{ syntax }}</p>
							<code><pre class="text-muted">{{ syntaxDescr }}</pre></code>
						</div>
					</transition>
				</div>
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
	func: '',
	funcTwo: '',
	},
	data: function() {
		return {
			clickCounter: 0,
			show: false,
			showSyntax: false,
			stringFunc: this.func,
			funcText: true,
		}
	},
	methods: {
		evaluation: function() {
			this.clickCounter = this.clickCounter + 1;
			switch (this.clickCounter) {
				case 1:
					this.stringFunc = this.func;
					eval(this.stringFunc);
					break;
				case 2:
					this.stringFunc = this.funcTwo;
					eval(this.stringFunc);
					this.clickCounter = 0;
					break;
				}
			}
	},
}
</script>

<style scoped lang="sass">
.task 
	background: rgba(0,0,0,.1)
	margin: 45px auto
	border-bottom: 2px dotted rgba(0,0,0,.7)
.decision 
	background: rgba(0,0,0,.1)
	border-bottom: 5px dashed rgba(0,0,0,.7)
	padding: 7px
	.row
		margin: 5px
.functionBlock
	background: #1D262B 
	padding: 15px
	padding-bottom: 0
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
	color: #fff 
.methodDescription
	padding-left: 10px
	padding-bottom: 5px
	p
		margin-bottom: 0
.javascript
	background: none 
	margin-bottom: 15px
pre
	margin-bottom: 0px

</style>
