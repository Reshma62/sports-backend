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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFacilityService = exports.createFacilityService = void 0;
const facility_model_1 = require("./facility.model");
const createFacilityService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield facility_model_1.Facility.create(payload);
    return result;
});
exports.createFacilityService = createFacilityService;
const updateFacilityService = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const existsFacility = yield facility_model_1.Facility.findById(id);
    if (!existsFacility) {
        throw new Error("Facility does not exist");
    }
    const result = yield facility_model_1.Facility.findByIdAndUpdate(id, payload, { new: true });
    return result;
});
exports.updateFacilityService = updateFacilityService;
