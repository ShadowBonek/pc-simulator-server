"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAdmin = void 0;
const adminModel_1 = require("./adminModel");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../config"));
// !POST
// export const createAdmin: RequestHandler = async (req: any, res) => {
//   let newAdmin = new Admin(req.body);
//   const savedAdmin = await newAdmin.save();
//   console.log("Saved Admin");
//   res.json(savedAdmin);
// };
// !CHECK
const checkAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    //   const admin: any = await Admin.findOne({ user: req.body.user });
    //   // !IF ADMIN DOESN'T EXIST
    //   if (admin === null) {
    //     return res.status(400).json();
    //   }
    //   // !IF PASSWORD IS INCORRECT
    //   if (admin.password !== req.body.password) {
    //     return res.status(400).json();
    //   }
    //   // !IF PASSWORD IS CORRECT
    //   const token: string = jwt.sign({ _id: admin?._id }, `${config.SECRET}`, {
    //     expiresIn: 60 * 60 * 24 * 30,
    //   });
    //   res.json({ token, id: admin._id });
    try {
        const admin = yield adminModel_1.adminModel.findOne({ where: { user: req.body.user } });
        // !IF ADMIN DOESN'T EXIST
        if (admin === null) {
            return res.status(400).json();
        }
        // !IF PASSWORD IS INCORRECT
        if (admin.password !== req.body.password) {
            return res.status(400).json();
        }
        // !IF PASSWORD IS CORRECT
        const token = jsonwebtoken_1.default.sign({ _id: admin === null || admin === void 0 ? void 0 : admin.id }, `${config_1.default.SECRET}`, {
            expiresIn: 60 * 60 * 24 * 30,
        });
        res.json({ token, id: admin.id });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json(error);
    }
});
exports.checkAdmin = checkAdmin;
// !GET :id
// export const getComponent: RequestHandler = async (req, res) => {
//   const id = req.params.id;
//   try {
//     const component = await Admin.findById(id);
//     return res.json(component);
//   } catch (error) {
//     return res.status(204).json();
//   }
// };
//! PUT
// export const updateComponent: RequestHandler = async (req: any, res) => {
//   const componentUpdated = await Admin.findByIdAndUpdate(req.body._id, req.body, {
//     new: true,
//   });
//   if (!componentUpdated) return res.status(204).json();
//   console.log("Updated component!");
//   return res.json(componentUpdated);
// };
// !DELETE
// export const deleteComponent: RequestHandler = async (req, res) => {
//   const componentFound: any = await Admin.findByIdAndDelete(req.params.id);
//   const pathDelete = path.join(__dirname, `../../../public/${req.query.component}`);
//   if (!componentFound) return res.status(204).json();
//   // !Delete previous image
//   try {
//     componentFound.imageM.map((i: any) => {
//       fs.unlinkSync(`${pathDelete}/${i}`);
//       console.log("File M deleted!");
//     });
//   } catch (err) {
//     console.error(err);
//   }
//   try {
//     componentFound.imageS.map((i: any) => {
//       fs.unlinkSync(`${pathDelete}/${i}`);
//       console.log("File S deleted!");
//     });
//   } catch (err) {
//     console.error(err);
//   }
//   return res.status(204).json();
// };
// !GET ALL
// export const getComponents: RequestHandler = async (req: any, res) => {
//   const page = parseInt(req.query?.page, 10) || 1;
//   const limit = parseInt(req.query?.limit, 10) || 17;
//   const search = req.query?.search || "";
//   const socket = req.query?.socket || "";
//   const manufacturer = req.query?.manufacturer || "";
//   const available = req.query?.available || "";
//   const gte_cores = req.query?.gte_cores || 0;
//   const lte_cores = req.query?.lte_cores || 666;
//   const gte = req.query?.gte || 0;
//   const lte = req.query?.lte || 9999999;
//   const sort = req.query?.sort || "";
//   console.log(req.query);
//   // !Delete accents
//   function diacriticSensitiveRegex(string = "") {
//     return string
//       .replace(/a/g, "[a,á,à,ä]")
//       .replace(/e/g, "[e,é,ë]")
//       .replace(/i/g, "[i,í,ï]")
//       .replace(/o/g, "[o,ó,ö,ò]")
//       .replace(/u/g, "[u,ü,ú,ù]");
//   }
//   try {
//     const components = await Admin.paginate(
//       {
//         $or: [
//           { model: { $regex: search, $options: "i" } },
//           //   { keywords: { $regex: search, $options: "i" } },
//           { manufacturer: { $regex: search, $options: "i" } },
//         ],
//         price: { $gte: gte, $lte: lte },
//         // total_cores: { $gte: gte_cores, $lte: lte_cores },
//         $and: [
//           { manufacturer: { $regex: manufacturer, $options: "i" } },
//           //   { socket: { $regex: socket, $options: "i" } },
//           //   { total_cores: { $regex: total_cores, $options: "i" } },
//           { available: { $regex: available, $options: "i" } },
//           //   { lan_speed_max: { $regex: lan_speed_max, $options: "i" } },
//         ],
//         // $orderby: { createdAt: -1 },
//       },
//       {
//         page,
//         limit,
//         sort: sort === "" ? { createdAt: "desc" } : { price: sort },
//       }
//     );
//     return res.json(components);
//     //     }
//   } catch (error) {
//     console.log(error);
//     res.json(error);
//   }
// };
