const getAllTasks =  (req,res) =>{
    res.json('all tasks')
}

const createTask = (req,res)=> {
    res.json('create task')
}

const getTask = (req,res)=> {
    res.json('get task')
}

const updateTask = (req,res)=> {
    res.json('update task')
}

const deleteTask = (req,res)=> {
    res.json('delete task')
}



module.exports = {
    getAllTasks, createTask, getTask, updateTask,deleteTask
}