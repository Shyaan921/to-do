import { addTodoEventListener } from "./todo"

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
            let addTodoBtn = document.createElement('button')
            addTodoBtn.classList = 'todoBtn'
            addTodoBtn.value = btn.value
            addTodoBtn.innerText = "+ Add Todo"
            content.appendChild(addTodoBtn)
            addTodoEventListener()
        })
    })
}

export { projects, addProjectEventListeners }