import { Booking } from "../bookings/booking.model";

export const checkAvaialableService = async (query: any) => {
  const { date } = query;
  const todayDate = new Date().toISOString().split("T")[0];
  const isAvailable = date || todayDate;
  const bookings = await Booking.find({ date: isAvailable });
  const responseData = bookings.map((booking) => ({
    startTime: booking.startTime,
    endTime: booking.endTime,
  }));
  return responseData;
};
