import { CheckCircle2 } from 'lucide-react';
import './WhyUs.css';

const features = [
  "100% Original Value Supply",
  "Premium Quality Deliverables",
  "Mobile Responsive Designs",
  "Dedicated Support Team",
  "Transparent Communication",
  "Cutting-Edge Technology"
];

const WhyUs = () => {
  return (
    <section id="why-us" className="section why-us-section">
      <div className="container why-us-container">
        <div className="why-us-content">
          <h2 className="section-title text-left">Why Choose Hello Oman Tech?</h2>
          <p className="why-us-subtitle">
            We are committed to delivering genuine value and building trust. Our approach focuses on providing authentic, high-quality tech solutions that drive real results for your business.
          </p>
          
          <ul className="feature-list">
            {features.map((feature, index) => (
              <li key={index} className="feature-item">
                <CheckCircle2 className="feature-icon" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <div className="stats-container">
            <div className="stat-box">
              <h4 className="stat-number">100%</h4>
              <p className="stat-label">Client Satisfaction</p>
            </div>
            <div className="stat-box">
              <h4 className="stat-number">24/7</h4>
              <p className="stat-label">Premium Support</p>
            </div>
          </div>
        </div>
        
        <div className="why-us-visual">
          <div className="image-wrapper">
            {/* Using a pure CSS abstract shape instead of image to maintain a fast, modern feel without needing external assets */}
            <div className="abstract-shape">
              <div className="circle circle-1"></div>
              <div className="circle circle-2"></div>
              <div className="glass-panel">
                <div className="panel-header">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
                <div className="panel-body">
                  <div className="line line-1"></div>
                  <div className="line line-2"></div>
                  <div className="line line-3"></div>
                  <div className="chart-bar">
                    <div className="bar bar-1"></div>
                    <div className="bar bar-2"></div>
                    <div className="bar bar-3"></div>
                    <div className="bar bar-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
