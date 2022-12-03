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
exports.getComponents = exports.deleteComponent = exports.updateComponent = exports.getComponent = exports.createComponent = void 0;
const hddModel_1 = require("./hddModel");
const POST_1 = __importDefault(require("../../libs/CRUD/POST"));
const GET_1 = __importDefault(require("../../libs/CRUD/GET"));
const PUT_1 = __importDefault(require("../../libs/CRUD/PUT"));
const DELETE_1 = __importDefault(require("../../libs/CRUD/DELETE"));
const { Op } = require("sequelize");
// !POST
const createComponent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, POST_1.default)(hddModel_1.hddModel, req, res);
});
exports.createComponent = createComponent;
// !GET :id
const getComponent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, GET_1.default)(hddModel_1.hddModel, req, res);
});
exports.getComponent = getComponent;
//! PUT
const updateComponent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, PUT_1.default)(hddModel_1.hddModel, req, res);
});
exports.updateComponent = updateComponent;
// !DELETE
const deleteComponent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, DELETE_1.default)(hddModel_1.hddModel, req, res);
});
exports.deleteComponent = deleteComponent;
// !GET
const getComponents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    const page = parseInt((_a = req.query) === null || _a === void 0 ? void 0 : _a.page, 10) - 1 || 0;
    const limit = parseInt((_b = req.query) === null || _b === void 0 ? void 0 : _b.limit, 10) || 17;
    const search = ((_c = req.query) === null || _c === void 0 ? void 0 : _c.search) || "";
    const manufacturer = ((_d = req.query) === null || _d === void 0 ? void 0 : _d.manufacturer) || "";
    const available = ((_e = req.query) === null || _e === void 0 ? void 0 : _e.available) || "";
    const gte = ((_f = req.query) === null || _f === void 0 ? void 0 : _f.gte) || 0;
    const lte = ((_g = req.query) === null || _g === void 0 ? void 0 : _g.lte) || 9999999;
    const sort = ((_h = req.query) === null || _h === void 0 ? void 0 : _h.sort) || "";
    //!Component
    const capacity = ((_j = req.query) === null || _j === void 0 ? void 0 : _j.capacity) || "";
    const rpm = ((_k = req.query) === null || _k === void 0 ? void 0 : _k.rpm) || "";
    const cache = ((_l = req.query) === null || _l === void 0 ? void 0 : _l.cache) || "";
    const interfaceQ = ((_m = req.query) === null || _m === void 0 ? void 0 : _m.interface) || "";
    const form_factor = ((_o = req.query) === null || _o === void 0 ? void 0 : _o.form_factor) || "";
    console.log(req.query);
    try {
        const components = yield hddModel_1.hddModel.findAndCountAll({
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
                        rpm: rpm === ""
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
    }
    catch (error) {
        console.log(error);
        res.json(error);
    }
});
exports.getComponents = getComponents;
