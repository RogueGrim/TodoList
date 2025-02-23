import { projectCounter } from "."
import { Project } from "./class"
import { renderCard, renderTodo } from "./render"

function addProject(){
    let container = document.querySelector('.addProject')

    container.addEventListener('click',()=>{
        dailogCreation()
        submitProject()
    })
}


function submitProject(){
    let container =  document.querySelector('.submitProject')

    container.addEventListener('click',()=>{
        
        const {title,description,dueDate,priority}= getValues()
        const project = new Project(projectCounter.count,title,description,dueDate,priority)
        renderCard(title,description,dueDate,priority)
        projectCounter.Storage.push(project)
        console.log(projectCounter.Storage)
        document.body.lastChild.remove()

    })
}

function submitTask(){
    let container = document.querySelector('.addNewTask')
    
    container.addEventListener('click',()=>{
        let value = getTodos()
        document.body.lastChild.remove()
    })
}

function addTask(){
    let container = document.querySelector('.addTask')

    container.addEventListener('click',()=>{
        taskCreation()
        submitTask()
    })

}

function editProject(){
    let container = document.querySelector('.editProject')

    container.addEventListener('click',()=>{
        let title = item.closest('.card').querySelector('.projectHeading').innerText
        let desc = item.closest('.card').querySelector('.projectDesc').innerText
        let dueDate = item.closest('.card').querySelector('.projectDate').innerText
        let prior = item.closest('.card').querySelector('.projectPrior').innerText
        editDialog(title,desc,dueDate,prior)
        submitProject()
    })

}

function editTask(){
    let container = document.querySelectorAll('.editTodo')

    container.forEach((item)=>{
        item.addEventListener('click',()=>{
            let content = item.closest('.list').querySelector('.taskContent').innerText 
            editTaskDialog(content)
            submitTask()
        })
    })
}

function DelTodo(){

    let container = document.querySelectorAll('.delTodo')

    container.forEach((item)=>{
        item.addEventListener('click',(e)=>{
            e.preventDefault()
            e.target.closest('.list').remove()
        })
    })
}

function delCard(value){
    let container = document.querySelector(`[count='${value}']`)
    container.remove()
}

function delProject(){
    let container = document.querySelector('.delProject')

    container.addEventListener('click',(e)=>{
        e.preventDefault()
        let value = e.target.closest('.card').getAttribute('count')
        delCard(value)
        e.target.closest('.card').remove()
        projectCounter.countDown()
    })
}

function getArrayItems(projectNo){
   const title = projectCounter.Storage[projectNo].title
   const description = projectCounter.Storage[projectNo].description
   const dueDate = projectCounter.Storage[projectNo].dueDate
   const priority = projectCounter.Storage[projectNo].priority

   

   return {title,description,dueDate,priority}
}

function getArrayTodos(projectNo){
    projectCounter.Storage[projectNo].todos.forEach((value)=>{
        renderTodo(value)
    })

}
function updateScreen(){
    let container = document.querySelector('.listCard')

    container.addEventListener('click',()=>{
        const value = container.getAttribute('projectNo')
        const {title,description,dueDate,priority} = getArrayItems(value)
        renderCard(title,description,dueDate,priority)
        getArrayTodos(value)
            

    })
}

export {updateScreen}