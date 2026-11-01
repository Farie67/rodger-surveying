import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

type EnquiryPayload = {
  fullName?: unknown;
  companyName?: unknown;
  phone?: unknown;
  email?: unknown;
  province?: unknown;
  town?: unknown;
  serviceRequired?: unknown;
  projectSize?: unknown;
  description?: unknown;
  commencementDate?: unknown;
  additionalRequirements?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+()\d\s-]{7,30}$/;

function asTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

async function generateUniqueReference() {
  const year = new Date().getFullYear();

  for (let attempt = 0; attempt < 12; attempt += 1) {
    const reference = `RS-${year}-${Math.floor(1000 + Math.random() * 9000)}`;
    const existing = await prisma.enquiry.findUnique({
      where: { reference },
      select: { id: true },
    });

    if (!existing) return reference;
  }

  return `RS-${year}-${Date.now().toString().slice(-6)}`;
}

export async function POST(request: Request) {
  let payload: EnquiryPayload;

  try {
    payload = (await request.json()) as EnquiryPayload;
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const data = {
    fullName: asTrimmedString(payload.fullName),
    companyName: asTrimmedString(payload.companyName) || null,
    phone: asTrimmedString(payload.phone),
    email: asTrimmedString(payload.email).toLowerCase(),
    province: asTrimmedString(payload.province),
    town: asTrimmedString(payload.town),
    serviceRequired: asTrimmedString(payload.serviceRequired),
    projectSize: asTrimmedString(payload.projectSize),
    description: asTrimmedString(payload.description),
    commencementDate: asTrimmedString(payload.commencementDate),
    additionalRequirements:
      asTrimmedString(payload.additionalRequirements) || null,
  };

  const fieldErrors: Record<string, string> = {};

  if (data.fullName.length < 2) {
    fieldErrors.fullName = "Please provide your full name.";
  }
  if (data.phone.length < 7) {
    fieldErrors.phone = "Please provide a valid phone number.";
  } else if (!phonePattern.test(data.phone)) {
    fieldErrors.phone = "Please provide a valid phone number.";
  }
  if (!emailPattern.test(data.email)) {
    fieldErrors.email = "Please provide a valid email address.";
  }
  if (!data.province) {
    fieldErrors.province = "Please select a province.";
  }
  if (!data.town) {
    fieldErrors.town = "Please provide a town or location.";
  }
  if (!data.serviceRequired) {
    fieldErrors.serviceRequired = "Please select a service.";
  }
  if (!data.projectSize) {
    fieldErrors.projectSize = "Please provide an approximate project size.";
  }
  if (!data.commencementDate) {
    fieldErrors.commencementDate = "Please provide a commencement date.";
  }
  if (data.description.length < 10) {
    fieldErrors.description = "Please describe your project in a little more detail.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json(
      {
        error: "Please check the highlighted fields and try again.",
        fieldErrors,
      },
      { status: 400 },
    );
  }

  try {
    const reference = await generateUniqueReference();
    const enquiry = await prisma.enquiry.create({
      data: {
        ...data,
        reference,
        status: "New",
      },
      select: {
        id: true,
        reference: true,
        createdAt: true,
      },
    });

    return NextResponse.json(
      {
        success: true,
        reference: enquiry.reference,
        id: enquiry.id,
        createdAt: enquiry.createdAt,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Failed to create enquiry:", error);

    return NextResponse.json(
      {
        error:
          "We could not save your enquiry right now. Please try again or call +263 774 769 799.",
      },
      { status: 500 },
    );
  }
}
