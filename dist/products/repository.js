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
Object.defineProperty(exports, "__esModule", { value: true });
const ulid_1 = require("ulid");
const models_1 = require("./models");
const list = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.Product.find();
});
const store = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const id = (0, ulid_1.ulid)();
    const categories = data.categories.join();
    const product = new models_1.Product({ name: data.name, price: data.price, id, categories });
    yield product.save();
    return product;
});
const getOne = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.Product.findOne({ id });
});
const destroy = () => __awaiter(void 0, void 0, void 0, function* () {
    return {};
});
exports.default = {
    list,
    store,
    getOne,
    delete: destroy
};
