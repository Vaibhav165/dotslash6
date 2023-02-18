const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema({
  loanAmount: {
    type: Number,
    required: true,
  },
  tenure: {
    type: Number,
    required: true,
  },
  interestRate: {
    type: Number,
    required: true,
  },
  appliedBy: {
    type: Object,
    required: true,
  },
  appliedAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  status: {
    type: String,
    required: true,
  },
  loanGivenBy: {
    type: Object,
  },
});

module.exports = mongoose.models.Loans || mongoose.model("Loans", loanSchema);
