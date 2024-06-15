"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckAvaiableRoutes = void 0;
const express_1 = require("express");
const checkAvaiable_controller_1 = require("./checkAvaiable.controller");
const _ = (0, express_1.Router)();
// controller
// routes
_.get("/", checkAvaiable_controller_1.checkAvailableController);
exports.CheckAvaiableRoutes = _;
