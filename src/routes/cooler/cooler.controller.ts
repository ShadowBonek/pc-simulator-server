import { RequestHandler } from "express";
import { coolerModel } from "./coolerModel";
import POST from "../../libs/CRUD/POST";
import GET from "../../libs/CRUD/GET";
import PUT from "../../libs/CRUD/PUT";
import DELETE from "../../libs/CRUD/DELETE";
const { Op } = require("sequelize");
// !POST
export const createComponent: RequestHandler = async (req: any, res) => {
  POST(coolerModel, req, res);
};
// !GET :id
export const getComponent: RequestHandler = async (req, res) => {
  GET(coolerModel, req, res);
};

//! PUT
export const updateComponent: RequestHandler = async (req: any, res) => {
  PUT(coolerModel, req, res);
};
// !DELETE
export const deleteComponent: RequestHandler = async (req, res) => {
  DELETE(coolerModel, req, res);
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
  const cooler_type = req.query?.cooler_type || "";
  const socket = req.query?.socket || "";
  const fans = req.query?.fans || "";
  const fans_size = req.query?.fans_size || "";

  console.log(req.query);

  try {
    const components = await coolerModel.findAndCountAll({
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
          { cooler_type: { [Op.like]: "%" + cooler_type + "%" } },
          { compatibility: { [Op.like]: "%" + socket + "%" } },
          {
            fans:
              fans === ""
                ? {
                    [Op.and]: {
                      [Op.gte]: 0,
                      [Op.lte]: 10,
                    },
                  }
                : fans,
          },
          {
            fans_size:
              fans_size === ""
                ? {
                    [Op.and]: {
                      [Op.gte]: 0,
                      [Op.lte]: 140,
                    },
                  }
                : fans_size,
          },
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
