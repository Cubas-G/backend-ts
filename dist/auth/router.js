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
const express_1 = require("express");
const controller_1 = __importDefault(require("./controller"));
const router = (0, express_1.Router)();
router.post("/register", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield controller_1.default.register(req.body);
        res.json(user);
    }
    catch (error) {
        if (error.name === 'MongoServerError' && error.code === 11000) {
            res.status(400).json({
                message: "Username already exists"
            });
            return;
        }
        res.status(400).json({
            message: `${error.name}: ${error.message}`
        });
    }
}));
router.post("/login", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield controller_1.default.login(req.body);
        res.json(user);
    }
    catch (error) {
        res.status(400).json({
            message: `${error.name}: ${error.message}`
        });
    }
}));
exports.default = router;
