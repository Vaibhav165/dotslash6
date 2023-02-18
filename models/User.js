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
  },
  userType: {
    type: String
  },
  accountNumber: {
    type: Number
  },
  aadharCard: {
    type: Number
  },
  salary: {
    type: Number
  }
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password === await bcrypt.hash(this.password, 12);
  // delete confirm password
  this.confirmPassword = undefined;
  next();
})

userSchema.methods.correctPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};
module.exports = mongoose.models.User || mongoose.model("User", userSchema);

