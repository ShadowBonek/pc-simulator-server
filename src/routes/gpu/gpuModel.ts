import { sequelize } from "../../database";
import { DataTypes, INTEGER } from "sequelize";
export const gpuModel = sequelize.define("gpus", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  type: { type: DataTypes.STRING },
  manufacturer: { type: DataTypes.STRING },
  model: { type: DataTypes.STRING },

  memory: { type: DataTypes.STRING },
  memory_type: { type: DataTypes.STRING },
  gpu_boost_clock: { type: DataTypes.INTEGER },
  length: { type: DataTypes.INTEGER },
  benchmark: { type: DataTypes.INTEGER },
  launch_date: { type: DataTypes.STRING },

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
