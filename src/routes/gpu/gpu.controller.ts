import { RequestHandler } from "express";
import { gpuModel } from "./gpuModel";
import POST from "../../libs/CRUD/POST";
import GET from "../../libs/CRUD/GET";
import PUT from "../../libs/CRUD/PUT";
import DELETE from "../../libs/CRUD/DELETE";
const { Op } = require("sequelize");
// !POST
export const createComponent: RequestHandler = async (req: any, res) => {
  POST(gpuModel, req, res);
};
// !GET :id
export const getComponent: RequestHandler = async (req, res) => {
  GET(gpuModel, req, res);
};
//! PUT
export const updateComponent: RequestHandler = async (req: any, res) => {
  PUT(gpuModel, req, res);
};
// !DELETE
export const deleteComponent: RequestHandler = async (req, res) => {
  DELETE(gpuModel, req, res);
};
// !GET
export const getComponents: RequestHandler = async (req: any, res) => {
  const page = parseInt(req.query?.page, 10) - 1 || 0;
  const limit = parseInt(req.query?.limit, 10) || 17;
  const search = req.query?.search || "";
  const manufacturer = req.query?.manufacturer || "";
  const available = req.query?.available || "";
  const gte = req.query?.gte || 0;
  const lte = req.query?.lte || 9999999;
  const sort = req.query?.sort || "";
  //!Component
  const memory = req.query?.memory || "";
  const memory_type = req.query?.memory_type || "";

  console.log(req.query);

  try {
    const components = await gpuModel.findAndCountAll({
      where: {
        [Op.or]: [
          { model: { [Op.like]: "%" + search + "%" } },
          { manufacturer: { [Op.like]: "%" + search + "%" } },
        ],
        price: {
          [Op.and]: {
            [Op.gte]: gte,
            [Op.lte]: lte,
          },
        },
        [Op.and]: [
          { manufacturer: { [Op.like]: "%" + manufacturer + "%" } },
          { memory: memory === "" ? { [Op.like]: "%" + memory + "%" } : memory },
          { memory_type: memory_type === "" ? { [Op.like]: "%" + memory_type + "%" } : memory_type },

          //!Required
          { available: { [Op.like]: "%" + available + "%" } },
        ],
      },
      order: sort === "" ? [["createdAt", "desc"]] : [["price", sort]],
      offset: page * limit,
      limit: limit,
    });
    return res.json(components);
    //     }
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};
