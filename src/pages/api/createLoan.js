import { connect } from "../../../lib/mongodb";
import Loan from "../../../models/Loan";
import User from "../../../models/User";

export default async function handler(req, res) {
  await connect();
  switch (req.method) {
    case "POST":
      try {
        const user = await User.findOne({ _id: req.body.appliedBy });
        if (user.maxLoanAmount >= req.body.loanAmount) {
          const loan = await Loan.create(req.body);
          res.status(201).json({ success: true, data: loan });
        } else {
          res.status(201).json({
            success: "true",
            message: "User cannot get the loan of this amount",
          });
        }
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ message: "Invalid method" });
  }
}
