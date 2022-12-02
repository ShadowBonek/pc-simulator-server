import { sequelize } from "../../database";
import { DataTypes } from "sequelize";
export const powerModel = sequelize.define("powers", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  type: { type: DataTypes.STRING },
  manufacturer: { type: DataTypes.STRING },
  model: { type: DataTypes.STRING },

  efficiency_rating: { type: DataTypes.STRING },
  wattage: { type: DataTypes.INTEGER },
  form_factor: { type: DataTypes.STRING },
  modular: { type: DataTypes.STRING },

  imageM: { type: DataTypes.STRING },
  imageS: { type: DataTypes.STRING },
  //   specifications: [],
  price: { type: DataTypes.INTEGER },
  power: { type: DataTypes.INTEGER },
  quantity: { type: DataTypes.INTEGER },
  error: { type: DataTypes.BOOLEAN },
  warning: { type: DataTypes.STRING },
  available: { type: DataTypes.STRING },
});
