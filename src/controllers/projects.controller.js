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


