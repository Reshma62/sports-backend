import { Router } from "express";
const _ = Router();
// controller
import {
  createFacilityController,
  updateFacilityController,
} from "./facility.controller";
import { ValidateDataSchema } from "../../middleware/ValidateDataSchema";
import {
  createFacilitySchema,
  updateFacilitySchema,
} from "./facility.validation";
import auth from "../../middleware/auth/auth";
//  routes
_.post(
  "/",
  ValidateDataSchema(createFacilitySchema),
  auth("admin"),
  createFacilityController
);
_.put(
  "/:id",
  ValidateDataSchema(updateFacilitySchema),
  auth("admin"),
  updateFacilityController
);

export const FacilityRoutes = _;
