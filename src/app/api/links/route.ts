import { NextResponse } from "next/server";
import { MOCK_LINKS, MOCK_PROFILE_DATA } from "@/data/mockData";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const all = searchParams.get("all");

  const links = all === "true" 
    ? MOCK_LINKS 
    : MOCK_LINKS.filter((link) => link.isActive);

  return NextResponse.json({
    profile: MOCK_PROFILE_DATA.profile,
    socialLinks: MOCK_PROFILE_DATA.socialLinks,
    links,
  });
}
