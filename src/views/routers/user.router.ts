import express from 'express'
import UserController from '../../controllers/User.controller';

const router = express.Router();

router.post('/', async (req: express.Request, res: express.Response, next) => {
    try {
        const user = req.body;
        const userController = new UserController();
        const data = await userController.create(user);
        res.json(data);
    } catch (error) {
        next(error);
    }
});

router.get('/', async (req: express.Request, res: express.Response, next) => {
    try {
        const userController = new UserController();
        const data = await userController.toList();
        res.json(data);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req: express.Request, res: express.Response, next) => {
    try {
        const id = req.params.id
        const userController = new UserController();
        const data = await userController.get(id);
        res.json(data);
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req: express.Request, res: express.Response, next) => {
    try {
        const id = req.params.id
        const userController = new UserController();
        const data = await userController.delete(id);
        res.json(data);
    } catch (error) {
        next(error);
    }
});

router.put('/:id', async (req: express.Request, res: express.Response, next) => {
    try {
        const id = req.params.id
        const user = req.body;
        const userController = new UserController();
        const data = await userController.update(id, user);
        res.json(data);
    } catch (error) {
        next(error);
    }
});

export default router;