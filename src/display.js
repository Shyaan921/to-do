import { addProjectEventListeners } from "./project"
import { addTodoEventListener } from "./todo"

function displayProjects() {
    let sidebar = document.querySelector('.sidebar')
    sidebar.innerHTML = ''
    Object.keys(localStorage).forEach(function(key) {
        let projectBtn = document.createElement('button')
        projectBtn.value = key
        projectBtn.classList = 'projectBtns'
        projectBtn.innerText = key
        sidebar.appendChild(projectBtn)
    })

    let addProjectBtn = document.createElement('button')
    addProjectBtn.classList = 'addProjectBtn'
    addProjectBtn.innerText = "+ Add Project"
    sidebar.appendChild(addProjectBtn)
    addProjectEventListeners()
}

function displayTodos(projectName) {
    let list = JSON.parse(localStorage.getItem(projectName)).todoList
    let content = document.querySelector('.content')
    content.innerHTML = ''
    list.forEach(function(todo) {
        let div = document.createElement('div')
        let nameDiv = document.createElement('div')
        let descriptionDiv = document.createElement('div')
        let dateDiv = document.createElement('div')

        div.classList.add(todo.priority)
        div.classList.add('card')

        nameDiv.innerText = 'Name: ' +  todo.name
        descriptionDiv.innerText = 'Description: ' + todo.description
        dateDiv.innerText = 'Due Date: ' +  todo.dueDate

        div.appendChild(nameDiv)
        div.appendChild(descriptionDiv)
        div.appendChild(dateDiv)

        content.appendChild(div)
    })

    let addTodoBtn = document.createElement('button')
    addTodoBtn.classList = 'todoBtn'
    addTodoBtn.value = projectName
    addTodoBtn.innerText = "+ Add Todo"
    content.appendChild(addTodoBtn)
    addTodoEventListener()
}   



export { displayProjects, displayTodos }