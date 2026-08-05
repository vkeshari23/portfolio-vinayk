export const RESUME_URL = "/Vinay_Keshari_Resume.pdf";
export const RESUME_FILENAME = "Vinay_Keshari_Resume.pdf";

/**
 * Fires the download while the anchor's own target="_blank" opens the preview
 * tab — so one click both opens the resume and saves a copy.
 * Never call preventDefault here: the native click is what opens the new tab.
 */
export function downloadResume() {
  const a = document.createElement("a");
  a.href = RESUME_URL;
  a.download = RESUME_FILENAME;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
}
