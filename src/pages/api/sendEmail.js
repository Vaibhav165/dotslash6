import { render } from "@react-email/render";
import WelcomeTemplate from "../../../emails/WelcomeTemplate";
import { sendEmail } from "../../../lib/email";

export default async function handler (req, res) {
  const { to_email, subject, text } = req.body;
  switch (req.method) {
    case "POST":
      await sendEmail({
        to: to_email,
        subject: subject,
        text: text,
      });
      res.status(200).json({ message: "Email sent successfully" });
      break;
    default:
      res.status(400).json({ message: "something went wrong" });
  }
}
