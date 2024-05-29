import "./styles.css"
import { todo } from "./todo"
import { projects } from "./project"

function screenController () {
    let projectNameList = ['default']
    let home = new projects('home')
    let work = new projects('work')
    let cooking = new todo('cooking', 'make salsa', 'medium', 1234)
    let uhh = new todo('nothing', 'meow', 'boom ooom', 12)

    console.log(home.todoList)
    console.log(work.todoList)

    home.add(cooking)
    work.add(uhh)

    console.log(home.todoList)
    console.log(work.todoList)
}

screenController()