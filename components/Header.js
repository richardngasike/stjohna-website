// components/Header.js
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null);
  };

  const toggleMobileDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <header>
      <div className="top-bar">
        <div className="container">
          <div className="contact-info">
            <h3>ST. JOHN TRAINING COLLEGE MARALAL</h3>
            <span>📞 <a href="tel:0720215715">0720215715</a></span>
            <span> | </span>
            <span>✉️ <a href="mailto:stjohnscollege@gmail.com">stjohnscollege@gmail.com</a></span>
          </div>
          <div className="social-media">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg className="social-icon" viewBox="0 0 24 24" fill="#ffffffff" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg className="social-icon" viewBox="0 0 24 24" fill="#ffffffff" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.04c-5.523 0-10 4.477-10 10 0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg className="social-icon" viewBox="0 0 24 24" fill="#ffffffff" xmlns="http://www.w3.org/2000/svg">
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
          <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`} aria-label="Main navigation">
            <Link href="/" className="nav-link" aria-current="page">Home</Link>
            <div className="nav-item">
              <Link href="/about" className="nav-link">About</Link>
            </div>
            <div className="nav-item">
              <Link
                href="/programs"
                className="nav-link dropdown-toggle"
                aria-haspopup="true"
                aria-expanded={openDropdown === 1}
                onClick={() => toggleMobileDropdown(1)}
              >
                Academics <span className="chevron">▼</span>
              </Link>
              <div className={`dropdown ${openDropdown === 1 ? 'open' : ''}`}>
                <Link href="/programs/undergraduate">📚 Undergraduate Programs</Link>
                <Link href="/programs/graduate">🎓 Graduate Programs</Link>
                <Link href="/programs/online">💻 Online Learning</Link>
                <Link href="/programs/certificates">🏅 Certificate Programs</Link>
              </div>
            </div>
            <div className="nav-item">
              <Link
                href="/admissions"
                className="nav-link dropdown-toggle"
                aria-haspopup="true"
                aria-expanded={openDropdown === 2}
                onClick={() => toggleMobileDropdown(2)}
              >
                Admissions <span className="chevron">▼</span>
              </Link>
              <div className={`dropdown ${openDropdown === 2 ? 'open' : ''}`}>
                <Link href="/admissions/apply">📝 How to Apply</Link>
                <Link href="/admissions/tuition">💰 Tuition & Fees</Link>
                <Link href="/admissions/scholarships">🎓 Scholarships</Link>
                <Link href="/admissions/visit">🏫 Visit Campus</Link>
              </div>
            </div>
            <div className="nav-item">
              <Link
                href="/student-life"
                className="nav-link dropdown-toggle"
                aria-haspopup="true"
                aria-expanded={openDropdown === 3}
                onClick={() => toggleMobileDropdown(3)}
              >
                Student Life <span className="chevron">▼</span>
              </Link>
              <div className={`dropdown ${openDropdown === 3 ? 'open' : ''}`}>
                <Link href="/student-life/clubs">🤝 Clubs & Organizations</Link>
                <Link href="/student-life/housing">🏠 Housing & Dining</Link>
                <Link href="/student-life/events">🎉 Campus Events</Link>
                <Link href="/student-life/wellness">🩺 Wellness Services</Link>
              </div>
            </div>
            <div className="nav-item">
              <Link
                href="/faculty-staff"
                className="nav-link dropdown-toggle"
                aria-haspopup="true"
                aria-expanded={openDropdown === 4}
                onClick={() => toggleMobileDropdown(4)}
              >
                Faculty/Staff <span className="chevron">▼</span>
              </Link>
              <div className={`dropdown ${openDropdown === 4 ? 'open' : ''}`}>
                <Link href="/faculty-staff/directory">👩‍🏫 Faculty Directory</Link>
                <Link href="/faculty-staff/resources">📋 Staff Resources</Link>
                <Link href="/faculty-staff/research">🔬 Research</Link>
              </div>
            </div>
            <div className="nav-item">
              <Link
                href="/alumni"
                className="nav-link dropdown-toggle"
                aria-haspopup="true"
                aria-expanded={openDropdown === 5}
                onClick={() => toggleMobileDropdown(5)}
              >
                Alumni <span className="chevron">▼</span>
              </Link>
              <div className={`dropdown ${openDropdown === 5 ? 'open' : ''}`}>
                <Link href="/alumni/association">🤝 Alumni Association</Link>
                <Link href="/alumni/donate">💸 Donate</Link>
                <Link href="/alumni/events">🎈 Alumni Events</Link>
                <Link href="/alumni/stories">📖 Success Stories</Link>
              </div>
            </div>
            <div className="nav-item">
              <Link href="/contact" className="nav-link">Contact</Link>
            </div>
            <div className="nav-item">
              <Link
                href="/quick-links"
                className="nav-link dropdown-toggle"
                aria-haspopup="true"
                aria-expanded={openDropdown === 6}
                onClick={() => toggleMobileDropdown(6)}
              >
                Quick Links <span className="chevron">▼</span>
              </Link>
              <div className={`dropdown ${openDropdown === 6 ? 'open' : ''}`}>
                <Link href="/library">📚 Library</Link>
                <Link href="/calendar">📅 Academic Calendar</Link>
                <Link href="/jobs">💼 Career Services</Link>
                <Link href="/portal">🔐 Student Portal</Link>
              </div>
            </div>
            <div className="search-bar">
              <input type="text" placeholder="🔍 Search..." aria-label="Search" />
              <button type="submit" aria-label="Search">Search</button>
            </div>
            <Link href="/login" className="nav-link login-btn">Login</Link>
          </nav>
          <button
            className="hamburger"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      <style jsx>{`
        .top-bar {
          background: linear-gradient(45deg, #d32f2f, #b71c1c);
          color: #fff9e6;
          padding: 0.75rem 0;
          font-size: 0.9rem;
          z-index: 1500;
          font-family: 'Inter', sans-serif;
        }

        .top-bar .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }

        .contact-info h3 {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #fff9e6;
          font-family: 'Inter', sans-serif;
        }

        .contact-info a,
        .contact-info span {
          margin-right: 0.5rem;
          color: #fff9e6;
          transition: color 0.3s ease;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          letter-spacing: 0.5px;
          line-height: 1.5;
        }

        .contact-info a:hover,
        .contact-info a:focus {
          color: #ffeb3b;
          outline: 2px solid #ffeb3b;
        }

        .contact-info a:hover::after,
        .contact-info a:focus::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #ffeb3b;
        }

        .social-media {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .social-icon {
          width: 24px;
          height: 24px;
          transition: fill 0.3s ease, transform 0.3s ease;
        }

        .social-media a:hover .social-icon,
        .social-media a:focus .social-icon {
          fill: #ffeb3b;
          transform: scale(1.2);
        }

        header {
          position: sticky;
          top: 0;
          z-index: 2500;
          background: linear-gradient(45deg, #fff9e6, #ffe082);
          overflow-x: hidden;
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
          border-bottom: 2px solid #2b2b2b;
          flex-wrap: wrap;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .logo {
          width: 50px;
          height: auto;
          transition: transform 0.3s ease;
        }

        .logo:hover,
        .logo:focus {
          transform: scale(1.05);
        }

        .tagline {
          font-size: 1.3rem;
          font-weight: 700;
          background: linear-gradient(45deg, #28a745, #38d57a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: 1px;
          line-height: 1.4;
          font-family: 'Inter', sans-serif;
        }

        .nav {
          display: flex;
          gap: 1.5rem;
          align-items: center;
          flex-wrap: wrap;
          overflow: visible;
        }

        .nav-link {
          font-size: 1.1rem;
          font-weight: 600;
          color: #b71c1c;
          transition: color 0.3s ease;
          white-space: nowrap;
          font-family: 'Inter', sans-serif;
          letter-spacing: 0.5px;
          line-height: 1.5;
        }

        .nav-link:hover,
        .nav-link:focus {
          color: #ffeb3b;
          outline: 2px solid #ffeb3b;
        }

        .nav-link:hover::after,
        .nav-link:focus::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #ffeb3b;
        }

        .nav-link[aria-current="page"] {
          color: #ffeb3b;
          font-weight: 700;
        }

        .dropdown-toggle {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          position: relative;
        }

        .chevron {
          font-size: 0.8rem;
          transition: transform 0.3s ease;
        }

        .nav-item:hover .chevron,
        .nav-item:focus-within .chevron {
          transform: rotate(180deg);
        }

        .nav-item {
          position: relative;
        }

        .dropdown {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background: linear-gradient(180deg, #28a745, #38d57a);
          border: 2px solid #2b2b2b;
          border-radius: 12px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25), inset 0 0 10px rgba(255, 255, 255, 0.3);
          min-width: 240px;
          z-index: 3000;
          padding: 1rem 0;
          transform-origin: top;
        }

        .nav-item:hover .dropdown,
        .nav-item:focus-within .dropdown {
          display: block;
          animation: dropdownFade 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .dropdown.open {
          display: block;
        }

        .dropdown a {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.5rem;
          color: #fff9e6;
          font-size: 1rem;
          font-weight: 500;
          position: relative;
          transition: all 0.3s ease;
          font-family: 'Inter', sans-serif;
          letter-spacing: 0.5px;
          line-height: 1.5;
        }

        .dropdown a:hover,
        .dropdown a:focus {
          color: #ffeb3b;
          background: #218838;
          transform: scale(1.02);
          outline: 2px solid #ffeb3b;
        }

        .dropdown a:hover::after,
        .dropdown a:focus::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 1.5rem;
          width: calc(100% - 3rem);
          height: 2px;
          background: #ffeb3b;
        }

        .dropdown a:hover::before,
        .dropdown a:focus::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-left: 3px solid #ffeb3b;
          z-index: -1;
        }

        .dropdown a + a {
          border-top: 1px solid linear-gradient(90deg, transparent, #2b2b2b33, transparent);
        }

        .search-bar {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          position: relative;
        }

        .search-bar input {
          padding: 0.6rem 2rem 0.6rem 1rem;
          border: 1px solid #2b2b2b;
          border-radius: 25px;
          font-size: 0.9rem;
          width: 120px;
          background: #fff9e6 url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="%232b2b2b" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>') no-repeat 95% center;
          transition: width 0.3s ease, border-color 0.3s ease;
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          letter-spacing: 0.5px;
        }

        .search-bar input:focus {
          width: 150px;
          border-color: #ffeb3b;
          outline: none;
        }

        .search-bar button {
          padding: 0.6rem 1rem;
          background: linear-gradient(45deg, #28a745, #38d57a);
          border: none;
          border-radius: 25px;
          cursor: pointer;
          color: #fff9e6;
          font-weight: 500;
          transition: background 0.3s ease;
          font-family: 'Inter', sans-serif;
          letter-spacing: 0.5px;
        }

        .search-bar button:hover,
        .search-bar button:focus {
          background: linear-gradient(45deg, #2ecc71, #27ae60);
          outline: 2px solid #ffeb3b;
        }

        .login-btn {
          padding: 0.6rem 1.2rem;
          background: linear-gradient(45deg, #d32f2f, #b71c1c);
          border-radius: 25px;
          color: #fff9e6;
          font-weight: 500;
          transition: transform 0.3s ease, background 0.3s ease;
          font-family: 'Inter', sans-serif;
          letter-spacing: 0.5px;
        }

        .login-btn:hover,
        .login-btn:focus {
          transform: scale(1.05);
          background: linear-gradient(45deg, #f44336, #d32f2f);
          outline: 2px solid #ffeb3b;
        }

        .hamburger {
          display: none;
          font-size: 1.8rem;
          background: none;
          border: none;
          cursor: pointer;
          color: #2b2b2b;
          transition: transform 0.3s ease;
        }

        .hamburger:hover,
        .hamburger:focus {
          transform: rotate(90deg);
        }

        @keyframes dropdownFade {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(-15px) rotateX(-10deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0) rotateX(0);
          }
        }

        @keyframes slideIn {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @media (max-width: 1024px) {
          .nav {
            gap: 1.2rem;
          }

          .search-bar input {
            width: 100px;
          }

          .search-bar input:focus {
            width: 120px;
          }

          .logo {
            width: 100px;
          }

          .tagline {
            font-size: 1.1rem;
          }

          .social-icon {
            width: 20px;
            height: 20px;
          }

          .nav-link {
            font-size: 1rem;
          }

          .dropdown a {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 768px) {
          .top-bar .container {
            flex-direction: column;
            gap: 0.5rem;
          }

          .social-media {
            margin-top: 0.5rem;
            gap: 0.8rem;
          }

          .hamburger {
            display: block;
          }

          .nav {
            display: ${isMobileMenuOpen ? 'flex' : 'none'};
            flex-direction: column;
            position: fixed;
            top: 0;
            left: 0;
            width: 260px;
            height: 100vh;
            background: linear-gradient(45deg, #fff9e6, #ffe082);
            padding: 1.5rem 1rem;
            border-right: 2px solid #2b2b2b;
            animation: ${isMobileMenuOpen ? 'slideIn 0.3s ease-in-out' : 'none'};
            overflow-y: auto;
            z-index: 3000;
          }

          .nav.open {
            display: flex;
          }

          .nav-item {
            width: 100%;
          }

          .nav-link {
            padding: 0.8rem 0;
            font-size: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .dropdown-toggle {
            cursor: pointer;
          }

          .dropdown {
            display: none;
            position: static;
            border: none;
            box-shadow: none;
            background: linear-gradient(180deg, #28a745, #38d57a);
            padding: 0.5rem 1.5rem;
            border-radius: 8px;
            z-index: 3000;
          }

          .dropdown.open {
            display: block;
          }

          .dropdown a {
            padding: 0.6rem 1rem;
            color: #fff9e6;
          }

          .search-bar {
            margin: 1rem 0;
            width: 100%;
          }

          .search-bar input {
            width: 100%;
          }

          .search-bar input:focus {
            width: 100%;
          }

          .logo {
            width: 90px;
          }

          .tagline {
            font-size: 1rem;
          }

          .social-icon {
            width: 18px;
            height: 18px;
          }
        }

        @media (max-width: 480px) {
          .logo {
            width: 80px;
          }

          .tagline {
            font-size: 0.9rem;
          }

          .nav-link {
            font-size: 0.9rem;
          }

          .dropdown a {
            font-size: 0.8rem;
          }

          .login-btn {
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
          }

          .contact-info {
            font-size: 0.7rem;
          }

          .contact-info h3 {
            font-size: 1rem;
          }

          .social-media {
            gap: 0.6rem;
          }

          .social-icon {
            width: 16px;
            height: 16px;
          }

          .search-bar input {
            font-size: 0.8rem;
          }

          .search-bar button {
            padding: 0.5rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </header>
  );
}
