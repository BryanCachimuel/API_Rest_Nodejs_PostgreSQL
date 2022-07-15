import {Task} from '../models/Task.js'

export const getTasks = async (req, res) =>{
    try {
      const tasks = await Task.findAll();
      res.json(tasks);
    } catch (error) {
       return res.status(500).json({message:error.message});
    }
}

export const createTasks = async (req, res) => {
    try {
        const {name, done, projectId} = req.body
        const nuevaTarea = await Task.create({
            name,
            done, 
            projectId
        })
        res.json(nuevaTarea)
    } catch (error) {
       return res.status(500).json({message:error.message}) 
    }
}

export const updateTask = async (req, res) => {
    
}

export const deleteTask = async (req, res) => {
    const {id} = req.params;
    try {
      const result = await Task.destroy({
        where:{id}
      })
      return res.status(204)
    } catch (error) {
      return res.status(500).json({message:error.message})  
    }
}

export const getTask = async (req, res) => {
    const {id} = req.params
    try {
      const task = await Task.findOne({
        where: {id},
        attributes:['name']
      })
      res.json(task)
    } catch (error) {
      return res.status(500).json({message:error.message})  
    }
}

