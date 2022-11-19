import { Router, Request, Response, NextFunction } from 'express';
import { requireAuth } from '../auth/middlewares';
import controller from './controller';

const router = Router();


router.get("/", requireAuth, async (req: Request, res: Response, next: NextFunction) => {
    const list = await controller.list(req.query);
    res.json(list);
});

router.post("/", requireAuth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const model = await controller.store(req.body);
        res.status(201).json(model);
    } catch (error: any) {
        console.log("🚀 ~ file: router.ts ~ line 18 ~ router.post ~ error", error)

        if (error.name === 'CategoriesException') {
            return res.status(400).json({
                message: error.message
            });
        }

        res.status(500).json({
            message: error
        });
    }
});

router.get("/:id", requireAuth, async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { id } = req.params;
        const model = await controller.getOne(id);
        res.json(model);
    } catch (error: any) {
        console.log("🚀 ~ file: router.ts ~ line 38 ~ router.get ~ error", error)

        res.json({
            message: error.message
        });
    }
});


export default router;