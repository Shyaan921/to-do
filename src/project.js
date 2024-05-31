
import { displayProjects, displayTodos } from "./display"

class projects {
    constructor(name) {
        this.name = name
        this.todoList = []
    }

    add(todo) {
        this.todoList.push(todo)
    }
}

function addProjectEventListeners() {
    let content = document.querySelector('.content')
    let projectBtns = document.querySelectorAll('.projectBtns')
    projectBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            content.innerHTML = ''

            // add todo shower here
            displayTodos(btn.value)
        })
    })

    let addProjectBtn = document.querySelector('.addProjectBtn')
    addProjectBtn.addEventListener('click', function() {
        let newProject = new projects(prompt('Name: '))
        localStorage.setItem(newProject.name, JSON.stringify(newProject))
        displayProjects()
    })
}

export { projects, addProjectEventListeners }