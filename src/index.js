import './styles.css'
import { dailogCreation ,taskCreation,editDialog,editTaskDialog} from './dialog';
import {Project,getValues,getTodos} from './class';
import { renderCard,renderList,renderTodo} from './render';
import { defaultProject } from './deafultProject';



let projectCounter = {
    count:0,
    countUp:function(){
        this.count++
    },
    countDown:function(){
        this.count--
    },
}
defaultProject()

//
function addProject(){
    let container = document.querySelector('.addProject')

    container.addEventListener('click',()=>{
        dailogCreation()
        submitProject()
    })
}
addProject()



function submitProject(){
    let container =  document.querySelector('.submitProject')

    container.addEventListener('click',()=>{
        document.body.lastChild.remove()
    })
}

function addTask(){
    let container = document.querySelectorAll('.addTask')

    container.forEach((item)=>{
        item.addEventListener('click',()=>{
            taskCreation()
        })
    })
}

function editProject(){
    let container = document.querySelectorAll('.editProject')

    container.forEach((item)=>{
        item.addEventListener('click',()=>{
            let title = item.closest('.card').querySelector('.projectHeading').innerText
            let desc = item.closest('.card').querySelector('.projectDesc').innerText
            let dueDate = item.closest('.card').querySelector('.projectDate').innerText
            let prior = item.closest('.card').querySelector('.projectPrior').innerText
            editDialog(title,desc,dueDate,prior)
        })
    })
}
editProject()

function editTask(){
    let container = document.querySelectorAll('.editTodo')

    container.forEach((item)=>{
        item.addEventListener('click',()=>{
            let content = item.closest('.list').querySelector('.taskContent').innerText 
            editTaskDialog(content)
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
    let container = document.querySelectorAll('.delProject')

    container.forEach((item)=>{
        item.addEventListener('click',(e)=>{
            e.preventDefault()
            let value = e.target.closest('.card').getAttribute('count')
            delCard(value)
            e.target.closest('.card').remove()
            projectCounter.countDown()
        })
    })
}

export {projectCounter}
