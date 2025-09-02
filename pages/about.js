import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function About() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => setSelectedImage(image);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <div>
      <Head>
        <title>About - St Johns Training College</title>
        <meta name="description" content="Discover the history, mission, leadership, and community impact of St Johns Training College in Maralal, Samburu, founded in 2016." />
      </Head>
      <Header />
      <main className="container">
        <div className="title-section">
          <h1>
            <svg className="section-icon" viewBox="0 0 24 24" fill="#fff9e6" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79-4-4-4z"/>
            </svg>
            About St Johns Training College
          </h1>
        </div>
        <section className="history">
          <h2>
            <svg className="section-icon" viewBox="0 0 24 24" fill="#fff9e6" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92c-.5.51-.86.97-1.04 1.69-.18.72-.24 1.54-.24 2.14h-1.99c0-.72.06-1.54.24-2.25.18-.72.54-1.29 1.04-1.81l.92-.94c.36-.36.64-.92.64-1.54 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
            </svg>
            Our History
          </h2>
          <p>
            Founded in 2016, St Johns Training College in Maralal, Samburu, was established to provide accessible, high-quality education to underserved communities. Starting with a modest cohort of 50 students and a single diploma program, the college has grown to offer over 20 programs, serving more than 1,000 students annually. Key milestones include the launch of our online learning platform in 2019, the construction of a modern library in 2021, and partnerships with international universities in 2023. Today, St Johns stands as a beacon of educational excellence, empowering students with skills for sustainable careers in Kenya and beyond.
          </p>
        </section>
        <section className="mission-vision">
          <h2>
            <svg className="section-icon" viewBox="0 0 24 24" fill="#fff9e6" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2m0 3.39L9.75 9.83 4.5 10.36l4.13 3.59-.97 5.65 4.34-2.28 4.34 2.28-.97-5.65 4.13-3.59-5.25-.53L12 5.39z"/>
            </svg>
            Mission, Vision & Core Values
          </h2>
          <p>
            <strong>Mission:</strong> To empower students through innovative education, fostering critical thinking and practical skills for personal and community development.<br />
            <strong>Vision:</strong> To be a leading institution in Samburu, transforming lives through inclusive and transformative education.<br />
            <strong>Core Values:</strong>
            
          </p>
          <ul>
              <li><strong>Integrity:</strong> Upholding honesty and ethical standards in all endeavors.</li>
              <li><strong>Excellence:</strong> Striving for the highest quality in education and services.</li>
              <li><strong>Inclusivity:</strong> Embracing diversity and ensuring equal opportunities.</li>
              <li><strong>Innovation:</strong> Encouraging creativity and forward-thinking solutions.</li>
              <li><strong>Community:</strong> Building strong connections for collective growth.</li>
            </ul>
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
              <Image
                src="/leornard.jpg"
                alt="Dr. Leornard, Director"
                width={120}
                height={120}
                className="leadership-avatar"
              />
              <h3>Dr. Leonard Mambo</h3>
              <p>Director</p>
              <p>
                Dr. Leonard holds a Ph.D. in Educational Leadership from the University of Nairobi and has over 15 years of experience in higher education. He spearheads the college’s strategic vision, focusing on academic excellence and community engagement in Samburu.
              </p>
            </article>
            <article>
              <Image
                src="/school3.jpg"
                alt="Prof. Lempapa, Principal"
                width={120}
                height={120}
                className="leadership-avatar"
              />
              <h3>Prof. James Lempapa</h3>
              <p>Principal</p>
              <p>
                With a Master’s in Curriculum Development, Prof. Lempapa has transformed the academic programs at St Johns, introducing innovative teaching methods and fostering a culture of research and inquiry.
              </p>
            </article>
            <article>
              <Image
                src="/fabian.jpg"
                alt="Fabian, Director of Student Affairs"
                width={120}
                height={120}
                className="leadership-avatar"
              />
              <h3>Mr. Fabian</h3>
              <p>Director of Student Affairs</p>
              <p>
                Fabian, a graduate of Kenyatta University, oversees student welfare, extracurricular activities, and support services, ensuring a holistic educational experience for all students.
              </p>
            </article>
          </div>
        </section>
        <section className="achievements">
          <h2>
            <svg className="section-icon" viewBox="0 0 24 24" fill="#fff9e6" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2m0 3.39L9.75 9.83 4.5 10.36l4.13 3.59-.97 5.65 4.34-2.28 4.34 2.28-.97-5.65 4.13-3.59-5.25-.53L12 5.39z"/>
            </svg>
            Achievements
          </h2>
          <ul>
            <li>Received the Samburu Education Excellence Award in 2020 and 2022.</li>
            <li>Ranked among the top 10 TVET institutions in Kenya by the Ministry of Education in 2023.</li>
            <li>Successfully graduated over 3,000 students since inception.</li>
            <li>Implemented a solar-powered campus initiative in 2021, promoting sustainability.</li>
            <li>Recognized for outstanding community outreach programs by the Samburu County Government in 2024.</li>
          </ul>
        </section>
        <section className="campus-life">
          <h2>
            <svg className="section-icon" viewBox="0 0 24 24" fill="#fff9e6" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79-4-4-4z"/>
            </svg>
            Campus Life
          </h2>
          <p>
            Our vibrant campus in Maralal offers a dynamic student experience with over 15 clubs, including debate, environmental, and cultural societies. Sports facilities support football, volleyball, and athletics, with annual inter-college competitions. Modern amenities include a digital library, Wi-Fi-enabled study areas, and a student lounge. Cultural events like the Samburu Cultural Festival foster community and creativity, creating a supportive environment for students to grow and connect.
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
            St Johns Training College is committed to uplifting Samburu through impactful initiatives. Our outreach programs include free vocational training for local youth, health awareness campaigns, and environmental conservation projects, such as tree-planting drives. Partnerships with organizations like the Samburu Women’s Empowerment Group provide skill-building workshops, empowering over 500 community members annually. Our graduates contribute to local development, with many launching businesses and community projects.
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
            St Johns Training College is fully accredited by the Kenyan National Examination Council (KNEC), Technical and Vocational Education and Training Authority (TVETA), and the Curriculum Development Assessment and Certification Council (CDACC). Our partnerships with institutions like Kenyatta University, the University of Nairobi, and international organizations such as UNESCO enable us to offer cutting-edge programs, faculty exchanges, and research opportunities, ensuring our students receive globally competitive education.
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
            <div className="gallery-item" onClick={() => openLightbox('/school.jpeg')}>
              <Image src="/school.jpeg" alt="Campus building" width={300} height={200} className="gallery-image" />
            </div>
            <div className="gallery-item" onClick={() => openLightbox('/school2.jpeg')}>
              <Image src="/school2.jpeg" alt="Students studying" width={300} height={200} className="gallery-image" />
            </div>
            <div className="gallery-item" onClick={() => openLightbox('/campus.jpeg')}>
              <Image src="/campus.jpeg" alt="Campus event" width={300} height={200} className="gallery-image" />
            </div>
          </div>
        </section>
        {selectedImage && (
          <div className="lightbox" onClick={closeLightbox}>
            <div className="lightbox-content">
              <Image src={selectedImage} alt="Enlarged gallery image" width={800} height={600} className="lightbox-image" />
              <button className="lightbox-close" aria-label="Close lightbox">×</button>
            </div>
          </div>
        )}
        <section className="cta">
          <Link href="/admissions" className="cta-button" aria-label="Get Involved with St Johns">
            Get Involved
          </Link>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        .container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 3rem 1.5rem;
          background: linear-gradient(180deg, rgba(255, 249, 230, 0.9), rgba(255, 224, 130, 0.9));
          backdrop-filter: blur(5px);
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
        }

        .title-section {
          position: relative;
          background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/about-cover.jpg') no-repeat center center/cover;
          padding: 4rem 2rem;
          border-radius: 12px;
          margin-bottom: 3rem;
          text-align: center;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          animation: parallax 10s linear infinite;
        }

        h1 {
          font-size: 3rem;
          font-weight: 800;
          color: #fff9e6;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #1e3a8a;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.8px;
        }

        .section-icon {
          width: 28px;
          height: 28px;
          transition: transform 0.3s ease, fill 0.3s ease;
        }

        h1:hover .section-icon,
        h2:hover .section-icon,
        h1:focus-within .section-icon,
        h2:focus-within .section-icon {
          fill: #facc15;
          transform: scale(1.15);
        }

        p, ul {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #2b2b2b;
          margin-bottom: 1.5rem;
        }

        ul {
          padding-left: 1.5rem;
        }

        ul li {
          margin-bottom: 0.75rem;
        }

        .leadership-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

        .leadership-grid article {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

        .leadership-grid article:hover,
.leadership-grid article:focus-within {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

        .leadership-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 4px solid #1e3a8a; /* Blue frame */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

        .leadership-grid article:hover .leadership-avatar,
.leadership-grid article:focus-within .leadership-avatar {
  transform: scale(1.1);
  box-shadow: 0 0 15px rgba(30, 58, 138, 0.5); /* Blue shadow on hover */
}
@media (max-width: 1024px) {
  .leadership-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .leadership-grid {
    grid-template-columns: 1fr;
  }

  .leadership-avatar {
    width: 100px;
    height: 100px;
  }
}

@media (max-width: 480px) {
  .leadership-grid article {
    padding: 1rem;
  }

  .leadership-avatar {
    width: 80px;
    height: 80px;
  }
}

@media (max-width: 360px) {
  .leadership-avatar {
    width: 70px;
    height: 70px;
  }
}

        .leadership-grid h3 {
          font-size: 1.4rem;
          font-weight: 700;
          color: #1e3a8a;
          margin-bottom: 0.5rem;
        }

        .leadership-grid p {
          font-size: 1rem;
          margin: 0.5rem 0;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .gallery-item {
          position: relative;
          cursor: pointer;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .gallery-item:hover,
        .gallery-item:focus-within {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        .gallery-image {
          width: 100%;
          height: auto;
          object-fit: cover;
          border: 2px solid #1e3a8a;
          border-radius: 12px;
        }

        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5000;
          animation: fadeIn 0.3s ease-in-out;
        }

        .lightbox-content {
          position: relative;
          max-width: 90%;
          max-height: 90%;
        }

        .lightbox-image {
          width: 100%;
          height: auto;
          border-radius: 12px;
          border: 3px solid #facc15;
        }

        .lightbox-close {
          position: absolute;
          top: -20px;
          right: -20px;
          font-size: 2rem;
          color: #fff9e6;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .lightbox-close:hover,
        .lightbox-close:focus {
          background: rgba(250, 204, 21, 0.5);
          transform: rotate(90deg);
        }

        .cta {
          text-align: center;
          margin: 3rem 0;
        }

        .cta-button {
          display: inline-block;
          padding: 1rem 2rem;
          background: linear-gradient(90deg, #16a34a, #22c55e);
          border-radius: 25px;
          color: #fff9e6;
          font-weight: 700;
          font-size: 1.2rem;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          animation: pulse 2s infinite;
        }

        .cta-button:hover,
        .cta-button:focus {
          background: linear-gradient(90deg, #15803d, #16a34a);
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        @keyframes parallax {
          0% {
            background-position: center 0;
          }
          100% {
            background-position: center -100px;
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
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

        /* Responsive Design */
        @media (max-width: 1024px) {
          h1 {
            font-size: 2.5rem;
          }

          h2 {
            font-size: 1.8rem;
          }

          .title-section {
            padding: 3rem 1.5rem;
          }

          .leadership-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .section-icon {
            width: 24px;
            height: 24px;
          }

          .lightbox-image {
            max-width: 80%;
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2.2rem;
          }

          h2 {
            font-size: 1.6rem;
          }

          p, ul {
            font-size: 1rem;
          }

          .title-section {
            padding: 2.5rem 1rem;
          }

          .leadership-grid {
            grid-template-columns: 1fr;
          }

          .gallery-grid {
            grid-template-columns: 1fr;
          }

          .leadership-avatar {
            width: 100px;
            height: 100px;
          }

          .cta-button {
            font-size: 1.1rem;
            padding: 0.8rem 1.5rem;
          }

          .section-icon {
            width: 20px;
            height: 20px;
          }

          .lightbox-image {
            max-width: 90%;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 1.8rem;
          }

          h2 {
            font-size: 1.4rem;
          }

          p, ul {
            font-size: 0.95rem;
          }

          .title-section {
            padding: 2rem 1rem;
          }

          .leadership-grid article {
            padding: 1rem;
          }

          .leadership-grid h3 {
            font-size: 1.2rem;
          }

          .leadership-grid p {
            font-size: 0.9rem;
          }

          .leadership-avatar {
            width: 80px;
            height: 80px;
          }

          .gallery-image {
            max-width: 100%;
          }

          .cta-button {
            font-size: 1rem;
            padding: 0.7rem 1.2rem;
          }

          .section-icon {
            width: 18px;
            height: 18px;
          }

          .lightbox-close {
            top: -15px;
            right: -15px;
            width: 30px;
            height: 30px;
            font-size: 1.5rem;
          }
        }

        @media (max-width: 360px) {
          h1 {
            font-size: 1.6rem;
          }

          h2 {
            font-size: 1.3rem;
          }

          p, ul {
            font-size: 0.9rem;
          }

          .leadership-avatar {
            width: 70px;
            height: 70px;
          }

          .cta-button {
            font-size: 0.9rem;
            padding: 0.6rem 1rem;
          }
        }
      `}</style>
    </div>
  );
}