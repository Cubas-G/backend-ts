"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("./auth/router"));
const router_2 = __importDefault(require("./products/router"));
const router_3 = __importDefault(require("./categories/router"));
const router_4 = __importDefault(require("./recipes/router"));
const router_5 = __importDefault(require("./creators/router"));
const router = (app) => {
    app.get("/", (req, res) => {
        res.json({
            message: "its working"
        });
    });
    app.use("/auth", router_1.default);
    app.use("/products", router_2.default);
    app.use("/categories", router_3.default);
    app.use("/recipes", router_4.default);
    app.use("/creators", router_5.default);
};
exports.default = router;
