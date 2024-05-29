class projects {
    constructor(name) {
        this.name = name
        this.todoList = []
    }

    add(todo) {
        this.todoList.push(todo)
    }
}

export { projects }