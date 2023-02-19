import { connect } from "../../../lib/mongodb";
import User from "../../../models/User";

export default async function handler(req, res) {
  await connect();
  switch (req.method) {
    case "POST":
      try {
        const user = await User.findOne({
          email: JSON.parse(req.body).email,
        });
        if (!user) {
          res.status(400).json({ success: false, message: "No User found" });
          break;
        }

        res.status(200).json({ success: true, data: user });
      } catch (e) {
        console.log(e);
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ message: "Invalid method" });
  }
}
