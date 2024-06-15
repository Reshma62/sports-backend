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
exports.Booking = void 0;
const mongoose_1 = require("mongoose");
const facility_model_1 = require("../facility/facility.model");
const BookingSchema = new mongoose_1.Schema({
    date: {
        type: String,
        required: true,
    },
    startTime: {
        type: String,
        required: true,
    },
    endTime: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    facility: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Facility",
        required: true,
    },
    payableAmount: {
        type: Number,
        // required: true,
    },
    isBooked: {
        type: String,
        required: true,
        enum: ["confirmed", "canceled"],
        default: "confirmed",
    },
});
BookingSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        // Use await to ensure Facility.findById() resolves before continuing
        const selectFacility = yield facility_model_1.Facility.findById(this.facility);
        if (!selectFacility) {
            throw new Error("Facility does not exist");
        }
        // console.log(selectFacility, "selectFacility");
        // Convert startTime and endTime to numbers if they are strings
        const startTimeNumber = typeof this.startTime === "string"
            ? parseFloat(this.startTime)
            : this.startTime;
        const endTimeNumber = typeof this.endTime === "string" ? parseFloat(this.endTime) : this.endTime;
        // Access pricePerHour from wherever it is defined in your application
        const pricePerHour = selectFacility.pricePerHour; // Example assuming pricePerHour is a field in Facility model
        // Calculate payableAmount based on numeric startTime and endTime
        const payableAmount = (endTimeNumber - startTimeNumber) * pricePerHour;
        this.payableAmount = payableAmount;
        next();
    });
});
exports.Booking = (0, mongoose_1.model)("Booking", BookingSchema);
