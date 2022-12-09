import { Router, Request, Response, NextFunction } from 'express';
import { requireAuth } from '../auth/middlewares';
import controller from './controller';

const router = Router();


router.get("/", requireAuth, async (req: Request, res: Response, next: NextFunction) => {
    const students = await controller.list();
    res.json(students);
});

router.post("/", requireAuth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const student = await controller.store(req.body)
        res.status(201).json(student);
    } catch (error) {
        res.json({
            message: error
        });
    }
});

router.get("/:id", requireAuth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const students = await controller.getOne(id);
        res.json(students);
    } catch (error: any) {
        res.json({
            message: error.message
        });
    }
});

router.delete("/:id", requireAuth, (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    // let myproducts = products.filter(item => item.id !== id);
    res.json({});
});


export default router;