import sequelize from "../database/mysql.mjs";
import { DataTypes } from "sequelize";

const Veiculo = sequelize.define('Veiculo', {
    quantidade: DataTypes.INTEGER,
    modelo: DataTypes.STRING,
    fabricante: DataTypes.STRING,
    preco: DataTypes.DECIMAL,
    ano: DataTypes.STRING,
    placa: DataTypes.STRING,
    km: DataTypes.INTEGER,
    cor: DataTypes.STRING,
    descricao: DataTypes.STRING,
});

export default Veiculo;