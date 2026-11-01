import { NextResponse } from "next/server";

import { createAdminSession, isValidAdminPassword } from "@/lib/admin-auth";

export async function POST(request: Request) {
  const formData = await request.formData();
  const password = String(formData.get("password") ?? "");

  if (!isValidAdminPassword(password)) {
    return NextResponse.redirect(
      new URL("/admin/login?error=1", request.url),
      { status: 303 },
    );
  }

  await createAdminSession();

  return NextResponse.redirect(new URL("/admin", request.url), {
    status: 303,
  });
}
