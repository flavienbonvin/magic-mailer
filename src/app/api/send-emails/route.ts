import { getShowById, updateShowStatus } from "@/data/actions/show";
import { ShowStatus } from "@/data/schema";
import { render } from "@react-email/render";

import { getAttendeesForShow } from "@/data/actions/attendees";
import MagicMail from "@/emails/emails/magic-mail";
import { getImageURL } from "@/lib/image";
import { EmailParams, MailerSend, Recipient, Sender } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.MAILER_SEND_API_KEY || "",
});

export async function POST(request: Request) {
  const { showID } = await request.json();
  if (!showID) {
    return Response.json({ error: "Show not found" }, { status: 404 });
  }

  const show = await getShowById(showID);
  const attendees = await getAttendeesForShow(showID);

  const sentFrom = new Sender("info@redcurtain.ch", "Marco Smacchia");
  const emailParams = attendees.map((attendee) => {
    const attendeeName = `${attendee.firstName}`;
    const recipient = new Recipient(attendee.email, attendeeName);

    const emailHtml = render(
      MagicMail({
        attendeeName,
        image1: getImageURL(show?.image1Name),
        image2: getImageURL(show?.image2Name),
      }),
    );

    return new EmailParams()
      .setFrom(sentFrom)
      .setTo([recipient])
      .setSubject("⚠️ A ouvrir à la fin du spectacle ⚠️ - Expérience")
      .setHtml(emailHtml);
  });

  mailerSend.email.sendBulk(emailParams);
  await updateShowStatus(showID, ShowStatus.emailSent);

  return Response.json({});
}
