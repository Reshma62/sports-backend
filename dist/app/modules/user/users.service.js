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
const users_model_1 = require("./users.model");
const createUserService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = data;
    const existsUser = yield users_model_1.UserModel.checkExistUser(email);
    if (existsUser) {
        throw new Error("User already exists");
    }
    const result = yield users_model_1.UserModel.create(data);
    return result;
});
exports.createUserService = createUserService;
const loginUserService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = data;
    const existsUser = yield users_model_1.UserModel.checkExistUser(email);
    if (!existsUser) {
        throw new Error("User does not exist");
    }
    const matchPassword = yield existsUser.comparePassword(password);
    if (!matchPassword) {
        throw new Error("Wrong credentials");
    }
    return existsUser;
});
exports.loginUserService = loginUserService;
