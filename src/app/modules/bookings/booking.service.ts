import { checkAvailabilityForCreateBooking } from "../../utils/availabilityUtils";
import { IBooking } from "./booking.interface";
import { Booking } from "./booking.model";

export const createBookingService = async (payload: IBooking, user: string) => {
  const { facility, startTime, endTime, date } = payload;
  const isAvailable = await checkAvailabilityForCreateBooking(
    facility.toString(),
    date,
    startTime,
    endTime
  );
  console.log(isAvailable, "isAvailable");
  if (!isAvailable) {
    throw new Error("This time slot is not available");
  }
  const result = await Booking.create({ ...payload, user });

  return result;
};
