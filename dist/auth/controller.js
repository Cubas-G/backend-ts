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
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const exceptions_1 = require("./exceptions");
const repository_1 = __importDefault(require("./repository"));
const validations_1 = __importDefault(require("./validations"));
const register = (data) => __awaiter(void 0, void 0, void 0, function* () {
    validations_1.default.validateRegisterInput(data);
    return yield repository_1.default.register(data);
});
const login = (data) => __awaiter(void 0, void 0, void 0, function* () {
    validations_1.default.validateLoginInput(data);
    const user = yield repository_1.default.findUserByUserName(data.username);
    if (!user)
        throw new exceptions_1.AuthException('Invalid credentials');
    const passwordIsValid = yield bcrypt_1.default.compare(data.password, String(user.password));
    if (!passwordIsValid)
        throw new exceptions_1.AuthException('Invalid credentials');
    const token = generateToken(user);
    yield repository_1.default.storeUserToken(data.username, token);
    user.token = token;
    return user;
});
const generateToken = (user) => {
    return jsonwebtoken_1.default.sign({ id: user.id }, config_1.default.secret, {
        expiresIn: 600000000
    });
};
exports.default = {
    register,
    login
};
