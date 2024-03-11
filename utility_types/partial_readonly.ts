interface Todo {
    title: string;
    description: string;
    isFinished: boolean
}

function updateTodo(todo:Todo, fieldsToUpdate: Partial<Todo>) : Todo{
    return {...todo, ...fieldsToUpdate}
}


let todo:Todo = {title : "finish guide", description: "typescript guide to be finished today", isFinished : false}
console.log(todo)
todo = updateTodo(todo, {isFinished : true})
console.log(todo)

const todo1: Readonly<Todo> = {
    title: "check in in th morning",
    description: "...",
    isFinished: true
};
