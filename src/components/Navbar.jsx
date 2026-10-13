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
