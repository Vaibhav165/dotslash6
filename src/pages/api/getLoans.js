import { connect } from "../../../lib/mongodb";
import Loan from "../../../models/Loan";

export default async function handler(req, res) {
  await connect();

  switch (req.method) {
    case "GET":
      try {
        const loans = await Loan.find({});
        res.status(200).json({ success: true, data: loans });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ message: "Invalid method" });
  }
}
