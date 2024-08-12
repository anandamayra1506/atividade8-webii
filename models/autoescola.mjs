import sequelize from "../database/mysql.mjs";
import { DataTypes } from "sequelize";

const Autoescola = sequelize.define('Autoescola', {
    nome: DataTypes.STRING,
    endereco: DataTypes.STRING,
    telefone: DataTypes.STRING,
    site: DataTypes.STRING,
    email: DataTypes.STRING
});

export default Autoescola;