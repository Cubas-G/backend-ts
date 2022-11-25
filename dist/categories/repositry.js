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
    return yield models_1.Category.find();
});
const store = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const id = (0, ulid_1.ulid)();
    const model = new models_1.Category({ id, name: data.name, description: data.description, slug: data.slug });
    yield model.save();
    return model;
});
const getOne = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.Category.findOne({ id });
});
const deleteItem = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.Category.deleteOne({ id });
});
const update = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const model = yield models_1.Category.findOneAndUpdate({ id }, data, { new: true });
    return model;
});
exports.default = {
    list,
    store,
    getOne,
    delete: deleteItem,
    update
};
