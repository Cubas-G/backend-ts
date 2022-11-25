import { Router, Request, Response, NextFunction } from 'express';
import { requireAuth } from '../auth/middlewares';
import controller from './controller';

const router = Router();


router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    const productos = await controller.list();
    res.json(productos);
});

router.post("/", requireAuth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const product = await controller.store(req.body)
        res.status(201).json(product);
    } catch (error) {
        res.json({
            message: error
        });
    }
});

router.get("/:id", requireAuth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const product = await controller.getOne(id);
        res.json(product);
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