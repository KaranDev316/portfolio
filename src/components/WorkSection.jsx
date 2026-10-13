import { Fragment } from "react";

const GITHUB_URL = "https://github.com/KaranDev316";

const PROJECTS = [
  {
    label: "AI \u00b7 Investor tooling",
    title: "VC Intelligence",
    description:
      "Discover startups, enrich company profiles with website data, and evaluate investment fit in one workflow. VC Intelligence helps investors move from company discovery to structured research faster.",
    flowLabel: "Product flow",
    flow: ["Discover startups", "Enrich company data", "Assess investment fit"],
    tags: ["Next.js", "TypeScript"],
    demoUrl: "https://vc-intelligence-gray.vercel.app/",
    sourceUrl: "https://github.com/KaranDev316/VC-Intelligence",
    image: {
      src: "/projects/vc-intelligence.png",
      alt: "VC Intelligence product screenshot: a curated deal pipeline ranking Stripe, Plaid, Merge and Alloy by investment-thesis fit.",
      width: 1600,
      height: 987,
    },
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
    image: {
      src: "/projects/promptsphere.png",
      alt: "PromptSphere landing page: a bold 'Elegant conversations, crafted for clarity' headline beside a dark chat card reading 'AI conversations that feel effortless'.",
      width: 1600,
      height: 984,
    },
    flip: true,
  },
];

export const WorkSection = () => {
  return (
    <section id="work">
      <div className="sec-head">
        <div className="label">Selected work</div>
        <h2>Products I&apos;ve built and explored.</h2>
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
          <div className="mock">
            <img
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              loading="lazy"
              decoding="async"
            />
          </div>
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
