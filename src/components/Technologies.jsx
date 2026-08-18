import './Technologies.css';

const techs = [
  "React", "Node.js", "Python", "AWS", "Flutter", "Next.js", "MongoDB", "Docker", "TypeScript", "Figma", "TailwindCSS", "PostgreSQL"
];

const Technologies = () => {
  return (
    <section id="technologies" className="section tech-section">
      <div className="container">
        <h2 className="section-title">Technologies We Use</h2>
        <p className="section-subtitle">
          We leverage a cutting-edge and scalable technology stack to build world-class digital solutions.
        </p>

        <div className="marquee-container">
          <div className="marquee">
            <div className="marquee-content">
              {techs.map((tech, i) => (
                <div key={i} className="tech-badge">
                  {tech}
                </div>
              ))}
            </div>
            {/* Duplicate for seamless infinite scroll */}
            <div className="marquee-content" aria-hidden="true">
              {techs.map((tech, i) => (
                <div key={`dup-${i}`} className="tech-badge">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
