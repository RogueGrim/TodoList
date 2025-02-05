class Project {

    constructor(title,description,dueDate,priority){
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }

}

function getValues(){

    let title = document.querySelector('.title').value
    let description = document.querySelector('.description').value
    let dueDate = document.querySelector('.dueDate').value
    let priority = document.querySelector('.priority').value

    return{title,description,dueDate,priority}
}


export{Project,getValues}