import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../../config";
import { UserModel } from "../../modules/user/users.model";

const auth = (...allowedRoles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
      throw new Error("You have no access to this route");
    }

    const decoded = jwt.verify(
      token,
      config.accessTokenSecret as string
    ) as JwtPayload;
    const user = await UserModel.findById(decoded.userId);
    if (!user) {
      throw new Error("User does not exist");
    }
    if (allowedRoles && !allowedRoles.includes(user.role as string)) {
      throw new Error("You have no access to this route");
    }
    req.user = user;
    next();
  };
};

export default auth;
