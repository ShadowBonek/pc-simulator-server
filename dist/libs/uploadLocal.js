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
exports.uploadLocal = void 0;
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const crypto_1 = require("crypto");
const fs_1 = __importDefault(require("fs"));
const uploadLocal = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    function removeNonAplhaNumeric(str) {
        return str.replace(/[\W_]/g, "").toLowerCase();
    }
    // !Name
    let model = removeNonAplhaNumeric(`${req.body.model}`);
    let random = (0, crypto_1.randomBytes)(6).toString("hex");
    const pathSave = path_1.default.join(__dirname, `../../public/${req.body.type}/`);
    // !Create directory
    fs_1.default.access(pathSave, (error) => {
        // To check if the given directory
        // already exists or not
        if (error) {
            // If current directory does not exist
            // then create it
            fs_1.default.mkdir(pathSave, (error) => {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log("New Directory created successfully !!");
                }
            });
        }
        else {
            console.log("Given Directory already exists !!");
        }
    });
    if (req.files.length > 0) {
        yield (0, sharp_1.default)((_a = req.files) === null || _a === void 0 ? void 0 : _a[0].buffer)
            .resize(250)
            .webp()
            .toFile(`${pathSave}${model}-${250}px-${random}.webp`)
            .then(() => {
            req.body.imageS = `${model}-${250}px-${random}.webp`;
            console.log("Img S complete!!");
        });
        yield (0, sharp_1.default)((_b = req.files) === null || _b === void 0 ? void 0 : _b[0].buffer)
            .resize(800)
            .webp()
            .toFile(`${pathSave}${model}-${800}px-${random}.webp`)
            .then(() => {
            req.body.imageM = `${model}-${800}px-${random}.webp`;
            console.log("Img M complete!!");
        });
        console.log("Sending to controller!");
        next();
    }
    else {
        req.body.imageM = "";
        req.body.imageS = "";
        next();
    }
});
exports.uploadLocal = uploadLocal;
