import Link from 'next/link';

export default function WhatsAppFAB() {
  return (
    <div className="whatsapp-fab">
      <div className="whatsapp-container">
        <Link
          href="https://wa.me/254720215715"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
        >
          <svg
            className="whatsapp-icon"
            viewBox="0 0 24 24"
            fill="#5eff00ff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.33.26 2.62.74 3.83L2 22l6.39-.94c1.15.49 2.39.74 3.65.74 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.18c-1.14 0-2.26-.31-3.24-.84l-.23-.13-3.78.56.57-3.72-.14-.23c-.58-1.03-.88-2.18-.88-3.37 0-4.62 3.76-8.38 8.38-8.38s8.38 3.76 8.38 8.38c0 4.63-3.76 8.38-8.38 8.38zm4.29-6.07c-.23-.12-1.38-.68-1.59-.76-.21-.08-.37-.12-.53.12-.16.24-.61.76-.75.92-.13.16-.27.18-.50.06-.23-.12-1-.38-1.88-.92-.66-.4-1.11-.89-1.24-1.12-.13-.24-.01-.36.1-.48.1-.1.23-.24.35-.36.12-.12.16-.21.24-.36.08-.16.04-.30-.02-.42-.06-.12-.53-1.29-.73-1.77-.19-.47-.38-.41-.53-.41-.14 0-.31-.01-.48-.01-.27 0-.50.1-.67.38-.17.27-.65.66-.65 1.61s.67 1.88.79 2.01c.12.13 1.11 1.79 2.69 2.51.38.17.67.3 1.1.49.52.23.97.49 1.33.66.33.16.66.14.92.08.28-.06.86-.33 1.04-.66.18-.33.18-.61.13-.66-.06-.06-.14-.08-.21-.12z" />
          </svg>
        </Link>
        <span className="whatsapp-text">WhatsApp Us</span>
      </div>

      <style jsx>{`
        .whatsapp-fab {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 5000;
        }

        .whatsapp-container {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .whatsapp-fab a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 70px; /* Increased size */
          height: 70px; /* Increased size */
          background: #00FF00; /* Solid green color */
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }

        .whatsapp-fab a:hover,
        .whatsapp-fab a:focus {
          transform: scale(1.1);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
          background: #00CC00; /* Slightly darker green on hover */
        }

        .whatsapp-icon {
          width: 45px; 
          height: 45px; 
        }

        .whatsapp-text {
          color: #00FF00; /* Green text color */
          font-size: 1.2rem;
          font-weight: 500;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .whatsapp-fab {
            bottom: 1.5rem;
            right: 1.5rem;
          }

          .whatsapp-fab a {
            width: 60px;
            height: 60px;
          }

          .whatsapp-icon {
            width: 32px;
            height: 32px;
          }

          .whatsapp-text {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .whatsapp-fab {
            bottom: 1rem;
            right: 1rem;
          }

          .whatsapp-fab a {
            width: 50px;
            height: 50px;
          }

          .whatsapp-icon {
            width: 28px;
            height: 28px;
          }

          .whatsapp-text {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}