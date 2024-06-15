"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_route_1 = require("../modules/auth/auth.route");
const facility_route_1 = require("../modules/facility/facility.route");
const booking_route_1 = require("../modules/bookings/booking.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/api/auth",
        route: auth_route_1.AuthRoutes,
    },
    {
        path: "/api/facility",
        route: facility_route_1.FacilityRoutes,
    },
    {
        path: "/api/bookings",
        route: booking_route_1.BookingRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
