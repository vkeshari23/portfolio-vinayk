"use client";
import { useState } from "react";

/**
 * Shown on project cards whose live demo sits behind a login, so a reviewer can
 * get in without creating an account. Only ever point this at a throwaway demo
 * account seeded with dummy data — never a real user or client account.
 */
export default function DemoCreds({ email, password, note }) {
  const [status, setStatus] = useState(null); // { field, ok }

  const copy = async (field, value) => {
    let ok = false;
    try {
      await navigator.clipboard.writeText(value);
      ok = true;
    } catch {
      // Clipboard API can be denied (older browsers, non-secure context, or a
      // user permission block) — fall back to the legacy selection copy.
      try {
        const ta = document.createElement("textarea");
        ta.value = value;
        ta.style.cssText = "position:fixed;top:-9999px;opacity:0";
        document.body.appendChild(ta);
        ta.select();
        ok = document.execCommand("copy");
        ta.remove();
      } catch {
        ok = false;
      }
    }
    // Always give feedback, even on failure — the value is on screen to copy by hand.
    setStatus({ field, ok });
    setTimeout(() => setStatus(null), 1800);
  };

  return (
    <div className="demo-creds">
      <div className="demo-creds-head">🔑 Demo login — no signup needed</div>
      {[["Email", email], ["Password", password]].map(([field, value]) => (
        <div className="demo-row" key={field}>
          <span className="demo-label">{field}</span>
          <code>{value}</code>
          <button
            type="button"
            className="demo-copy"
            onClick={() => copy(field, value)}
            aria-label={`Copy ${field.toLowerCase()}`}
          >
            {status?.field !== field ? "Copy" : status.ok ? "Copied ✓" : "Select it"}
          </button>
        </div>
      ))}
      {note ? <p className="demo-note">{note}</p> : null}
    </div>
  );
}
