import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <main className="wrap">
      <section aria-labelledby="not-found-heading">
        <h1 id="not-found-heading">Page not found</h1>
        <p className="lede">
          This page doesn&apos;t exist. Return to the portfolio to explore my work or get in touch.
        </p>
        <Link className="btn" to="/">Back to home</Link>
      </section>
    </main>
  );
};
