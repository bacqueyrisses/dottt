"use server";
import { Resend } from "resend";
import EmailTemplate from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sendMail(email: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: "DOTTT <contact@dottt.store>",
      to: [email],
      subject: "Sign up complete.",
      react: EmailTemplate(),
    });

    if (error) {
      console.error(error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
