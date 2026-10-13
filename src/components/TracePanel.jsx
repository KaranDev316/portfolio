import { useEffect, useState } from "react";

// Illustrative request trace for the PromptSphere chat backend.
const ROWS = [
  { label: "client", note: "React + TypeScript UI", left: "0%", width: "2%", ms: "0 ms" },
  { label: "fastapi", note: "validate + route", left: "2%", width: "3%", ms: "6 ms" },
  { label: "openai api", note: "stream completion", left: "5%", width: "80%", ms: "388 ms" },
  { label: "postgresql", note: "save conversation", left: "85%", width: "10%", ms: "14 ms" },
  { label: "response", note: "tokens to client", left: "95%", width: "5%", ms: "\u00a0" },
];

const CYCLE_MS = 800;

export const TracePanel = () => {
  const [activeRow, setActiveRow] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setReducedMotion(query.matches);

    syncMotion();
    query.addEventListener("change", syncMotion);
    return () => query.removeEventListener("change", syncMotion);
  }, []);

  useEffect(() => {
    if (reducedMotion) return undefined;

    const timer = setInterval(() => {
      setActiveRow((prev) => (prev + 1) % (ROWS.length + 1));
    }, CYCLE_MS);

    return () => clearInterval(timer);
  }, [reducedMotion]);

  return (
    <div className="trace" role="group" aria-label="Example request trace through an AI chat backend">
      <div className="trace-head">
        <span className="lights" aria-hidden="true">
          <i /><i /><i />
        </span>
        <span>
          <b>POST</b> /api/chat
        </span>
        <span>example trace</span>
      </div>

      <div className="rows">
        {ROWS.map((row, index) => (
          <div
            key={row.label}
            className={reducedMotion || activeRow === index ? "row on" : "row"}
          >
            <span className="dot" />
            <span>
              {row.label}
              <small>{row.note}</small>
            </span>
            <span className="bar-t">
              <b style={{ left: row.left, width: row.width }} />
            </span>
            <span className="ms">{row.ms}</span>
          </div>
        ))}
      </div>

      <div className="trace-foot">
        <span className="ok">200 OK</span>
        <span>total 408 ms &middot; illustrative</span>
      </div>
    </div>
  );
};
