import { Schema, model } from "mongoose";
import { IBooking } from "./booking.interface";
import { Facility } from "../facility/facility.model";

const BookingSchema = new Schema({
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
    // required: true,
  },

  isBooked: {
    type: String,
    required: true,
    enum: ["confirmed", "canceled"],
    default: "confirmed",
  },
});

BookingSchema.pre("save", async function (next) {
  // Use await to ensure Facility.findById() resolves before continuing
  const selectFacility = await Facility.findById(this.facility);
  if (!selectFacility) {
    throw new Error("Facility does not exist");
  }
  // console.log(selectFacility, "selectFacility");

  // Convert startTime and endTime to numbers if they are strings
  const startTimeNumber =
    typeof this.startTime === "string"
      ? parseFloat(this.startTime)
      : this.startTime;
  const endTimeNumber =
    typeof this.endTime === "string" ? parseFloat(this.endTime) : this.endTime;

  // Access pricePerHour from wherever it is defined in your application
  const pricePerHour = selectFacility.pricePerHour; // Example assuming pricePerHour is a field in Facility model

  // Calculate payableAmount based on numeric startTime and endTime
  const payableAmount = (endTimeNumber - startTimeNumber) * pricePerHour;
  this.payableAmount = payableAmount;

  next();
});

export const Booking = model<IBooking>("Booking", BookingSchema);
