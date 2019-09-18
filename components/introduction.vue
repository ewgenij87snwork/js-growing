<template>
  <div>
  	<div class="intro">
  		<div class="intro-title"><h1>{{ intro.title }}</h1></div>
  		<blockquote class="blockquote text-right">
  		    <p class="mb-0">{{ intro.blockquote }}</p>
  		    <footer class="blockquote-footer">{{ intro.blockquoteAuthor }}, 
  		      <cite>{{ intro.blockquoteSource }}</cite>
  		    </footer>
  		</blockquote>
  		<div class="intro-bottom">
  			<h3 class="intro-subtitle">{{ intro.subtitle }}</h3>
  			<ul>
  				<li v-for="item in intro.text" :key = "item">{{ item }}</li>
  			</ul>
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
  props: {
  	intro: Object,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
