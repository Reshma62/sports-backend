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
exports.createBookingService = void 0;
const availabilityUtils_1 = require("../../utils/availabilityUtils");
const booking_model_1 = require("./booking.model");
const createBookingService = (payload, user) => __awaiter(void 0, void 0, void 0, function* () {
    const { facility, startTime, endTime, date } = payload;
    const isAvailable = yield (0, availabilityUtils_1.checkAvailabilityForCreateBooking)(facility.toString(), date, startTime, endTime);
    console.log(isAvailable, "isAvailable");
    if (!isAvailable) {
        throw new Error("This time slot is not available");
    }
    const result = yield booking_model_1.Booking.create(Object.assign(Object.assign({}, payload), { user }));
    return result;
});
exports.createBookingService = createBookingService;
