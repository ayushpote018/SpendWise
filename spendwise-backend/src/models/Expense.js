const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  currency: {type: String, required: true},
  paymentMethod: {type: String, enum: ["Cash", "Credit Card", "UPI"], required: true},
  category: [{ type: String }],
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Expense", ExpenseSchema);
