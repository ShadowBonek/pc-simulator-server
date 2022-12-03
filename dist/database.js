"use strict";
// import mongoose, { ConnectOptions } from "mongoose";
// // * Variables de entorno
// import config from "./config";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseInit = exports.sequelize = void 0;
// const startServerDb = async () => {
//   try {
//     const db = await mongoose.connect(
//       `mongodb://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.MONGO_HOST}:${config.MONGO_PORT}/${config.MONGO_DATABASE}?authSource=admin`
//     );
//     console.log("database is connected", db.connection.name);
//   } catch (error) {
//     console.log(error);
//   }
// };
// startServerDb();
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize("pc-simulator", "root", "", {
    host: "localhost",
    dialect: "mariadb",
});
// !Db connection
function databaseInit() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.sequelize.authenticate();
            console.log("Connection has been established successfully.");
            yield exports.sequelize.sync();
        }
        catch (error) {
            console.error("Unable to connect to the database:", error);
        }
    });
}
exports.databaseInit = databaseInit;
