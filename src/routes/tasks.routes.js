import { Router } from 'express'
import { createTasks, getTasks } from '../controllers/tasks.controller.js'
const router = Router()

router.get('/tareas', getTasks)
router.post('/tareas/crear', createTasks)
router.put('/tareas/:id')
router.delete('/tareas/:id')
router.get('/tareas/:id')

export default router