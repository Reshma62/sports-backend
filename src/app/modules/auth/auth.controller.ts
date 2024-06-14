import { RequestHandler } from "express";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { createUserService, loginUserService } from "./auth.service";

export const createUserController: RequestHandler = async (req, res, next) => {
  try {
    const data = req.body;

    const result = await createUserService(data);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User is created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const loginController: RequestHandler = async (req, res, next) => {
  try {
    const data = req.body;
    const { accessToken, refreshToken, loginUser } =
      await loginUserService(data);
    const result = { accessToken, loginUser };
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
    });

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: " User logged in successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
