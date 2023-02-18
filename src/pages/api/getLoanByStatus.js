import Loan from "/models/Loan";
import { connect } from "/lib/mongodb";

export default async function handler(req, res) {
  await connect();
  switch (req.method) {
    case "POST":
      try {
        const loans = await Loan.find({ status: JSON.parse(req.body).status });
        res.status(200).json({ success: true, data: loans });
      } catch (err) {
        res.status(400).json({ success: false });
      }
    default:
      res.status(400).json({ message: "Incorrect method" });
  }
}
