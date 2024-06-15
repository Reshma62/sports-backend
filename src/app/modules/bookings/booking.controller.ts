import {
  cancelBookingService,
  createBookingService,
  getAllBookingService,
  getUsersBookingService,
} from "./booking.service";
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

export const getAllController: RequestHandler = async (req, res, next) => {
  try {
    const result = await getAllBookingService();
    if (result.length === 0) {
      throw new Error("No Data Found");
    }
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Bookings fetched successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
// get booking for user
export const getUsersAllController: RequestHandler = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const result = await getUsersBookingService(_id);
    if (result.length === 0) {
      throw new Error("No Data Found");
    }
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Bookings fetched successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
// cancel booking for user
export const cancelBookingController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const { id } = req.params;
    const result = await cancelBookingService(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Booking is cancelled successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
