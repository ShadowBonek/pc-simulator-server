"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hddModel = void 0;
const database_1 = require("../../database");
const sequelize_1 = require("sequelize");
exports.hddModel = database_1.sequelize.define("hdds", {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    type: { type: sequelize_1.DataTypes.STRING },
    manufacturer: { type: sequelize_1.DataTypes.STRING },
    model: { type: sequelize_1.DataTypes.STRING },
    capacity: { type: sequelize_1.DataTypes.STRING },
    rpm: { type: sequelize_1.DataTypes.INTEGER },
    cache: { type: sequelize_1.DataTypes.STRING },
    interface: { type: sequelize_1.DataTypes.STRING },
    form_factor: { type: sequelize_1.DataTypes.STRING },
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
