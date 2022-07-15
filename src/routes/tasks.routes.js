import { Router } from 'express'
import { createTasks, deleteTask, getTask, getTasks, updateTask } from '../controllers/tasks.controller.js'
const router = Router()

router.get('/tareas', getTasks)
router.post('/tareas/crear', createTasks)
router.put('/tareas/:id',updateTask)
router.delete('/tareas/:id', deleteTask)
router.get('/tareas/:id', getTask)

export default router