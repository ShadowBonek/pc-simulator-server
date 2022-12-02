import { sequelize } from "../../database";
import { DataTypes } from "sequelize";
export const adminModel = sequelize.define("admins", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  role: { type: DataTypes.STRING },
  user: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
});
