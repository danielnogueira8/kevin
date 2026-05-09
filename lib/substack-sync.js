const publicationUrl =
  process.env.SUBSTACK_PUBLICATION_URL ||
  "https://kevinkennethlau.substack.com";

const configuredAction = process.env.SUBSTACK_FORM_ACTION || "";

function normalizeBaseUrl(url) {
  return String(url || "").replace(/\/+$/, "");
}

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function buildCandidateActions(baseUrl) {
  if (configuredAction) {
    return [configuredAction];
  }

  return [`${baseUrl}/api/v1/free?nojs=true`, `${baseUrl}/api/v1/free`];
}

export async function syncEmailToSubstack({
  email,
  userAgent,
  maxAttempts = 3,
}) {
  const baseUrl = normalizeBaseUrl(publicationUrl);

  if (!baseUrl || baseUrl.includes("YOUR_SUBSTACK")) {
    return {
      status: "failed",
      errorMessage:
        "Invalid Substack configuration. Set SUBSTACK_PUBLICATION_URL in .env.local.",
    };
  }

  const candidateActions = buildCandidateActions(baseUrl);
  let lastError = "Unknown sync error";

  for (const actionUrl of candidateActions) {
    for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
      try {
        const body = new URLSearchParams();
        body.set("email", email);
        body.set("source", "embed");
        body.set("first_url", `${baseUrl}/embed`);
        body.set("current_url", `${baseUrl}/embed`);
        body.set("first_referrer", baseUrl);
        body.set("current_referrer", baseUrl);
        body.set("first_session_url", `${baseUrl}/embed`);
        body.set("first_session_referrer", baseUrl);

        const response = await fetch(actionUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Origin: baseUrl,
            Referer: `${baseUrl}/embed`,
            "User-Agent": userAgent || "Mozilla/5.0",
          },
          body: body.toString(),
          cache: "no-store",
        });

        if (response.ok) {
          return { status: "synced", errorMessage: null };
        }

        const responseText = await response.text();
        lastError = `HTTP ${response.status} at ${actionUrl}: ${responseText.slice(
          0,
          180
        )}`;
      } catch (error) {
        lastError = error instanceof Error ? error.message : "Network error";
      }

      if (attempt < maxAttempts) {
        await wait(350 * attempt);
      }
    }
  }

  return { status: "failed", errorMessage: lastError };
}
