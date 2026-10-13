import { useEffect, useRef, useState } from "react";

const EMAIL = "alfredm1605@gmail.com";

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/alfred-mtambalika/" },
  { label: "GitHub", href: "https://github.com/KaranDev316" },
  { label: "Twitter", href: "https://x.com/A_Mtambalika" },
  { label: "Instagram", href: "https://www.instagram.com/karanlicka" },
];

export const ContactSection = () => {
  const [copyLabel, setCopyLabel] = useState("copy");
  const [copyStatus, setCopyStatus] = useState("");
  const resetTimer = useRef(null);
  const copyRequest = useRef(0);

  useEffect(() => () => {
    clearTimeout(resetTimer.current);
    copyRequest.current += 1;
  }, []);

  const handleCopy = async () => {
    clearTimeout(resetTimer.current);
    const request = ++copyRequest.current;
    setCopyLabel("copy");
    setCopyStatus("");

    try {
      await navigator.clipboard.writeText(EMAIL);
      if (request !== copyRequest.current) return;
      setCopyLabel("copied");
      setCopyStatus("Email address copied to clipboard.");
      resetTimer.current = setTimeout(() => setCopyLabel("copy"), 1400);
    } catch {
      if (request !== copyRequest.current) return;
      setCopyLabel("select text");
      setCopyStatus("Could not copy the email address. Select and copy the displayed email address manually.");
    }
  };

  return (
    <section className="closing" id="contact" aria-labelledby="contact-heading">
      <div className="label">Contact</div>
      <h2 id="contact-heading">Open to software engineering roles.</h2>
      <p>
        If you&apos;re hiring, or have a project that needs an engineer who ships, email is the
        quickest way to reach me.
      </p>
      <div className="mail">
        <code>{EMAIL}</code>
        <button
          className="copy"
          type="button"
          aria-label="Copy email address to clipboard"
          onClick={handleCopy}
        >
          {copyLabel}
        </button>
      </div>
      <span className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {copyStatus}
      </span>
      <div className="social">
        {SOCIALS.map((item) => (
          <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
            {item.label}
          </a>
        ))}
      </div>
    </section>
  );
};
