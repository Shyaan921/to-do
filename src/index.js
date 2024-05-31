import "./styles.css"
import { todo, addTodoEventListener } from "./todo"
import { projects, addProjectEventListeners } from "./project"
import { displayProjects, displayTodos } from "./display"

let form = document.querySelector('form')


displayProjects()
form.addEventListener('submit', function(e) {
    e.preventDefault()
    
    let dialog = document.querySelector('dialog')
    let title = document.getElementById('title').value
    let description = document.getElementById('description').value
    let priority = document.getElementById('priority').value
    let dueDate = document.getElementById('dueDate').value
    let addTodo = document.querySelector('.todoBtn').value

    let node = new todo(title, description, priority, dueDate)
    let project = JSON.parse(localStorage.getItem(addTodo))
    project.todoList.push(node)
    localStorage.setItem(project.name, JSON.stringify(project))
    displayTodos(addTodo)
    form.reset()
    dialog.close()
})