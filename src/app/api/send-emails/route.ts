import { updateShowStatus } from "@/data/actions/show";
import { Attendee, ShowStatus } from "@/data/schema";
import { render } from "@react-email/render";

import MagicMail from "@/emails/emails/magic-mail";
import { getImageURL } from "@/lib/image";
import { EmailParams, MailerSend, Recipient, Sender } from "mailersend";

export const maxDuration = 300;

const mailerSend = new MailerSend({
  apiKey: process.env.MAILER_SEND_API_KEY || "",
});

export async function POST(request: Request) {
  console.time("send-emails");
  const { showID, attendees, image1Name, image2Name } = await request.json();
  if (!showID || !attendees || !image1Name || !image2Name) {
    return Response.json({ error: "Show not found" }, { status: 404 });
  }

  const sentFrom = new Sender("info@redcurtain.ch", "Marco Smacchia");
  console.time("emailParams");
  const emailHtml = render(
    MagicMail({
      image1: getImageURL(image1Name),
      image2: getImageURL(image2Name),
    }),
  );

  const emailParams = attendees.map((attendee: Attendee) => {
    const attendeeName = attendee.firstName ?? undefined;
    const recipient = new Recipient(attendee.email, attendeeName);
    return new EmailParams()
      .setFrom(sentFrom)
      .setTo([recipient])
      .setSubject("⚠️ A ouvrir à la fin du spectacle ⚠️ - Expérience")
      .setHtml(emailHtml);
  });
  console.timeEnd("emailParams");

  console.time("sendBulk");
  mailerSend.email.sendBulk(emailParams);
  console.timeEnd("sendBulk");

  console.time("updateShowStatus");
  await updateShowStatus(showID, ShowStatus.emailSent);
  console.timeEnd("updateShowStatus");

  console.timeEnd("send-emails");
  return Response.json({});
}
