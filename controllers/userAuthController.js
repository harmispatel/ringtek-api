const UserAuth = require("../models/auth");

const getAuthUsersList = async (req, res) => {
  try {
    const users = await UserAuth.find();
    res.status(200).json({
      message: "Auth users fetched successfully",
      success: true,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching auth users",
      success: false,
      error: error.message,
    });
  }
};

module.exports = { getAuthUsersList };
