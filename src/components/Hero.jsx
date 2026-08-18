import { ArrowRight, Sparkles } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge">
            <Sparkles className="badge-icon" />
            <span>Premium Tech Solutions in Oman</span>
          </div>
          
          <h1 className="hero-title">
            Transform Your Vision Into <span className="highlight">Digital Reality</span>
          </h1>
          
          <p className="hero-subtitle">
            Hello Oman Tech delivers state-of-the-art software, web, and app development along with top-tier digital marketing services to elevate your business.
          </p>
          
          <div className="hero-actions">
            <a href="#services" className="btn btn-primary btn-lg">
              Explore Services <ArrowRight size={20} />
            </a>
            <a href="#contact" className="btn btn-outline btn-lg">
              Get in Touch
            </a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="glass-card visual-card">
            <div className="visual-code">
              <div className="code-dot red"></div>
              <div className="code-dot yellow"></div>
              <div className="code-dot green"></div>
              <pre>
                <code>
{`const client = new Client({
  vision: "Innovative",
  goals: "Global Reach"
});

await HelloOmanTech.build(client);
console.log("Success Unlocked! 🚀");`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
