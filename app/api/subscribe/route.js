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
  let redirectPath = null;
  try {
    const formData = await request.formData();
    const email = String(formData.get("email") || "")
      .trim()
      .toLowerCase();
    redirectPath = safeRedirectPath(formData.get("redirect"));
    const errorPath = redirectPath || "/";

    if (!isValidEmail(email)) {
      return NextResponse.redirect(
        new URL(`${errorPath}?error=1`, request.url)
      );
    }

    await upsertSubscriberRecord({ email, status: "pending" });

    let result;
    try {
      result = await syncEmailToSubstack({
        email,
        userAgent: request.headers.get("user-agent") || "",
      });
    } catch (syncError) {
      console.error("[subscribe] substack sync threw:", syncError);
      result = {
        status: "failed",
        errorMessage:
          syncError instanceof Error ? syncError.message : "sync threw",
      };
    }

    if (result.status !== "synced") {
      console.warn("[subscribe] substack sync not synced:", result);
    }

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
  } catch (error) {
    console.error("[subscribe] route handler error:", error);
    const errorPath = redirectPath || "/";
    return NextResponse.redirect(new URL(`${errorPath}?error=1`, request.url));
  }
}
