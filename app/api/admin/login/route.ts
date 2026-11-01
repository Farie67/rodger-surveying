import { NextResponse } from "next/server";

import { createAdminSession, isValidAdminPassword } from "@/lib/admin-auth";

function firstHeaderValue(value: string | null) {
  return value?.split(",")[0]?.trim() || null;
}

/**
 * Build the public origin behind a reverse proxy such as Render.
 *
 * `request.url` can contain the internal bind address (for example
 * localhost:10000). Forwarded headers preserve the hostname the browser
 * actually used, so redirects stay on the public domain.
 */
function getPublicOrigin(request: Request) {
  const requestUrl = new URL(request.url);
  const forwardedHost = firstHeaderValue(
    request.headers.get("x-forwarded-host"),
  );
  const host = forwardedHost ?? firstHeaderValue(request.headers.get("host"));
  const forwardedProtocol = firstHeaderValue(
    request.headers.get("x-forwarded-proto"),
  )?.toLowerCase();
  const protocol =
    forwardedProtocol === "http" || forwardedProtocol === "https"
      ? forwardedProtocol
      : requestUrl.protocol.replace(":", "");

  if (!host) {
    return requestUrl.origin;
  }

  // Reject malformed host values before placing them in a Location header.
  try {
    const parsed = new URL(`${protocol}://${host}`);
    return parsed.origin;
  } catch {
    return requestUrl.origin;
  }
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const password = String(formData.get("password") ?? "");
  const origin = getPublicOrigin(request);

  if (!isValidAdminPassword(password)) {
    return NextResponse.redirect(
      new URL("/admin/login?error=1", origin),
      { status: 303 },
    );
  }

  await createAdminSession();

  return NextResponse.redirect(new URL("/admin", origin), {
    status: 303,
  });
}
