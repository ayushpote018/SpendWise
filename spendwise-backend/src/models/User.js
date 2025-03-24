const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  profilePicture: {type: String},
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  defaultCurrency: {type: String, default: "INR"},
  createdAt: { type: Date, default: Date.now},
});

module.exports = mongoose.model("User", UserSchema);
