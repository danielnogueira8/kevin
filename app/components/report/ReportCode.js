"use client";

import { useState } from "react";

/** A prompt or file tree in a monospace panel, with one click to copy it.
 *  `pre` keeps lines unwrapped (file trees), so columns stay aligned. */
export default function ReportCode({ label, text, pre = false }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard blocked (http, old browser): the text is still selectable.
    }
  }

  return (
    <figure className="rp-code">
      <figcaption className="rp-code-bar">
        <span className="rp-code-label">{label || "Copy this"}</span>
        <button type="button" onClick={copy} className="rp-code-copy">
          {copied ? "✓ Copied" : "Copy"}
        </button>
      </figcaption>
      <pre className={`rp-code-body${pre ? " rp-code-body--pre" : ""}`}>{text}</pre>
    </figure>
  );
}
