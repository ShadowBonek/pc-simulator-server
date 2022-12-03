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
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function DELETE(model, req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // !Find by :id
            const componentFound = yield model.findByPk(req.params.id);
            if (!componentFound)
                return res.status(204).json();
            // !Path to delete
            const pathDelete = path_1.default.join(__dirname, `../../../public/${req.query.component}`);
            // !Delete query
            yield model.destroy({
                where: {
                    id: req.params.id,
                },
            });
            // !Delete images
            if (fs_1.default.existsSync(`${pathDelete}/${componentFound.imageM}`) && componentFound.imageM !== "") {
                fs_1.default.unlinkSync(`${pathDelete}/${componentFound.imageM}`);
                console.log("ImageM deleted!");
            }
            if (fs_1.default.existsSync(`${pathDelete}/${componentFound.imageS}`) && componentFound.imageS !== "") {
                fs_1.default.unlinkSync(`${pathDelete}/${componentFound.imageS}`);
                console.log("ImageS deleted!");
            }
            return res.status(204).json();
        }
        catch (error) {
            console.log(error);
            return res.status(400).json(error);
        }
    });
}
exports.default = DELETE;
