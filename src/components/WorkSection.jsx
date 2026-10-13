import { Fragment } from "react";

const GITHUB_URL = "https://github.com/KaranDev316";

const PROJECTS = [
  {
    label: "AI \u00b7 Investor tooling",
    title: "VC Intelligence",
    description:
      "An AI-powered discovery platform for investors. It finds companies, enriches them with live data and scores investment fit, all in one interface.",
    flowLabel: "Product flow",
    flow: ["Search", "Enrich with live data", "Score fit"],
    tags: ["Next.js", "TypeScript"],
    demoUrl: "https://vc-intelligence-gray.vercel.app/",
    sourceUrl: "https://github.com/KaranDev316/VC-Intelligence",
    mock: "dark",
    flip: false,
  },
  {
    label: "AI \u00b7 Chat workspace",
    title: "PromptSphere",
    description:
      "A fast, minimal AI chat workspace designed for clean, secure and distraction-free conversations.",
    flowLabel: "Architecture",
    flow: ["React", "Express API", "OpenAI API", "MongoDB"],
    tags: ["React", "Node.js", "Express", "MongoDB", "OpenAI API"],
    demoUrl: "https://prompt-sphere-gules.vercel.app/",
    sourceUrl: "https://github.com/KaranDev316/PromptSphere",
    mock: "light",
    flip: true,
  },
];

// Renders the product mockup for a project. Kept as a plain render helper
// (rather than a component) so it can take two simple arguments without
// needing prop-type declarations.
const renderMockup = (variant, title) => {
  if (variant === "dark") {
    return (
      <div className="mock dark" role="img" aria-label={`Illustration of the ${title} landing page`}>
        <div className="chrome">
          <span className="d">
            <i /><i /><i />
          </span>
          <span className="u">vc-intelligence</span>
        </div>
        <div className="vc">
          <h4>Meet the startups worth funding&mdash;instantly</h4>
          <div className="sub" />
          <div className="sub s" />
          <div className="b">
            <i /><i />
          </div>
          <div className="res">
            <div>
              <em />
              <span />
              <b />
            </div>
            <div>
              <em />
              <span />
              <b style={{ width: "70%" }} />
            </div>
            <div>
              <em />
              <span />
              <b style={{ width: "45%" }} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mock light" role="img" aria-label={`Illustration of the ${title} landing page`}>
      <div className="chrome">
        <span className="d">
          <i /><i /><i />
        </span>
        <span className="u">promptsphere</span>
      </div>
      <div className="ps">
        <div>
          <div className="k">PROMPTSPHERE</div>
          <h4>Elegant conversations, crafted for clarity.</h4>
          <div className="l" />
          <div className="l s" />
          <div className="b">
            <i /><i />
          </div>
        </div>
        <div className="card">
          <p>AI conversations that feel effortless.</p>
          <div>
            <div className="m" />
            <div className="m" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const WorkSection = () => {
  return (
    <section id="work">
      <div className="sec-head">
        <div className="label">Selected work</div>
        <h2>Two products, built end to end.</h2>
      </div>

      {PROJECTS.map((project) => (
        <article key={project.title} className={project.flip ? "case flip" : "case"}>
          <div className="case-text">
            <span className="label">{project.label}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="flow" aria-label={project.flowLabel}>
              {project.flow.map((step, index) => (
                <Fragment key={step}>
                  {index > 0 && <span className="arrow">&rarr;</span>}
                  <span>{step}</span>
                </Fragment>
              ))}
            </div>
            <ul className="tags">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <div className="links">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} live demo`}
              >
                Live demo {"\u2197"}
              </a>
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} source code`}
              >
                Source
              </a>
            </div>
          </div>
          {renderMockup(project.mock, project.title)}
        </article>
      ))}

      <div>
        <a className="btn alt" href={GITHUB_URL} target="_blank" rel="noreferrer">
          More on GitHub {"\u2197"}
        </a>
      </div>
    </section>
  );
};
