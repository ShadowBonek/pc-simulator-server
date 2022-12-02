import { RequestHandler } from "express";
import { powerModel } from "./powerModel";
import POST from "../../libs/CRUD/POST";
import GET from "../../libs/CRUD/GET";
import PUT from "../../libs/CRUD/PUT";
import DELETE from "../../libs/CRUD/DELETE";
const { Op } = require("sequelize");
// !POST
export const createComponent: RequestHandler = async (req: any, res) => {
  POST(powerModel, req, res);
};
// !GET :id
export const getComponent: RequestHandler = async (req, res) => {
  GET(powerModel, req, res);
};
//! PUT
export const updateComponent: RequestHandler = async (req: any, res) => {
  PUT(powerModel, req, res);
};
// !DELETE
export const deleteComponent: RequestHandler = async (req, res) => {
  DELETE(powerModel, req, res);
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
  const capacity = req.query?.capacity || "";
  const efficiency_rating = req.query?.efficiency_rating || "";
  const wattage = req.query?.wattage || "";
  const form_factor = req.query?.form_factor || "";
  const modular = req.query?.modular || "";

  console.log(req.query);
  // !Delete accents
  function diacriticSensitiveRegex(string = "") {
    return string
      .replace(/a/g, "[a,á,à,ä]")
      .replace(/e/g, "[e,é,ë]")
      .replace(/i/g, "[i,í,ï]")
      .replace(/o/g, "[o,ó,ö,ò]")
      .replace(/u/g, "[u,ü,ú,ù]");
  }
  try {
    const components = await powerModel.findAndCountAll({
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
        //   { capacity: { [Op.like]: "%" + capacity + "%" } },
          {
            efficiency_rating:
              efficiency_rating === "" ? { [Op.like]: "%" + efficiency_rating + "%" } : efficiency_rating,
          },
          {
            wattage:
              wattage === ""
                ? {
                    [Op.and]: {
                      [Op.gte]: 0,
                      [Op.lte]: 3000,
                    },
                  }
                : wattage,
          },
          {
            form_factor: form_factor === "" ? { [Op.like]: "%" + form_factor + "%" } : form_factor,
          },
          { manufacturer: { [Op.like]: "%" + manufacturer + "%" } },
          //!Required
          { modular: { [Op.like]: "%" + modular + "%" } },
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
