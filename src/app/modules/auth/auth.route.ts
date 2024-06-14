import { Router } from "express";
const _ = Router();
// controller
import { createUserController, loginController } from "./auth.controller";
import { ValidateDataSchema } from "../../middleware/ValidateDataSchema";
import { loginUserValidationSchema, signupUserSchema } from "./auth.validation";
//  routes
_.post("/signup", ValidateDataSchema(signupUserSchema), createUserController);
_.post(
  "/login",
  ValidateDataSchema(loginUserValidationSchema),
  loginController
);

export const AuthRoutes = _;
