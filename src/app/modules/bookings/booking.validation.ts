import { z } from "zod";

const createBookingSchema = z.object({
  body: z
    .object({
      date: z.string(),
      startTime: z.string(),
      endTime: z.string(),
      payableAmount: z.number().optional(),
      // isBooked: z.enum(["confirmed", "canceled"]),
    })
    .refine(
      (data) => {
        return data.startTime < data.endTime;
      },
      {
        message: "startTime must be before endTime",
        path: ["startTime", "endTime"],
      }
    ),
});

const updateBookingSchema = z.object({
  body: z.object({
    date: z.string().optional(),
    startTime: z.string().optional(),
    endTime: z.string().optional(),
    payableAmount: z.number().optional(),
    pricePerHour: z.number().optional(),
    // isBooked: z.enum(["confirmed", "canceled"]).optional(),
  }),
});

export { createBookingSchema, updateBookingSchema };
