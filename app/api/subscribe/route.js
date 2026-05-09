import { NextResponse } from "next/server";
import { upsertSubscriberRecord } from "../../../lib/subscribers";
import { syncEmailToSubstack } from "../../../lib/substack-sync";

export const runtime = "nodejs";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const email = String(formData.get("email") || "")
      .trim()
      .toLowerCase();

    if (!isValidEmail(email)) {
      return NextResponse.redirect(new URL("/?error=1", request.url));
    }

    await upsertSubscriberRecord({ email, status: "pending" });

    const result = await syncEmailToSubstack({
      email,
      userAgent: request.headers.get("user-agent") || "",
    });

    await upsertSubscriberRecord({
      email,
      status: result.status,
      errorMessage: result.errorMessage,
    });

    return NextResponse.redirect(
      new URL(`/thanks?status=${result.status}`, request.url)
    );
  } catch {
    return NextResponse.redirect(new URL("/?error=1", request.url));
  }
}
