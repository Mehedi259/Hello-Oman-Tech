import './Team.css';

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.69 1.69 0 0 0 1.7-1.68c0-.93-.76-1.69-1.7-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.07v8.37h2.78z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.41a8.214 8.214 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.17 1.77 2.71 4.29 3.8 2.52 1.09 2.52.73 2.97.69.45-.04 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3z"/>
  </svg>
);

const teamMembers = [
  {
    name: 'Mehedi Hasan Mridul',
    designation: 'Web & App Developer',
    image: '/web & app developer Mehedi Hasan Mridul.jpeg',
    linkedin: 'https://www.linkedin.com/in/mehedi-hasan-mridul/?isSelfProfile=true',
    facebook: 'https://www.facebook.com/mridul2070/',
    whatsapp: 'https://wa.me/96894578538'
  },
  {
    name: 'Foysal Rimon',
    designation: 'AI Developer',
    image: '/AI Foysol Rimon.jpeg',
    linkedin: 'https://www.linkedin.com/',
    facebook: 'https://www.facebook.com/'
  },
  {
    name: 'Musa Emon',
    designation: 'Digital Marketer',
    image: '/Musa Emon Digital Marketer.jpeg',
    linkedin: 'https://www.linkedin.com/',
    facebook: 'https://www.facebook.com/'
  },
  {
    name: 'Md. Shafiq Ahmed',
    designation: 'Video Editor',
    image: '/Video editor  Md, Shofiq Ahmed.png',
    linkedin: 'https://www.linkedin.com/',
    facebook: 'https://www.facebook.com/'
  },
  {
    name: 'Abdullah Al Jobayer',
    designation: 'Video Editor',
    image: '/Abdullah Al Jobayer video editor.jpg',
    linkedin: 'https://www.linkedin.com/',
    facebook: 'https://www.facebook.com/'
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
                    {member.linkedin && (
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="social-btn" 
                        title="LinkedIn Profile"
                      >
                        <LinkedInIcon />
                      </a>
                    )}
                    {member.facebook && (
                      <a 
                        href={member.facebook} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="social-btn" 
                        title="Facebook Profile"
                      >
                        <FacebookIcon />
                      </a>
                    )}
                    {member.whatsapp && (
                      <a 
                        href={member.whatsapp} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="social-btn whatsapp-btn" 
                        title="Direct WhatsApp"
                      >
                        <WhatsAppIcon />
                      </a>
                    )}
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
