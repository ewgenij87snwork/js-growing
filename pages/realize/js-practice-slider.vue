<template>
  <div>
    <div class="slider__wrapper">
      <div class="slider__view">
        <div class="slider__slide"></div>
        <div class="slider__prev"></div>
        <div class="slider__next"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "js-practice-slider",
  data: function() {
    return {};
  },
  props: ["srcResult"]
};
// { "keys": ["shift+space"], "command": "move", "args": {"by": "characters", "forward": true} },
</script>
<style lang="sass">
.slider
  &__wrapper
    background: teal
    width: 300px
    height: 300px
</style>