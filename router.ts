import { Express } from 'express';
import authRouter from './auth/router';
import productRouter from './products/router';
import categoriesRouter from './categories/router';
import recipesRouter from './recipes/router';

const router = (app: Express) => {
    app.use("/auth", authRouter);
    app.use("/products", productRouter);
    app.use("/categories", categoriesRouter);
    app.use("/recipes", recipesRouter);
}

export default router;