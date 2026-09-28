import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { PAPERS } from './papers';

const WORKSHOP_NAME = "Learning from Situated and Embodied Interaction";

const sections = [
  { id: 'about', label: 'About' },
  { id: 'schedule', label: 'Schedule' },
  { id: 'speakers', label: 'Speakers' },
  { id: 'organizers', label: 'Organizers' },
  { id: 'papers', label: 'Papers' },
  { id: 'dates', label: 'Dates' },
];

const PAPER_TABS = [
  { id: 'accepted', label: 'Accepted Papers' },
  { id: 'cfp', label: 'Call for Papers' },
];

function tabFromHash() {
  return window.location.hash === '#cfp' ? 'cfp' : 'accepted';
}

function App() {
  const [paperTab, setPaperTab] = useState(tabFromHash);

  useEffect(() => {
    const onHash = () => {
      if (['#papers', '#accepted-papers', '#cfp'].includes(window.location.hash)) setPaperTab(tabFromHash());
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return (
    <>
      <header className="site-header">
        <nav className="nav" aria-label="Main navigation">
          <a href="#top" className="brand">LSEI@COLM2026</a>
          <div className="nav-links">
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`}>{section.label}</a>
            ))}
          </div>
        </nav>
      </header>

      <main id="top">
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <p className="eyebrow">@COLM 2026 -- October 9, 2026 - San Francisco, CA</p>
            <h1>Learning from<br />Situated and Embodied Interaction</h1>

            <p className="contact-line">Contact: colm2026.learning.interaction@gmail.com</p>

            {/* Submissions and reviewer recruitment are closed.
            <div className="hero-actions hero-buttons">
              <a href="https://openreview.net/group?id=colmweb.org/COLM/2026/Workshop/LSEI" className="btn btn-primary btn-sm" style={{ background: '#8A5BD8' }} target="_blank" rel="noopener noreferrer">Submit on OpenReview ↗</a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScd6hc9fwp2koFVkPYrhelJknXajro4CS-hr6lOfsupG_PDKw/viewform?usp=publish-editor" className="btn btn-outline btn-sm" style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }} target="_blank" rel="noopener noreferrer">Become a Reviewer ↗</a>
            </div>
            */}

          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <div className="container">
            <div className="section-header">
              <h2>About the Workshop</h2>
              <div className="abstract" style={{ textAlign: 'left' }}>
                <p>
                  How should interactive experience reshape the data, objectives, and evaluations used for language modeling? 
                  Despite remarkable progress from scaling over passive corpora, the projected exhaustion of high-quality text poses a growing bottleneck. 
                  Interaction with environments, humans, and other agents offers learning signals that are difficult to recover from passive data alone, including pragmatic grounding, internal world models, and social signals. 
                  This workshop studies how embodied multi-turn interaction with environments, humans, and other agents can serve as a learning signal for language models.
                  We bring together researchers from language modeling, NLP, embodied AI, robotics, web agents, and multi-agent systems (communities that often study related problems but publish in separate venues). 
                  Our central question is how interaction can play a fundamental role in the problem of language modeling itself.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section id="schedule" className="section">
          <div className="container">
            <div className="section-header">
              <h2>Schedule</h2>
            </div>
            <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            <p style={{ textAlign: 'left', marginTop: 0 }}>Friday, October 9, 2026 · Hilton San Francisco Union Square (room TBA)</p>
            <table className="data-table" style={{ margin: '0' }}>
              <thead>
                <tr>
                  <th>Time (PDT)</th>
                  <th>Session</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>8:45 – 9:00</td><td>Opening Remarks</td></tr>
                <tr><td>9:00 – 9:45</td><td>Invited Talk: Noam Brown</td></tr>
                <tr><td>9:45 – 10:30</td><td>Invited Talk: Been Kim</td></tr>
                <tr><td>10:30 – 11:00</td><td>Coffee Break</td></tr>
                <tr><td>11:00 – 12:15</td><td>Invited Talk: Heng Ji</td></tr>
                <tr><td>12:15 – 1:15</td><td>Lunch Break</td></tr>
                <tr className="session-divider"><td>1:15 – 2:00</td><td>Invited Talk: Prithviraj Ammanabrolu</td></tr>
                <tr><td>2:00 – 2:45</td><td>Oral Presentations (<a href="#accepted-papers" onClick={() => setPaperTab('accepted')}>see accepted papers</a>)</td></tr>
                <tr><td>2:45 – 3:15</td><td>Afternoon Break</td></tr>
                <tr><td>3:15 – 4:00</td><td>Invited Talk: Diyi Yang</td></tr>
                <tr><td>4:00 – 4:45</td><td>Invited Talk: Zora Wang</td></tr>
                <tr><td>4:45 – 5:00</td><td>Closing Remarks</td></tr>
                <tr><td>5:00 – 6:00</td><td>Poster Session</td></tr>
              </tbody>
            </table>
            </div>
          </div>
        </section>

        {/* Speakers Section */}
        <section id="speakers" className="section">
          <div className="container">
            <div className="section-header">
              <h2>Invited Speakers</h2>
            </div>

            <div className="grid-layout">
              <SpeakerCard 
                name="Been Kim" 
                affiliation="Google Deepmind" 
                imageUrl="been_kim.png" 
                website="https://beenkim.github.io/" 
              />
              <SpeakerCard
                name="Prithviraj Ammanabrolu"
                affiliation="UC San Diego, NVIDIA"
                imageUrl="raj.jpg"
                website="https://prithvirajva.com/"
              />
              <SpeakerCard
                name="Noam Brown"
                affiliation="OpenAI"
                imageUrl="noam.jpg"
                website="https://www.noambrown.com/"
              />
              <SpeakerCard
                name="Diyi Yang"
                affiliation="Stanford University"
                imageUrl="diyi.jpg"
                website="https://cs.stanford.edu/~diyiy/"
              />
              <SpeakerCard
                name="Heng Ji"
                affiliation="University of Illinois Urbana-Champaign"
                imageUrl="hengji.jpg"
                website="https://blender.cs.illinois.edu/hengji.html"
              />
              <SpeakerCard
                name="Zora Wang"
                affiliation="Carnegie Mellon University"
                imageUrl="zora.jpg"
                website="https://zorazrw.github.io/"
              />
            </div>
          </div>
        </section>

        {/* Organizers Section */}
        <section id="organizers" className="section">
          <div className="container">
            <div className="section-header">
              <h2>Organizing Committee</h2>
            </div>

            <div className="grid-layout">
              <OrganizerCard 
                name="Alane Suhr" 
                affiliation="UC Berkeley" 
                imageUrl="alane.png" 
                website="https://www.alanesuhr.com/" 
              />
              <OrganizerCard 
                name="Zineng Tang" 
                affiliation="UC Berkeley" 
                imageUrl="zineng.jpg" 
                website="https://zinengtang.github.io/" 
              />
              <OrganizerCard 
                name="Josue Torres-Fonseca" 
                affiliation="University of Michigan" 
                imageUrl="josue.jpg" 
                website="https://www.josuetorresfonseca.com/" 
              />
              <OrganizerCard 
                name="Anya Ji" 
                affiliation="UC Berkeley" 
                imageUrl="anya.jpeg" 
                website="https://anya-ji.github.io/" 
              />
              <OrganizerCard 
                name="Leena Mathur" 
                affiliation="Carnegie Mellon University" 
                imageUrl="leena.jpg" 
                website="https://l-mathur.github.io/" 
              />
              <OrganizerCard
                name="Téa Wright"
                affiliation="UC Berkeley"
                imageUrl="tea.jpg"
                website="https://teaywright.github.io/"
              />
              <OrganizerCard
                name="Joyce Chai"
                affiliation="University of Michigan"
                imageUrl="joyce.jpg"
                website="https://web.eecs.umich.edu/~chaijy/"
              />
            </div>

          </div>
        </section>

        {/* Papers Section */}
        <section id="papers" className="section">
          <div className="container">
            <span id="accepted-papers" className="anchor" />
            <span id="cfp" className="anchor" />
            <div className="section-header">
              <h2>Papers</h2>
            </div>

            <div className="tabs" role="tablist">
              {PAPER_TABS.map((t) => (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={paperTab === t.id}
                  className={`tab${paperTab === t.id ? ' tab-active' : ''}`}
                  onClick={() => setPaperTab(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {paperTab === 'accepted' ? (
              <div role="tabpanel" className="paper-list">
                <ul>
                  {PAPERS.map((p) => <PaperItem key={p.id} paper={p} />)}
                </ul>
              </div>
            ) : (
              <div role="tabpanel">
            <div className="section-header">
              <h3 className="tab-heading">Call for Papers <span className="badge-closed">Closed</span></h3>
              <p className="closed-note">Submissions for LSEI 2026 are closed. The call below is kept for reference.</p>
              <p>We welcome submissions on all dimensions of learning from embodied interaction, including but not limited to: </p>
            </div>

            <ul className="topics-list">
              <li>
                <div className="topic-body">
                  <strong className="topic-title">Situated Interaction (Agent–Environment)</strong>
                  <span className="topic-desc">How can interaction in web, simulated, or physical environments provide training signals that improve language modeling, grounding, and adaptation?</span>
                </div>
              </li>
              <li>
                <div className="topic-body">
                  <strong className="topic-title">Multi-Agent Interaction</strong>
                  <span className="topic-desc">How can multi-agent interaction, self-play, or communicative success improve language models' pragmatic reasoning and social understanding?</span>
                </div>
              </li>
              <li>
                <div className="topic-body">
                  <strong className="topic-title">Cooperative Interaction</strong>
                  <span className="topic-desc">How can human-agent interaction and human-in-the-loop feedback improve language models in grounded communication and collaborative settings?</span>
                </div>
              </li>
              <li>
                <div className="topic-body">
                  <strong className="topic-title">Evaluation and Objectives</strong>
                  <span className="topic-desc">What benchmarks, data, and learning objectives can measure or enable causal understanding, adaptability, and pragmatic reasoning beyond passive learning or imitation?</span>
                </div>
              </li>
            </ul>

            <div className="submission-info abstract" style={{ textAlign: 'left', marginTop: '16px' }}>
              <div className="submission-head">
                <h3>Submission Instructions</h3>
              </div>
              <p>Submissions should follow the official COLM 2026 LaTeX template and contain 4–9 pages of main text (references excluded), with supplementary material and appendices not counting toward the limit. Reviewing is double-blind, so please anonymize your submission. We welcome ongoing, published, unpublished, just-accepted, and under-review works; all submissions are non-archival and will not appear in formal proceedings. Please submit via OpenReview.</p>
            </div>
              </div>
            )}
          </div>
        </section>

        {/* Dates Section */}
        <section id="dates" className="section">
          <div className="container">
            <div className="section-header">
              <h2>Important Dates</h2>
            </div>
            
            <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            <table className="data-table" style={{ margin: '0' }}>
              <thead>
                <tr>
                  <th>Milestone</th>
                  <th>Date (AoE)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="date-passed">
                  <td><strong>Submission Deadline</strong></td>
                  <td>July 14, 2026</td>
                </tr>
                <tr className="date-passed">
                  <td><strong>Notification of Acceptance</strong></td>
                  <td>July 24, 2026</td>
                </tr>
                <tr>
                  <td><strong>Workshop Day</strong></td>
                  <td>October 9, 2026</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
        </div>
      </footer>
    </>
  );
}

function PaperItem({ paper }) {
  return (
    <li className="paper-item">
      <div className="paper-title">
        {paper.title}
        {paper.oral && <span className="badge-oral">Oral</span>}
      </div>
      {paper.authors && <div className="paper-authors">{paper.authors}</div>}
    </li>
  );
}

function ScheduleItem({ time, title, speaker, description }) {
  return (
    <div className="schedule-item">
      <div className="schedule-time">{time}</div>
      <div className="schedule-content">
        <strong>{title}</strong>
        {speaker && <div style={{ color: 'var(--muted)' }}>{speaker}</div>}
        {description && <div style={{ fontSize: '0.9rem' }}>{description}</div>}
      </div>
    </div>
  );
}

function SpeakerCard({ name, affiliation, imageUrl, website }) {
  return (
    <div className="card">
      <img className="card-img" src={imageUrl || 'https://via.placeholder.com/400'} alt={name} />
      <div className="card-content">
        <h3 className="card-name">
          {website ? <a href={website} target="_blank" rel="noopener noreferrer">{name}</a> : name}
        </h3>
        <p className="card-sub">{affiliation}</p>
      </div>
    </div>
  );
}

function OrganizerCard({ name, affiliation, imageUrl, website }) {
  return (
    <div className="card">
      <img className="card-img" src={imageUrl || 'https://via.placeholder.com/400'} alt={name} />
      <div className="card-content">
        <h3 className="card-name">
          {website ? <a href={website} target="_blank" rel="noopener noreferrer">{name}</a> : name}
        </h3>
        <p className="card-sub">{affiliation}</p>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
