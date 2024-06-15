import { Router } from "express";
const _ = Router();

// controller
import {
  cancelBookingController,
  createBookingController,
  getAllController,
  getUsersAllController,
} from "./booking.controller";
import auth from "../../middleware/auth/auth";
import { ValidateDataSchema } from "../../middleware/ValidateDataSchema";
import { createBookingSchema } from "./booking.validation";

// routes
_.get("/", auth("admin"), getAllController);
_.get("/user", auth("user"), getUsersAllController);
_.post(
  "/",
  ValidateDataSchema(createBookingSchema),
  auth("user"),
  createBookingController
);
_.delete("/:id", auth("user"), cancelBookingController);

export const BookingRoutes = _;
