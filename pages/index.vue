<template>
  <section class="container">
    <div>
      <p class="lead">I maked this website for study JavaScript, VueJS and something other from Front-End Develope. Here I saving some study information and realize some practice.</p>
      <hr>
      <p class="lead"> Here I used NuxtJS, Argon, Highlightjs. <strong><b>NuxtJS</b></strong> -- becouse <cite>"is a higher-level framework built on top of the Vue ecosystem which provides an extremely streamlined development experience for writing universal Vue applications."</cite>. <strong><b>Argon</b></strong> - this is design system based on Bootstrap 4. I decided to try "Argon" because a month before the creation of this "conspectus", I saw the order on the freelance to make the site on this template. <strong><b>HighlightJS</b></strong> -  is a syntax highlighter written in JavaScript. It works in the browser as well as on the server. It works with pretty much any markup, doesn’t depend on any framework, and has automatic language detection. </p>
      <hr>

      <!-- Page creation sequence -->
      <h2 class="text-default text-uppercase text-center">Page creation sequence </h2>
      <br>
      <div class="pages" v-for="item in pages" v-bind:key="item.id">
        <a class="hvr-underline-from-left" :href="item.link"><h3 class="text-muted"><i class="fa fa-angle-double-right " data-fa-transform="shrink-6" aria-hidden="true"></i> {{ item.name }}</h3></a>
        <p class="lead" v-html="item.text"></p>
      </div>
      	
    </div>
  </section>
</template>

<script>
export default {
	components: {
    'navigate': () => import('@/components/navigate')
	},
  data: function() {
    return {
      pages: [
      {
        id: '1',
        link: '/osnovy/osnovy-yazyka-javascript-dlya-novichkov',
        name: 'Basics JavaScript tasks',
        text: 'This is my first page that I\'ve done here. In this is subchapter of "Main JavaScript" just simplest exercises, which results displayed in <b>console</b>'
      },{
        id: '2',
        link: '/cheatsheet/stringz',
        name: 'String Methods',
        text: 'I made this page for see how work String Methods. Each block with the task is simply duplicated in the code of page. The script section contains methods for strings for each task.'
      },{
        id: '3',
        link: '/cheatsheet/regexpz',
        name: 'RegExp',
        text: 'First experience in use Regular Expressions. After click button in text some symbols (/\+[0-9]+/g) replaced by paragraph tags with a certain class name, which is used for styling.'
      },{
        id: '4',
        link: '/cheatsheet/arrayz',
        name: 'Array Methods',
        text: 'This is third page here. In the Array section, the main methods of arrays are reviewed. Methods are provided in the form of: the "method name" button, the output field of the method\'s example function result, the block displaying the text of the method\'s example function, the button displaying/hiding the method\'s description ("show description"), the button displaying/hiding the method\'s syntax ("show syntax").</p><p class="lead"> Clicking on the button with the name of the method runs an example function, the result is displayed in the field to the right of the button. Pressing the button again -- the second sample function is executed, if present in json. </p><p class="lead">The data was taken from Mozilla\'s documentation. To make it easier to save the data in json, I created similar converter: a function is inserted into the textarea field, and a function in the form of a json-string is displayed by pressing a button in the same field (the JSON.stringify method, which later turned out to be convenient for outputting objects to html). Also at the end of the received line is added <span class="text-muted">document.getElementById(\' the name of the method \').textContent = "the result of the function execution"</span> and the received result is copied to a json-file. By pressing the "method name" button, this string function is executed through <span class="text-dark">eval()</span>, returning the value of code execution passed to the function as a string.'
      },{
        id: '5',
        link: '/osnovy/modern-js',
        name: 'Modern JS',
        text: 'This is where I started making the "Grain" component. And I spent a lot of time studying the sequence of transitions.<br><strong><b>The concept!</b></strong> There is a "parent" block -- a specific topic (e.g., arrow functions, promises). It has a title, text, a block of code, which explain how this topic work, and a "show" button.  "Children" -- is how I understood the topic. I.e. here my description, my example code and the result of this code implementation.<p class="lead"><strong><b>Transition concept!</b></strong> By clicking on the "Show" button, the parent smoothly drops the bottom border under the "children". I\'ve found a wonderful component in the wilderness Internet, who\'s a good at this task. But there was a problem with children\'s transitions. The "parent" transition should be calculated taking heights of the "children". Which means, that at the moment when the "show" button is pressed, "children" should be in the position "v-if=true". I made a function that was launched by clicking on this button "show". It switch the "children" into "v-if=false", and after half the time transition "parent", it returned back into "v-if=true". So, before finished animation drops the bottom border in parent -- "children" changed v-if in true-false-true, which started their "transition" (Probably, better one time see code this function, which called "zapusk")</p><p class="lead">There are 3 transitions for "children": to the <strong><b>text-description, to code-example, to result-code</b></strong>.  For <strong><b>text-description</b></strong>: text just become from left. For <strong><b>code-example</b></strong> the sequence of animation was built: opacity, border, box-shadow, background. Unfortunately, I had to stop at this stage of creation...</p>'
      },{
        id: '',
        link: '',
        name: '',
        text: ''
      }
      ]
    }
  }

}
</script>
<style lang="sass">
h2
  color: #2D1DA5
h3
  margin-bottom: 0
  margin-top: 1.5rem


</style>

