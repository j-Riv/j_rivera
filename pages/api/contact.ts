// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const config = {
  api: {
    externalResolver: true,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
  }

  const body: FormData = JSON.parse(req.body);

  const transporter = nodemailer.createTransport(
    new SMTPTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })
  );

  const htmlMessage = `<p>Name: ${body.name}</p><p>Message: ${body.message}</p>`;

  const info = await transporter.sendMail({
    from: body.email,
    to: process.env.GMAIL,
    replyTo: body.email,
    subject: body.subject,
    html: htmlMessage,
  });

  if (info.messageId) {
    res.status(200).json({ message: "Success", messageId: info.messageId });
    return;
  }

  res.status(400).json({ error: "Error in sending email" });
}
