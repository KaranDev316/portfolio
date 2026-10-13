const TIERS = [
  {
    label: "Tier 1",
    title: "Daily drivers",
    note: "Where I move fastest.",
    chips: ["HTML / CSS", "Tailwind CSS", "TypeScript", "JavaScript", "Node.js"],
    strong: true,
  },
  {
    label: "Tier 2",
    title: "Working knowledge",
    note: "Used on real projects.",
    chips: ["React", "Express", "REST APIs", "MongoDB", "Python", "Java", "MySQL"],
    strong: false,
  },
];

export const StackSection = () => {
  return (
    <section id="stack">
      <div className="sec-head">
        <div className="label">Stack</div>
        <h2>What I reach for first, and what I&apos;m still growing into.</h2>
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
