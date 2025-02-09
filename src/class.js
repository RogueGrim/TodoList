class Project {

    constructor(title,description,dueDate,priority){
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }

}

class Todo extends Project {
    constructor(todos){
        this.todos = todos
    }
}

function getValues(){

    let title = document.querySelector('.title').value
    let description = document.querySelector('.description').value
    let dueDate = document.querySelector('.dueDate').value
    let priority = document.querySelector('.priority').value

    return{title,description,dueDate,priority}
}

function getTodos(){
    let todos = document.querySelector('.taskInput').value
    return todos
}

export{Project,getValues,getTodos}