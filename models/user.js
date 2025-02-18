const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  userEmail: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
  user_type: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

UsersSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Users = mongoose.model("Users", UsersSchema);
module.exports = Users;
