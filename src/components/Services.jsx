import { 
  Code, 
  Smartphone, 
  Monitor, 
  Film, 
  TrendingUp, 
  BrainCircuit, 
  PenTool, 
  ShieldCheck, 
  Share2 
} from 'lucide-react';
import webDevImg from '../assets/mockups/web-dev.jpg';
import appDevImg from '../assets/mockups/app-dev.jpg';
import desktopSoftwareImg from '../assets/mockups/desktop-software.jpg';
import videoEditingImg from '../assets/mockups/video-editing.jpg';
import digitalMarketingImg from '../assets/mockups/digital-marketing.jpg';
import aiTechImg from '../assets/mockups/ai-tech.jpg';
import graphicsDesignImg from '../assets/mockups/graphics-design.jpg';
import cyberSecurityImg from '../assets/mockups/cyber-security.jpg';
import socialMediaImg from '../assets/mockups/social-media.jpg';
import './Services.css';

const services = [
  {
    title: 'Web Development',
    description: 'We build custom, responsive, and blazing-fast websites tailored to your business needs.',
    icon: <Code className="service-icon" />,
    image: webDevImg,
    color: '#3b82f6'
  },
  {
    title: 'App Development',
    description: 'High-performance mobile applications for both iOS and Android platforms.',
    icon: <Smartphone className="service-icon" />,
    image: appDevImg,
    color: '#8b5cf6'
  },
  {
    title: 'Desktop Software',
    description: 'Powerful and scalable desktop software solutions to enhance enterprise productivity.',
    icon: <Monitor className="service-icon" />,
    image: desktopSoftwareImg,
    color: '#10b981'
  },
  {
    title: 'Video Editing',
    description: 'Professional video editing and post-production services to tell your story perfectly.',
    icon: <Film className="service-icon" />,
    image: videoEditingImg,
    color: '#f43f5e'
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to accelerate your online growth and visibility.',
    icon: <TrendingUp className="service-icon" />,
    image: digitalMarketingImg,
    color: '#f59e0b'
  },
  {
    title: 'Artificial Intelligence',
    description: 'Next-gen AI solutions to automate and optimize your business processes.',
    icon: <BrainCircuit className="service-icon" />,
    image: aiTechImg,
    color: '#06b6d4'
  },
  {
    title: 'Graphics Design',
    description: 'Stunning visual identity, branding, and UI/UX design services.',
    icon: <PenTool className="service-icon" />,
    image: graphicsDesignImg,
    color: '#ec4899'
  },
  {
    title: 'Cyber Security',
    description: 'Reliable services for maximum security and risk assessment of your digital assets.',
    icon: <ShieldCheck className="service-icon" />,
    image: cyberSecurityImg,
    color: '#14b8a6'
  },
  {
    title: 'Social Media Marketing',
    description: 'Effective social media campaigns to build brand awareness and loyalty.',
    icon: <Share2 className="service-icon" />,
    image: socialMediaImg,
    color: '#6366f1'
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-tertiary">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          We provide a comprehensive digital solution to empower your brand and drive actual results in the modern tech landscape.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              className="premium-service-card" 
              key={index}
              style={{ '--hover-color': service.color }}
            >
              <div className="card-border-glow"></div>
              <div className="card-content">
                <div className="service-image-container">
                  <img src={service.image} alt={service.title} className="service-mockup-image" />
                  <div className="service-icon-floating" style={{ color: service.color }}>
                    {service.icon}
                  </div>
                </div>
                <div className="service-text-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <div className="service-link">
                    <span>Learn More</span>
                    <div className="arrow">→</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
