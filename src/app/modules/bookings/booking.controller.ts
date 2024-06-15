import { createBookingService } from "./booking.service";
import { RequestHandler } from "express";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

export const createBookingController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const data = req.body;
    const { _id } = req.user;
    const result = await createBookingService(data, _id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Booking is created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
