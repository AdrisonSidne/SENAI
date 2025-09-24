import { DataTypes } from "sequelize";
import { conexao } from "../database.js";

const Viloes = conexao.define("Viloes", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  poder: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vitorias: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  derrotas: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export { Viloes };
