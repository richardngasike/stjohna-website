// components/Footer.js
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <section className="footer-section about-us">
            <h3>About St Johns Training College</h3>
            <p>
              St Johns Training College in Maralal, Samburu, is dedicated to empowering futures through quality education
              and innovative programs.
            </p>
            <Link href="/" className="tagline-link">
              Empowering Futures
            </Link>
          </section>
          <section className="footer-section quick-links">
            <h3>Quick Links</h3>
            <nav aria-label="Footer navigation">
              <Link href="/programs/undergraduate">Undergraduate Programs</Link>
              <Link href="/admissions/apply">How to Apply</Link>
              <Link href="/student-life/clubs">Clubs & Organizations</Link>
              <Link href="/faculty-staff/directory">Faculty Directory</Link>
              <Link href="/alumni/association">Alumni Association</Link>
              <Link href="/library">Library</Link>
            </nav>
          </section>
          <section className="footer-section contact-info">
            <h3>Contact Us</h3>
            <p>📍 Maralal Town, Samburu, Kenya</p>
            <p>📞 <a href="tel:0718959781">0718959781</a></p>
            <p>✉️ <a href="mailto:stjohnscollege@gmail.com">stjohnscollege@gmail.com</a></p>
            <div className="social-media">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg className="social-icon" viewBox="0 0 24 24" fill="#fff9e6" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg className="social-icon" viewBox="0 0 24 24" fill="#fff9e6" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.04c-5.523 0-10 4.477-10 10 0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg className="social-icon" viewBox="0 0 24 24" fill="#fff9e6" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.33.26 2.62.74 3.83L2 22l6.39-.94c1.15.49 2.39.74 3.65.74 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.18c-1.14 0-2.26-.31-3.24-.84l-.23-.13-3.78.56.57-3.72-.14-.23c-.58-1.03-.88-2.18-.88-3.37 0-4.62 3.76-8.38 8.38-8.38s8.38 3.76 8.38 8.38c0 4.63-3.76 8.38-8.38 8.38zm4.29-6.07c-.23-.12-1.38-.68-1.59-.76-.21-.08-.37-.12-.53.12-.16.24-.61.76-.75.92-.13.16-.27.18-.50.06-.23-.12-1-.38-1.88-.92-.66-.4-1.11-.89-1.24-1.12-.13-.24-.01-.36.1-.48.1-.1.23-.24.35-.36.12-.12.16-.21.24-.36.08-.16.04-.3-.02-.42-.06-.12-.53-1.29-.73-1.77-.19-.47-.38-.41-.53-.41-.14 0-.31-.01-.48-.01-.27 0-.50.1-.67.38-.17.27-.65.66-.65 1.61s.67 1.88.79 2.01c.12.13 1.11 1.79 2.69 2.51.38.17.67.3 1.1.49.52.23.97.49 1.33.66.33.16.66.14.92.08.28-.06.86-.33 1.04-.66.18-.33.18-.61.13-.66-.06-.06-.14-.08-.21-.12z"/>
                </svg>
              </a>
            </div>
          </section>
          <section className="footer-section newsletter">
            <h3>Stay Updated</h3>
            <form aria-label="Newsletter signup">
              <input type="email" placeholder="Enter your email" aria-label="Email address" />
              <button type="submit" aria-label="Subscribe to newsletter">Subscribe</button>
            </form>
          </section>
        </div>
        <div className="footer-map">
          <h3>Our Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.433143632189!2d36.6986!3d1.0931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMDUnMzQuOSJOIDM2wrA0MScwNS4wIkU!5e0!3m2!1sen!2ske!4v1698765432100!5m2!1sen!2ske"
            width="100%"
            height="300"
            style={{ border: 0, maxWidth: '600px', margin: '0 auto' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map of St Johns Training College, Maralal, Samburu"
          ></iframe>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} St Johns Training College. All rights reserved.</p>
          <div className="bottom-links">
            <Link href="/privacy">Privacy Policy</Link> | <Link href="/terms">Terms of Service</Link> |{' '}
            <Link href="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        footer {
          background: linear-gradient(180deg, #d32f2f, #b71c1c); /* Match header top-bar */
          color: #fff9e6;
          padding: 3rem 0 1rem;
          overflow-x: hidden;
          font-family: 'Inter', sans-serif;
        }

        .container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-section h3 {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #fff9e6;
          font-family: 'Inter', sans-serif;
        }

        .footer-section p {
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 0.5rem;
          font-family: 'Inter', sans-serif;
        }

        .about-us .tagline-link {
          font-size: 1rem;
          font-weight: 500;
          background: linear-gradient(45deg, #28a745, #38d57a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: transform 0.3s ease;
          font-family: 'Inter', sans-serif;
        }

        .about-us .tagline-link:hover,
        .about-us .tagline-link:focus {
          transform: scale(1.05);
          outline: 2px solid #ffeb3b;
        }

        .quick-links nav {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .quick-links a {
          font-size: 0.95rem;
          color: #fff9e6;
          transition: color 0.3s ease;
          position: relative;
          font-family: 'Inter', sans-serif;
        }

        .quick-links a:hover,
        .quick-links a:focus {
          color: #ffeb3b;
          outline: 2px solid #ffeb3b;
        }

        .quick-links a:hover::after,
        .quick-links a:focus::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #ffeb3b;
        }

        .contact-info a {
          color: #fff9e6;
          transition: color 0.3s ease;
          position: relative;
          font-family: 'Inter', sans-serif;
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
          gap: 1rem;
          margin-top: 1rem;
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

        .newsletter form {
          display: flex;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .newsletter input {
          padding: 0.6rem;
          border: 1px solid #2b2b2b;
          border-radius: 25px;
          font-size: 0.9rem;
          width: 100%;
          max-width: 200px;
          background: #fff9e6;
          color: #2b2b2b;
          transition: border-color 0.3s ease;
          font-family: 'Inter', sans-serif;
        }

        .newsletter input:focus {
          border-color: #ffeb3b;
          outline: none;
        }

        .newsletter button {
          padding: 0.6rem 1rem;
          background: linear-gradient(45deg, #28a745, #38d57a);
          border: none;
          border-radius: 25px;
          cursor: pointer;
          color: #fff9e6;
          font-weight: 500;
          transition: background 0.3s ease;
          font-family: 'Inter', sans-serif;
        }

        .newsletter button:hover,
        .newsletter button:focus {
          background: linear-gradient(45deg, #218838, #2ecc71);
          outline: 2px solid #ffeb3b;
        }

        .footer-map {
          margin: 2rem 0;
          text-align: center;
        }

        .footer-map h3 {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #fff9e6;
          font-family: 'Inter', sans-serif;
        }

        .footer-map iframe {
          border-radius: 8px;
          border: 2px solid #2b2b2b;
        }

        .footer-bottom {
          border-top: 1px solid linear-gradient(90deg, transparent, #2b2b2b33, transparent);
          padding-top: 1rem;
          text-align: center;
        }

        .footer-bottom p {
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          font-family: 'Inter', sans-serif;
        }

        .bottom-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
          font-size: 0.9rem;
        }

        .bottom-links a {
          color: #fff9e6;
          transition: color 0.3s ease;
          position: relative;
          font-family: 'Inter', sans-serif;
        }

        .bottom-links a:hover,
        .bottom-links a:focus {
          color: #ffeb3b;
          outline: 2px solid #ffeb3b;
        }

        .bottom-links a:hover::after,
        .bottom-links a:focus::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #ffeb3b;
        }

        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: repeat(2, 1fr);
          }

          .footer-section h3 {
            font-size: 1.2rem;
          }

          .footer-section p,
          .quick-links a,
          .bottom-links a {
            font-size: 0.9rem;
          }

          .social-icon {
            width: 20px;
            height: 20px;
          }

          .newsletter input {
            max-width: 180px;
          }

          .footer-map iframe {
            max-width: 500px;
            height: 250px;
          }
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .footer-section {
            text-align: center;
          }

          .social-media {
            justify-content: center;
          }

          .newsletter form {
            justify-content: center;
          }

          .newsletter input {
            max-width: 100%;
          }

          .footer-map iframe {
            height: 200px;
          }

          .bottom-links {
            flex-direction: column;
            gap: 0.5rem;
          }
        }

        @media (max-width: 480px) {
          .footer-section h3 {
            font-size: 1.1rem;
          }

          .footer-section p,
          .quick-links a,
          .bottom-links a {
            font-size: 0.8rem;
          }

          .social-icon {
            width: 18px;
            height: 18px;
          }

          .newsletter input {
            font-size: 0.8rem;
            padding: 0.5rem;
          }

          .newsletter button {
            padding: 0.5rem 0.8rem;
            font-size: 0.8rem;
          }

          .footer-map iframe {
            height: 180px;
          }

          .footer-bottom p {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </footer>
  );
}