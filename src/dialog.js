function dailogCreation(){

    let dailog = document.createElement('div')
    dailog.classList.add('dialog')
    
    let heading = document.createElement('h1')
    heading.innerText = 'Add a new Project'
    dailog.appendChild(heading)
    
    let title = document.createElement('label')
    title.innerText='Title:'
    dailog.appendChild(title)

    let titleInput = document.createElement('input')
    titleInput.classList.add('title')
    dailog.appendChild(titleInput)

    let description = document.createElement('label')
    description.innerText = 'Description:'
    dailog.appendChild(description)

    let descriptionInput = document.createElement('textarea')
    descriptionInput.classList.add('description')
    dailog.appendChild(descriptionInput)

    let dueDate = document.createElement('label')
    dueDate.innerText = 'Due Date:'
    dailog.appendChild(dueDate)

    let dueDateInput = document.createElement('input')
    dueDateInput.type = 'date'
    dueDateInput.classList.add('dueDate')
    dailog.appendChild(dueDateInput)

    let priority = document.createElement('label')
    priority.innerText = 'Priority:'
    dailog.appendChild(priority)
    
    let selection = document.createElement('select')
    selection.classList.add('priority')

        let option1 = document.createElement('option')
        option1.innerText = 'High Priority'
        selection.appendChild(option1)

        let option2 = document.createElement('option')
        option2.innerText = 'Medium Priority'
        selection.appendChild(option2)

        let option3 = document.createElement('option')
        option3.innerText = 'Low Priority'
        selection.appendChild(option3)

    dailog.appendChild(selection)

    let submit  = document.createElement('button')
    submit.classList.add('submitProject')
    submit.innerText = 'Confirm'
    dailog.appendChild(submit)

    document.body.appendChild(dailog)
}

export {dailogCreation}
