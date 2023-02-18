import dbConnect, { connect } from "../../../lib/mongodb";
import User from "../../../models/User";

export default async function handler(req, res) {
  const { method } = req;

  //   if (!mongoose.connection.readyState) {
  await connect();
  //   }

  switch (method) {
    case "GET":
      try {
        const users = await User.find({});
        res.status(200).json({ success: true, data: users });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const check = await User.findOne({ email: JSON.parse(req.body).email });
        if (check) {
          res.status(200).json({ message: "User Already exists" });
          break;
        }
        const user = await User.create(JSON.parse(req.body));
        res.status(201).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
