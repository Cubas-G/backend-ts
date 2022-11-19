import { Express } from 'express';
import authRouter from './auth/router';
import productRouter from './products/router';
import categoriesRouter from './categories/router';
import recipesRouter from './recipes/router';
import creatorsRouter from './creators/router';

const router = (app: Express) => {
    app.get("/", (req, res) => {
        res.json({
            message: "its working"
        });
    });
    app.use("/auth", authRouter);
    app.use("/products", productRouter);
    app.use("/categories", categoriesRouter);
    app.use("/recipes", recipesRouter);
    app.use("/creators", creatorsRouter);
}

export default router;