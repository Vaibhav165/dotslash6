import { connect } from "../../../lib/mongodb";
import Loan from "../../../models/Loan";
import User from "../../../models/User";

export default async function handler(req, res) {
  await connect();
  switch (req.method) {
    case "POST":
      try {
        const { accountNumber, holderName, bankName } = JSON.parse(
          req.body
        ).bankInfo;

        const useremail = JSON.parse(req.body).email;
        const user = await User.findOne({
          email: useremail,
        });
        if (!user) {
          res.status(400).json({ success: false, message: "No user found" });
        }

        if (bankName && holderName && accountNumber) {
          const bankInfo = await User.findOneAndUpdate(
            { email: useremail },
            {
              bankInfo: JSON.parse(req.body).bankInfo,
            },
            { new: true }
          );

          res.status(201).json({ success: true, data: bankInfo });
        } else {
          res.status(201).json({
            success: "true",
            message: "Bank details not correct",
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
