const mongoose = require("mongoose");

const AuthData = mongoose.model(
  "AuthUserList",
  new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    createdAt: { type: Date, default: Date.now },
  })
);

module.exports = AuthData;
