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
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserService = exports.createUserService = void 0;
const users_model_1 = require("../user/users.model");
const token_1 = require("../../utils/token");
const createUserService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = payload;
    const existsUser = yield users_model_1.UserModel.checkExistUser(email);
    if (existsUser) {
        throw new Error("User already exists");
    }
    const result = yield users_model_1.UserModel.create(payload);
    return result;
});
exports.createUserService = createUserService;
const loginUserService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    const existsUser = yield users_model_1.UserModel.checkExistUser(email);
    if (!existsUser) {
        throw new Error("User does not exist");
    }
    if (existsUser.isDeleted) {
        throw new Error("User has been deleted");
    }
    const matchPassword = yield existsUser.comparePassword(password);
    if (!matchPassword) {
        throw new Error("Wrong credentials");
    }
    // Generate tokens and prepend "Bearer "
    const accessToken = `Bearer ${(0, token_1.createAccessToken)({ userId: existsUser._id.toString() })}`;
    const refreshToken = `Bearer ${(0, token_1.createRefreshToken)({ userId: existsUser._id.toString() })}`;
    const loginUser = yield users_model_1.UserModel.findOne({ email }).select("name email role address phone");
    return { loginUser, accessToken, refreshToken };
});
exports.loginUserService = loginUserService;
