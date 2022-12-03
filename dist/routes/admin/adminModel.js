"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminModel = void 0;
const database_1 = require("../../database");
const sequelize_1 = require("sequelize");
exports.adminModel = database_1.sequelize.define("admins", {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    role: { type: sequelize_1.DataTypes.STRING },
    user: { type: sequelize_1.DataTypes.STRING },
    password: { type: sequelize_1.DataTypes.STRING },
});
