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
import './Services.css';

const services = [
  {
    title: 'Web Development',
    description: 'Custom, responsive, and blazing fast websites tailored to your business needs.',
    icon: <Code className="service-icon" />,
    color: '#3b82f6'
  },
  {
    title: 'App Development',
    description: 'High-performance mobile applications for iOS and Android platforms.',
    icon: <Smartphone className="service-icon" />,
    color: '#8b5cf6'
  },
  {
    title: 'Desktop Software',
    description: 'Robust and scalable desktop software solutions for enterprise productivity.',
    icon: <Monitor className="service-icon" />,
    color: '#10b981'
  },
  {
    title: 'Video Editing',
    description: 'Professional video editing and post-production to tell your story perfectly.',
    icon: <Film className="service-icon" />,
    color: '#f43f5e'
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to accelerate your online growth.',
    icon: <TrendingUp className="service-icon" />,
    color: '#f59e0b'
  },
  {
    title: 'Artificial Intelligence',
    description: 'Next-gen AI solutions to automate and optimize your business processes.',
    icon: <BrainCircuit className="service-icon" />,
    color: '#06b6d4'
  },
  {
    title: 'Graphics Design',
    description: 'Stunning visual identities, branding, and UI/UX design services.',
    icon: <PenTool className="service-icon" />,
    color: '#ec4899'
  },
  {
    title: 'Cyber Security',
    description: 'Top-tier security assessments and protection for your digital assets.',
    icon: <ShieldCheck className="service-icon" />,
    color: '#14b8a6'
  },
  {
    title: 'Social Media Marketing',
    description: 'Engaging social campaigns that build brand awareness and loyalty.',
    icon: <Share2 className="service-icon" />,
    color: '#6366f1'
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-secondary">
      <div className="container">
        <h2 className="section-title">Our Premium Services</h2>
        <p className="section-subtitle">
          We provide a comprehensive suite of digital solutions to empower your brand and drive results in the modern tech landscape.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              className="glass-card service-card" 
              key={index}
              style={{ '--hover-color': service.color }}
            >
              <div className="service-icon-wrapper" style={{ color: service.color }}>
                {service.icon}
                <div className="service-icon-bg" style={{ backgroundColor: service.color }}></div>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
