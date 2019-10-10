<template>
	<div>
		<div class="todo">
			<h1 class="todo__header">"To Do"</h1>
			<div class="todo__container">
				<div class="todo__content">
					<toDoItem
					v-for="todo in list"
					:todo="todo"
					@delete="onDeleteItem"
					:key="todo.id"
					></toDoItem>
					<input type="text" v-model="todo" v-on:keyup.enter="createNewToDoItem">
					<div class="todo__add" @click="createNewToDoItem()">+</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'todo',
	components: {
		'toDoItem': () => import('@/components/toDoItem')
	},
	data: function () {
		return {
			list: [
					{
						id: 1,
						text: 'clean the house'
					},
					{
						id: 2,
						text: 'buy milk'
					}
			],
			todo: '',
		}
	},
	methods: {
		createNewToDoItem() {
			//validate todo
			if (!this.todo){
				alert("Please enter a todo!");
				return
			}
			const newId = Math.max.apply(null, this.list.map(t => t.id)) + 1;
			this.list.push({ id: newId, text: this.todo});
			this.todo = '';
		},
		onDeleteItem(todo){
		  this.list = this.list.filter(item => item !== todo);
		}
	}}
</script>
<style scoped lang="sass">
.todo 
	text-align: center 
	border: 1px solid white 
	width: 80vw 
	height: auto 
	box-shadow: 2px 3px 15px rgba(0, 0, 0, 0.5) 
	background: #f6f6f6 
	padding-bottom: 60px 
	margin: 40px auto 
	&__header 
		color: black 
		font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif 
		font-weight: 400 
		text-transform: uppercase 
		margin: 70px auto 30px 
	&__add 
		color: white 
		font-size: 2em 
		width: 0.5em 
		height: 0.5em 
		display: flex 
		justify-content: center 
		align-items: center 
		padding: 15px 
		cursor: pointer 
		background: #73ff73 
		border-radius: 10px 
		box-shadow: 1px 1px 1px #47a947 
		margin: 20px auto 0 
		&:hover 
			box-shadow: none 
			margin-top: 21px 
			// margin-left: calc(auto + 1px) 
	&__container 
		width: 80% 
		margin: 0 auto 
input 
	width: 60% 
	padding: 10px 
	font-size: 1em 
	margin: 10px auto 
	box-shadow: 1px 3px 20px 0px rgba(0, 0, 0, 0.3) 

</style>