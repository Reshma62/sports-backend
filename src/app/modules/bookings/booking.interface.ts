// booking.interface.ts
import { Types } from "mongoose";

export interface IBooking {
  date: string;
  startTime: string;
  endTime: string;
  user: Types.ObjectId;
  facility: Types.ObjectId;
  payableAmount?: number;
  isBooked: "confirmed" | "canceled";
}
