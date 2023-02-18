import { connect } from "../../../lib/mongodb";
import Loan from "../../../models/Loan";
import User from "../../../models/User";

export default async function handler(req, res) {
  await connect();
  switch (req.method) {
    case "POST":
      try {
        const { loanAmount } = JSON.parse(req.body);
        const userid = JSON.parse(req.body).appliedBy.userID;
        const user = await User.findOne({
          _id: userid,
        });
        if (!user) {
          res.status(400).json({ success: false, message: "No user found" });
        }

        if (user.maxLoanAmount >= loanAmount) {
          const loan = await Loan.create({
            ...JSON.parse(req.body),
            status: "new",
          });
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
