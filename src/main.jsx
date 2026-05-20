import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const sections = [
  { id: 'news', label: 'News' },
  { id: 'about', label: 'About' },
  { id: 'call-for-papers', label: 'Call for Papers' },
  { id: 'key-dates', label: 'Key Dates' },
  { id: 'invited-speakers', label: 'Invited Speakers' },
  { id: 'organizers', label: 'Organizers' },
];

function Section({ id, title }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`}>{title}</h2>
      <div className="placeholder">Content coming soon.</div>
    </section>
  );
}

function App() {
  return (
    <>
      <header className="site-header">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top">Learning from Situated Interaction</a>
          <div className="nav-links">
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`}>{section.label}</a>
            ))}
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="workshop-title">
          <p className="eyebrow">COLM 2026 Workshop on</p>
          <h1 id="workshop-title">Learning from Situated Interaction</h1>
          <p className="subtitle">Language Models in Situated Worlds</p>
          <p className="meta">October 9, 2026 · San Francisco, CA</p>
        </section>

        {sections.map((section) => (
          <Section key={section.id} id={section.id} title={section.label} />
        ))}
      </main>

      <footer className="footer">
        <p>COLM 2026 Workshop on Learning from Situated Interaction</p>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
