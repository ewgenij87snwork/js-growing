<template>  
	<div class="grain__out">
		<div class="grain__container">
			<div><h2  class="grain__title text-center">{{ title }}</h2></div>
			<div class="grain__explain">{{ explain }}</div>
			<div class="grain__code__wrap" v-for="(item, index) in example" v-bind:key="index">
				<div class="grain__code code">
					<!-- <p>{{ item}} </p> -->
					<pre v-highlightjs="item"><code class="javascript"></code></pre>
					<button type="default" v-on:click="evaluationExample(item, index)">Run code</button>
					<p v-bind:id=name+index>{{ name + index }}</p>
				</div>  
			</div>      
<!-- Моя концепция "крупицы" (grain) заключается в том, что я получаю знание и интерпретирую как его использовать -->
			<transition-height>
				<div class="sprout" v-show="showSprout">
					<p class="sprout__concept" id="sprout-concept">
						<span v-if="sproutConcept" 
							v-for="charData in charsData"
							:class="{ visible: charData.show }"
							:key="charData.id"
						>{{ charData.char }}</span>
					</p>
					<div class="sprout__use" >
						<transition name="code">
							<div class="code" v-if="sproutCode">
								<transition name="code-text">
									<pre v-highlightjs="code" v-if="sproutCodeText"><code class="javascript" ></code></pre>
								</transition>
							</div>
						</transition>
						<transition name="opa">
							<div class="sprout__decision" v-if="sproutDecision">
								<div class="row">
									<base-button type="default" v-on:click="evaluation" class="sprout__result__button ">Button</base-button>
									<p class="sprout__result text-center col" v-bind:id=name>Press button to see result</p>
								</div>
							</div>
						</transition>
					</div>
				</div>
			</transition-height >

			<base-button v-on:click="zapusk" class="sprout__button" size="sm" type="secondary">
				<div v-show="!showSprout"><i class="fas fa-double-down"></i> Show</div>
				<div v-show="showSprout"><i class="fas fa-double-up"></i> Hide</div>
			</base-button>
		</div>
	</div>
</template>

<script>
// import smoothReflow from 'vue-smooth-reflow'
export default {
	name: 'grain',
	components: {
		'transition-height': () => import('@/components/transition-height'),
		// 'smoothReflow': () => import('@/components/smoothReflow'),
		// smoothReflow
	},
	props: {
		name: '',
		title: '',
		explain: '',
		example: '',
		concept: '',
		code: '',
	},
	// mixins: [smoothReflow],
	data: function() {
		return {
			transitionKey: 0,
			run_trigger: false,
			showSprout: false,
			sproutConcept: true,
			sproutCode: false,
			sproutDecision: true,
			sproutCodeText: false,
			charsData: {
				show: false
			}
		}
	},
	mounted(){
		// this.$smoothReflow(
		// {
		// 	property: ['height'],
		// 	transition: 'height 1.25s ease-in-out'
		// })
	},
	methods: {
		evaluationExample: function(item, index) { 
			var k = eval(item);
			console.log(index);
			document.getElementById(this.name+index).textContent =k;
		},
		// evaluationExample: (item, index) => { 
		// 	var k = eval(item);
		// 	console.log(index);
		// 	document.getElementById(name+example.index).textContent =k;
		// },
		
		evaluation: function() {
			var k = eval(this.code);
			document.getElementById(this.name).textContent =k;
		},
		zapusk: function() {
			this.showSprout = !this.showSprout;
			this.sproutConcept = false;
			this.sproutCode = false;
			this.sproutCodeText = false;
			this.charsData = [];
	
			setTimeout(() => {
				this.sproutConcept = true;
				this.run_trigger != this.run_trigger;
				var end = this.concept.length - 100;
				for (let i = 0; i < this.concept.length; i++) {
					this.charsData.push({
						id: i,
						char: this.concept[i],
						show: false
					});
					setTimeout(() => {
						this.charsData[i].show = true;
						if (i == end) {
							// Сначала нижняя граница родителя плавно опускается под размер этого блока-текста-concept. Перед тем как появляются следующий блоки -- граница родителя "прыгает" вниз, а не плавно опускается. Вроде как чтобы происходил перезапуск transition нужно задать :key и менять его. Мой компонент-transition-height должен сначала посчитать высоту, а затем опускаться "до неё". Но блядь не реагирует ни на ключ...
							// this.run_trigger != this.run_trigger; ... Как эту злоебучую высоту побороть
							this.transitionKey++;
							setTimeout(() => { this.sproutCode = true;}, 900);
							setTimeout(() => { this.sproutCodeText = true;}, 900);
					}
					}, 1 * i);
					
				};
			}, 900);

		}

	},
	watch: {}
}
</script>
<!-- ___________________________________________________________________________________________________ -->
<!-- ___________________________________________________________________________________________________ -->
<style scoped lang="sass"> 

