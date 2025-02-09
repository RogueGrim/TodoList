import './styles.css'
import { dailogCreation ,taskCreation} from './dialog';
import {Project,getValues,getTodos} from './class';
import { renderCard,renderList,renderTodo} from './card';

let list = []
let addProject =  document.querySelector('.addProject')
addProject.addEventListener('click',()=>{
    dailogCreation()

    let submit = document.querySelector('.submitProject')
    submit.addEventListener('click',()=>{
        
        let {title,description,dueDate,priority} = getValues()
        let book = new Project(title,description,dueDate,priority)
        list.push(book)
        renderCard(title,description,dueDate,priority)
        renderList(title,priority)
        console.log(list)
        document.body.removeChild(document.body.lastChild)

        let todo = document.querySelector('.addTask')
        todo.addEventListener('click',()=>{
            taskCreation()

            let addTask = document.querySelector('.addNewTask')
            addTask.addEventListener('click',()=>{
                let value = getTodos()
                renderTodo(value)
                document.body.removeChild(document.body.lastChild)
            })
        })
    })

    
})


