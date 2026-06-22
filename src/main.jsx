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

            <div className="hero-actions hero-buttons">
              <a href="https://openreview.net/group?id=colmweb.org/COLM/2026/Workshop/LSEI" className="btn btn-primary btn-sm" style={{ background: '#8A5BD8' }} target="_blank" rel="noopener noreferrer">Submit on OpenReview ↗</a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScd6hc9fwp2koFVkPYrhelJknXajro4CS-hr6lOfsupG_PDKw/viewform?usp=publish-editor" className="btn btn-outline btn-sm" style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }} target="_blank" rel="noopener noreferrer">Become a Reviewer ↗</a>
            </div>

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

        {/* CFP Section */}
        <section id="cfp" className="section">
          <div className="container">
            <div className="section-header">
              <h2>Call for Papers</h2>
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

            <div className="submission-info abstract" style={{ textAlign: 'left', marginTop: '28px' }}>
              <div className="submission-head">
                <h3>Submission Instructions</h3>
              </div>
              <p>Submissions should follow the official COLM 2026 LaTeX template and contain 4–8 pages of main text (references excluded), with supplementary material and appendices not counting toward the limit. Reviewing is double-blind, so please anonymize your submission. We welcome ongoing, published, unpublished, just-accepted, and under-review works; all submissions are non-archival and will not appear in formal proceedings. Please submit via OpenReview.</p>
            </div>

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
                <tr>
                  <td><strong>Submission Deadline</strong></td>
                  <td>June 30, 2026 <span className="date-note">(tentative)</span></td>
                </tr>
                <tr>
                  <td><strong>Notification of Acceptance</strong></td>
                  <td>July 24, 2026</td>
                </tr>
                <tr>
                  <td><strong>Camera-Ready Due</strong></td>
                  <td>TBD</td>
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

        {/* Schedule Section */}
        <section id="schedule" className="section">
          <div className="container">
            <div className="section-header">
              <h2>Schedule</h2>
            </div>
            <p style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'left' }}>TBD</p>
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
            </div>

            <p className="speakers-note">More speakers to be announced.</p>
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
              <OrganizerCard
                name="Joyce Chai"
                affiliation="University of Michigan"
                imageUrl="joyce.jpg"
                website="https://web.eecs.umich.edu/~chaijy/"
              />
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
