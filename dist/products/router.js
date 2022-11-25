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
const middlewares_1 = require("../auth/middlewares");
const controller_1 = __importDefault(require("./controller"));
const router = (0, express_1.Router)();
router.get("/", middlewares_1.requireAuth, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const productos = yield controller_1.default.list();
    res.json(productos);
}));
router.post("/", middlewares_1.requireAuth, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield controller_1.default.store(req.body);
        res.status(201).json(product);
    }
    catch (error) {
        res.json({
            message: error
        });
    }
}));
router.get("/:id", middlewares_1.requireAuth, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const product = yield controller_1.default.getOne(id);
        res.json(product);
    }
    catch (error) {
        res.json({
            message: error.message
        });
    }
}));
router.delete("/:id", middlewares_1.requireAuth, (req, res, next) => {
    const { id } = req.params;
    // let myproducts = products.filter(item => item.id !== id);
    res.json({});
});
exports.default = router;
