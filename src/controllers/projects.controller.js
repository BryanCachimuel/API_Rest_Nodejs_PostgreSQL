import { Project } from "../models/Project.js";

export const getProjects = async (req, res) => {
  try {
    const todosproyectos = await Project.findAll();
    res.json(todosproyectos);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message });
  }
};

export const createProject = async (req, res) => {
  const { name, prioriry, description } = req.body;
  try {
    const nuevoProyecto = await Project.create({
      name,
      prioriry,
      description,
    });
    res.json(nuevoProyecto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const {name, priority, description} = req.body
    
        const project = await Project.findByPk(id)
        project.name = name
        project.prioriry = priority
        project.description = description
    
        await project.save()
        res.json(project) 

    } catch (error) {
        return res.status(500).json({message: error.message})  
    }
}

export const deleteProject = async (req, res) => {
    const { id } = req.params;
    try {
        await Project.destroy({
            where:{
                id,
            },
        });
        res.status(204)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getProject = async (req, res) => {
    try {
        const {id} = req.params
        const project = await Project.findOne({
            where: {
                id,
            },
        });
        if(!project) return res.status(404).json({message:'el proyecto no existe'})

        res.json(project) 
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
