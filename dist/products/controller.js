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
const repository_1 = __importDefault(require("./repository"));
const list = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield repository_1.default.list();
});
const store = (data) => __awaiter(void 0, void 0, void 0, function* () {
    if (!data.name)
        throw new Error("Property name is missing");
    const product = yield repository_1.default.store(data);
    return product;
});
const getOne = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield repository_1.default.getOne(id);
    if (!product)
        throw new Error("Product not found");
    return product;
});
exports.default = {
    list,
    store,
    getOne
};
