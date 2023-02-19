import { connect } from "../../../lib/mongodb";
import Query from "../../../models/Query";

export default async function handler(req, res) {
  await connect();
  switch (req.method) {
    case "POST":
      try {
        const query = await Query.create(JSON.parse(req.body).formData);
        res.status(200).json({ success: true, data: query });
      } catch (er) {
        console.log(er);
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false, message: "Invalid method" });
  }
}
