import express from 'express';
import session from 'express-session';
import sequelize from './database/mysql.mjs';
import CSS from 'connect-session-sequelize';

import userRouter from './routers/user_router.mjs';
import veiculoRouter from './routers/veiculo_router.mjs';
import locacaoRouter from './routers/locacao_router.mjs';
import autoescolaRouter from './routers/autoescola_router.mjs';

const app = express()

const SequelizeStore = CSS(session.Store);

app.use(
    session({
        secret: '#7UIERU933E00LERI##327345&6',
        store: new SequelizeStore({
            db: sequelize
        })
    })
);

/*REMOÇÃO DA CONFIGURAÇÃO CORS*/

app.use(express.json());
app.use(express.urlencoded());

/*INCLUSÃO DA PUBLIC COMO ARQUIVOS ESTÁTICOS*/
app.use(express.static('public'));

app.use('/user', userRouter);
app.use('/veiculos', veiculoRouter);
app.use('/locacoes', locacaoRouter);
app.use('/autoescolas', autoescolaRouter);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
