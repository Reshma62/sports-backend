import { IBooking } from "./booking.interface";
import { Booking } from "./booking.model";

export const createBookingService = async (payload: IBooking) => {
  const result = await Booking.create(payload);
  return result;
};
