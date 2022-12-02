import { RequestHandler } from "express";

import { cpuModel } from "./cpuModel";
import POST from "../../libs/CRUD/POST";
import GET from "../../libs/CRUD/GET";
import PUT from "../../libs/CRUD/PUT";
import DELETE from "../../libs/CRUD/DELETE";
const { Op } = require("sequelize");

// !POST
export const createComponent: RequestHandler = async (req: any, res) => {
  POST(cpuModel, req, res);
};
// !GET :id
export const getComponent: RequestHandler = async (req, res) => {
  GET(cpuModel, req, res);
};
//! PUT
export const updateComponent: RequestHandler = async (req: any, res) => {
  PUT(cpuModel, req, res);
};
// !DELETE
export const deleteComponent: RequestHandler = async (req, res) => {
  DELETE(cpuModel, req, res);
};
// !GET ALL
export const getComponents: RequestHandler = async (req: any, res) => {
  const page = parseInt(req.query?.page, 10) - 1 || 0;
  const limit = parseInt(req.query?.limit, 10) || 17;
  const search = req.query?.search || "";
  const manufacturer = req.query?.manufacturer || "";
  const available = req.query?.available || "";
  const gte_cores = req.query?.gte_cores || 0;
  const lte_cores = req.query?.lte_cores || 666;
  const gte = req.query?.gte || 0;
  const lte = req.query?.lte || 9999999;
  const sort = req.query?.sort || "";
  //!Component
  const socket = req.query?.socket || "";
  const integrated_graphics = req.query?.integrated_graphics || "";
  console.log(req.query);

  try {
    // !MariaDB
    const components = await cpuModel.findAndCountAll({
      where: {
        [Op.or]: [
          { model: { [Op.like]: "%" + search + "%" } },
          { keywords: { [Op.like]: "%" + search + "%" } },
          { manufacturer: { [Op.like]: "%" + search + "%" } },
        ],
        price: {
          [Op.and]: {
            [Op.gte]: gte,
            [Op.lte]: lte,
          },
        },
        total_cores: {
          [Op.and]: {
            [Op.lte]: lte_cores,
            [Op.gte]: gte_cores,
          },
        },
        [Op.and]: [
          { manufacturer: { [Op.like]: "%" + manufacturer + "%" } },
          { socket: { [Op.like]: "%" + socket + "%" } },
          { integrated_graphics: { [Op.like]: "%" + integrated_graphics + "%" } },
          //!Required
          { available: { [Op.like]: "%" + available + "%" } },
        ],
      },
      order: sort === "" ? [["createdAt", "desc"]] : [["price", sort]],
      offset: page * limit,
      limit: limit,
    });
    return res.json(components);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};
