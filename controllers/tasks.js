const getAllTasks =  (req,res) =>{
    res.send('all tasks')
}

const createTask = (req,res)=> {
    console.log('ilgar')
    res.json(req.body)
}

const getTask = (req,res)=> {
    
    res.json({id:req.params.id})
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