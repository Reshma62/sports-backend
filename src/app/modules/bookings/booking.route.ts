import { Router } from "express";
const _ = Router();

// controller
import { createBookingController } from "./booking.controller";
import auth from "../../middleware/auth/auth";
import { ValidateDataSchema } from "../../middleware/ValidateDataSchema";
import { createBookingSchema } from "./booking.validation";

// routes
_.get("/", (req, res) => {
  res.send("Hello World!");
});
_.post(
  "/",
  ValidateDataSchema(createBookingSchema),
  auth("user"),
  createBookingController
);

export const BookingRoutes = _;
