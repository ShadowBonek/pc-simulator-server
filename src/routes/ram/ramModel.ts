import { sequelize } from "../../database";
import { DataTypes, INTEGER } from "sequelize";
export const ramModel = sequelize.define("rams", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  type: { type: DataTypes.STRING },
  manufacturer: { type: DataTypes.STRING },
  model: { type: DataTypes.STRING },

  memory_size: { type: DataTypes.STRING },
  speed: { type: DataTypes.STRING },
  ram_type: { type: DataTypes.STRING },
  CAS_latency: { type: DataTypes.INTEGER },
  timing: { type: DataTypes.STRING },

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
