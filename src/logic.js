import { renderCard,renderTodo } from "./render"
import { projectCounter } from "."
import { Project } from "./class"



function getArrayItems(projectNo){

    const title = projectCounter.Storage[projectNo].title
    const description = projectCounter.Storage[projectNo].description
    const dueDate = projectCounter.Storage[projectNo].dueDate
    const priority = projectCounter.Storage[projectNo].priority
 
    renderCard(title,description,dueDate,priority,projectNo)
 }
 
 function getArrayTodos(projectNo){
    projectCounter.Storage[projectNo].todos.forEach((value)=>{
      let index = projectCounter.Storage[projectNo].todos.indexOf(value)
    renderTodo(value,index)
    })
 
 }

 function editArrayItems(projectNo,title,description,dueDate,priority){

   projectCounter.Storage[projectNo].title = title
   projectCounter.Storage[projectNo].description = description
   projectCounter.Storage[projectNo].dueDate = dueDate
   projectCounter.Storage[projectNo].priority = priority

}

function addToArray(title,description,dueDate,priority){
   const project = new Project(title,description,dueDate,priority)
   projectCounter.Storage.push(project)
   console.log(projectCounter.Storage)
}

function editArrayTodos(projectNo,taskNo,todos){
   projectCounter.Storage[projectNo].todos[taskNo] = todos
}

function delArrayItem(projectNo){
   projectCounter.Storage.splice(projectNo,1)
}

function delArrayTodos(projectNo,taskNo){
   projectCounter.Storage[projectNo].todos.splice(taskNo,1)
}



 export {editArrayItems,addToArray,getArrayTodos,editArrayTodos,delArrayItem,delArrayTodos,getArrayItems}