import { useState, useEffect } from 'react';
import { 
  Code, 
  Smartphone, 
  Monitor, 
  Film, 
  TrendingUp, 
  BrainCircuit, 
  PenTool, 
  ShieldCheck, 
  Share2,
  X,
  CheckCircle2,
  Phone,
  Sparkles,
  ArrowRight,
  ExternalLink
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

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.41a8.214 8.214 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.17 1.77 2.71 4.29 3.8 2.52 1.09 2.52.73 2.97.69.45-.04 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3z"/>
  </svg>
);

const services = [
  {
    id: 'web-dev',
    title: 'Web Development',
    tagline: 'Modern, High-Speed & Scalable Web Applications',
    description: 'We build custom, responsive, and blazing-fast websites tailored to your business needs.',
    fullDescription: 'Transform your digital presence with enterprise-grade web development solutions. From dynamic single-page web applications to high-converting corporate portals and e-commerce platforms, we engineer websites that deliver unmatched speed, fluid UX, robust security, and seamless scalability.',
    features: [
      'Custom Web Application Development (SPA/PWA)',
      'Mobile-First Responsive Design for all devices',
      'High Performance & Blazing-Fast Loading (< 1s)',
      'SEO-Friendly Architecture & Core Web Vitals Optimization',
      'Secure E-Commerce & Payment Gateway Integration',
      'Custom Admin CMS & Analytics Dashboard'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'REST & GraphQL'],
    benefits: [
      'Boost search engine rankings and organic customer traffic',
      'Deliver seamless experiences across all mobile & desktop screens',
      'Scalable architecture ready for high concurrent traffic'
    ],
    icon: <Code className="service-icon" />,
    image: webDevImg,
    color: '#3b82f6'
  },
  {
    id: 'app-dev',
    title: 'App Development',
    tagline: 'Native & Cross-Platform Mobile Experiences',
    description: 'High-performance mobile applications for both iOS and Android platforms.',
    fullDescription: 'Reach millions of mobile users with intuitive, high-performance applications. We design and build seamless native and cross-platform apps with beautiful micro-interactions, rock-solid security, offline capabilities, and instant cloud synchronizations.',
    features: [
      'Cross-Platform iOS & Android App Development',
      'Pixel-Perfect UI/UX with smooth micro-animations',
      'Real-Time Push Notifications & In-App Messaging',
      'Secure User Authentication & Biometrics (Face ID/Fingerprint)',
      'Payment Gateway & In-App Purchases Integration',
      'Full App Store & Google Play Store Publishing & Maintenance'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Node.js Backend', 'Redux / Zustand'],
    benefits: [
      'Single codebase efficiency reducing time-to-market by 40%',
      'Offline-ready functionality ensuring continuous user engagement',
      'Enterprise-grade data encryption and privacy protection'
    ],
    icon: <Smartphone className="service-icon" />,
    image: appDevImg,
    color: '#8b5cf6'
  },
  {
    id: 'desktop-software',
    title: 'Desktop Software',
    tagline: 'Robust Enterprise Software & POS Systems',
    description: 'Powerful and scalable desktop software solutions to enhance enterprise productivity.',
    fullDescription: 'Streamline your daily enterprise operations with bespoke desktop software engineered for speed, reliability, and precision. Whether you need Point of Sale (POS) software, inventory tracking, ERP systems, or offline-first operational software, we provide tailor-made solutions.',
    features: [
      'Custom Point of Sale (POS) & Billing Systems',
      'Inventory, Warehouse & Supply Chain Tracking',
      'Accounting, Invoicing & Comprehensive Tax Reporting',
      'Offline-First Architecture with Automatic Cloud Sync',
      'Role-Based Multi-User Access & Granular Permissions',
      'Barcode, Thermal Printer & Hardware Peripheral Support'
    ],
    technologies: ['Electron', 'Python / PyQt', 'C# / .NET', 'SQLite', 'PostgreSQL', 'WebSockets'],
    benefits: [
      'Zero internet dependency for mission-critical in-store operations',
      'Automate hours of manual reporting and data calculations',
      'Eliminate monthly third-party software subscription overheads'
    ],
    icon: <Monitor className="service-icon" />,
    image: desktopSoftwareImg,
    color: '#10b981'
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    tagline: 'Cinematic Visuals & Viral Social Content',
    description: 'Professional video editing and post-production services to tell your story perfectly.',
    fullDescription: 'Captivate your audience with world-class video editing and post-production services. We produce engaging promotional advertisements, high-converting social media reels, corporate documentaries, and brand films crafted with cinematic color grading, sound design, and motion graphics.',
    features: [
      'Promotional Commercials & High-Impact Brand Ads',
      'Viral Short-Form Content (Reels, TikToks, YouTube Shorts)',
      'Motion Graphics, 3D Typography & Animated Intros',
      'Cinematic Color Grading & HDR Correction',
      'Professional Audio Mastering & Sound Effects (SFX)',
      'Multi-Platform Video Format Optimization (4K Ultra HD)'
    ],
    technologies: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Audition', 'Blender'],
    benefits: [
      'Increase audience retention and social media watch time by up to 300%',
      'Elevate your brand aesthetic to global international standards',
      'Fast turnaround times with dedicated creative revisions'
    ],
    icon: <Film className="service-icon" />,
    image: videoEditingImg,
    color: '#f43f5e'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    tagline: 'Data-Driven Growth & High-ROI Campaigns',
    description: 'Data-driven marketing strategies to accelerate your online growth and visibility.',
    fullDescription: 'Supercharge your business revenue with comprehensive digital marketing strategies that deliver measurable results. We combine precision search engine marketing, performance ads, lead generation funnels, and data analytics to maximize your return on ad spend (ROAS).',
    features: [
      'Search Engine Marketing (Google Ads & Search Campaigns)',
      'Social Media Performance Advertising (Meta, TikTok, LinkedIn)',
      'High-Converting Landing Pages & Funnel Optimization',
      'Advanced Audience Targeting & Retargeting Campaigns',
      'Conversion Rate Optimization (CRO) & A/B Testing',
      'Comprehensive Real-Time Analytics & ROI Reporting'
    ],
    technologies: ['Google Ads Manager', 'Meta Business Suite', 'Google Analytics 4', 'SEMrush', 'Tag Manager'],
    benefits: [
      'Generate qualified, ready-to-buy customer leads consistently',
      'Lower Customer Acquisition Cost (CAC) through AI-driven targeting',
      'Transparent weekly performance and ROI reports'
    ],
    icon: <TrendingUp className="service-icon" />,
    image: digitalMarketingImg,
    color: '#f59e0b'
  },
  {
    id: 'ai-tech',
    title: 'Artificial Intelligence',
    tagline: 'Custom AI Agents & Intelligent Automation',
    description: 'Next-gen AI solutions to automate and optimize your business processes.',
    fullDescription: 'Harness the transformative power of modern Artificial Intelligence to automate complex workflows and deliver superhuman productivity. We build custom conversational AI chatbots, smart document processing pipelines, intelligent recommendation engines, and bespoke LLM integrations.',
    features: [
      'Custom 24/7 AI Chatbots & Customer Service Agents',
      'Large Language Model (LLM) Integration (OpenAI, Claude, Gemini)',
      'Intelligent Document Extraction, OCR & Summarization',
      'Predictive Business Analytics & Demand Forecasting',
      'Automated Workflow Pipelines & Data Synthesizing',
      'Computer Vision & Automated Image Processing'
    ],
    technologies: ['Python', 'OpenAI API', 'LangChain', 'PyTorch', 'FastAPI', 'Hugging Face', 'Vector Databases'],
    benefits: [
      'Automate up to 80% of routine customer inquiries 24/7',
      'Slash operational overheads with instant data analysis',
      'Gain competitive advantage with cutting-edge proprietary AI tools'
    ],
    icon: <BrainCircuit className="service-icon" />,
    image: aiTechImg,
    color: '#06b6d4'
  },
  {
    id: 'graphics-design',
    title: 'Graphics Design',
    tagline: 'Stunning Brand Identities & UI/UX Designs',
    description: 'Stunning visual identity, branding, and UI/UX design services.',
    fullDescription: 'Create an unforgettable visual identity that resonates with your target market. Our design studio delivers distinctive logo branding, comprehensive brand guidelines, modern UI/UX design wireframes, corporate stationery, and eye-catching social media visual assets.',
    features: [
      'Complete Brand Identity Design (Logo, Typography, Color Palette)',
      'Interactive UI/UX Wireframing & Clickable Prototypes',
      'Marketing Materials (Brochures, Flyers, Business Cards, Banners)',
      'Packaging & Product Label Design',
      'Social Media Brand Kits & Template Libraries',
      'Vector Illustrations & Custom Iconography'
    ],
    technologies: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Canva Enterprise'],
    benefits: [
      'Establish a polished, world-class brand impression instantly',
      'Enhance user satisfaction with intuitive, human-centered UI/UX',
      'Full copyright transfer with all production-ready source files'
    ],
    icon: <PenTool className="service-icon" />,
    image: graphicsDesignImg,
    color: '#ec4899'
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security',
    tagline: 'Zero-Trust Defense & Asset Protection',
    description: 'Reliable services for maximum security and risk assessment of your digital assets.',
    fullDescription: 'Safeguard your digital enterprise from emerging cyber threats, ransomware, and vulnerabilities. We perform rigorous penetration testing, code auditing, cloud infrastructure hardening, firewall protection, and continuous security compliance checks to keep your systems impenetrable.',
    features: [
      'Web Application & API Vulnerability Assessment',
      'Penetration Testing & Ethical Hacking Audits',
      'Cloud Server & Linux Server Security Hardening',
      'SSL/TLS Implementation & Zero-Trust Architecture',
      'DDoS Mitigation & Web Application Firewall (WAF) Setup',
      'Incident Response Planning & Disaster Recovery Backups'
    ],
    technologies: ['OWASP Top 10 Standards', 'Cloudflare WAF', 'Burp Suite', 'Nginx Security Modules', 'Linux Hardening', 'Fail2ban'],
    benefits: [
      'Protect sensitive customer records, financial data, and credentials',
      'Ensure 99.99% system uptime against malicious cyber attacks',
      'Build trust and compliance with international security standards'
    ],
    icon: <ShieldCheck className="service-icon" />,
    image: cyberSecurityImg,
    color: '#14b8a6'
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    tagline: 'Brand Authority & Viral Social Engagement',
    description: 'Effective social media campaigns to build brand awareness and loyalty.',
    fullDescription: 'Dominate social platforms and turn casual scrollers into lifelong brand advocates. We manage your social media presence end-to-end: crafting high-engagement content calendars, community management, viral trend leveraging, influencer partnerships, and targeted lead campaigns.',
    features: [
      'End-to-End Monthly Content Creation & Strategy Calendar',
      'Community Management & Rapid Comment/DM Responses',
      'Influencer Outreach, Negotiations & Campaign Execution',
      'Hashtag & Trend Optimization for Algorithmic Reach',
      'Multi-Platform Management (Instagram, TikTok, Facebook, LinkedIn)',
      'Monthly Growth Analytics & Audience Demographics Tracking'
    ],
    technologies: ['Meta Business Suite', 'TikTok Creator Hub', 'LinkedIn Campaign Manager', 'CapCut Pro', 'Buffer / Hootsuite'],
    benefits: [
      'Cultivate a vibrant, highly active online community',
      'Establish your brand as an undisputed industry leader in Oman & GCC',
      'Direct inbound leads channeled straight to your WhatsApp'
    ],
    icon: <Share2 className="service-icon" />,
    image: socialMediaImg,
    color: '#6366f1'
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveService(null);
      }
    };
    if (activeService) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeService]);

  const getWhatsAppUrl = (title) => {
    const msg = encodeURIComponent(`Hello! I am interested in your ${title} service at Hello Oman Tech. Please share details and pricing.`);
    return `https://wa.me/96894578538?text=${msg}`;
  };

  return (
    <section id="services" className="section bg-tertiary">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          We provide comprehensive digital solutions to empower your brand and drive actual results in the modern tech landscape. Click on any service to learn more and connect directly with our experts.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              className="premium-service-card clickable-card" 
              key={index}
              style={{ '--hover-color': service.color }}
              onClick={() => setActiveService(service)}
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
                  <button 
                    type="button"
                    className="service-link-btn" 
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveService(service);
                    }}
                  >
                    <span>Learn More & Order</span>
                    <div className="arrow">→</div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Detail Modal */}
      {activeService && (
        <div className="service-modal-backdrop" onClick={() => setActiveService(null)}>
          <div 
            className="service-modal-container" 
            onClick={(e) => e.stopPropagation()}
            style={{ '--theme-color': activeService.color }}
          >
            <button 
              className="modal-close-btn" 
              onClick={() => setActiveService(null)}
              aria-label="Close Details"
            >
              <X size={22} />
            </button>

            <div className="modal-scrollable-content">
              {/* Modal Header */}
              <div className="modal-header-section">
                <div className="modal-icon-badge" style={{ color: activeService.color, backgroundColor: `${activeService.color}20` }}>
                  {activeService.icon}
                </div>
                <div className="modal-title-box">
                  <div className="modal-badge" style={{ borderColor: activeService.color, color: activeService.color }}>
                    <Sparkles size={14} /> Professional Service
                  </div>
                  <h2 className="modal-title">{activeService.title}</h2>
                  <p className="modal-tagline">{activeService.tagline}</p>
                </div>
              </div>

              {/* Service Mockup Banner */}
              <div className="modal-banner-image-wrapper">
                <img src={activeService.image} alt={activeService.title} className="modal-banner-image" />
                <div className="modal-banner-overlay"></div>
              </div>

              {/* Detailed Description */}
              <div className="modal-section">
                <h4 className="modal-section-title">Overview</h4>
                <p className="modal-full-description">{activeService.fullDescription}</p>
              </div>

              {/* Grid: Features & Technologies */}
              <div className="modal-details-grid">
                <div className="modal-detail-card">
                  <h4 className="modal-card-heading">
                    <CheckCircle2 size={18} style={{ color: activeService.color }} /> What We Deliver
                  </h4>
                  <ul className="modal-features-list">
                    {activeService.features.map((feat, i) => (
                      <li key={i}>
                        <span className="bullet-check" style={{ color: activeService.color }}>✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-detail-card">
                  <h4 className="modal-card-heading">
                    <Code size={18} style={{ color: activeService.color }} /> Technologies & Tools
                  </h4>
                  <div className="tech-tags-container">
                    {activeService.technologies.map((tech, i) => (
                      <span key={i} className="tech-pill-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h4 className="modal-card-heading mt-4">
                    <Sparkles size={18} style={{ color: activeService.color }} /> Key Advantages
                  </h4>
                  <ul className="modal-benefits-list">
                    {activeService.benefits.map((ben, i) => (
                      <li key={i}>
                        <span>•</span> {ben}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* High Conversion WhatsApp CTA Section */}
              <div className="modal-action-box">
                <div className="modal-action-text">
                  <h3>Ready to get started with {activeService.title}?</h3>
                  <p>Speak directly with our technical team on WhatsApp for custom consultation, pricing, and project timeline.</p>
                </div>
                <div className="modal-action-buttons">
                  <a 
                    href={getWhatsAppUrl(activeService.title)} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-whatsapp-order"
                  >
                    <WhatsAppIcon />
                    <span>Get Service on WhatsApp</span>
                    <ExternalLink size={18} />
                  </a>
                  <a 
                    href="tel:+96894578538" 
                    className="btn-phone-call"
                  >
                    <Phone size={18} />
                    <span>Call: +968 9457 8538</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
