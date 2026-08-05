"use client";
import { RESUME_URL, downloadResume } from "./resume";

/**
 * Every resume control on the site behaves identically: one click opens the PDF
 * in a new tab AND saves a copy. target="_blank" does the opening, downloadResume
 * does the saving. A `download` attribute is deliberately NOT used here — it
 * would suppress the new tab and only save the file.
 */
export default function ResumeButtons() {
  return (
    <div className="resume-actions">
      <a
        className="btn btn-primary"
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={downloadResume}
      >
        <span className="dl-ico">⬇</span> Download Resume
      </a>
      <a
        className="btn btn-ghost"
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={downloadResume}
      >
        👁 View Online
      </a>
    </div>
  );
}
