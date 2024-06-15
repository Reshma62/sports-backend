"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFacilitySchema = exports.createFacilitySchema = void 0;
const zod_1 = require("zod");
exports.createFacilitySchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "Name is required" }),
        description: zod_1.z.string({ required_error: "Description is required" }),
        pricePerHour: zod_1.z
            .number()
            .positive("Price per hour must be a positive number"),
        location: zod_1.z.string({ required_error: "Location is required" }),
        isDeleted: zod_1.z.boolean().default(false),
    }),
});
exports.updateFacilitySchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        pricePerHour: zod_1.z
            .number()
            .positive("Price per hour must be a positive number")
            .optional(),
        location: zod_1.z.string().optional(),
        isDeleted: zod_1.z.boolean().default(false).optional(),
    }),
});
