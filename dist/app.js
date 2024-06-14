"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./app/routes"));
const notFound_1 = __importDefault(require("./app/middleware/notFound"));
const GlobalErrorHandle_1 = __importDefault(require("./app/middleware/GlobalErrorHandle"));
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(routes_1.default);
app.use(GlobalErrorHandle_1.default);
app.use(notFound_1.default);
exports.default = app;
