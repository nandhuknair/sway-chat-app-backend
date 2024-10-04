const jwt = require("jsonwebtoken");
const UserModel = require("../models/UserModel");

const getUserDetailsFromToken = async (token) => {
  console.log(
    "!!!!!!!!!This is the token from the cookie of getUserDetailsFromToken",token
  );
  if (!token) {
    return {
      message: "session out",
      logout: true,
    };
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await UserModel.findById(decoded.id).select("-password");

    if (!user) {
      return {
        message: "User not found",
        logout: true,
      };
    }

    return user;
  } catch (error) {
    console.error("Token verification error:", error);
    return {
      message: "Invalid or expired token",
      logout: true,
    };
  }
};

module.exports = getUserDetailsFromToken;
