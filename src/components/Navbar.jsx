import { useState, useEffect } from 'react';
import { Menu, X, Cpu, Phone, Mail } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'হোম', href: '#home' },
    { name: 'সেবাসমূহ', href: '#services' },
    { name: 'প্রযুক্তি', href: '#technologies' },
    { name: 'কাজের ধারা', href: '#process' },
    { name: 'কেন আমরা', href: '#why-us' }
  ];

  return (
    <header className="header">
      {/* Top Bar for Enterprise Look */}
      <div className="top-bar desktop-only">
        <div className="container top-bar-container">
          <div className="top-bar-left">
            <span className="top-bar-item"><Phone size={14} /> +৯৬৮ ১২৩৪ ৫৬৭৮</span>
            <span className="top-bar-item"><Mail size={14} /> info@helloomantech.com</span>
          </div>
          <div className="top-bar-right">
            <span className="top-bar-item">ভাষা: <strong>বাংলা</strong></span>
          </div>
        </div>
      </div>

      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#home" className="logo">
            <Cpu className="logo-icon" />
            <span>হ্যালো ওমান টেক</span>
          </a>

          <div className="nav-links desktop-only">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn btn-primary nav-btn">যোগাযোগ করুন</a>
          </div>

          <button 
            className="mobile-menu-btn mobile-only"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="btn btn-primary mobile-nav-btn"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            যোগাযোগ করুন
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
