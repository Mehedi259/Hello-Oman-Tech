import './Technologies.css';

const techs = [
  "React", "Node.js", "Python", "AWS", "Flutter", "Next.js", "MongoDB", "Docker", "TypeScript", "Figma", "TailwindCSS", "PostgreSQL"
];

const Technologies = () => {
  return (
    <section id="technologies" className="section tech-section">
      <div className="container">
        <h2 className="section-title">আমাদের ব্যবহৃত টেকনোলজি</h2>
        <p className="section-subtitle">
          বিশ্বমানের সল্যুশন তৈরি করতে আমরা অত্যাধুনিক ও স্কেলেবল টেকনোলজি স্ট্যাক ব্যবহার করি।
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
