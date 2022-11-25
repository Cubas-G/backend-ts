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
const ulid_1 = require("ulid");
const bcrypt_1 = __importDefault(require("bcrypt"));
const models_1 = require("./models");
const register = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const id = (0, ulid_1.ulid)();
    const password = yield bcrypt_1.default.hash(data.password, 10);
    const user = new models_1.User(Object.assign(Object.assign({}, data), { id, password }));
    yield user.save();
    return user;
});
const findUserByUserName = (username) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield models_1.User.findOne({ username });
    return user;
});
const findUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield models_1.User.findOne({ id });
    return user;
});
const storeUserToken = (username, token) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield findUserByUserName(username);
    if (user) {
        user.token = token;
        yield user.save();
    }
    return user;
});
exports.default = {
    register,
    findUserByUserName,
    storeUserToken,
    findUserById,
};
