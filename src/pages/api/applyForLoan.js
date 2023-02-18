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
        }
        const user = await User.findOne({ _id: req.body.userId });
        if (!user) {
          res.status(200).json({ success: false, message: "No user found" });
        }
        const newloan = await Loan.findByIdAndUpdate(req.body.loanId, {
          status: "ongoing",
          loanGivenBy: req.body.userId,
        });
        res.status(200).json({
          success: true,
          message: "Applied for loan successfully",
          data: newloan,
        });
      } catch (err) {
        res.status(200).json({ status: false });
      }
      break;
    default:
      res.status(400).json({ message: "Invalid method" });
  }
}
