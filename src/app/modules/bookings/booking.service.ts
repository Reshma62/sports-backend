import { checkAvailabilityForCreateBooking } from "../../utils/availabilityUtils";
import { IBooking } from "./booking.interface";
import { Booking } from "./booking.model";
// create booking
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

// get all bookings for admin
export const getAllBookingService = async () => {
  const result = await Booking.find({}).populate("user" , "-createdAt -updatedAt -isDeleted -status -__v").populate("facility");
  return result;
};
// get booking for user
export const getUsersBookingService = async (user:string) => {
  const result = await Booking.find({user}).populate("user" , "-createdAt -updatedAt -isDeleted -status -__v").populate("facility");
  return result;
};

// cancel booking for user
export const cancelBookingService = async (id:string) => {
  const result = await Booking.findByIdAndUpdate(
    id,
    { isBooked: "canceled" },
    { new: true }
  );
  if (!result) {
    throw new Error("Booking not found");
  }
  return result;
};
