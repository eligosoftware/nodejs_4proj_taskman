const Task = require('../models/Task')
const getAllTasks =  async (req,res) =>{
    try {
        const tasks = await Task.find()
        res.status(201).json({tasks})
    } catch (error) {
        res.status(500).json({message:error})
    }
}

const createTask = async (req,res)=> {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({message:error})
    }
    
}

const getTask = async (req,res)=> {
    // const 
    // const task = await Task.findById
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