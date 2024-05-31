import { addProjectEventListeners } from "./project"

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
    addProjectBtn.classList = 'addProjectBtns'
    addProjectBtn.innerText = "+ Add Project"
    sidebar.appendChild(addProjectBtn)
    addProjectEventListeners()
}



export { displayProjects }