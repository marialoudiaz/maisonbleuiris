import { NextResponse } from "next/server";

export const GET = async () => {
  const content = `
User-agent: *
Disallow: /admin
Sitemap: ${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml
  `;
  return new NextResponse(content, {
    headers: { "Content-Type": "text/plain" },
  });
};
