const User = require("../models/user");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      message: "Users fetched successfully",
      success: true,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching users",
      success: false,
      error: error.message,
    });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, password, user_type } = req.body;
    if (!name || !email || !password || !user_type) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "Email already in use",
        success: false,
      });
    }

    const newUser = new User({ name, email, password, user_type });
    await newUser.save();

    res.status(201).json({
      message: "User created successfully",
      success: true,
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating user",
      success: false,
      error: error.message,
    });
  }
};

const editUser = async (req, res) => {
  const { userId } = req.params;
  const { name, email, password, user_type } = req.body;

  if (!name && !email && !password && !user_type) {
    return res.status(400).json({
      message: "At least one field is required to update.",
      success: false,
    });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name, email, password, user_type },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    res.status(200).json({
      message: "User updated successfully",
      success: true,
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating user",
      success: false,
      error: error.message,
    });
  }
};

const getUserById = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    res.status(200).json({
      message: "User fetched successfully",
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching user",
      success: false,
      error: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    res.status(200).json({
      message: "User deleted successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting user",
      success: false,
      error: error.message,
    });
  }
};

module.exports = { getUsers, createUser, editUser, getUserById, deleteUser };
