"use server";

import nodemailer from "nodemailer";
import { z } from "zod";
import { FormState } from "./definitions";

// Definizione dello schema di validazione con Zod
const FormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export async function sendEmail(prevState: FormState, formData: FormData) {
  const { name, email, subject, message } = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
  };

  // Validazione dei dati con Zod
  const validation = FormSchema.safeParse({
    name,
    email,
    subject,
    message,
  });

  if (!validation.success) {
    return {
      success: false,
      message: "Email validation failed!",
    };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.GMAIL_USER,
    subject: `New Contact Form Submission: ${subject}`,
    text: `You have received a new message from ${name} (${email}):\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to send email" };
  }
}
