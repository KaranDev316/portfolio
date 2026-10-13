import { useState } from "react";

const EMAIL = "alfredm1605@gmail.com";

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/alfred-mtambalika/" },
  { label: "GitHub", href: "https://github.com/KaranDev316" },
  { label: "Twitter", href: "https://x.com/A_Mtambalika" },
  { label: "Instagram", href: "https://www.instagram.com/karanlicka" },
];

export const ContactSection = () => {
  const [copyLabel, setCopyLabel] = useState("copy");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopyLabel("copied");
      setTimeout(() => setCopyLabel("copy"), 1400);
    } catch (error) {
      setCopyLabel("select text");
    }
  };

  return (
    <div className="closing" id="contact">
      <div className="label">Contact</div>
      <h2>Open to software engineering roles.</h2>
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
      <div className="social">
        {SOCIALS.map((item) => (
          <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};
