import { Router } from 'express'
const router = Router()

router.get('/tasks')
router.post('/tasks')
router.put('/tasks/:id')
router.delete('/tasks/:id')
router.get('/tasks/:id')

export default router