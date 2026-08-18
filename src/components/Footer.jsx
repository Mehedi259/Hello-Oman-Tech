import { Mail, Phone, MapPin, Cpu, Globe, MessageSquare, Share2, Link } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="logo footer-logo">
              <Cpu className="logo-icon" />
              <span>হ্যালো ওমান টেক</span>
            </a>
            <p className="footer-description">
              উদ্ভাবনী প্রযুক্তি, দৃষ্টিনন্দন ডিজাইন এবং কৌশলগত ডিজিটাল মার্কেটিংয়ের মাধ্যমে ওমান এবং বিশ্বজুড়ে ব্যবসায়ের মানোন্নয়ন।
            </p>
            <div className="social-links">
              <a href="#" className="social-link"><MessageSquare size={20} /></a>
              <a href="#" className="social-link"><Link size={20} /></a>
              <a href="#" className="social-link"><Share2 size={20} /></a>
              <a href="#" className="social-link"><Globe size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">সেবাসমূহ</h4>
            <ul>
              <li><a href="#services">ওয়েব ডেভেলপমেন্ট</a></li>
              <li><a href="#services">অ্যাপ ডেভেলপমেন্ট</a></li>
              <li><a href="#services">ডিজিটাল মার্কেটিং</a></li>
              <li><a href="#services">আর্টিফিশিয়াল ইন্টেলিজেন্স</a></li>
              <li><a href="#services">সাইবার সিকিউরিটি</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">কোম্পানি</h4>
            <ul>
              <li><a href="#home">আমাদের সম্পর্কে</a></li>
              <li><a href="#process">কাজের ধারা</a></li>
              <li><a href="#why-us">কেন আমাদের বেছে নিবেন</a></li>
              <li><a href="#">গোপনীয়তা নীতি</a></li>
              <li><a href="#">শর্তাবলী</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">যোগাযোগ</h4>
            <ul className="contact-list">
              <li>
                <MapPin className="contact-icon" />
                <span>মাস্কাট, সুলতানাত অফ ওমান</span>
              </li>
              <li>
                <Phone className="contact-icon" />
                <span>+৯৬৮ ১২৩৪ ৫৬৭৮</span>
              </li>
              <li>
                <Mail className="contact-icon" />
                <span>info@helloomantech.com</span>
              </li>
            </ul>
            <div className="newsletter">
              <h5 className="newsletter-title">নিউজলেটার সাবস্ক্রাইব করুন</h5>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="ইমেইল অ্যাড্রেস" required className="newsletter-input" />
                <button type="submit" className="btn btn-primary newsletter-btn">সাবস্ক্রাইব</button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} হ্যালো ওমান টেক। সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
