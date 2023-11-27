import MagicMail from "@/emails/emails/magic-mail";
import { render } from "@react-email/render";
import { EmailParams, MailerSend, Recipient, Sender } from "mailersend";
import { NextResponse } from "next/server";

const mailerSend = new MailerSend({
  apiKey: process.env.MAILER_SEND_API_KEY || "",
});

export async function GET(request: Request) {
  const emailHtml = render(<MagicMail username="Testing Username" />);

  const sentFrom = new Sender("contact@redcurtain.ch", "Kubus");
  const recipients = [new Recipient("flavien.bonvin@pm.me", "Flavien Bonvin")];

  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setSubject("KBUS")
    .setHtml(emailHtml);

  mailerSend.email.send(emailParams);

  return NextResponse.json({ success: true });
}
