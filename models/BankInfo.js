const mongoose = require("mongoose");

const bankInfoSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId
    },
    holderName: {
        type: String,
        required: true,
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
module.exports = mongoose.models.User || mongoose.model("BankInfo", bankInfoSchema);

