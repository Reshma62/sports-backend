import { RequestHandler } from "express";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import {
  createFacilityService,
  deleteFacilityService,
  updateFacilityService,
} from "./facility.service";

export const createFacilityController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const data = req.body;
    const result = await createFacilityService(data);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Facility is created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const updateFacilityController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const data = req.body;
    const { id } = req.params;
    const result = await updateFacilityService(id, data);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: " Facility is updated successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
export const deleteFacilityController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const { id } = req.params;
    const result = await deleteFacilityService(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: " Facility is deleted successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
