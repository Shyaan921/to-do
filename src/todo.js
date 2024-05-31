class todo {
    constructor(name, description, priority, dueDate) {
        this.name = name
        this.description = description
        this.priority = priority
        this. dueDate = dueDate
    }
}

function addTodoEventListener() {
    let content = document.querySelector('.content')
    let addTodoBtn = document.querySelector('.todoBtn')
    let dialog = document.querySelector('dialog')
    addTodoBtn.addEventListener('click', function() {
        dialog.showModal()
    });
};


export { todo, addTodoEventListener }