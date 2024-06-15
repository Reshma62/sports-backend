"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserValidationSchema = void 0;
const zod_1 = require("zod");
exports.createUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, "Name is required"), // Ensure name is a non-empty string
        email: zod_1.z.string().email("Invalid email format"),
        password: zod_1.z.string().min(6, "Password must be at least 6 characters long"), // Ensure password is at least 6 characters long
        needsPasswordChange: zod_1.z.string().optional(), // Optional field
        role: zod_1.z.enum(["admin", "student", "faculty"]), // Ensure role is one of the specified values
    }),
});
