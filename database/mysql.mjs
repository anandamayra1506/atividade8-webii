import { Sequelize } from "sequelize";

const sequelize = new Sequelize("postgresql://user_db:aZDChrfpkqj9qcuZIXCeubu2pDeNDKwj@dpg-cqtlbm8gph6c739sv2m0-a/veiculos_jlga");
sequelize.sync();

export default sequelize;
