import { DataTypes } from "sequelize";
import { conexao } from "../database.js";

<<<<<<< HEAD
const Viloes = conexao.define("Viloes", {
=======
const Vilao = conexao.define("Vilao", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
>>>>>>> e3b05452b82ea0ba8bb493f4d3ac623b5178def4
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
<<<<<<< HEAD
});

export { Viloes };
=======
},
    {
        freezeTableName: true
    }
);

export { Vilao };
>>>>>>> e3b05452b82ea0ba8bb493f4d3ac623b5178def4
