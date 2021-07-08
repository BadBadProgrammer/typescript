interface Todo {
    title: string
    description: string
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate }
}

const todo1: Todo = {
    title: '',
    description: ''
}

const todo2 = updateTodo(todo1, {
    description: ''
})