import { Router } from 'express'
import { createProject, deleteProject, getProject, getProjects, updateProject, getProjectTasks } from '../controllers/projects.controller.js'

const router = Router()

router.get('/proyectos', getProjects); 
router.post('/proyectos/crear', createProject);
router.put('/proyectos/:id', updateProject);
router.delete('/proyectos/:id', deleteProject);

router.get('/proyectos/:id', getProject);
/* para obtener todas las tareas de un proyecto */
router.get('/proyectos/:id/tareas', getProjectTasks);

export default router