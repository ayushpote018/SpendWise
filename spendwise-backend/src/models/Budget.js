const mongoose = require("mongoose");

const BudgetSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    category: { type: String, required: true },
    limit: { type: Number, required: true },
    month: { type: String, required: true },
    currentSpending: { type: Number, default: 0 },
    alertThreshold: { type: Number, default: 80 }, 
    status: { type: String, enum: ["Active", "Exceeded"], default: "Active" },
    createdAt: { type: Date, default: Date.now }
});
  
module.exports = mongoose.model("Budget", BudgetSchema);