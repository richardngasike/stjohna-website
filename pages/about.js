// pages/about.js
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div>
      <Head>
        <title>About - St Johns Training College</title>
        <meta name="description" content="Learn about St Johns Training College in Maralal, Samburu, founded in 2016." />
      </Head>
      <Header />
      <main className="container">
        <h1>
          <svg className="section-icon" viewBox="0 0 24 24" fill="#fff9e6" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79-4-4-4z"/>
          </svg>
          About St Johns Training College
        </h1>
        <section className="history">
          <h2>
            <svg className="section-icon" viewBox="0 0 24 24" fill="#fff9e6" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92c-.5.51-.86.97-1.04 1.69-.18.72-.24 1.54-.24 2.14h-1.99c0-.72.06-1.54.24-2.25.18-.72.54-1.29 1.04-1.81l.92-.94c.36-.36.64-.92.64-1.54 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
            </svg>
            Our History
          </h2>
          <p>
            Founded in 2016, St Johns Training College in Maralal, Samburu, was established to provide accessible, high-quality education to the region. Starting as a small institution, we have grown into a beacon of learning, empowering students with skills for a brighter future in Kenya and beyond.
          </p>
        </section>
        <section className="mission-vision">
          <h2>
            <svg className="section-icon" viewBox="0 0 24 24" fill="#fff9e6" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2m0 3.39L9.75 9.83 4.5 10.36l4.13 3.59-.97 5.65 4.34-2.28 4.34 2.28-.97-5.65 4.13-3.59-5.25-.53L12 5.39z"/>
            </svg>
            Mission & Vision
          </h2>
          <p>
            <strong>Mission:</strong> To empower students through innovative education, fostering critical thinking and practical skills for personal and community development.<br />
            <strong>Vision:</strong> To be a leading institution in Samburu, transforming lives through inclusive and transformative education.
          </p>
        </section>
        <section className="leadership">
          <h2>
            <svg className="section-icon" viewBox="0 0 24 24" fill="#fff9e6" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            Leadership
          </h2>
          <div className="leadership-grid">
            <article>
              <h3>Dr. Leornard</h3>
              <p>Director</p>
              <p>Leading with a vision for educational excellence in Samburu.</p>
            </article>
            <article>
              <h3>Prof. Lempapa</h3>
              <p>Principal</p>
              <p>Overseeing innovative academic programs.</p>
            </article>
            <article>
              <h3>Ms. Mary Lekerian</h3>
              <p>Director of Student Affairs</p>
              <p>Enhancing student life and support services.</p>
            </article>
          </div>
        </section>
        <section className="campus-life">
          <h2>
            <svg className="section-icon" viewBox="0 0 24 24" fill="#fff9e6" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79-4-4-4z"/>
            </svg>
            Campus Life
          </h2>
          <p>
            Our vibrant campus in Maralal offers clubs, sports, cultural events, and modern facilities to enrich student life. Join our community to grow, connect, and thrive.
          </p>
        </section>
        <section className="community-impact">
          <h2>
            <svg className="section-icon" viewBox="0 0 24 24" fill="#fff9e6" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-2.99 1.34-2.99 3S14.34 11 16 11zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5.01 6.34 5.01 8 6.34 11 8 11zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
            </svg>
            Community Impact
          </h2>
          <p>
            St Johns Training College supports Samburu through outreach programs, skill-building workshops, and partnerships with local organizations, fostering sustainable development.
          </p>
        </section>
        <section className="accreditation">
          <h2>
            <svg className="section-icon" viewBox="0 0 24 24" fill="#fff9e6" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 3.08-1.68 5.77-4.1 7.39z"/>
            </svg>
            Accreditation & Partnerships
          </h2>
          <p>
            We are accredited by the Kenyan National Examination Council, TVET, CDAC and partner with leading institutions to deliver cutting-edge programs.
          </p>
        </section>
        <section className="gallery">
          <h2>
            <svg className="section-icon" viewBox="0 0 24 24" fill="#fff9e6" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
            </svg>
            Photo Gallery
          </h2>
          <div className="gallery-grid">
            <Image src="/school.jpeg" alt="Campus building" width={300} height={200} className="gallery-image" />
            <Image src="/school2.jpeg" alt="Students studying" width={300} height={200} className="gallery-image" />
            <Image src="/campus.jpeg" alt="Campus event" width={300} height={200} className="gallery-image" />
          </div>
        </section>
        <section className="cta">
          <Link href="/admissions" className="cta-button" aria-label="Get Involved with St Johns">
            Get Involved
          </Link>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        .container {
          width: 100%;
          max-width: 1280px; /* Match header/footer */
          margin: 0 auto;
          padding: 2rem 1rem;
          overflow-x: hidden; /* Prevent horizontal scrollbar */
          background: linear-gradient(180deg, #fff9e6, #ffe082); /* Yellow gradient */
        }

        h1 {
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(45deg, #28a745, #38d57a); /* Green gradient */
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        h2 {
          font-size: 1.8rem;
          font-weight: 600;
          color: #2b2b2b;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .section-icon {
          width: 24px;
          height: 24px;
          transition: fill 0.3s ease, transform 0.3s ease;
        }

        h1:hover .section-icon,
        h2:hover .section-icon,
        h1:focus-within .section-icon,
        h2:focus-within .section-icon {
          fill: #28a745; /* Green on hover */
          transform: scale(1.1);
        }

        p {
          font-size: 1rem;
          line-height: 1.6;
          color: #2b2b2b;
          margin-bottom: 1rem;
        }

        .leadership-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .leadership-grid article {
          background: #fff9e6;
          border: 2px solid #2b2b2b;
          border-radius: 8px;
          padding: 1rem;
          text-align: center;
        }

        .leadership-grid h3 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #2b2b2b;
        }

        .leadership-grid p {
          font-size: 0.9rem;
          margin: 0.5rem 0;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .gallery-image {
          width: 100%;
          height: auto;
          border-radius: 8px;
          border: 2px solid #2b2b2b;
          transition: transform 0.3s ease;
        }

        .gallery-image:hover,
        .gallery-image:focus {
          transform: scale(1.05);
        }

        .cta {
          text-align: center;
          margin-top: 2rem;
        }

        .cta-button {
          display: inline-block;
          padding: 0.8rem 1.5rem;
          background: linear-gradient(45deg, #28a745, #38d57a); /* Green gradient */
          border-radius: 25px;
          color: #fff9e6;
          font-weight: 500;
          font-size: 1.1rem;
          transition: background 0.3s ease, transform 0.3s ease;
        }

        .cta-button:hover,
        .cta-button:focus {
          background: linear-gradient(45deg, #218838, #2ecc71);
          transform: scale(1.05);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          h1 {
            font-size: 2.2rem;
          }

          h2 {
            font-size: 1.6rem;
          }

          .leadership-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .section-icon {
            width: 20px;
            height: 20px;
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }

          h2 {
            font-size: 1.4rem;
          }

          p {
            font-size: 0.95rem;
          }

          .leadership-grid {
            grid-template-columns: 1fr;
          }

          .gallery-grid {
            grid-template-columns: 1fr;
          }

          .gallery-image {
            max-width: 100%;
            height: auto;
          }

          .cta-button {
            font-size: 1rem;
            padding: 0.7rem 1.2rem;
          }

          .section-icon {
            width: 18px;
            height: 18px;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 1.8rem;
          }

          h2 {
            font-size: 1.3rem;
          }

          p {
            font-size: 0.9rem;
          }

          .leadership-grid article {
            padding: 0.8rem;
          }

          .leadership-grid h3 {
            font-size: 1.1rem;
          }

          .leadership-grid p {
            font-size: 0.8rem;
          }

          .gallery-image {
            max-width: 100%;
          }

          .cta-button {
            font-size: 0.9rem;
            padding: 0.6rem 1rem;
          }

          .section-icon {
            width: 16px;
            height: 16px;
          }
        }
      `}</style>
    </div>
  );
}