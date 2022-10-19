import { Router, Request, Response, NextFunction } from 'express';
import controller from './controller';


const router = Router();

router.post("/register", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const productos = await controller.register(req.body);
        res.json(productos);
    } catch (error: any) {
        if (error.name === 'MongoServerError' && error.code === 11000) {
            res.status(400).json({
                message: "Username already exists"
            });
            return;
        }

        res.status(400).json({
            message: `${error.name}: ${error.message}`
        });
    }
});


router.post("/login", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const productos = await controller.login(req.body);
        res.json(productos);
    } catch (error: any) {
        res.status(400).json({
            message: `${error.name}: ${error.message}`
        });
    }
});

export default router; 