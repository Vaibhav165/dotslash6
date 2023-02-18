import { connect } from "/lib/mongodb";
import User from "/models/User";
import { hash } from "bcryptjs";

export default async function handler(req, res) {
  await connect();
  switch (req.method) {
    case "POST":
      try {
        const { email, password, Name } = JSON.parse(req.body);
        //Validate
        // console.log()
        if (!email || !email.includes("@") || !password) {
          res.status(422).json({ message: "Invalid Data" });
          return;
        }
        const user = await User.findOne({ email: email });
        if (user) {
          res.status(422).json({ message: "User already exists" });
          // client.close();
        }
        //Hash password
        const status = await User.create({
          email,
          Name,
          password: await hash(password, 12),
        });
        //Send success response
        res.status(201).json({ message: "User created", ...status });
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ message: "Incorrect method" });
  }
}
