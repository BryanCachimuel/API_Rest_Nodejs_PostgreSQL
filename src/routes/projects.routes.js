import { Router } from 'express'
const router = Router()

router.get('/proyectos');
router.post('/proyectos');
router.put('/proyectos/:id');
router.delete('/proyectos/:id');
router.get('/proyectos/:id');

export default router