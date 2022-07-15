import { Router } from 'express'
import { createProject, deleteProject, getProjects, updateProject } from '../controllers/projects.controller.js'

const router = Router()

router.get('/proyectos', getProjects); 
router.post('/proyectos/crear', createProject);
router.put('/proyectos/:id', updateProject);
router.delete('/proyectos/:id', deleteProject);
router.get('/proyectos/:id');

export default router