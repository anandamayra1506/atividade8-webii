import { Router } from 'express';

import VeiculoController from '../controllers/veiculo_controller.mjs';

const veiculoRouter = Router();

veiculoRouter.use((req, res, next) => {
    if (req.session.logged) {
        next();
    } else {
        res.json({ logged: false });
    }
});

veiculoRouter.get('/', VeiculoController.all);
veiculoRouter.get('/:id', VeiculoController.one);
veiculoRouter.post('/', VeiculoController.new);
veiculoRouter.put('/', VeiculoController.edit);
veiculoRouter.delete('/', VeiculoController.remove);

export default veiculoRouter;