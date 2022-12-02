import { sequelize } from "../../database";
import { DataTypes } from "sequelize";
export const hddModel = sequelize.define("hdds", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  type: { type: DataTypes.STRING },
  manufacturer: { type: DataTypes.STRING },
  model: { type: DataTypes.STRING },

  capacity: { type: DataTypes.STRING },
  rpm: { type: DataTypes.INTEGER },
  cache: { type: DataTypes.STRING },
  interface: { type: DataTypes.STRING },
  form_factor: { type: DataTypes.STRING },

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
