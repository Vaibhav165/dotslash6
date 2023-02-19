import { connect } from "../../../lib/mongodb";
import User from "../../../models/User";

export default async function handler(req, res) {
  await connect();
  switch (req.method) {
    case "POST":
      try {
        const { salary, balance, email } = req.body;
        const salaryWeight = 0.7;
        const balanceWeight = 0.3;

        // Calculate score for salary
        let salaryScore = 0;
        if (salary < 25000) {
          salaryScore = 1;
        } else if (salary < 50000) {
          salaryScore = 2;
        } else if (salary < 75000) {
          salaryScore = 3;
        } else {
          salaryScore = 4;
        }

        // Calculate score for balance
        let balanceScore = 0;
        if (balance < 10000) {
          balanceScore = 1;
        } else if (balance < 50000) {
          balanceScore = 2;
        } else if (balance < 100000) {
          balanceScore = 3;
        } else {
          balanceScore = 4;
        }

        // Calculate final score
        const finalScore =
          salaryScore * salaryWeight + balanceScore * balanceWeight;
        const cibil = Math.floor(finalScore * 100);
        const maxLoanAmount = Math.floor(cibil * 100);
        const user = await User.findOneAndUpdate(
          { email: email },
          { CIBIL: cibil, maxLoanAmount: maxLoanAmount },
          { new: true }
        );
        res.status(200).json({ success: true, data: { cibil: cibil } });
      } catch (e) {
        console.log(e);
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ message: "Incorrect method" });
  }
}
