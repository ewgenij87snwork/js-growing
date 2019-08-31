<template>
	<div class="container">
		<div class="titlePage"><h1>Array Methods</h1></div>
		<blockquote class="blockquote text-right">
		    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
		    <footer class="blockquote-footer">Someone famous in
		      <cite title="Source Title">Source Title</cite>
		    </footer>
		</blockquote>
		<div class="workbookText">
			<h3>What I realized here?</h3>
			<ul>
				<li>Component with form, with little bit of validation. This form take normally written functions and returns functions in JSON string. I need this to save all my lessons in JSON. And next in all task (component) I take  JavaScript code represented as a string and lunch from button in appropriate task-block </li>
			</ul>
		</div>

		<convertToJson></convertToJson>
		<task
		:tasks="tasks"
		/>
	</div>
</template>
<script>
import arraytask from "@/data/arraytask.json";
import	convertToJson from "@/components/convertToJson";
import	task from "@/components/task";
	export default {
		name: 'arrayz',
		components: {
			task,
			convertToJson
		},
		data: function() {
			return {
				tasks: arraytask
			}
		},
	}
</script>
<style>
/*!!!!!!!!!!!!!!! НАДО ВЗЯТЬ ИЗ ЭНГРИБЕРДС */
.fade-enter-active, .fade-leave-active {
  transition: all .25s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to {
  transform: translateX(100px);
  opacity: 0;
}

</style>