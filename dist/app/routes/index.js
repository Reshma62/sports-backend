"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_route_1 = require("../modules/user/users.route");
// import { StudentsRoutes } from "../modules/students/students.route";
const auth_route_1 = require("../modules/auth/auth.route");
const facility_route_1 = require("../modules/facility/facility.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/api/users",
        route: users_route_1.UsersRoutes,
    },
    {
        path: "/api/auth",
        route: auth_route_1.AuthRoutes,
    },
    {
        path: "/api/facility",
        route: facility_route_1.FacilityRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
