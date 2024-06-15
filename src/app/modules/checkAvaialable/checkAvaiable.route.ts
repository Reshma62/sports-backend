import { Router } from "express";
import { checkAvailableController } from "./checkAvaiable.controller";
const _ = Router();
// controller
// routes
_.get("/", checkAvailableController);

export const CheckAvaiableRoutes = _;
