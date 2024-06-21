// import { EmailTemplate } from '@/components/email-template';
import { NextRequest } from "next/server";
import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend("re_SAtWHypJ_jQ6zb3k3Hpk9RDBW6vjkmdD9");

export async function POST(request: NextRequest) {
  const { firstName, lastName, email, phone, message } = await request.json();
  console.log(firstName, lastName, email, phone, message);

  try {
    const { data, error } = await resend.emails.send({
      from: "Nilam Packers <onboarding@resend.dev>",
      to: ["sreesen2003@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ firstName, lastName, email, phone, message }),
      text: "No text version",
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
