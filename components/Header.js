import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setOpenDropdown(null);
    }
  };

  const toggleMobileDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={isScrolled ? 'hidden' : ''}>
      <div className="top-bar">
        <div className="container">
          <div className="contact-info">
            <h3>ST. JOHN TRAINING COLLEGE MARALAL</h3>
            <div className="contact-details">
              <span>📞 <a href="tel:0720215715">0720215715</a></span>
              <span className="separator"> | </span>
              <span>✉️ <a href="mailto:stjohnstrainingcollege@gmail.com"> click to email</a></span>
            </div>
          </div>
          <div className="social-media">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg className="social-icon" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg className="social-icon" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.04c-5.523 0-10 4.477-10 10 0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg className="social-icon" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.33.26 2.62.74 3.83L2 22l6.39-.94c1.15.49 2.39.74 3.65.74 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.18c-1.14 0-2.26-.31-3.24-.84l-.23-.13-3.78.56.57-3.72-.14-.23c-.58-1.03-.88-2.18-.88-3.37 0-4.62 3.76-8.38 8.38-8.38s8.38 3.76 8.38 8.38c0 4.63-3.76 8.38-8.38 8.38zm4.29-6.07c-.23-.12-1.38-.68-1.59-.76-.21-.08-.37-.12-.53.12-.16.24-.61.76-.75.92-.13.16-.27.18-.50.06-.23-.12-1-.38-1.88-.92-.66-.4-1.11-.89-1.24-1.12-.13-.24-.01-.36.1-.48.1-.1.23-.24.35-.36.12-.12.16-.21.24-.36.08-.16.04-.30-.02-.42-.06-.12-.53-1.29-.73-1.77-.19-.47-.38-.41-.53-.41-.14 0-.31-.01-.48-.01-.27 0-.50.1-.67.38-.17.27-.65.66-.65 1.61s.67 1.88.79 2.01c.12.13 1.11 1.79 2.69 2.51.38.17.67.3 1.1.49.52.23.97.49 1.33.66.33.16.66.14.92.08.28-.06.86-.33 1.04-.66.18-.33.18-.61.13-.66-.06-.06-.14-.08-.21-.12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="header-content">
          <div className="logo-container">
            <Image
              src="/logo.png"
              alt="St Johns Training College Logo"
              width={60}
              height={60}
              className="logo"
            />
            <span className="tagline">Aspire to Inspire <br /> Before you Expire</span>
          </div>
          <button
            className="hamburger"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <span className="hamburger-icon">{isMobileMenuOpen ? '✕' : '☰'}</span>
          </button>
          <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`} aria-label="Main navigation">
            <div className="nav-item">
              <Link href="/" className="nav-link" aria-current="page">HOME</Link>
            </div>
            <div className="nav-item">
              <Link href="/about" className="nav-link">ABOUT</Link>
            </div>
            <div className="nav-item">
              <Link href="/contact" className="nav-link">CONTACT</Link>
            </div>
            <div className="nav-item">
              <button
                className="nav-link dropdown-toggle"
                aria-haspopup="true"
                aria-expanded={openDropdown === 2}
                onClick={() => toggleMobileDropdown(2)}
              >
                ADMISSIONS <span className="chevron">▼</span>
              </button>
              <div className={`dropdown ${openDropdown === 2 ? 'open' : ''}`}>
                <Link href="/admissions/how-to-apply">📝 How to Apply</Link>
                <Link href="/admissions/tuition-fees">💰 Tuition & Fees</Link>
                <Link href="/admissions/scholarships">🎓 Scholarships</Link>
                <Link href="/contact/visit-campus">🏫 Visit Campus</Link>
              </div>
            </div>
            <div className="nav-item">
              <button
                className="nav-link dropdown-toggle"
                aria-haspopup="true"
                aria-expanded={openDropdown === 1}
                onClick={() => toggleMobileDropdown(1)}
              >
                ACADEMICS <span className="chevron">▼</span>
              </button>
              <div className={`dropdown ${openDropdown === 1 ? 'open' : ''}`}>
                <Link href="/programs/diploma-courses">📚 Diploma Courses</Link>
                <Link href="/programs/certificate-courses">🎓 Certificate Courses</Link>
                <Link href="/programs/short-courses">💻 Short Courses</Link>
                <Link href="/programs/online-learning">🏅 Online Learning</Link>
              </div>
            </div>
            <div className="nav-item">
              <button
                className="nav-link dropdown-toggle"
                aria-haspopup="true"
                aria-expanded={openDropdown === 4}
                onClick={() => toggleMobileDropdown(4)}
              >
                STAFF <span className="chevron">▼</span>
              </button>
              <div className={`dropdown ${openDropdown === 4 ? 'open' : ''}`}>
                <Link href="/faculty-staff/directory">👩‍🏫 Faculty Directory</Link>
                <Link href="/faculty-staff/resources">📋 Staff Resources</Link>
                <Link href="/faculty-staff/research">🔬 Research</Link>
              </div>
            </div>
            <div className="nav-item">
              <button
                className="nav-link dropdown-toggle"
                aria-haspopup="true"
                aria-expanded={openDropdown === 6}
                onClick={() => toggleMobileDropdown(6)}
              >
                QUICK LINKS <span className="chevron">▼</span>
              </button>
              <div className={`dropdown ${openDropdown === 6 ? 'open' : ''}`}>
                <Link href="/library">📚 Library</Link>
                <Link href="/calendar">📅 Academic Calendar</Link>
                <Link href="/jobs">💼 Career Services</Link>
                <Link href="/portal">🔐 Student Portal</Link>
              </div>
            </div>
            <div className="search-bar">
              <Link href="/admissions">
                <button className="apply-button" aria-label="Apply Now">APPLY</button>
              </Link>
            </div>
            <div className="mobile-social-media">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg className="social-icon" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg className="social-icon" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.04c-5.523 0-10 4.477-10 10 0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg className="social-icon" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.33.26 2.62.74 3.83L2 22l6.39-.94c1.15.49 2.39.74 3.65.74 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.18c-1.14 0-2.26-.31-3.24-.84l-.23-.13-3.78.56.57-3.72-.14-.23c-.58-1.03-.88-2.18-.88-3.37 0-4.62 3.76-8.38 8.38-8.38s8.38 3.76 8.38 8.38c0 4.63-3.76 8.38-8.38 8.38zm4.29-6.07c-.23-.12-1.38-.68-1.59-.76-.21-.08-.37-.12-.53.12-.16.24-.61.76-.75.92-.13.16-.27.18-.50.06-.23-.12-1-.38-1.88-.92-.66-.4-1.11-.89-1.24-1.12-.13-.24-.01-.36.1-.48.1-.1.23-.24.35-.36.12-.12.16-.21.24-.36.08-.16.04-.30-.02-.42-.06-.12-.53-1.29-.73-1.77-.19-.47-.38-.41-.53-.41-.14 0-.31-.01-.48-.01-.27 0-.50.1-.67.38-.17.27-.65.66-.65 1.61s.67 1.88.79 2.01c.12.13 1.11 1.79 2.69 2.51.38.17.67.3 1.1.49.52.23.97.49 1.33.66.33.16.66.14.92.08.28-.06.86-.33 1.04-.66.18-.33.18-.61.13-.66-.06-.06-.14-.08-.21-.12z"/>
                </svg>
              </a>
            </div>
            <div className="developer-caption">
              <a href="https://richardngasike.co.ke" target="_blank" rel="noopener noreferrer">
                DEVELOPED BY RICHARD NGASIKE
              </a>
            </div>
          </nav>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        .top-bar {
          background: linear-gradient(90deg, #ff0000ff, #c72525ff);
          color: #ffffff;
          padding: 0.75rem 0;
          font-size: 0.9rem;
          z-index: 2000;
          font-family: 'Poppins', sans-serif;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          position: relative;
          text-align: center;
          border-bottom: 2px solid #ffffff;
        }

        .top-bar .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .contact-details {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .contact-info h3 {
          font-size: 1.3rem;
          font-weight: 800;
          color: #ffffff;
          font-family: 'Poppins', sans-serif;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin: 0;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .contact-info a,
        .contact-info span {
          color: #ffffff;
          font-weight: 700;
          transition: color 0.3s ease, transform 0.3s ease;
          font-family: 'Poppins', sans-serif;
          letter-spacing: 0.5px;
          line-height: 1.5;
          white-space: nowrap;
        }

        .contact-info a:hover,
        .contact-info a:focus {
          color: #facc15;
          transform: scale(1.05);
          outline: 2px solid #facc15;
        }

        .separator {
          color: #ffffff;
          font-weight: 700;
        }

        .social-media {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          transition: all 0.3s ease;
          padding: 0.3rem;
          border-radius: 50%;
        }

        .social-media a:hover .social-icon,
        .social-media a:focus .social-icon {
          fill: #9dff00ff;
          transform: scale(1.2);
          background: rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 10px rgba(250, 204, 21, 0.5);
        }

        header {
          position: sticky;
          top: 0;
          z-index: 3000;
          background: linear-gradient(90deg, #fef3c7, #fef9c3);
          transition: transform 0.3s ease-in-out;
          font-family: 'Poppins', sans-serif;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        header.hidden {
          transform: translateY(-100%);
        }

        .container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
          border-bottom: 2px solid #1e293b;
          flex-wrap: nowrap;
          gap: 1rem;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .logo {
          width: 70px;
          height: auto;
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .logo:hover,
        .logo:focus {
          transform: scale(1.15);
          filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.4));
        }

        .tagline {
          font-size: 1.2rem;
          font-weight: 800;
          background: linear-gradient(90deg, #16a34a, #22c55e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: 1.0px;
          line-height: 1.0;
          font-family: 'Poppins', sans-serif;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .nav {
          display: none;
          flex-direction: column;
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background: linear-gradient(90deg, #108b00ff, #338b00ff);
          padding: 1rem;
          border-top: 2px solid #1e293b;
          box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.3);
          z-index: 3100;
          transform: translateY(100%);
          transition: transform 0.3s ease-in-out;
        }

        .nav.open {
          display: flex;
          transform: translateY(0);
        }

        .nav-item {
          width: 100%;
          border-bottom: 1px solid #ffffff;
        }

        .nav-link {
          font-size: 1rem;
          font-weight: 700;
          color: #ffffff;
          padding: 1rem;
          text-align: left;
          text-transform: uppercase;
          transition: all 0.3s ease;
          display: block;
          background: none;
          border: none;
          width: 100%;
          cursor: pointer;
        }

        .nav-link:hover,
        .nav-link:focus {
          background: #b91c1c;
          transform: translateX(8px);
          color: #facc15;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }

        .nav-link[aria-current="page"] {
          background: #b91c1c;
          color: #facc15;
          border-bottom: none;
        }

        .dropdown-toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          position: relative;
        }

        .chevron {
          font-size: 0.9rem;
          transition: transform 0.3s ease;
          color: #ffffff;
        }

        .nav-item:hover .chevron,
        .nav-item:focus-within .chevron,
        .nav-item.active .chevron {
          transform: rotate(180deg);
          color: #facc15;
        }

        .dropdown {
          display: none;
          position: static;
          border: 2px solid #ffffff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          background: linear-gradient(180deg, #ff0000, #c72525);
          padding: 0.75rem 1rem;
          border-radius: 10px;
          z-index: 3100;
          margin-top: 0.5rem;
          margin-left: 0.5rem;
          width: calc(100% - 1rem);
          flex-direction: column;
          align-items: flex-start;
        }

        .dropdown.open {
          display: flex;
        }

        .dropdown a {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1rem;
          color: #ffffff;
          font-size: 1rem;
          font-weight: 700;
          border-radius: 8px;
          text-align: left;
          transition: all 0.3s ease;
        }

        .dropdown a:hover,
        .dropdown a:focus {
          background: #b91c1c;
          transform: translateX(5px);
          color: #facc15;
        }

        .apply-button {
          padding: 0.3rem 1.2rem;
          background: linear-gradient(90deg, #16a34a, #22c55e);
          border: none;
          border-radius: 25px;
          cursor: pointer;
          color: #ffffff;
          outline: 2px solid #facc15;
          font-weight: 700;
          font-size: 1rem;
          transition: all 0.3s ease;
          font-family: 'Poppins', sans-serif;
          letter-spacing: 1px;
          text-transform: uppercase;
          animation: pulse 2s infinite;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
          white-space: nowrap;
        }

        .apply-button:hover,
        .apply-button:focus {
          background: linear-gradient(90deg, #15803d, #16a34a);
          transform: scale(1.1);
          outline: 2px solid #ff0000ff;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.7);
          }
          70% {
            transform: scale(1.05);
            box-shadow: 0 0 0 10px rgba(22, 163, 74, 0);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(22, 163, 74, 0);
          }
        }

        .hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 50%;
          z-index: 3200;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hamburger-icon {
          font-size: 2rem;
          color: #53b900ff;
          transition: color 0.3s ease, transform 0.3s ease;
          display: inline-block;
        }

        .hamburger:hover .hamburger-icon,
        .hamburger:focus .hamburger-icon {
          color: #facc15;
          transform: scale(1.1);
          background: rgba(30, 58, 138, 0.1);
        }

        .mobile-social-media {
          display: none;
          margin-top: auto;
          padding: 1.5rem 0;
          border-top: 2px solid rgba(255, 255, 255, 0.3);
          justify-content: center;
          gap: 1.2rem;
        }

        .mobile-social-media a {
          margin: 0;
        }

        .mobile-social-media .social-icon {
          width: 24px;
          height: 24px;
          transition: all 0.3s ease;
          padding: 0.4rem;
          border-radius: 50%;
        }

        .mobile-social-media a:hover .social-icon,
        .mobile-social-media a:focus .social-icon {
          fill: #facc15;
          transform: scale(1.2);
          background: rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 10px rgba(250, 204, 21, 0.5);
        }

        .developer-caption {
          display: none;
          margin-top: 1rem;
          padding: 1.5rem 0;
          text-align: center;
          border-top: 2px solid rgba(255, 255, 255, 0.3);
        }

        .developer-caption a {
          color: #ffffff;
          font-size: 1rem;
          font-weight: 700;
          font-family: 'Poppins', sans-serif;
          text-decoration: none;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.8px;
        }

        .developer-caption a:hover,
        .developer-caption a:focus {
          color: #facc15;
          transform: scale(1.05);
        }

        @keyframes dropdownFade {
          0% {
            opacity: 0;
            transform: translateY(-15px) rotateX(-10deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0);
          }
        }

        @keyframes slideIn {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          80% {
            transform: translateY(-10px);
            opacity: 1;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }

          .nav {
            display: ${isMobileMenuOpen ? 'flex' : 'none'};
            flex-direction: column;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background: linear-gradient(90deg, #108b00ff, #338b00ff);
            padding: 1rem;
            border-top: 2px solid #1e293b;
            box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.3);
            z-index: 3100;
            transform: translateY(100%);
            transition: transform 0.3s ease-in-out;
          }

          .nav.open {
            display: flex;
            transform: translateY(0);
            animation: slideIn 0.4s ease-in-out;
          }

          .nav-item {
            width: 100%;
            margin-bottom: 0.75rem;
          }

          .nav-link {
            padding: 1rem;
            font-size: 1.1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 10px;
            color: #ffffff;
            font-weight: 700;
            text-transform: uppercase;
            transition: all 0.3s ease;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          }

          .nav-link:hover,
          .nav-link:focus {
            background: #b91c1c;
            transform: translateX(8px);
            color: #facc15;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          }

          .nav-link[aria-current="page"] {
            background: #b91c1c;
            color: #facc15;
            border-bottom: none;
          }

          .chevron {
            color: #ffffff;
          }

          .nav-item:hover .chevron,
          .nav-item:focus-within .chevron,
          .nav-item.active .chevron {
            color: #facc15;
          }

          .dropdown-toggle {
            cursor: pointer;
          }

          .dropdown {
            display: none;
            position: static;
            border: 2px solid #ffffff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            background: linear-gradient(180deg, #ff0000, #c72525);
            padding: 0.75rem 1rem;
            border-radius: 10px;
            z-index: 3100;
            margin-top: 0.5rem;
            margin-left: 0.5rem;
            width: calc(100% - 1rem);
            flex-direction: column;
            align-items: flex-start;
          }

          .dropdown.open {
            display: flex;
          }

          .dropdown a {
            padding: 0.8rem 1rem;
            color: #ffffff;
            font-weight: 700;
            border-radius: 8px;
            text-align: left;
            font-size: 0.95rem;
          }

          .dropdown a:hover,
          .dropdown a:focus {
            background: #b91c1c;
            transform: translateX(5px);
            color: #facc15;
          }

          .search-bar {
            margin: 1.5rem 0;
            width: 100%;
          }

          .apply-button {
            width: 100%;
            padding: 0.8rem;
            font-size: 1rem;
          }

          .mobile-social-media {
            display: flex;
            justify-content: center;
            gap: 1.2rem;
            margin-top: 1rem;
            padding: 1.5rem 0;
            border-top: 2px solid rgba(255, 255, 255, 0.3);
          }

          .developer-caption {
            display: block;
            text-align: center;
            padding: 1.5rem 0;
            border-top: 2px solid rgba(255, 255, 255, 0.3);
          }
        }

        @media (max-width: 1024px) {
          .nav {
            gap: 0.8rem;
          }

          .search-bar input {
            width: 140px;
          }

          .search-bar input:focus {
            width: 160px;
          }

          .logo {
            width: 60px;
          }

          .tagline {
            font-size: 1.3rem;
          }

          .social-icon {
            width: 28px;
            height: 28px;
          }

          .nav-link {
            font-size: 1.1rem;
            padding: 0.5rem 0.8rem;
          }

          .dropdown a {
            font-size: 0.95rem;
          }

          .contact-info h3 {
            font-size: 1.2rem;
          }

          .contact-info a,
          .contact-info span {
            font-size: 0.9rem;
          }
        }

        @media (min-width: 769px) {
          .hamburger {
            display: none;
          }
          .nav {
            display: flex;
            flex-direction: row;
            position: static;
            width: auto;
            height: auto;
            background: linear-gradient(90deg, #108b00ff, #338b00ff);
            padding: 0.5rem 1rem;
            border-right: none;
            box-shadow: none;
            transform: none;
            transition: none;
            z-index: 3100;
          }
          .nav-item {
            border-bottom: none;
            margin: 0 0.5rem;
          }
          .nav-link {
            padding: 0.5rem 1rem;
            color: #1e3a8a;
          }
          .nav-link:hover,
          .nav-link:focus {
            background: rgba(30, 58, 138, 0.1);
            color: #66ff00ff;
          }
          .dropdown {
            position: absolute;
            top: 100%;
            left: 0;
            background: linear-gradient(180deg, #ff0000, #c72525);
            border: 2px solid #1e293b;
            border-radius: 12px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
            min-width: 260px;
            z-index: 3100;
            padding: 0.75rem 0;
            transform-origin: top;
            animation: dropdownFade 0.3s ease-in-out;
          }
          .nav-item:hover .dropdown,
          .nav-item:focus-within .dropdown {
            display: flex;
          }
          .dropdown a + a {
            border-top: 1px solid rgba(255, 255, 255, 0.2);
          }
        }

        @media (max-width: 480px) {
          .logo {
            width: 50px;
          }

          .tagline {
            font-size: 1rem;
          }

          .nav-link {
            font-size: 1rem;
          }

          .dropdown a {
            font-size: 0.9rem;
          }

          .contact-info h3 {
            font-size: 1rem;
          }

          .contact-info a,
          .contact-info span {
            font-size: 0.85rem;
          }

          .social-media {
            gap: 0.8rem;
          }

          .social-icon {
            width: 24px;
            height: 24px;
          }

          .search-bar input {
            font-size: 0.85rem;
          }

          .apply-button {
            padding: 0.6rem;
            font-size: 0.9rem;
          }

          .mobile-social-media .social-icon {
            width: 20px;
            height: 20px;
          }

          .developer-caption a {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 360px) {
          .contact-info h3 {
            font-size: 0.9rem;
          }

          .contact-info a,
          .contact-info span {
            font-size: 0.8rem;
          }

          .tagline {
            font-size: 0.9rem;
          }

          .developer-caption a {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </header>
  );
}