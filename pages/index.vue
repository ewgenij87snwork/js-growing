<template>
  <section class="container">
  	<navigate />
    <div>
       <nuxt-link to="/cheatsheet/cheatsheet"><h2>cheatsheet</h2></nuxt-link>
       <nuxt-link to="/osnovy/osnovyList"><h2>Основы работы с JavaScript</h2></nuxt-link>
    </div>
  </section>
</template>

<script>
import navigate from "@/components/navigate"
export default {
	components: {
		navigate
	}

}
</script>

<style>
  h2 {
    color: #2D1DA5;
  }

</style>

