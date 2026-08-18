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
              <span>Hello Oman Tech</span>
            </a>
            <p className="footer-description">
              Elevating businesses through innovative technology, stunning design, and strategic digital marketing in Oman and beyond.
            </p>
            <div className="social-links">
              <a href="#" className="social-link"><MessageSquare size={20} /></a>
              <a href="#" className="social-link"><Link size={20} /></a>
              <a href="#" className="social-link"><Share2 size={20} /></a>
              <a href="#" className="social-link"><Globe size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Services</h4>
            <ul>
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">App Development</a></li>
              <li><a href="#services">Digital Marketing</a></li>
              <li><a href="#services">AI Technology</a></li>
              <li><a href="#services">Cyber Security</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Company</h4>
            <ul>
              <li><a href="#home">About Us</a></li>
              <li><a href="#why-us">Why Choose Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="contact-list">
              <li>
                <MapPin className="contact-icon" />
                <span>Muscat, Sultanate of Oman</span>
              </li>
              <li>
                <Phone className="contact-icon" />
                <span>+968 1234 5678</span>
              </li>
              <li>
                <Mail className="contact-icon" />
                <span>info@helloomantech.com</span>
              </li>
            </ul>
            <div className="newsletter">
              <h5 className="newsletter-title">Subscribe to our newsletter</h5>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Email Address" required className="newsletter-input" />
                <button type="submit" className="btn btn-primary newsletter-btn">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Hello Oman Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
