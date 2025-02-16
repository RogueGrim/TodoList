import { renderCard,renderList,renderTodo} from './render';
import { projectCounter } from '.';
let defaultProject = function(){
    let title = "Daily Task"
    let description = 'doing these Chores Everyday is Important'
    let dueDate = '2025-06-01'
    let priority = 'Medium Priority'

    let Counter = projectCounter

    renderCard(title,description,dueDate,priority,Counter.count)
    renderList(title,priority,Counter.count)

    let todo1 = 'Clean Room'
    renderTodo(todo1)

    let todo2 = 'Make The Bed'
    renderTodo(todo2)

    let todo3 = 'Wash Dishes'
    renderTodo(todo3)
    projectCounter.countUp()
}   

export {defaultProject}