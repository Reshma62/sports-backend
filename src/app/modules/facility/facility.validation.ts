import { z } from "zod";

export const createFacilitySchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  description: z.string({ required_error: "Description is required" }),
  pricePerHour: z.number().positive("Price per hour must be a positive number"),
  location: z.string({ required_error: "Location is required" }),
  isDeleted: z.boolean().default(false),
});
export const updateFacilitySchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  pricePerHour: z
    .number()
    .positive("Price per hour must be a positive number")
    .optional(),
  location: z.string().optional(),
  isDeleted: z.boolean().default(false).optional(),
});
