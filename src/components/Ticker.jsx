const CORE_STACK = [
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "OpenAI API",
  "Tailwind CSS",
];

export const Ticker = () => {
  return (
    <div className="ticker ticker-wrap">
      <div className="wrap" aria-label="Core stack">
        {CORE_STACK.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
};
