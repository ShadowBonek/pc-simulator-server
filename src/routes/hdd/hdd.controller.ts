import { RequestHandler } from "express";
import { hddModel } from "./hddModel";
import POST from "../../libs/CRUD/POST";
import GET from "../../libs/CRUD/GET";
import PUT from "../../libs/CRUD/PUT";
import DELETE from "../../libs/CRUD/DELETE";
const { Op } = require("sequelize");
// !POST
export const createComponent: RequestHandler = async (req: any, res) => {
  POST(hddModel, req, res);
};
// !GET :id
export const getComponent: RequestHandler = async (req, res) => {
  GET(hddModel, req, res);
};
//! PUT
export const updateComponent: RequestHandler = async (req: any, res) => {
  PUT(hddModel, req, res);
};
// !DELETE
export const deleteComponent: RequestHandler = async (req, res) => {
  DELETE(hddModel, req, res);
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
  const capacity = req.query?.capacity || "";
  const rpm = req.query?.rpm || "";
  const cache = req.query?.cache || "";
  const interfaceQ = req.query?.interface || "";
  const form_factor = req.query?.form_factor || "";

  console.log(req.query);

  try {
    const components = await hddModel.findAndCountAll({
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
          { capacity: { [Op.like]: "%" + capacity + "%" } },
          {
            rpm:
              rpm === ""
                ? {
                    [Op.and]: {
                      [Op.gte]: 0,
                      [Op.lte]: 100000,
                    },
                  }
                : rpm,
          },
          { cache: { [Op.like]: "%" + cache + "%" } },
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
