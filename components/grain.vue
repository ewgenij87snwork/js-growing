<template>
  <div class="grain__out">
  	<div class="grain__wrap">
      <div class="grain__container">
    		<div><h2  class="grain__title text-center ">{{ title }}</h2></div>
        <div class="grain__explain">{{ explain }}</div>
        <div class="grain__code code">
          <pre v-highlightjs="example"><code class="javascript"></code></pre>
        </div>        

        <transition name="slideInDown">
          <div class="sprout" v-show="showSprout">
            <p class="sprout__explain">{{ concept }}</p>
            <div class="sprout__use">
              <div class="code">
                <pre v-highlightjs="code"><code class="javascript"></code></pre>
              </div>
              <div class="sprout__decision">
                <div class="row">
                  <base-button type="default" v-on:click="evaluation" class="sprout__result__button ">Button</base-button>
                  <p class="sprout__result text-center col" v-bind:id=name>Press button to see result</p>
                </div>
              </div>
            </div>
          </div>
        </transition>

        <base-button v-on:click="showSprout = !showSprout" class="sprout__button" size="sm" type="secondary">
          <div v-show="!showSprout"><i class="fas fa-double-down"></i> Show</div>
          <div v-show="showSprout"><i class="fas fa-double-up"></i> Hide</div>
        </base-button>

  	  </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'grain',
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
      result: ''
    }
  },

  methods: {
    evaluation: function() {
      var k = eval(this.code);
      document.getElementById(this.name).textContent =k;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass"> 
// -----Transition ---------------------

.slideInDown-enter-active
  animation: slideInDown 1.5s

.slideInDown-leave-active
  animation: slideInDown 1.5s reverse

@keyframes slideInDown
  from
    transform: translate3d(0, -100%, 0)
    visibility: visible

  to
    transform: translate3d(0, 0, 0)


@keyframes slideOutDown
  from
    transform: translate3d(0, 0, 0)

  to
    visibility: hidden
    transform: translate3d(0, 100%, 0)
// ----- End Transition ----------------
.grain
  &__out
    max-width: 940px
    margin: 0 auto    
    +r(960)
      margin: 15px
  &__wrap
    min-height: 100vh
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
    margin-bottom: 1rem
    border: 1px solid #fff
    -webkit-box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.75)
    -moz-box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.75)
    box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.75)
    

.sprout
  position: relative
  margin-bottom: 1rem
  margin-top: 3rem
  &__use
    -webkit-box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.75)
    -moz-box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.75)
    box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.75)
  &__explain
    padding: 5px
    
  &__decision
    background: rgba(0,0,0,.1)
    padding: 7px
    .row
      margin: 0 5px
  &__button
    float: right
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
