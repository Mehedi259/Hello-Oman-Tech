import { ArrowRight, Globe2 } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="grid-overlay"></div>
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge">
            <Globe2 className="badge-icon" />
            <span>Oman's Leading Tech Agency</span>
          </div>
          
          <h1 className="hero-title">
            Transforming Your Ideas Into <span className="highlight">Digital Reality</span>
          </h1>
          
          <p className="hero-subtitle">
            Hello Oman Tech provides world-class software, web and app development, and digital marketing solutions to take your business to the next level.
          </p>
          
          <div className="hero-actions">
            <a href="#services" className="btn btn-primary btn-lg">
              Our Services <ArrowRight size={20} />
            </a>
            <a href="#contact" className="btn btn-outline btn-lg">
              Get Free Consultation
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <strong>50+</strong> Projects Completed
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <strong>100%</strong> Client Satisfaction
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="abstract-scene">
            <div className="card-float card-1">
              <div className="mockup-header"></div>
              <div className="mockup-line w-3/4"></div>
              <div className="mockup-line w-1/2"></div>
            </div>
            <div className="card-float card-2">
              <div className="circle-chart"></div>
              <div className="mockup-line w-full"></div>
            </div>
            <div className="card-float card-3">
              <div className="tech-icon-glow">{'< />'}</div>
            </div>
            <div className="main-sphere">
              <Globe2 size={100} color="rgba(255, 255, 255, 0.8)" className="sphere-icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
