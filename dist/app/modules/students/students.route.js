"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsRoutes = void 0;
const express_1 = require("express");
const _ = (0, express_1.Router)();
_.get("/", (req, res) => {
    res.send("Hello World!");
});
exports.StudentsRoutes = _;
