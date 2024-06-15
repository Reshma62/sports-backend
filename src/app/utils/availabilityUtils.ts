import { Booking } from "../modules/bookings/booking.model";

async function checkAvailabilityForCreateBooking(
  facilityId: string,
  date: string,
  startTime: string,
  endTime: string
): Promise<boolean> {
  try {
    const overlappingBookings = await Booking.find({
      facility: facilityId,
      date: date,
      startTime: startTime,
      endTime: endTime,
    });

    return overlappingBookings.length === 0;
  } catch (error) {
    console.error("Error checking availability:", error);
    throw new Error("Failed to check availability");
  }
}

export { checkAvailabilityForCreateBooking };
