import { updateShowStatus } from "@/data/actions/show";

export async function POST(request: Request) {
  const { showID, status } = await request.json();
  if (!showID) {
    return Response.json({ error: "Show not found" }, { status: 404 });
  }

  await updateShowStatus(showID, status);
  return Response.json({});
}
