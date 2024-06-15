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
exports.checkAvaialableService = void 0;
const booking_model_1 = require("../bookings/booking.model");
const checkAvaialableService = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const { date } = query;
    const todayDate = new Date().toISOString().split("T")[0];
    const isAvailable = date || todayDate;
    const bookings = yield booking_model_1.Booking.find({ date: isAvailable });
    const responseData = bookings.map((booking) => ({
        startTime: booking.startTime,
        endTime: booking.endTime,
    }));
    return responseData;
});
exports.checkAvaialableService = checkAvaialableService;
