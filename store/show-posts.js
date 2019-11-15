import axios from 'axios'

export const state = () => ({
	posts: []
});

export const getters = {	
	validPosts(state) {
	  return state.posts.filter(p => {
	    return p.title && p.body
	  })
	},
	allPosts(state) {
	  return state.posts
	},
	postsCount(state, getters) {
	  return getters.validPosts.length
	}
};

export const mutations = {	
    updatePosts(state, posts) {
      state.posts = posts
    },
    createPost(state, newPost) {
      state.posts.unshift(newPost)
    }
};

export const actions = {
	async fetchPosts({ commit, getters, dispatch }, limit = 3) {
	  const res = await axios.get(
	    'https://jsonplaceholder.typicode.com/posts?_limit=' + limit
	  )
	  const posts = res.data
	  console.log(posts)

	  dispatch('sayHello')

	  commit('updatePosts', posts)
	},
	sayHello() {}
}