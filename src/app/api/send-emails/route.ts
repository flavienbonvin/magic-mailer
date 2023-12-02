import { updateShowStatus } from "@/data/actions/show";
import { ShowStatus } from "@/data/schema";

export async function POST(request: Request) {
  const { showID } = await request.json();
  await updateShowStatus(showID, ShowStatus.emailSent);

  return Response.json({});
}
