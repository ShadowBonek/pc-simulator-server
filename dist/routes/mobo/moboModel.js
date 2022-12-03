"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moboModel = void 0;
const database_1 = require("../../database");
const sequelize_1 = require("sequelize");
exports.moboModel = database_1.sequelize.define("mobos", {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    type: { type: sequelize_1.DataTypes.STRING },
    manufacturer: { type: sequelize_1.DataTypes.STRING },
    model: { type: sequelize_1.DataTypes.STRING },
    platform: { type: sequelize_1.DataTypes.STRING },
    socket: { type: sequelize_1.DataTypes.STRING },
    chipset: { type: sequelize_1.DataTypes.STRING },
    ram_type: { type: sequelize_1.DataTypes.STRING },
    max_memory: { type: sequelize_1.DataTypes.STRING },
    form_factor: { type: sequelize_1.DataTypes.STRING },
    memory_speed_max: { type: sequelize_1.DataTypes.INTEGER },
    lan_speed_max: { type: sequelize_1.DataTypes.STRING },
    PCIe: { type: sequelize_1.DataTypes.STRING },
    imageM: { type: sequelize_1.DataTypes.STRING },
    imageS: { type: sequelize_1.DataTypes.STRING },
    //   specifications: [],
    price: { type: sequelize_1.DataTypes.INTEGER },
    power: { type: sequelize_1.DataTypes.INTEGER },
    quantity: { type: sequelize_1.DataTypes.INTEGER },
    error: { type: sequelize_1.DataTypes.BOOLEAN },
    warning: { type: sequelize_1.DataTypes.STRING },
    available: { type: sequelize_1.DataTypes.STRING },
});
