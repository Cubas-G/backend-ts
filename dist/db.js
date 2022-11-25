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
exports.connectDB = exports.products = void 0;
const ulid_1 = require("ulid");
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config"));
exports.products = [
    {
        id: (0, ulid_1.ulid)(),
        name: "computadora",
        price: 1000
    },
    {
        id: (0, ulid_1.ulid)(),
        name: "teclado rbg",
        price: 100
    }
];
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(`mongodb+srv://${config_1.default.db.username}:${config_1.default.db.password}@${config_1.default.db.host}/test?retryWrites=true&w=majority`);
        console.log('Conected to mongodb');
    }
    catch (error) {
        console.log('error de base de datos', error);
    }
});
exports.connectDB = connectDB;
