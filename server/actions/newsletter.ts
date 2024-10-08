"use server";

import { PrevState } from "@/lib/definition";
import clerkClient from "@/server/clerk";
import { z } from "zod";
import sendMail from "@/server/actions/email";

export default async function addNewsletter(
  prevState: PrevState,
  formData: FormData,
) {
  try {
    const validatedEmail = z.string().email().safeParse(formData.get("email"));

    if (!validatedEmail.success) {
      return {
        success: false,
        errors: validatedEmail.error.flatten().formErrors,
      };
    }

    const email = validatedEmail.data;

    clerkClient.users
      .createUser({
        emailAddress: [email],
      })
      .then(() => sendMail(email))
      .catch(() => {
        return {
          success: false,
        };
      });

    return {
      success: true,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
    };
  }
}
