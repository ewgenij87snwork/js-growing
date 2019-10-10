// Import Vue and vue-highlgihtjs
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'

 
// Highlight.js languages (Only required languages)
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';

import 'highlight.js/styles/atom-one-light.css';

/*
 * Use Vue Highlight.js
 */
Vue.use(VueHighlightJS, {
	// Register only languages that you want
	languages: {
		css,
		javascript
	}
});