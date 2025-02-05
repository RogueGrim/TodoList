import './styles.css'
import { dailogCreation } from './dialog';
import {Project,getValues} from './class';

let addProject =  document.querySelector('.addProject')
addProject.addEventListener('click',()=>{
    dailogCreation()

    let submit = document.querySelector('.submitProject')
    submit.addEventListener('click',()=>{

        let list = [];
        let {title,description,dueDate,priority} = getValues()
        let book = new Project(title,description,dueDate,priority)
        list.push(book)
        console.log(list)
    })
})


