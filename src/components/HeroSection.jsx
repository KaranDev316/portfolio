import { TracePanel } from "./TracePanel";

export const HeroSection = () => {
  return (
    <div className="wrap hero">
      <div>
        <div className="status label">
          <i aria-hidden="true" />
          Open to roles &middot; Ahmedabad, India
        </div>
        <h1>
          I build AI products that <em>ship</em>.
        </h1>
        <p className="lede">
          Software engineer working across <b>Next.js, Node and the OpenAI API</b>. I take an
          idea from a rough prompt to a deployed, fast, readable app, and I care about what
          happens between the request and the response.
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
