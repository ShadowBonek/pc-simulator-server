import { sequelize } from "../../database";
import { DataTypes } from "sequelize";
export const cpuModel = sequelize.define("cpus", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  type: { type: DataTypes.STRING },
  manufacturer: { type: DataTypes.STRING },
  model: { type: DataTypes.STRING },

  total_cores: { type: DataTypes.INTEGER },
  number_of_performance_cores: { type: DataTypes.INTEGER },
  number_of_efficient_cores: { type: DataTypes.INTEGER },
  total_threads: { type: DataTypes.INTEGER },
  boost_clock: { type: DataTypes.INTEGER },
  cache: { type: DataTypes.INTEGER },
  integrated_graphics: { type: DataTypes.STRING },
  socket: { type: DataTypes.STRING },
  architecture: { type: DataTypes.STRING },
  launch_date: { type: DataTypes.STRING },
  stock_cooler: { type: DataTypes.STRING },

  imageM: { type: DataTypes.STRING },
  imageS: { type: DataTypes.STRING },
  //   specifications: { type: DataTypes.ARRAY(DataTypes.STRING) },
  price: { type: DataTypes.FLOAT },
  power: { type: DataTypes.INTEGER },
  quantity: { type: DataTypes.INTEGER },
  error: { type: DataTypes.BOOLEAN },
  warning: { type: DataTypes.STRING },
  available: { type: DataTypes.STRING },
  keywords: { type: DataTypes.STRING },
});
