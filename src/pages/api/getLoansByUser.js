import Loan from "/models/Loan";
import { connect } from "/lib/mongodb";

export default async function handle(req, res) {
  await connect();
  switch (req.method) {
    case "POST":
      try {
        const userId = req.body.userId;
        const email = JSON.parse(req.body).email;
        console.log("email", email);
        // console.log(req.body, userId);
        const loans = await Loan.find({});
        var userloans = [];
        // console.log("loans", loans);
        loans.map((loan) => {
          if (loan.appliedBy.email && loan.appliedBy.email === email) {
            // console.log(loan);
            userloans.push(loan);
          }
        });
        res.status(200).json({ success: true, data: userloans });
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false, data: err });
      }
      break;
    default:
      res.status(404).json({ message: "Invalid method" });
  }
}
