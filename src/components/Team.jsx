import './Team.css';

const teamMembers = [
  {
    name: 'Mehedi Hasan Mridul',
    designation: 'Web & App Developer',
    image: '/web & app developer Mehedi Hasan Mridul.jpeg'
  },
  {
    name: 'Foysal Rimon',
    designation: 'AI Developer',
    image: '/AI Foysol Rimon.jpeg'
  },
  {
    name: 'Musa Emon',
    designation: 'Digital Marketer',
    image: '/Musa Emon Digital Marketer.jpeg'
  },
  {
    name: 'Md. Shafiq Ahmed',
    designation: 'Video Editor',
    image: '/Video editor  Md, Shofiq Ahmed.jpeg'
  },
  {
    name: 'Abdullah Al Jobayer',
    designation: 'Video Editor',
    image: '/Abdullah Al Jobayer video editor.jpg'
  }
];

const Team = () => {
  return (
    <section id="team" className="section team-section">
      <div className="container">
        <h2 className="section-title">Meet Our Expert Team</h2>
        <p className="section-subtitle">
          The brilliant minds behind Hello Oman Tech. Our diverse team of specialists ensures top-notch quality across every aspect of your project.
        </p>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="member-image-container">
                <img src={member.image} alt={member.name} className="member-image" />
                <div className="member-overlay">
                  <div className="social-links-small">
                    <a href="#" className="social-btn">in</a>
                    <a href="#" className="social-btn">tw</a>
                  </div>
                </div>
              </div>
              <div className="member-info">
                <h4 className="member-name">{member.name}</h4>
                <p className="member-designation">{member.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
