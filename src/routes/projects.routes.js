import { Router } from 'express'
import { createProject, getProjects } from '../controllers/projects.controller.js'

const router = Router()

router.get('/proyectos', getProjects); 
router.post('/proyectos/crear', createProject);
router.put('/proyectos/:id');
router.delete('/proyectos/:id');
router.get('/proyectos/:id');

export default router