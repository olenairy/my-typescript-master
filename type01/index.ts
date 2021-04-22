import axios from 'axios'
const url = 'http://jsonplaceholder.typicode.com/todos/1'

interface Todo{
    id: number
    title: string
    completed: boolean
}
axios.get(url).then(response => {

    const todo = response.data as Todo
    const id = todo.id
    const title = todo.title
    const compl = todo.completed
    // console.log(response.data)
   logTodo(id, title, compl)
})

const logTodo = (id: number, title: string, compl: boolean) =>{
    console.log(
        `
        The Todo ID: ${id}
        has a title of: ${title}
        Is it finished?: ${compl}
        `
    )
}
