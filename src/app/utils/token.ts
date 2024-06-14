import jwt from "jsonwebtoken";
import config from "../config";

interface User {
  userId: string;
}

// Function to create an access token
export const createAccessToken = (user: User): string => {
  const accessToken = jwt.sign(
    { userId: user.userId },
    config.accessTokenSecret,
    {
      expiresIn: "1d", // Token expires in 15 minutes
    }
  );

  return accessToken;
};

// Function to create a refresh token
export const createRefreshToken = (user: User): string => {
  const refreshToken = jwt.sign(
    { userId: user.userId },
    config.refreshTokenSecret,
    {
      expiresIn: "365d", // Token expires in 7 days
    }
  );

  return refreshToken;
};
