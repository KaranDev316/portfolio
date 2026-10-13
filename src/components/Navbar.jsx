import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
];

const THEME_MODES = ["auto", "light", "dark"];

const getStoredTheme = () => {
  try {
    const stored = localStorage.getItem("theme");
    if (THEME_MODES.includes(stored)) return stored;
  } catch (error) {
    // localStorage may be unavailable (private mode, blocked cookies)
  }
  return "auto";
};

export const Navbar = () => {
  const [mode, setMode] = useState(getStoredTheme);
  const [activeSection, setActiveSection] = useState("");

  // Apply the selected theme to the document root and persist it.
  useEffect(() => {
    const root = document.documentElement;
    if (mode === "auto") {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", mode);
    }
    try {
      localStorage.setItem("theme", mode);
    } catch (error) {
      // ignore write failures
    }
  }, [mode]);

  // Highlight the nav link for the section currently in view.
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const cycleTheme = () =>
    setMode((prev) => THEME_MODES[(THEME_MODES.indexOf(prev) + 1) % THEME_MODES.length]);

  return (
    <header className="bar">
      <div className="wrap">
        <a className="brand" href="#top">
          <i aria-hidden="true" />
          Alfred Mtambalika
        </a>
        <nav aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={activeSection === item.id ? "true" : "false"}
            >
              {item.label}
            </a>
          ))}
          <button
            className="theme"
            type="button"
            aria-label="Switch colour theme"
            onClick={cycleTheme}
          >
            theme: {mode}
          </button>
        </nav>
      </div>
    </header>
  );
};
