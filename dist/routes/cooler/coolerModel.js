"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coolerModel = void 0;
const database_1 = require("../../database");
const sequelize_1 = require("sequelize");
exports.coolerModel = database_1.sequelize.define("coolers", {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    type: { type: sequelize_1.DataTypes.STRING },
    manufacturer: { type: sequelize_1.DataTypes.STRING },
    model: { type: sequelize_1.DataTypes.STRING },
    compatibility: { type: sequelize_1.DataTypes.STRING },
    cooler_type: { type: sequelize_1.DataTypes.STRING },
    noise_level: { type: sequelize_1.DataTypes.STRING },
    fans: { type: sequelize_1.DataTypes.INTEGER },
    fans_size: { type: sequelize_1.DataTypes.INTEGER },
    imageM: { type: sequelize_1.DataTypes.STRING },
    imageS: { type: sequelize_1.DataTypes.STRING },
    //     specifications: [],
    price: { type: sequelize_1.DataTypes.INTEGER },
    power: { type: sequelize_1.DataTypes.INTEGER },
    quantity: { type: sequelize_1.DataTypes.INTEGER },
    error: { type: sequelize_1.DataTypes.BOOLEAN },
    warning: { type: sequelize_1.DataTypes.STRING },
    available: { type: sequelize_1.DataTypes.STRING },
});
