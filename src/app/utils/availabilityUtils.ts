import { Booking } from "../modules/bookings/booking.model";
import { Types } from "mongoose";

interface TimeSlot {
  startTime: string;
  endTime: string;
}
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

// Function to check availability of time slots for a specific date


export { checkAvailabilityForCreateBooking };
