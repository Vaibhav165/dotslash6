import { connect } from "../../../lib/mongodb";
import Loan from "../../../models/Loan";
import User from "../../../models/User";

export default async function handler(req, res) {
  await connect();
  switch (req.method) {
    case "POST":
      try {
        const loan = await Loan.findOne({ _id: req.body.loanId });
        if (!loan) {
          res.status(200).json({ success: false, message: "No loan found" });
          break;
        }
        const user = await User.findOne({ _id: loan.appliedBy.userID });
        if (user.maxLoanAmount >= req.body.loanAmount) {
          const newloan = await Loan.findByIdAndUpdate(req.body.loanId, {
            loanAmount: req.body.loanAmount,
            tenure: req.body.tenure,
            interestRate: req.body.interestRate,
          });
          res.status(201).json({ success: true, data: newloan });
        } else {
          res.status(201).json({
            success: "true",
            message: "User cannot get the loan of this amount",
          });
        }
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ message: "Invalid method" });
  }
}
