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
exports.requireAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const exceptions_1 = require("./exceptions");
const repository_1 = __importDefault(require("./repository"));
const requireAuth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        validateHeader(req);
        yield validateToken(req);
    }
    catch (error) {
        res.status(401).json({
            message: error.message
        });
        return;
    }
    next();
});
exports.requireAuth = requireAuth;
const validateHeader = (req) => {
    if (!req.headers.authorization) {
        throw new exceptions_1.AuthException('Missing authorization header');
    }
};
const validateToken = (req) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const token = (_b = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization) === null || _b === void 0 ? void 0 : _b.split(' ')[1];
    if (!token)
        throw new exceptions_1.AuthException('Missing token');
    const decodedToken = jsonwebtoken_1.default.verify(token, config_1.default.secret);
    if (typeof decodedToken == 'object') {
        const user = yield repository_1.default.findUserById(decodedToken.id);
        req.body.user = user;
    }
});
