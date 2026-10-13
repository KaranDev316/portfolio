import { TracePanel } from "./TracePanel";

export const HeroSection = () => {
  return (
    <div className="wrap hero">
      <div>
        <h1>
          I build software that solves <em>real problems</em>.
        </h1>
        <p className="lede">
          I build practical web applications, backend systems, and AI-powered features,{" "}
          <b>from the first idea to deployment</b>.
        </p>
        <div className="cta">
          <a className="btn" href="#work">
            See the work
          </a>
          <a className="btn alt" href="#contact">
            Get in touch
          </a>
        </div>
      </div>

      <TracePanel />
    </div>
  );
};
