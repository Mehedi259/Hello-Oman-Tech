import { CheckCircle2, Award, Users, Zap } from 'lucide-react';
import './WhyUs.css';

const features = [
  "১০০% অরজিনাল ভ্যালু সাপ্লাই",
  "প্রিমিয়াম কোয়ালিটি ডেলিভারি",
  "মোবাইল রেস্পন্সিভ ডিজাইন",
  "ডেডিকেটেড সাপোর্ট টিম",
  "স্বচ্ছ যোগাযোগ ব্যবস্থা",
  "অত্যাধুনিক প্রযুক্তির ব্যবহার"
];

const WhyUs = () => {
  return (
    <section id="why-us" className="section why-us-section">
      <div className="container why-us-container">
        <div className="why-us-content">
          <h2 className="section-title text-left">কেন হ্যালো ওমান টেক?</h2>
          <p className="why-us-subtitle">
            আমরা সত্যিকারের ভ্যালু প্রদান এবং বিশ্বাসযোগ্যতা অর্জনে প্রতিশ্রুতিবদ্ধ। আমাদের লক্ষ্য হলো আপনাকে এমন নির্ভরযোগ্য প্রযুক্তিগত সমাধান দেওয়া, যা আপনার ব্যবসায়িক সাফল্য নিশ্চিত করে।
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
              <Award className="stat-icon" />
              <h4 className="stat-number">১০০%</h4>
              <p className="stat-label">ক্লায়েন্ট সন্তুষ্টি</p>
            </div>
            <div className="stat-box">
              <Users className="stat-icon" />
              <h4 className="stat-number">৫০+</h4>
              <p className="stat-label">দক্ষ পেশাদার</p>
            </div>
            <div className="stat-box">
              <Zap className="stat-icon" />
              <h4 className="stat-number">২৪/৭</h4>
              <p className="stat-label">প্রিমিয়াম সাপোর্ট</p>
            </div>
          </div>
        </div>
        
        <div className="why-us-visual">
          <div className="image-wrapper">
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
