import { IUser } from "./../user/users.interface";
import { UserModel } from "../user/users.model";
import { createAccessToken, createRefreshToken } from "../../utils/token";

export const createUserService = async (payload: IUser) => {
  const { email } = payload;
  const existsUser = await UserModel.checkExistUser(email);
  if (existsUser) {
    throw new Error("User already exists");
  }
  const result = await UserModel.create(payload);
  return result;
};
export const loginUserService = async (payload: IUser) => {
  const { email, password } = payload;
  const existsUser = await UserModel.checkExistUser(email);
  if (!existsUser) {
    throw new Error("User does not exist");
  }
  if (existsUser.isDeleted) {
    throw new Error("User has been deleted");
  }

  const matchPassword = await existsUser.comparePassword(password);
  if (!matchPassword) {
    throw new Error("Wrong credentials");
  }

  // Generate tokens and prepend "Bearer "
  const accessToken = `Bearer ${createAccessToken({ userId: existsUser._id.toString() })}`;
  const refreshToken = `Bearer ${createRefreshToken({ userId: existsUser._id.toString() })}`;

  const loginUser = await UserModel.findOne({ email }).select(
    "name email role address phone"
  );

  return { loginUser, accessToken, refreshToken };
};
