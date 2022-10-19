import { Express } from 'express';
import productRouter from './products/router';

const router = (app: Express) => {

    app.use(productRouter)
}

export default router;