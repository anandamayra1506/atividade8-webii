import { Router } from 'express';

import AutoescolaController from '../controllers/autoescola_controller.mjs';

const autoescolaRouter = Router();

autoescolaRouter.use((req, res, next) => {
    if (req.session.logged) {
        next();
    } else {
        res.json({ logged: false });
    }
});

autoescolaRouter.get('/', AutoescolaController.all);
autoescolaRouter.get('/:id', AutoescolaController.one);
autoescolaRouter.post('/', AutoescolaController.new);
autoescolaRouter.put('/', AutoescolaController.edit);
autoescolaRouter.delete('/', AutoescolaController.remove);

export default autoescolaRouter;