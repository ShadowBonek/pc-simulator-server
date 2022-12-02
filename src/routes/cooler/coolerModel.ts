import { sequelize } from "../../database";
import { DataTypes } from "sequelize";
export const coolerModel = sequelize.define("coolers", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  type: { type: DataTypes.STRING },
  manufacturer: { type: DataTypes.STRING },
  model: { type: DataTypes.STRING },

  compatibility: { type: DataTypes.STRING },
  cooler_type: { type: DataTypes.STRING },
  noise_level: { type: DataTypes.STRING },
  fans: { type: DataTypes.INTEGER },
  fans_size: { type: DataTypes.INTEGER },

  imageM: { type: DataTypes.STRING },
  imageS: { type: DataTypes.STRING },
  //     specifications: [],
  price: { type: DataTypes.INTEGER },
  power: { type: DataTypes.INTEGER },
  quantity: { type: DataTypes.INTEGER },
  error: { type: DataTypes.BOOLEAN },
  warning: { type: DataTypes.STRING },
  available: { type: DataTypes.STRING },
});
