import { z } from "zod";

export const loginUserValidationSchema = z.object({
  body: z.object({
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters long"), // Ensure
  }),
});
export const signupUserSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    phone: z.string().regex(/^[0-9]{11}$/),
    role: z.enum(["admin", "user"]),
    address: z.string(),
  }),
});
