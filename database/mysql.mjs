import { Sequelize } from "sequelize";

/*GERADA PELO BANCO DE DADOS POSTGRE NO SITE DE HOSPEDAGEM RENDER */
const sequelize = new Sequelize("postgresql://user_db:a8IjI9JgNj8m1sNhEOGFGpH2nUmFRhDO@dpg-cqt9vrd2ng1s739bhr60-a/veiculos_gajm");
sequelize.sync();

export default sequelize;
