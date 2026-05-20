import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const pages = {
  "/": "Learning from Situated Interaction",
  "/cfp/": "Call for Papers",
  "/schedule/": "Schedule",
  "/speakers/": "Speakers",
  "/organizers/": "Organizers",
  "/submissions/": "Submissions",
  "/contact/": "Contact",
};

function normalizePath(pathname) {
  if (pathname !== "/" && !pathname.endsWith("/")) return `${pathname}/`;
  return pathname;
}

function App() {
  const path = normalizePath(window.location.pathname);
  const title = pages[path] || "Page Not Found";

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="site-title" href="/">Learning from Situated Interaction</a>
        <nav aria-label="Main navigation">
          <a href="/cfp/">CFP</a>
          <a href="/schedule/">Schedule</a>
          <a href="/speakers/">Speakers</a>
          <a href="/organizers/">Organizers</a>
          <a href="/submissions/">Submissions</a>
          <a href="/contact/">Contact</a>
        </nav>
      </header>

      <section className="page-title">
        <p>COLM 2026 Workshop</p>
        <h1>{title}</h1>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
