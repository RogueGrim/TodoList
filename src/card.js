function renderCard(title,description,dueDate,priority){

    const container = document.querySelector('.mainContent')

    const card  = document.createElement('div')
    card.classList.add('card')

    const content = document.createElement('div')
    content.classList.add('cardContent')

    const leftContent = document.createElement('div')
    const heading = document.createElement('h1')
    heading.innerText = title;
    leftContent.appendChild(heading)

    const desc = document.createElement('p')
    desc.innerText = description
    leftContent.appendChild(desc)

    content.appendChild(leftContent)
    
    const date = document.createElement('p')
    date.innerText = `Due on: ${dueDate}`
    content.appendChild(date)

    const prior = document.createElement('p')
    prior.innerText = priority
    content.appendChild(prior)

    card.appendChild(content)

    const btn = document.createElement('div')
    btn.classList.add('btn')

    const del = document.createElement('button')
    del.innerText = 'Delete'
    btn.appendChild(del)

    const edit  = document.createElement('button')
    edit.innerText = 'Edit'
    btn.appendChild(edit)

    card.appendChild(btn)

    const todo = document.createElement('div')
    todo.classList.add('todo')

    const todoHead = document.createElement('h1')
    todoHead.innerText = 'Tasks'
    todo.appendChild(todoHead)

    const addTask = document.createElement('button')
    addTask.classList.add('addTask')
    addTask.innerText = 'Add New Task'
    todo.appendChild(addTask)

    const todoContent = document.createElement('div')
    todoContent.classList.add('todoContent')

    card.appendChild(todo)
    card.appendChild(todoContent)
    container.appendChild(card)

}

function renderTodo(value){

    const container = document.querySelector('.todoContent')
    
    const todo = document.createElement('div')

    const check = document.createElement('input')
    check.classList.add('checklist')
    check.type = 'checkbox'
    todo.appendChild(check)
    
    const list = document.createElement('p')
    list.innerText = value
    todo.appendChild(list)

    container.appendChild(todo)

}

function renderList(title,priority){

    const container = document.querySelector('.projectView')

    const card = document.createElement('div')
    card.classList.add('listCard')

    const head = document.createElement('h1')
    head.innerText = title
    card.appendChild(head)

    const prior = document.createElement('p')
    prior.innerText = priority
    card.appendChild(prior)

    container.appendChild(card)
}
export {renderCard,renderList,renderTodo}


