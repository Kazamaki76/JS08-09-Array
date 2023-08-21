const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
];

//SearchBy ID 
const foundedIndex = tasks.findIndex((obj, index) => obj.id == 2)

function updateTask(id, newTask) {
    const foundedIndex = tasks.findIndex((obj, index) => obj.id == id)


    if (foundedIndex != -1) {
        const newTodo = Object.asssign({}, tasks[foundedIndex])
        newTodo.name = newTask
        tasks.splice(foundedIndex, 1, newTodo)
    }
}


updateTask(2, "travel")
updateTask(1, "Do Js hw")
tasks