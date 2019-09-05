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
				<li>Фух блядь работает! Я добавил метод filter для массивов. Взял пример выполнения этого метода -- код в 3 строчки, рузултат выполнения записывался в переменную result. Через окно textarea я вставил этот код, по нажатию на кнопку я получил отформатированный под строку json'a текст. Перед закрывающими кавычками я вставил свое "а в строчку вывода результата я напишу это: (result)" <small>document.getElementById('filter').innerHTML = result</small>. Ну и полученный результат я вставил в json -- все заработало! </li>
				<li>Вставляю в поле ниже код функции. Нажимаю "Convert to JSON". Получаю строку соответствующую JSON. В самом конце, перед закрывающимися кавычками вставляю: <small><mark>document.getElementById(' имя в json'e ').innerHTML = "result"</mark></small> -- т.е. добавляю, что нужно полученный результат вывести в соответствующем блоке с соответствующим ID. Полученным уже дополняю json-файл.  </li>
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
		/>
		<convertToJson></convertToJson>
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