"use client";
import { RESUME_URL, downloadResume } from "./resume";

/**
 * Renders the real PDF instead of a screenshot, so the preview can never fall
 * out of sync with the file that actually gets downloaded. Mobile browsers
 * handle inline PDFs poorly, so they get a tap-to-open card instead — the
 * swap is done in CSS so it works before (and without) hydration.
 */
export default function ResumePreview() {
  return (
    <div className="resume-frame">
      <iframe
        className="resume-embed"
        title="Vinay Keshari — resume preview"
        src={`${RESUME_URL}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
      />

      <a
        className="resume-embed fallback"
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={downloadResume}
      >
        <span className="fallback-ico">📄</span>
        <b>Vinay_Keshari_Resume.pdf</b>
        <span className="fallback-sub">Tap to open &amp; download</span>
      </a>

      <a
        className="frame-open"
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={downloadResume}
      >
        Open Full Resume →
      </a>
    </div>
  );
}
