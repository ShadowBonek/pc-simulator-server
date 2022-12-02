import { sequelize } from "../../database";
import { DataTypes, INTEGER } from "sequelize";
export const caseModel = sequelize.define("cases", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  type: { type: DataTypes.STRING },
  manufacturer: { type: DataTypes.STRING },
  model: { type: DataTypes.STRING },

  form_factor: { type: DataTypes.STRING },
  PSU: { type: DataTypes.STRING },
  height: { type: DataTypes.INTEGER },
  length: { type: DataTypes.INTEGER },
  width: { type: DataTypes.INTEGER },

  imageM: { type: DataTypes.STRING },
  imageS: { type: DataTypes.STRING },
  // specifications: [],
  price: { type: DataTypes.INTEGER },
  power: { type: DataTypes.INTEGER },
  quantity: { type: DataTypes.INTEGER },
  error: { type: DataTypes.BOOLEAN },
  warning: { type: DataTypes.STRING },
  available: { type: DataTypes.STRING },
});
