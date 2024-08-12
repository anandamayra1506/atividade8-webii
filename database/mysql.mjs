import { Sequelize } from "sequelize";

/*GERADA PELO BANCO DE DADOS POSTGRE NO SITE DE HOSPEDAGEM RENDER */
const sequelize = new Sequelize("postgresql://user_db:SEUHcvHhmNjMiyCMiboSOPldVIoiE7RT@dpg-cqsie156l47c73a42n80-a/veiculos_la92");
sequelize.sync();

export default sequelize;