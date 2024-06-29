"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = exports.createUserController = void 0;
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const auth_service_1 = require("./auth.service");
const createUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield (0, auth_service_1.createUserService)(data);
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "User is created successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createUserController = createUserController;
const loginController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const { accessToken, refreshToken, loginUser } = yield (0, auth_service_1.loginUserService)(data);
        const result = { loginUser };
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: false,
        });
        res.status(http_status_1.default.OK).json({
            success: data.success,
            message: data.message,
            data: loginUser,
            token: accessToken,
        });
        // sendResponse(res, {
        //   statusCode: httpStatus.OK,
        //   success: true,
        //   message: " User logged in successfully",
        //   data: result,
        //   token: accessToken,
        // });
    }
    catch (err) {
        next(err);
    }
});
exports.loginController = loginController;
