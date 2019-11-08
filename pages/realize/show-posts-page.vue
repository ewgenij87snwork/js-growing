<template>
	<div >
		<div class="post__wrap">
		  <PostForm/>
		  <h1>{{ postsCount}}</h1>
		  <div class="post" v-for="post in validPosts" :key="post.id">
		    <h2>{{post.title}}</h2>
		    <p>{{post.body}}</p>
		    <blockquote>{{post.id}}</blockquote>
		  </div>
		</div>
	</div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
	name: 'show-posts-page',
	components: {
		'PostForm': () => import('@/components/PostForm')
	},
	computed: {...mapGetters("show-posts", ["validPosts", "postsCount"])},
	methods: mapActions("show-posts", ["fetchPosts"]),
	async mounted() {
	  
	  this.fetchPosts(5);
	}

}

</script>
<style lang="sass">
.post 
	width: 80%
	border: 1px solid black
	margin: 20px auto
	padding: 20px
	background: rgba(0,0,0,.2) 
</style>
