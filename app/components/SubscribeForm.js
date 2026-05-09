"use client";

import { useState } from "react";

const SUBSTACK_SUBSCRIBE_URL = "https://kevinkennethlau.substack.com/subscribe";

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function SubscribeForm({
  buttonLabel = "Subscribe",
  onSubscribe,
  className = "",
}) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const trimmed = email.trim();
    if (!isValidEmail(trimmed)) {
      setError("Enter a valid email address.");
      return;
    }
    setError(null);

    const url = `${SUBSTACK_SUBSCRIBE_URL}?email=${encodeURIComponent(trimmed)}`;
    window.open(url, "_blank", "noopener,noreferrer");

    if (onSubscribe) {
      onSubscribe(trimmed);
    }
  }

  return (
    <form className={`signup ${className}`} onSubmit={handleSubmit} noValidate>
      <label htmlFor="subscribe-email" className="visually-hidden">
        Work email
      </label>
      <input
        id="subscribe-email"
        name="email"
        type="email"
        placeholder="you@workemail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">{buttonLabel}</button>
      {error && (
        <p className="error" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
