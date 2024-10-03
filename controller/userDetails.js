const getUserDetailsFromToken = require("../helpers/getUserDetailsFromToken");

async function userDetails(request, response) {
  try {
    const token = request.cookies.token || "";
    const user = await getUserDetailsFromToken(token);

    if (user.logout) {
      return response.status(401).json({
        message: user.message,
        logout: true
      });
    }

    return response.status(200).json({
      message: "User details retrieved successfully",
      data: user
    });
  } catch (error) {
    console.error('User details error:', error);
    return response.status(500).json({
      message: "Internal server error",
      error: true
    });
  }
}

module.exports = userDetails;