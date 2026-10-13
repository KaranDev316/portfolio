export const AboutSection = () => {
  return (
    <section id="about">
      <div className="sec-head">
        <div className="label">About</div>
        <h2>I learn fast, iterate quickly, and think like an engineer.</h2>
      </div>
      <div className="about-grid">
        <div className="label" />
        <div className="about-body">
          <p>
            I build and ship real-world web applications through projects and hackathons,
            focusing on performance, scalability and reliable user experiences. I like complex
            problems, and I keep learning new technology so what I build stays current.
          </p>
          <div className="facts">
            <div className="fact">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
              </svg>
              <h3>Scalable applications</h3>
              <p>Production-ready apps with clean architecture and room to grow.</p>
            </div>
            <div className="fact">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 12h4l3-8 4 16 3-8h4" />
              </svg>
              <h3>Performance and system design</h3>
              <p>Efficient data flow, caching strategies and real-time systems.</p>
            </div>
            <div className="fact">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <h3>AI-powered features</h3>
              <p>Intelligent apps that use AI to solve a real problem for a real user.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
