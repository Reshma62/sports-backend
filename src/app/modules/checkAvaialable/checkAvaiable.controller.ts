import { RequestHandler } from "express";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { checkAvaialableService } from "./checkAvaiable.service";

export const checkAvailableController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const data = req.query;
    const result = await checkAvaialableService(data);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: " Availability checked successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
