"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacilityRoutes = void 0;
const express_1 = require("express");
const _ = (0, express_1.Router)();
// controller
const facility_controller_1 = require("./facility.controller");
const ValidateDataSchema_1 = require("../../middleware/ValidateDataSchema");
const facility_validation_1 = require("./facility.validation");
const auth_1 = __importDefault(require("../../middleware/auth/auth"));
//  routes
_.get("/", facility_controller_1.getFacilityController);
_.post("/", (0, ValidateDataSchema_1.ValidateDataSchema)(facility_validation_1.createFacilitySchema), (0, auth_1.default)("admin"), facility_controller_1.createFacilityController);
_.put("/:id", (0, ValidateDataSchema_1.ValidateDataSchema)(facility_validation_1.updateFacilitySchema), (0, auth_1.default)("admin"), facility_controller_1.updateFacilityController);
_.delete("/:id", (0, auth_1.default)("admin"), facility_controller_1.deleteFacilityController);
exports.FacilityRoutes = _;
