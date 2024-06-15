import { Router } from "express";


import { AuthRoutes } from "../modules/auth/auth.route";
import { FacilityRoutes } from "../modules/facility/facility.route";
import { BookingRoutes } from "../modules/bookings/booking.route";
import { CheckAvaiableRoutes } from "../modules/checkAvaialable/checkAvaiable.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/api/auth",
    route: AuthRoutes,
  },
  {
    path: "/api/facility",
    route: FacilityRoutes,
  },
  {
    path: "/api/bookings",
    route: BookingRoutes,
  },
  {
    path: "/api/check-availability",
    route: CheckAvaiableRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
