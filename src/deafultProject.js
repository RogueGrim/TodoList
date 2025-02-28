import {renderList} from './render';
import { projectCounter } from '.';
import { Project } from './class';

let defaultProject = function(){
    let title = "Daily Task"
    let description = 'doing these Chores Everyday is Important'
    let dueDate = '2025-06-01'
    let priority = 'Medium Priority'


    let project = new Project(title,description,dueDate,priority)
    projectCounter.Storage.push(project)
    

    console.log(projectCounter.count)
    console.log(projectCounter.Storage)

    renderList(title,priority,projectCounter.count)
    
    let todo1 = 'Clean Room'
    projectCounter.Storage[0].todos.push(todo1)

    let todo2 = 'Make The Bed'
    projectCounter.Storage[0].todos.push(todo2)

    let todo3 = 'Wash Dishes'
    projectCounter.Storage[0].todos.push(todo3)
    
    projectCounter.countUp()
}   

export {defaultProject}