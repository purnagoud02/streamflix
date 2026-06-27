const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  isPremium: { type: Boolean, default: false },
  plan: { type: String, enum: ["Basic", "Premium"], default: "Basic" },
  isPremium: {
  type: Boolean,
  default: false,
},

plan: {
  type: String,
  default: "free",
},
});

module.exports = mongoose.model("User", userSchema);
