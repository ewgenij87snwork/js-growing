<template>
	<div class="container">
		<br>
		<div class="titlePage"><h1>Array Methods</h1></div>
		<blockquote class="blockquote text-right">
		    <p class="mb-0">Не ошибается тот, кто ничего не делает.</p>
		    <footer class="blockquote-footer">Мудрость
		      <cite title="Source Title"></cite>
		    </footer>
		</blockquote>
		<div class="workbookText">
			<br>
			<ul>
				<li>Also I made mini-cheatsheets: just name and description for Array's methods - <a class="navbar-brand text-default" href="/cheatsheet/arrayzmini">Array to Print</a></li>
			</ul>
		</div>

		<task
		v-for="item in items"
		v-bind:key="item.name"
		v-bind:name="item.name"
		v-bind:syntax="item.syntax"
		v-bind:syntaxDescr="item.syntaxDescr"
		v-bind:description="item.description"
		v-bind:func="item.func"
		v-bind:funcTwo="item.funcTwo"
		/>
	</div>
</template>
<script>
import arraytask from "@/data/arraytask.json";
	export default {
		name: 'arrayz',
		components: {
			'task': () => import('@/components/task'),
			'convertToJson': () => import('@/components/convertToJson')
		},
		data: function() {
			return {
				items: arraytask
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