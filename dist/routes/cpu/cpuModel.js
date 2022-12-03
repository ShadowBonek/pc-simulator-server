"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cpuModel = void 0;
const database_1 = require("../../database");
const sequelize_1 = require("sequelize");
exports.cpuModel = database_1.sequelize.define("cpus", {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    type: { type: sequelize_1.DataTypes.STRING },
    manufacturer: { type: sequelize_1.DataTypes.STRING },
    model: { type: sequelize_1.DataTypes.STRING },
    total_cores: { type: sequelize_1.DataTypes.INTEGER },
    number_of_performance_cores: { type: sequelize_1.DataTypes.INTEGER },
    number_of_efficient_cores: { type: sequelize_1.DataTypes.INTEGER },
    total_threads: { type: sequelize_1.DataTypes.INTEGER },
    boost_clock: { type: sequelize_1.DataTypes.INTEGER },
    cache: { type: sequelize_1.DataTypes.INTEGER },
    integrated_graphics: { type: sequelize_1.DataTypes.STRING },
    socket: { type: sequelize_1.DataTypes.STRING },
    architecture: { type: sequelize_1.DataTypes.STRING },
    launch_date: { type: sequelize_1.DataTypes.STRING },
    stock_cooler: { type: sequelize_1.DataTypes.STRING },
    imageM: { type: sequelize_1.DataTypes.STRING },
    imageS: { type: sequelize_1.DataTypes.STRING },
    //   specifications: { type: DataTypes.ARRAY(DataTypes.STRING) },
    price: { type: sequelize_1.DataTypes.FLOAT },
    power: { type: sequelize_1.DataTypes.INTEGER },
    quantity: { type: sequelize_1.DataTypes.INTEGER },
    error: { type: sequelize_1.DataTypes.BOOLEAN },
    warning: { type: sequelize_1.DataTypes.STRING },
    available: { type: sequelize_1.DataTypes.STRING },
    keywords: { type: sequelize_1.DataTypes.STRING },
});
