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
    const list = yield controller_1.default.list();
    res.json({
        data: list,
        metadata: {
            nextPage: 2,
            currentPage: 1,
            perPage: 10
        }
    });
}));
router.post("/", middlewares_1.requireAuth, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const model = yield controller_1.default.store(req.body);
        res.status(201).json(model);
    }
    catch (error) {
        console.log("🚀 ~ file: router.ts ~ line 18 ~ router.post ~ error", error);
        if (error.name === 'CategoriesException') {
            return res.status(400).json({
                message: error.message
            });
        }
        res.status(500).json({
            message: error
        });
    }
}));
router.get("/:id", middlewares_1.requireAuth, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const model = yield controller_1.default.getOne(id);
        res.json(model);
    }
    catch (error) {
        console.log("🚀 ~ file: router.ts ~ line 38 ~ router.get ~ error", error);
        res.json({
            message: error.message
        });
    }
}));
router.delete("/:id", middlewares_1.requireAuth, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield controller_1.default.delete(id);
        res.status(204).json({});
    }
    catch (error) {
        if (error.name === 'CategoriesException') {
            return res.status(400).json({
                message: error.message
            });
        }
        if (error.message === 'Product not found') {
            return res.status(404).json({
                message: error.message
            });
        }
        return res.status(500).json({
            message: error.message
        });
    }
}));
router.patch("/:id", middlewares_1.requireAuth, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const model = yield controller_1.default.update(req.params.id, req.body);
        res.status(200).json(model);
    }
    catch (error) {
        console.log("🚀 ~ file: router.ts ~ line 18 ~ router.post ~ error", error);
        if (error.message === 'Product not found') {
            return res.status(404).json({
                message: error.message
            });
        }
        res.status(500).json({
            message: error
        });
    }
}));
exports.default = router;
