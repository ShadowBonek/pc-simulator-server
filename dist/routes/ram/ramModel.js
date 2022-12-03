"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ramModel = void 0;
const database_1 = require("../../database");
const sequelize_1 = require("sequelize");
exports.ramModel = database_1.sequelize.define("rams", {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    type: { type: sequelize_1.DataTypes.STRING },
    manufacturer: { type: sequelize_1.DataTypes.STRING },
    model: { type: sequelize_1.DataTypes.STRING },
    memory_size: { type: sequelize_1.DataTypes.STRING },
    speed: { type: sequelize_1.DataTypes.STRING },
    ram_type: { type: sequelize_1.DataTypes.STRING },
    CAS_latency: { type: sequelize_1.DataTypes.INTEGER },
    timing: { type: sequelize_1.DataTypes.STRING },
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
