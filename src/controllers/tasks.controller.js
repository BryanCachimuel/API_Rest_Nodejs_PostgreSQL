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

