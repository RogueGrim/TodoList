function renderCard(title,description,dueDate,priority,count){

    const container = document.querySelector('.mainContent')

    const card  = document.createElement('div')
    card.classList.add('card')
    card.setAttribute('projectNo',count)

    const content = document.createElement('div')
    content.classList.add('cardContent')

    const leftContent = document.createElement('div')
    const heading = document.createElement('h1')
    heading.classList.add('projectHeading')
    heading.innerText = title;
    leftContent.appendChild(heading)

    const desc = document.createElement('p')
    desc.classList.add('projectDesc')
    desc.innerText = description
    leftContent.appendChild(desc)

    content.appendChild(leftContent)
    
    const rightContent = document.createElement('div')

    const btn = document.createElement('div')
    btn.classList.add('cardBtn')
    
    const del = document.createElement('button')
    del.classList.add('delProject')
    del.innerText = 'Del'
    btn.appendChild(del)

    const edit = document.createElement('button')
    edit.classList.add('editProject')
    edit.innerText = 'Edit'
    btn.appendChild(edit)

    rightContent.appendChild(btn)

    const date = document.createElement('p')
    date.classList.add('projectDate')
    date.innerText = `Due on: ${dueDate}`
    rightContent.appendChild(date)

    const prior = document.createElement('p')
    prior.classList.add('projectPrior')
    prior.innerText = priority
    rightContent.appendChild(prior)

    

    content.appendChild(rightContent)
    card.appendChild(content)


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

function renderTodo(value,count){

    const container = document.querySelector('.todoContent')
    
    const todo = document.createElement('div')
    todo.classList.add('list')

    const content = document.createElement('div')
    content.classList.add('listContent')

    const check = document.createElement('input')
    check.classList.add('checklist')
    check.type = 'checkbox'
    content.appendChild(check)
    
    const list = document.createElement('p')
    list.classList.add('taskContent')
    list.setAttribute('taskNo',count)
    list.innerText = value
    content.appendChild(list)

    todo.appendChild(content)

    const btn = document.createElement('div')
    btn.classList.add('btn')

    const del = document.createElement('button')
    del.classList.add('delTodo')
    del.innerText = 'Del'
    btn.appendChild(del)

    const edit = document.createElement('button')
    edit.classList.add('editTodo')
    edit.innerText = 'Edit'
    btn.appendChild(edit)

    todo.appendChild(btn)
    container.appendChild(todo)

}

function renderList(title,priority,count){

    const container = document.querySelector('.projectView')

    const card = document.createElement('div')
    card.classList.add('listCard')
    card.setAttribute('projectNo',count)

    const head = document.createElement('h1')
    head.innerText = title
    card.appendChild(head)

    const prior = document.createElement('p')
    prior.innerText = priority
    card.appendChild(prior)

    container.appendChild(card)
}
export {renderCard,renderList,renderTodo}


