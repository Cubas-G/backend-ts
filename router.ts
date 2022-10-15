import { Express, Router, Request, Response, NextFunction } from 'express';
import { ulid } from 'ulid';
import { products } from './db';
import controller from './products/controller';

const router = (app: Express) => {
    const appRouter = Router();
    app.use(appRouter);


    appRouter.get("/products", async (req: Request, res: Response, next: NextFunction) => {
        const productos = await controller.list();
        res.json(productos);
    });

    appRouter.post("/products", async (req: Request, res: Response, next: NextFunction) => {
        try {
            const product = await controller.store(req.body)
            res.status(201).json(product);
        } catch (error) {
            res.json({
                message: error
            });
        }
    });

    appRouter.get("/products/:id", async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;
        const product = await controller.getOne(id);
        res.json(product);
    });

    appRouter.delete("/products/:id", (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;

        let myproducts = products.filter(item => item.id !== id);
        res.json(products);
    });
}

export default router;