import { connect } from "../../../lib/mongodb";
import Loan from "../../../models/Loan";
import User from "../../../models/User";
import { sendEmail } from "../../../lib/email";

export default async function handler(req, res) {
  await connect();
  switch (req.method) {
    case "POST":
      try {
        const { loanId, giverInfo } = JSON.parse(req.body);

        const loan = await Loan.findOne({ _id: loanId });
        if (!loan) {
          res.status(200).json({ success: false, message: "No loan found" });
        }
        const user = await User.findOne({ email: giverInfo.email });
        if (!user) {
          res.status(200).json({ success: false, message: "No user found" });
        }
        const newloan = await Loan.findByIdAndUpdate(loanId, {
          status: "ongoing",
          loanGivenBy: giverInfo,
        });
        // const res = await fetch("/api/sendEmail", {
        //   method: "POST",
        //   body: JSON.stringify({
        //     to_email: giverInfo.email,
        //     subject: "Lended to a loan successfully",
        //     text: `You have successfully lented for loan ${loanId}`,
        //   }),
        // });
        // const resjs = await res.json();
        await sendEmail({
          to: giverInfo.email,
          subject: "Lended to a loan successfully",
          text: `You have successfully lented for loan ${loanId}`,
        });

        res.status(200).json({
          success: true,
          message: "Applied for loan successfully " + "email sent",
          data: newloan,
        });
      } catch (err) {
        console.log(err);
        res.status(200).json({ status: false });
      }
      break;
    default:
      res.status(400).json({ message: "Invalid method" });
  }
}
