"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = require("express");
const _ = (0, express_1.Router)();
// controller
const auth_controller_1 = require("./auth.controller");
const ValidateDataSchema_1 = require("../../middleware/ValidateDataSchema");
const auth_validation_1 = require("./auth.validation");
//  routes
_.post("/signup", (0, ValidateDataSchema_1.ValidateDataSchema)(auth_validation_1.signupUserSchema), auth_controller_1.createUserController);
_.post("/login", (0, ValidateDataSchema_1.ValidateDataSchema)(auth_validation_1.loginUserValidationSchema), auth_controller_1.loginController);
exports.AuthRoutes = _;
