const initialize = () => {
    console.log("DOM is loaded.")
    document.addEventListener("DOMContentLoaded", initialize)
}

const input = document.querySelector(".searchbox input")
const add = document.querySelector(".searchbox button")
let todos = []

const todoCont = document.querySelector(".inner")
let currentTodo = ""

const displayTodos = () => {
    todoCont.innerHTML = ""
     todos.forEach(item => {
            let newTodo = document.createElement('div')
            newTodo.className = "todo"
            newTodo.innerHTML = `
            <h2 class=${item.completed ? "strikeThrough" : ""}>${item.task}</h2>
            <button onClick="deleteTodo(this, ${item.id})" >Delete</button>
            <button onClick="done(this, ${item.id})" >${item.completed ? "Completed" : "Complete"}</button>
        `
            todoCont.appendChild(newTodo)
        })
}
    input.addEventListener("change", (e) => {
        currentTodo = e.target.value
    })

    add.addEventListener("click", () => {
        todos.push({
            task: `${currentTodo}`,
            id: Date.now(),
            completed: false,
        })
     displayTodos()

        input.value = ""
    })

const deleteTodo = (thisTodo, todoid) => {
    thisTodo.parentElement.style.display = "none"
    todos = todos.filter(item => item.id !== todoid)
}

const done = (thisTodo, id) => {
     todos = todos.map(item => {
        if (item.id === id) {
            return {
                task: `${item.task}`,
                id: item.id,
                completed: item.completed ? false : true,
            } 
        } else {
            return item
        }
     })
        displayTodos()
  console.log(todos)         
        }





