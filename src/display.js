import { projects } from "./project"

function updateProjectDisplay() {

    let sidebar = document.querySelector('.sidebar')
    let content = document.querySelector('.content')
    sidebar.innerHTML = ''

    //Gets stuff from local library
    Object.keys(localStorage).forEach(function(key) {
        let btn = document.createElement('button')
        btn.classList = 'projectBtns'
        btn.value = key;
        btn.innerText = key
        sidebar.appendChild(btn)
    })

    //Makes a the add project button
    let projectAddBtn = document.createElement('button')
    projectAddBtn.classList = 'addProject'
    projectAddBtn.innerText = 'Add Project +'
    sidebar.appendChild(projectAddBtn)

    projectAddBtn.addEventListener('click', function() {
        let project = new projects(prompt('Name: '))
        localStorage.setItem(project.name, project.todoList)
        updateProjectDisplay()
    })
}

export { updateProjectDisplay }