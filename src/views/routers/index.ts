import express from "express";
import userRouter from './user.router';

const routers = (app: express.Application) => {
    const router = express.Router();
    app.use('', router);
    router.use('/user', userRouter);
}

export default routers;