// ----- Transition Opa ----------------------------------------------------


.opa-enter-active
	animation: opa .35s

.opa-leave-active
	animation: opa .45s reverse

@keyframes opa
	0%
		opacity: 0
	50%
		opacity: 0
	70%
		opacity: 0.5

	to
		opacity: 1

// ----- End Transition "opa" ----------------------------------------------------


// ----- Transition "code" --------------------------------------------------------
.code-enter-active
	animation: code .55s
.code-leave-active
	animation: opa .25s reverse
	
@keyframes code
	0%
		opacity: 0
		border: 2px solid white
		background: rgba(255,255,255,0) 
	30%
		background: rgba(255,255,255,.3) 
		opacity: 0
		box-shadow: none
	41%
		opacity: .5
		border: 2px solid rgba(0,0,0,0.3)
	60%
		opacity: 1
		border: 2px solid rgba(0,0,0,0.9)
		box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.75)
	to
		background: rgba(255,255,255,1) 
		
// BG - linear-gradiend -- from center to 'края' -- прозрачный/серый rgba(0,0,0,0.3)

// ----- End Transition "code" ----------------------------------------------------



// ----- Begin Transition "code-text" ----------------------------------------------------
.code-text-enter-active
	animation: code-text .75s
.code-text-leave-active
	animation: code-text 4s reverse

@keyframes code-text
	0%
		opacity: 0
	75%
		opacity: 0		
	76%
		opacity: .1
		transform: scale(.95)
	100%
		opacity: 1

// ----- End Transition "code-text" ----------------------------------------------------



// ----- All styles -----------------------------------------------------------
.grain
	&__out
		max-width: 940px
		margin: 0 auto    
		+r(960)
			margin: 15px
	&__container
		margin-bottom: 100px    
		border-top: 1px solid black
		border-bottom: 1px solid black    
		border-left: 2px dashed rgba(0,0,0,.7)
		border-right: 2px dashed rgba(0,0,0,.7)
		padding: 20px
		padding-bottom: 40px
		background: rgba(0,0,0,.1) 
	&__title
		margin-bottom: 1rem
	&__explain
		margin-bottom: 1rem
	&__code
		border: 1px solid #fff
		-webkit-box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.75)
		-moz-box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.75)
		box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.75)
		z-index: 100
		

.sprout
	position: relative
	// margin-bottom: 1rem
	&__use

		// opacity: 0
	.code
		box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.75)
		margin-bottom: 20px
		// box-shadow: 0 1px 1px rgba(0,0,0,0.11),
		// 0 2px 2px rgba(0,0,0,0.11),
		// 0 4px 4px rgba(0,0,0,0.11),
		// 0 8px 8px rgba(0,0,0,0.11)
		border: 2px solid #fff
	&__concept
		padding: 5px
		padding-top: 3rem
		padding-bottom: 3rem
		margin: 0
		span
			opacity: 0
			transition: opacity 0.2s ease-in-out
		span.visible
			opacity: 1
		
		// opacity: .5
	&__decision
		background: rgba(0,0,0,.1)
		padding: 7px
		box-shadow: 0 1px 1px rgba(0,0,0,0.11),
		0 2px 2px rgba(0,0,0,0.11),
		0 4px 4px rgba(0,0,0,0.11),
		0 8px 8px rgba(0,0,0,0.11)
		.row
			margin: 0 5px
	&__button
		float: right
		margin-top: 25px
	code
		// background: #000
		padding-bottom: 1rem
	&__result
		background: #8898aa
		color: #FFF
		padding: 7px
		letter-spacing: 2px
		border-radius: 0.25rem
		margin: 5px
		&__button
			margin: 5px
			
</style>
