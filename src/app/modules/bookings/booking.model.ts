import { Schema, model } from "mongoose";
import { IBooking } from "./booking.interface";

const BookingSchema: Schema = new Schema({
  date: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  facility: {
    type: Schema.Types.ObjectId,
    ref: "Facility",
    required: true,
  },
  payableAmount: {
    type: Number,
    required: true,
  },
  isBooked: {
    type: String,
    required: true,
    enum: ["confirmed", "canceled"],
  },
});

export const Booking = model<IBooking>("Booking", BookingSchema);
