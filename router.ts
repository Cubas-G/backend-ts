import { Express } from 'express';
import productRouter from './products/router';
import authRouter from './auth/router';

const router = (app: Express) => {
    app.use("/auth", authRouter)
    app.use("/products", productRouter)
}

export default router;