"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupUserSchema = exports.loginUserValidationSchema = void 0;
const zod_1 = require("zod");
exports.loginUserValidationSchema = zod_1.z.object({
    email: zod_1.z.string().email("Invalid email format"),
    password: zod_1.z.string().min(6, "Password must be at least 6 characters long"), // Ensure
});
exports.signupUserSchema = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8),
    phone: zod_1.z.string().regex(/^[0-9]{11}$/),
    role: zod_1.z.enum(["admin", "user"]),
    address: zod_1.z.string(),
});
