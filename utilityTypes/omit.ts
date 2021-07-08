interface Todo {
    title: string
    description: string
    completed: boolean
    createdAt: number
}

type TodoPreview1 = Omit<Todo, "description">

const todo3: TodoPreview1 = {
    title: "",
    completed: false,
    createdAt: 1111111
}

todo3

type TodoInfo = Omit<Todo, "completed" | "createdAt">

const todoinfo: TodoInfo = {
    title:"",
    description:''
}

todoinfo