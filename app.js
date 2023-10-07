const TodoForm = document.getElementById('Todo-form');
const TodoInp = document.getElementById('Todo');
const addTodoBtn = document.getElementById('add-todo-btn')
const todoListHTML = document.getElementById('todo-list')



let todolist= JSON.parse(localStorage.getItem('todo-list')) || []
 
function addTodo(event) {
    event.preventDefault();

    todolist.push(TodoInp.value);

    localStorage.setItem('todo-list',JSON.stringify(todolist));

    TodoInp.value = '';

    renderTodoList();
}
 
function renderTodoList(){
    let htmls = ''
  for(let i = 0; i<todolist.length; i++) {
    htmls += "<li>" + todolist[i] +"</li>"
  }

  todoListHTML.innerHTML = htmls;
}

addTodoBtn.addEventListener('click', function (event) {
    addTodo(event)
})

renderTodoList();