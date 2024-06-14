import { Router } from "express";

const _ = Router();
_.get("/", (req, res) => {
  res.send("Hello World!");
});
export const StudentsRoutes = _;
