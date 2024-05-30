import "./styles.css"
import { todo } from "./todo"
import { projects } from "./project"
import { updateProjectDisplay } from "./display"

localStorage.clear()
updateProjectDisplay()