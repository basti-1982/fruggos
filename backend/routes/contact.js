import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false, // TLS über STARTTLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: `Neue Nachricht von ${name}`,
    text: `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`,
  };

  try {
    console.log("Versuche E-Mail zu senden...");
    console.log("Von:", process.env.EMAIL_USER);
    console.log("An:", process.env.EMAIL_TO);
    console.log("Betreff:", mailOptions.subject);
    console.log("Inhalt:", mailOptions.text);
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Fehler beim Mailversand:");
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
