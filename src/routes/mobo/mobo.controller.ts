import { RequestHandler } from "express";
import { moboModel } from "./moboModel";
import POST from "../../libs/CRUD/POST";
import GET from "../../libs/CRUD/GET";
import PUT from "../../libs/CRUD/PUT";
import DELETE from "../../libs/CRUD/DELETE";
const { Op } = require("sequelize");
// !POST
export const createComponent: RequestHandler = async (req: any, res) => {
  POST(moboModel, req, res);
};
//! GET :id
export const getComponent: RequestHandler = async (req, res) => {
  GET(moboModel, req, res);
};
//! PUT
export const updateComponent: RequestHandler = async (req: any, res) => {
  PUT(moboModel, req, res);
};
//! DELETE
export const deleteComponent: RequestHandler = async (req, res) => {
  DELETE(moboModel, req, res);
};

// !GET ALL
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
  const platform = req.query?.platform || "";
  const ram_type = req.query?.ram_type || "";
  const socket = req.query?.socket || "";
  const lan_speed_max = req.query?.lan_speed_max || "";
  const form_factor = req.query?.form_factor || "";
  const PCIe = req.query?.PCIe || "";
  console.log(req.query);
  // !Delete accents

  try {
    const components = await moboModel.findAndCountAll({
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
          { platform: { [Op.like]: "%" + platform + "%" } },
          { ram_type: { [Op.like]: "%" + ram_type + "%" } },
          { socket: { [Op.like]: "%" + socket + "%" } },
          { lan_speed_max: { [Op.like]: "%" + lan_speed_max + "%" } },
          { form_factor: { [Op.like]: "%" + form_factor + "%" } },
          { PCIe: { [Op.like]: "%" + PCIe + "%" } },

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
