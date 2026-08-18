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
    title: 'ওয়েব ডেভেলপমেন্ট',
    description: 'আপনার ব্যবসার প্রয়োজনে কাস্টম, রেস্পন্সিভ এবং অত্যন্ত দ্রুতগতির ওয়েবসাইট তৈরি করি।',
    icon: <Code className="service-icon" />,
    image: webDevImg,
    color: '#3b82f6'
  },
  {
    title: 'অ্যাপ ডেভেলপমেন্ট',
    description: 'আইওএস (iOS) এবং অ্যান্ড্রয়েড প্ল্যাটফর্মের জন্য উচ্চ-ক্ষমতাসম্পন্ন মোবাইল অ্যাপ্লিকেশন।',
    icon: <Smartphone className="service-icon" />,
    image: appDevImg,
    color: '#8b5cf6'
  },
  {
    title: 'ডেস্কটপ সফটওয়্যার',
    description: 'এন্টারপ্রাইজ প্রোডাক্টিভিটি বাড়ানোর জন্য শক্তিশালী ও স্কেলেবল ডেস্কটপ সফটওয়্যার সল্যুশন।',
    icon: <Monitor className="service-icon" />,
    image: desktopSoftwareImg,
    color: '#10b981'
  },
  {
    title: 'ভিডিও এডিটিং',
    description: 'আপনার গল্প নিখুঁতভাবে তুলে ধরতে পেশাদার ভিডিও এডিটিং ও পোস্ট-প্রোডাকশন সেবা।',
    icon: <Film className="service-icon" />,
    image: videoEditingImg,
    color: '#f43f5e'
  },
  {
    title: 'ডিজিটাল মার্কেটিং',
    description: 'আপনার অনলাইন প্রবৃদ্ধি ত্বরান্বিত করতে ডেটা-নির্ভর মার্কেটিং স্ট্র্যাটেজি।',
    icon: <TrendingUp className="service-icon" />,
    image: digitalMarketingImg,
    color: '#f59e0b'
  },
  {
    title: 'আর্টিফিশিয়াল ইন্টেলিজেন্স',
    description: 'আপনার ব্যবসায়িক প্রক্রিয়া স্বয়ংক্রিয় ও অপ্টিমাইজ করতে নেক্সট-জেন এআই (AI) সল্যুশন।',
    icon: <BrainCircuit className="service-icon" />,
    image: aiTechImg,
    color: '#06b6d4'
  },
  {
    title: 'গ্রাফিক্স ডিজাইন',
    description: 'আকর্ষণীয় ভিজ্যুয়াল আইডেন্টিটি, ব্র্যান্ডিং এবং ইউআই/ইউএক্স (UI/UX) ডিজাইন সেবা।',
    icon: <PenTool className="service-icon" />,
    image: graphicsDesignImg,
    color: '#ec4899'
  },
  {
    title: 'সাইবার সিকিউরিটি',
    description: 'আপনার ডিজিটাল সম্পদের সর্বোচ্চ নিরাপত্তা ও ঝুঁকি মূল্যায়নের নির্ভরযোগ্য সেবা।',
    icon: <ShieldCheck className="service-icon" />,
    image: cyberSecurityImg,
    color: '#14b8a6'
  },
  {
    title: 'সোশ্যাল মিডিয়া মার্কেটিং',
    description: 'ব্র্যান্ড সচেতনতা ও বিশ্বস্ততা তৈরি করতে কার্যকরী সোশ্যাল মিডিয়া ক্যাম্পেইন।',
    icon: <Share2 className="service-icon" />,
    image: socialMediaImg,
    color: '#6366f1'
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-tertiary">
      <div className="container">
        <h2 className="section-title">আমাদের সেবাসমূহ</h2>
        <p className="section-subtitle">
          আধুনিক প্রযুক্তি বিশ্বে আপনার ব্র্যান্ডকে শক্তিশালী করতে এবং সঠিক ফলাফল নিয়ে আসতে আমরা একটি পূর্ণাঙ্গ ডিজিটাল সল্যুশন প্রদান করি।
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
                    <span>বিস্তারিত</span>
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
