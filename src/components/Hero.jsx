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
            <span>ওমানের শীর্ষস্থানীয় টেক প্রতিষ্ঠান</span>
          </div>
          
          <h1 className="hero-title">
            আপনার আইডিয়ার <span className="highlight">প্রযুক্তিগত রূপায়ন</span>
          </h1>
          
          <p className="hero-subtitle">
            হ্যালো ওমান টেক আপনার ব্যবসাকে পরবর্তী স্তরে নিয়ে যেতে বিশ্বমানের সফটওয়্যার, ওয়েব ও অ্যাপ ডেভেলপমেন্ট এবং ডিজিটাল মার্কেটিং সমাধান প্রদান করে।
          </p>
          
          <div className="hero-actions">
            <a href="#services" className="btn btn-primary btn-lg">
              আমাদের সেবাসমূহ <ArrowRight size={20} />
            </a>
            <a href="#contact" className="btn btn-outline btn-lg">
              পরামর্শ নিন
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <strong>৫০+</strong> প্রজেক্ট সম্পন্ন
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <strong>১০০%</strong> ক্লায়েন্ট সন্তুষ্টি
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
            <div className="main-sphere"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
