"use client";
import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "919305266247"; // Vinay's WhatsApp

export default function HireModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    type: "Full-time Role",
    message: "",
  });

  // lock body scroll + close on Escape
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = () => {
    if (!form.name.trim() || !form.message.trim()) {
      alert("Please fill in your name and a short message.");
      return;
    }
    const text =
      `👋 Hi Vinay! New enquiry from your portfolio:\n\n` +
      `🙍 Name: ${form.name}\n` +
      (form.company ? `🏢 Company: ${form.company}\n` : "") +
      (form.email ? `✉️ Email: ${form.email}\n` : "") +
      `💼 Regarding: ${form.type}\n\n` +
      `📝 Message:\n${form.message}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener"
    );
    onClose();
  };

  return (
    <div className={`modal-overlay ${open ? "open" : ""}`} onClick={onClose}>
      <div className="modal" style={{ position: "relative" }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" aria-label="Close" onClick={onClose}>✕</button>
        <h3>Let&apos;s work <span className="gradient-text">together</span> 🚀</h3>
        <p className="sub">
          Fill in the details below — it opens WhatsApp with your message ready to
          send directly to me. I usually reply within a few hours.
        </p>

        <div className="field">
          <label>Your Name *</label>
          <input value={form.name} onChange={set("name")} placeholder="e.g. Rahul Sharma" />
        </div>
        <div className="field">
          <label>Company / Organization</label>
          <input value={form.company} onChange={set("company")} placeholder="e.g. Acme Technologies" />
        </div>
        <div className="field">
          <label>Your Email</label>
          <input type="email" value={form.email} onChange={set("email")} placeholder="e.g. rahul@company.com" />
        </div>
        <div className="field">
          <label>I&apos;m reaching out about</label>
          <select value={form.type} onChange={set("type")}>
            <option>Full-time Role</option>
            <option>Freelance Project</option>
            <option>Internship / Contract</option>
            <option>Collaboration</option>
            <option>Something else</option>
          </select>
        </div>
        <div className="field">
          <label>Message *</label>
          <textarea
            value={form.message}
            onChange={set("message")}
            placeholder="Tell me a bit about the role or project..."
          />
        </div>

        <button className="btn btn-wa" onClick={submit}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.11 3.22 5.1 4.51.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35M12.05 21.79h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.72.98.99-3.63-.23-.37a9.8 9.8 0 0 1-1.5-5.22c0-5.42 4.41-9.83 9.84-9.83a9.78 9.78 0 0 1 9.83 9.84c0 5.42-4.41 9.83-9.84 9.83m8.37-18.2A11.71 11.71 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.87 11.87 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.49-8.4"/></svg>
          Send on WhatsApp
        </button>
        <p className="modal-note">Opens WhatsApp with your message pre-filled — just hit send. ✅</p>
      </div>
    </div>
  );
}
