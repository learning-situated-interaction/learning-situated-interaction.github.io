import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const WORKSHOP_NAME = "Learning from Situated and Embodied Interaction";

const sections = [
  { id: 'about', label: 'About' },
  { id: 'cfp', label: 'Call for Papers' },
  { id: 'dates', label: 'Dates' },
  { id: 'schedule', label: 'Schedule' },
  { id: 'speakers', label: 'Speakers' },
  { id: 'organizers', label: 'Organizers' },
];

function App() {
  return (
    <>
      <header className="site-header">
        <nav className="nav" aria-label="Main navigation">
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
            <p className="eyebrow">A Workshop at COLM 2026</p>
            <h1>{WORKSHOP_NAME}</h1>
            
            <div className="logistics-bar">
              <div className="logistics-item">
                October 9, 2026
              </div>
              <div className="logistics-item">
                San Francisco, CA
              </div>
            </div>

            <div className="hero-actions">
              <a href="https://colmweb.org/index.html" className="btn btn-primary">Register for COLM 2026 ↗</a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <div className="container">
            <div className="section-header">
              <h2>About the Workshop</h2>
              <div className="abstract">
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

        {/* CFP Section */}
        <section id="cfp" className="section">
          <div className="container">
            <div className="section-header">
              <h2>Call for Papers</h2>
              <p>We welcome submissions on all dimensions of learning from embodied interaction, including but not limited to: </p>
            </div>

            <ul className="topics-list">
              <li><strong>Situated Interaction (Agent–Environment):</strong> How can interaction in web, simulated, or physical environments provide training signals that improve language modeling, grounding, and adaptation? </li>
              <li><strong>Multi-Agent Interaction:</strong> How can multi-agent interaction, self-play, or communicative success improve language models' pragmatic reasoning and social understanding? </li>
              <li><strong>Cooperative Interaction:</strong> How can human-agent interaction and human-in-the-loop feedback improve language models in grounded communication and collaborative settings? </li>
              <li><strong>Evaluation and Objectives:</strong> What benchmarks, data, and learning objectives can measure or enable causal understanding, adaptability, and pragmatic reasoning beyond passive learning or imitation?</li>
            </ul>

            <div className="submission-info abstract" style={{ textAlign: 'center', marginTop: '48px' }}>
              <h3>Submission Instructions</h3>
              <p>Please follow the official COLM 2026 LaTeX template. Submissions should be made via OpenReview (Submission link coming soon). </p>
            </div>

          </div>
        </section>

        {/* Dates Section */}
        <section id="dates" className="section">
          <div className="container">
            <div className="section-header">
              <h2>Important Dates</h2>
            </div>
            
            <table className="data-table" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <thead>
                <tr>
                  <th>Milestone</th>
                  <th>Date (AoE)</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Submission Deadline</strong></td>
                  <td>TBD</td>
                  <td><span className="status-badge status-open">Pending</span></td>
                </tr>
                <tr>
                  <td><strong>Notification of Acceptance</strong></td>
                  <td>TBD</td>
                  <td><span className="status-badge">N/A</span></td>
                </tr>
                <tr>
                  <td><strong>Camera-Ready Due</strong></td>
                  <td>TBD</td>
                  <td><span className="status-badge">N/A</span></td>
                </tr>
                <tr>
                  <td><strong>Workshop Day</strong></td>
                  <td>October 9, 2026</td>
                  <td><span className="status-badge">N/A</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Schedule Section */}
        <section id="schedule" className="section">
          <div className="container">
            <div className="section-header">
              <h2>Schedule</h2>
            </div>
            <p style={{ textAlign: 'center' }}>TBD</p>
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
                imageUrl="alane.jpg" 
                website="https://www.alanesuhr.com/" 
              />
              <OrganizerCard 
                name="Zineng Tang" 
                affiliation="UC Berkeley" 
                imageUrl="zineng.jpg" 
                website="https://zinengtang.github.io/" 
              />
              <OrganizerCard 
                name="Yu-Cheng Chou" 
                affiliation="Johns Hopkins University, NVIDIA" 
                imageUrl="yucheng.png" 
                website="https://johnson111788.github.io/" 
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
            </div>

            <div style={{ marginTop: '64px', textAlign: 'center' }}>
              <h3>Contact</h3>
              <p>For questions, please contact us at: <a href="mailto:colm2026.learning.interaction@gmail.com" style={{ color: 'var(--accent)', fontWeight: 600 }}>colm2026.learning.interaction@gmail.com</a></p>
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
