import { sequelize } from "../../database";
import { DataTypes, INTEGER } from "sequelize";
export const moboModel = sequelize.define("mobos", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  type: { type: DataTypes.STRING },
  manufacturer: { type: DataTypes.STRING },
  model: { type: DataTypes.STRING },

  platform: { type: DataTypes.STRING },
  socket: { type: DataTypes.STRING },
  chipset: { type: DataTypes.STRING },
  ram_type: { type: DataTypes.STRING },
  max_memory: { type: DataTypes.STRING },
  form_factor: { type: DataTypes.STRING },
  memory_speed_max: { type: DataTypes.INTEGER },
  lan_speed_max: { type: DataTypes.STRING },
  PCIe: { type: DataTypes.STRING },

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
