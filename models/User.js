const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    // required: true,
  },
  contactNumber: {
    type: String,
    // required: true,
  },
  CIBIL: {
    type: Number,
  },
  maxLoanAmount: {
    type: Number,
    // required: true,
  },
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
