import { NextResponse } from "next/server";
import { upsertSubscriberRecord } from "../../../lib/subscribers";
import { syncEmailToSubstack } from "../../../lib/substack-sync";

export const runtime = "nodejs";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function safeRedirectPath(value) {
  if (typeof value !== "string") return null;
  if (!value.startsWith("/") || value.startsWith("//")) return null;
  return value;
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const email = String(formData.get("email") || "")
      .trim()
      .toLowerCase();
    const redirectPath = safeRedirectPath(formData.get("redirect"));
    const errorPath = redirectPath || "/";

    if (!isValidEmail(email)) {
      return NextResponse.redirect(
        new URL(`${errorPath}?error=1`, request.url)
      );
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

    if (redirectPath) {
      return NextResponse.redirect(
        new URL(`${redirectPath}?unlocked=1&status=${result.status}`, request.url)
      );
    }

    return NextResponse.redirect(
      new URL(`/thanks?status=${result.status}`, request.url)
    );
  } catch {
    return NextResponse.redirect(new URL("/?error=1", request.url));
  }
}
