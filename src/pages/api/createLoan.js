import { connect } from "../../../lib/mongodb";
import Loan from "../../../models/Loan";
import User from "../../../models/User";
import { sendEmail } from "../../../lib/email";

export default async function handler(req, res) {
  await connect();
  switch (req.method) {
    case "POST":
      try {
        const { loanAmount, appliedBy, interestRate, tenure } = JSON.parse(
          req.body
        );
        const useremail = appliedBy.email;
        // if(!userid){
        //   const
        // }
        const user = await User.findOne({
          email: useremail,
        });
        if (!user) {
          res.status(400).json({ success: false, message: "No user found" });
        }

        if (user.maxLoanAmount >= loanAmount) {
          const loan = await Loan.create({
            ...JSON.parse(req.body),
            status: "new",
          });
          await sendEmail({
            to: useremail,
            subject: "Applied for the loan successfully",
            text: `Hi ${appliedBy.name}!. Congrats, You have successfully applied for a loan of amount ${loanAmount} at an interest rate of ${interestRate} with a tenure of ${tenure} years`,
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
