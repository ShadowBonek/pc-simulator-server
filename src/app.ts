import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
// * Variables de entorno
import config from "./config";
// *Rutas
import moboRoutes from "./routes/mobo/mobo.routes";
import cpuRoutes from "./routes/cpu/cpu.routes";
import ramRoutes from "./routes/ram/ram.routes";
import gpuRoutes from "./routes/gpu/gpu.routes";
import powerRoutes from "./routes/power/power.routes";
import caseRoutes from "./routes/case/case.routes";
import nvmeRoutes from "./routes/nvme/nvme.routes";
import ssdRoutes from "./routes/ssd/ssd.routes";
import hddRoutes from "./routes/hdd/hdd.routes";
import coolerRoutes from "./routes/cooler/cooler.routes";
import fanRoutes from "./routes/fan/fan.routes";
import adminRoutes from "./routes/admin/admin.routes";
import fs from "fs";
import { databaseInit } from "./database";
// import "./routes/cpu/cpuModel";
var clientURI = {
  origin: "*",
};
const app = express();
// !Database
databaseInit();

// !Create directory public
fs.access(path.join(__dirname, "../public"), (error) => {
  if (error) {
    fs.mkdir(path.join(__dirname, "../public"), (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("New Directory created successfully !!");
      }
    });
  } else {
    console.log("Given Directory already exists !!");
  }
});
app.set("port", config.PORT);
app.use(morgan("dev"));
app.use("/static", express.static(path.join(__dirname, "../public")));
app.use(cors(clientURI));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// !rutas

app.use(cpuRoutes);
app.use(moboRoutes);
app.use(ramRoutes);
app.use(gpuRoutes);
app.use(powerRoutes);
app.use(caseRoutes);
app.use(nvmeRoutes);
app.use(ssdRoutes);
app.use(hddRoutes);
app.use(coolerRoutes);
app.use(fanRoutes);
app.use(adminRoutes);
export default app;
