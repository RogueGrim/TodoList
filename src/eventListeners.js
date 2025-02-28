import { projectCounter } from "."
import { getTodos,getValues } from "./class"
import { renderCard,renderList,renderTodo } from "./render"
import {dailogCreation,taskCreation,editDialog,editTaskDialog} from './dialog'
import { editArrayItems,addToArray,getArrayTodos,editArrayTodos,delArrayTodos,delArrayItem} from "./logic"


function addProject(){
    let container = document.querySelector('.addProject')

    container.addEventListener('click',()=>{
        dailogCreation()
        submitNewProject()
    })
}

function submitNewProject(){
    let container =  document.querySelector('.submitProject')
    let content = document.querySelector('.mainContent')

    container.addEventListener('click',()=>{
        
        const {title,description,dueDate,priority}= getValues()
        addToArray(title,description,dueDate,priority)
        renderList(title,priority,projectCounter.count)
        content.innerHTML=''
        renderCard(title,description,dueDate,priority,projectCounter.count)
        document.body.lastChild.remove()
    })
}

function submitProject(){
    let container = document.querySelector('.submitProject')
    let content = document.querySelector('.mainContent')

    container.addEventListener('click',()=>{
        let projectNo = document.querySelector('.card').getAttribute('projectno')
        const {title,description,dueDate,priority}= getValues()
        editArrayItems(projectNo,title,description,dueDate,priority)
        content.innerHTML=''
        renderCard(title,description,dueDate,priority,projectNo)
        getArrayTodos(projectNo)
        console.log(projectCounter.Storage)
        document.body.lastChild.remove()
    })
}

function submitNewTask(){
    let container = document.querySelector('.addNewTask')
    let card = document.querySelector('.card')
    
    container.addEventListener('click',()=>{
        let count = card.getAttribute('projectno')
        let value = getTodos()
        projectCounter.Storage[count].todos.push(value)
        renderTodo(value)
        document.body.lastChild.remove()
    })
}

function submitTask(taskNo){
    let container = document.querySelector('.addNewTask')
    let card = document.querySelector('.card')
    let content = document.querySelector(`.taskContent[taskno="${taskNo}"]`);
    
    container.addEventListener('click',()=>{
        let projectNo = card.getAttribute('projectno')
        let todos = getTodos()
        editArrayTodos(projectNo,taskNo,todos)
        content.innerText = todos
        document.body.lastChild.remove()
    })

}

function addNewTask(){
    let container = document.querySelector('.addTask')

    container.addEventListener('click',()=>{
        taskCreation()
        submitNewTask()
    })

}

function editProject(){
    let container = document.querySelector('.editProject')

    container.addEventListener('click',()=>{
        let title = container.closest('.card').querySelector('.projectHeading').innerText
        let desc = container.closest('.card').querySelector('.projectDesc').innerText
        let dueDate = container.closest('.card').querySelector('.projectDate').innerText
        let prior = container.closest('.card').querySelector('.projectPrior').innerText
        editDialog(title,desc,dueDate,prior)
        submitProject()
   
    })

}

function editTask(){
    let container = document.querySelectorAll('.editTodo')

    container.forEach((item)=>{
        item.addEventListener('click',()=>{
            let content = item.closest('.list').querySelector('.taskContent').innerText 
            let taskNo = item.closest('.list').querySelector('.taskContent').getAttribute('taskno')
            editTaskDialog(content)
            submitTask(taskNo)

        })
    })
}

function DelTodo(){

    let container = document.querySelectorAll('.delTodo')
    let projectNo = document.querySelector('.card').getAttribute('projectno')

    container.forEach((item)=>{
        item.addEventListener('click',()=>{
            let taskNo = item.closest('.list').querySelector('.taskContent').getAttribute('taskno')
            delArrayTodos(projectNo,taskNo)
            document.querySelector('.todoContent').innerHTML=''
            getArrayTodos(projectNo)
            DelTodo()
        })
    })
}

function delProject(){
    let container = document.querySelector('.delProject')
    

    container.addEventListener('click',()=>{
        let value = document.querySelector('.card').getAttribute('projectno')
        let content = document.querySelectorAll(`[projectno='${value}']`)
        content.forEach((e)=>{
            e.remove()
        })
        delArrayItem(value)
        projectCounter.countDown()
    })
}

export {addProject,addNewTask,editProject,editTask,delProject,DelTodo}