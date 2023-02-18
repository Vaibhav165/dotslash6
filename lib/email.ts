import nodemailer from "nodemailer"

type EmailPayload = {
  to: string
  subject: string
  text: string
}

export const sendEmail = async (data: EmailPayload) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
  })

  return await transporter.sendMail({
    from: process.env.SMTP_FROM_EMAIL,
    ...data,
  })
}