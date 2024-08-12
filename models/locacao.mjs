import sequelize from "../database/mysql.mjs";
import { DataTypes } from "sequelize";
import Veiculo from "./veiculo.mjs";

const Locacao = sequelize.define('Locacao', {
    cliente: DataTypes.STRING,
    inicio: DataTypes.DATEONLY,
    fim: DataTypes.DATEONLY
});

Locacao.belongsTo(Veiculo);

export default Locacao;