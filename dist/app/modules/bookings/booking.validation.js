"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBookingSchema = exports.createBookingSchema = void 0;
const zod_1 = require("zod");
const createBookingSchema = zod_1.z.object({
    body: zod_1.z
        .object({
        date: zod_1.z.string(),
        startTime: zod_1.z.string(),
        endTime: zod_1.z.string(),
        payableAmount: zod_1.z.number(),
        isBooked: zod_1.z.enum(["confirmed", "canceled"]),
    })
        .refine((data) => {
        return data.startTime < data.endTime;
    }, {
        message: "startTime must be before endTime",
        path: ["startTime", "endTime"],
    }),
});
exports.createBookingSchema = createBookingSchema;
const updateBookingSchema = zod_1.z.object({
    body: zod_1.z.object({
        date: zod_1.z.string().optional(),
        startTime: zod_1.z.string().optional(),
        endTime: zod_1.z.string().optional(),
        payableAmount: zod_1.z.number().optional(),
        isBooked: zod_1.z.enum(["confirmed", "canceled"]).optional(),
    }),
});
exports.updateBookingSchema = updateBookingSchema;
