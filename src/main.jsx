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

