<template>  
	<div class="grain__out">
		<div class="grain__container">
			<div><h2  class="grain__title text-center">{{ title }}</h2></div>
			<div class="grain__explain">{{ explain }}</div>
			<div class="grain__code code">
				<pre v-highlightjs="example"><code class="javascript"></code></pre>
			</div>        
<!-- Моя концепция "крупицы" (grain) заключается в том, что я получаю знание и нахожу как его использовать -->
			<transition-height>
				<div class="sprout" v-show="showSprout">
					<transition name="opa">
						<p class="sprout__concept" v-if="sproutConcept">{{ concept }}</p>
					</transition>
						<div class="sprout__use" >
							<transition name="code">
								<div class="code" v-if="sproutCode">
									<pre v-highlightjs="code"><code class="javascript" ></code></pre>
								</div>
							</transition>
<!-- 							<transition name="opa">
								<div class="sprout__decision" v-if="sproutDecision">
									<div class="row">
										<base-button type="default" v-on:click="evaluation" class="sprout__result__button ">Button</base-button>
										<p class="sprout__result text-center col" v-bind:id=name>Press button to see result</p>
									</div>
								</div>
							</transition> -->
						</div>
				</div>
			</transition-height>

			<base-button v-on:click="zapusk" class="sprout__button" size="sm" type="secondary">
				<div v-show="!showSprout"><i class="fas fa-double-down"></i> Show</div>
				<div v-show="showSprout"><i class="fas fa-double-up"></i> Hide</div>
			</base-button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'grain',
	components: {
		'transition-height': () => import('@/components/transition-height'),
	},
	props: {
		name: '',
		title: '',
		explain: '',
		example: '',
		concept: '',
		code: '',
	},
	data: function() {
		return {
			showSprout: false,
			sproutConcept: true,
			sproutCode: true,
			sproutDecision: true,

		}
	},

	methods: {
		evaluation: function() {
			var k = eval(this.code);
			document.getElementById(this.name).textContent =k;
		},
		zapusk: function() {
			this.showSprout = !this.showSprout;
			this.sproutConcept = false;
			this.sproutCode = false;
			setTimeout(() => {this.sproutConcept = true}, 900);
			setTimeout(() => {this.sproutCode = true}, 900);
			// setTimeout(() => {this.sproutDecision = true}, 900);
		  },
	},
	watch: {}
}
</script>
<!-- ___________________________________________________________________________________________________ -->
<!-- ___________________________________________________________________________________________________ -->
<style scoped lang="sass"> 

// ----- Transition Opa ----------------------------------------------------


.opa-enter-active
  animation: opa .5s

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
// 3.2s --> .032s =1% Исходя из этого я рассчитывал (изначально) сколько будет .25с и .35с -- это на паузу между анимациями и анимацию определнного стиля.
.code-enter-active
  animation: code 3.2s
  ::nth-child(2)
  	animation: opa 4s
.code-leave-active
  animation: opa .25s reverse
  
@keyframes code
  0%
    opacity: 0
    border: 2px solid black
    background: rgba(0,0,0,0) 
  26.5%
    background: rgba(0,0,0,0) 
    opacity: 0
  37.5%
    border: 2px solid black
    box-shadow: none
    opacity: 1
    background: rgba(0,0,0,1) 
  45.3%

  56.25%
    border: 2px solid #fff
    box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.75)
    
  64.1%

  75%

  82.8%
    // font-weight: 5% 
  90%
    


  // box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
  //             0 2px 2px rgba(0,0,0,0.11), 
  //             0 4px 4px rgba(0,0,0,0.11), 
  //             0 8px 8px rgba(0,0,0,0.11), 
  //             0 16px 16px rgba(0,0,0,0.11), 
  //             0 32px 32px rgba(0,0,0,0.11)
// ----- End Transition "code" ----------------------------------------------------


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
		-webkit-box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.75)
		-moz-box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.75)
		box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.75)
		border: 2px solid #fff
	&__concept
		padding: 5px
		padding-top: 3rem
		
		// opacity: .5
	&__decision
		background: rgba(0,0,0,.1)
		padding: 7px
		.row
			margin: 0 5px
	&__button
		float: right
		margin-top: 25px
	code
		background: #000
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
