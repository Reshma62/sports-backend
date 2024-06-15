"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRoutes = void 0;
const express_1 = require("express");
const _ = (0, express_1.Router)();
// controller
const booking_controller_1 = require("./booking.controller");
const auth_1 = __importDefault(require("../../middleware/auth/auth"));
const ValidateDataSchema_1 = require("../../middleware/ValidateDataSchema");
const booking_validation_1 = require("./booking.validation");
// routes
_.get("/", (req, res) => {
    res.send("Hello World!");
});
_.post("/", (0, ValidateDataSchema_1.ValidateDataSchema)(booking_validation_1.createBookingSchema), (0, auth_1.default)("user"), booking_controller_1.createBookingController);
exports.BookingRoutes = _;
