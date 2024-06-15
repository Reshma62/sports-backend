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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelBookingController = exports.getUsersAllController = exports.getAllController = exports.createBookingController = void 0;
const booking_service_1 = require("./booking.service");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const createBookingController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const { _id } = req.user;
        const result = yield (0, booking_service_1.createBookingService)(data, _id);
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Booking is created successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createBookingController = createBookingController;
const getAllController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, booking_service_1.getAllBookingService)();
        if (result.length === 0) {
            throw new Error("No Data Found");
        }
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Bookings fetched successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllController = getAllController;
// get booking for user
const getUsersAllController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.user;
        const result = yield (0, booking_service_1.getUsersBookingService)(_id);
        if (result.length === 0) {
            throw new Error("No Data Found");
        }
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Bookings fetched successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getUsersAllController = getUsersAllController;
// cancel booking for user
const cancelBookingController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield (0, booking_service_1.cancelBookingService)(id);
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Booking is cancelled successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.cancelBookingController = cancelBookingController;
