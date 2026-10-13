import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  // Highlight the nav link for the section currently in view.
  useEffect(() => {
    let frame;
    const updateActiveSection = () => {
      frame = undefined;
      const atBottom = window.scrollY > 0 &&
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      const visibleSection = NAV_ITEMS.filter(({ id }) => {
        const element = document.getElementById(id);
        return element && element.getBoundingClientRect().top <= window.innerHeight * 0.45;
      }).at(-1);
      setActiveSection(atBottom ? "contact" : visibleSection?.id || "");
    };
    const scheduleUpdate = () => {
      if (frame === undefined) frame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className="bar">
      <div className="wrap">
        <a className="brand" href="#top">
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
        </nav>
      </div>
    </header>
  );
};
