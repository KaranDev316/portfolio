const TIERS = [
  {
    label: "Tier 1",
    title: "Core stack",
    note: "The technologies at the center of my development journey.",
    chips: ["TypeScript", "React", "Python", "FastAPI", "PostgreSQL"],
    strong: true,
  },
  {
    label: "Tier 2",
    title: "Additional technologies",
    note: "Tools I've worked with across projects and coursework.",
    chips: [
      "HTML / CSS",
      "Tailwind CSS",
      "JavaScript",
      "Node.js",
      "Express",
      "REST APIs",
      "MongoDB",
      "MySQL",
      "Java",
    ],
    strong: false,
  },
];

export const StackSection = () => {
  return (
    <section id="stack">
      <div className="sec-head">
        <div className="label">Stack</div>
        <h2>The technologies I use to build software.</h2>
      </div>
      <div className="tiers">
        {TIERS.map((tier) => (
          <div key={tier.label} className={tier.strong ? "tier strong" : "tier"}>
            <div>
              <div className="label">{tier.label}</div>
              <h3>{tier.title}</h3>
              <p>{tier.note}</p>
            </div>
            <ul className="chips">
              {tier.chips.map((chip) => (
                <li key={chip}>{chip}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
