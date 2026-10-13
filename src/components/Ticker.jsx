const CORE_STACK = [
  "TypeScript",
  "React",
  "Python",
  "FastAPI",
  "PostgreSQL",
];

export const Ticker = () => {
  return (
    <div className="ticker ticker-wrap">
      <div className="wrap" role="group" aria-label="Core stack">
        {CORE_STACK.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
};
