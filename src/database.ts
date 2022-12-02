// import mongoose, { ConnectOptions } from "mongoose";
// // * Variables de entorno
// import config from "./config";

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
import { Sequelize } from "sequelize";
export const sequelize = new Sequelize("pc-simulator", "root", "", {
  host: "localhost",
  dialect: "mariadb",
});
// !Db connection
export async function databaseInit() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
