"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { clearAdminSession, requireAdmin } from "@/lib/admin-auth";
import { isEnquiryStatus } from "@/lib/admin";
import { prisma } from "@/lib/prisma";

export async function logoutAction() {
  await clearAdminSession();
  redirect("/admin/login");
}

export async function updateEnquiryStatusAction(formData: FormData) {
  await requireAdmin();

  const id = String(formData.get("id") ?? "").trim();
  const status = String(formData.get("status") ?? "").trim();

  if (!id) {
    redirect("/admin");
  }

  if (!isEnquiryStatus(status)) {
    redirect(`/admin/enquiries/${id}?error=invalid-status`);
  }

  try {
    await prisma.enquiry.update({
      where: { id },
      data: { status },
    });
  } catch {
    redirect(`/admin/enquiries/${id}?error=update-failed`);
  }

  revalidatePath("/admin");
  revalidatePath(`/admin/enquiries/${id}`);
  redirect(`/admin/enquiries/${id}?updated=1`);
}
