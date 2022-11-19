import { Router, Request, Response, NextFunction } from 'express';
import { requireAuth } from '../auth/middlewares';
import controller from './controller';

const router = Router();


router.get("/", requireAuth, async (req: Request, res: Response, next: NextFunction) => {
    const list = await controller.list();
    res.json({
        data: list,
        metadata: {
            nextPage: 2,
            currentPage: 1,
            perPage: 10
        }
    });
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

router.delete("/:id", requireAuth, async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        await controller.delete(id);
        res.status(204).json({});
    } catch (error: any) {
        if (error.name === 'CategoriesException') {
            return res.status(400).json({
                message: error.message
            });
        }

        if (error.message === 'Product not found') {
            return res.status(404).json({
                message: error.message
            });
        }

        return res.status(500).json({
            message: error.message
        });
    }
});


router.patch("/:id", requireAuth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const model = await controller.update(req.params.id, req.body);
        res.status(200).json(model);
    } catch (error: any) {
        console.log("🚀 ~ file: router.ts ~ line 18 ~ router.post ~ error", error)

        if (error.message === 'Product not found') {
            return res.status(404).json({
                message: error.message
            });
        }

        res.status(500).json({
            message: error
        });
    }
});


export default router;