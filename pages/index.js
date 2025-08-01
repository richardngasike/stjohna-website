// pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: '/slide1.jpg',
      title: 'Welcome to St. John Training College',
      description: 'Empowering futures through world-class education.',
    },
    {
      image: '/slide2.jpg',
      title: 'Innovative Learning Environment',
      description: 'Explore our state-of-the-art facilities.',
    },
    {
      image: '/slide3.jpg',
      title: 'Vibrant Campus Life',
      description: 'Join a community of diverse and passionate students.',
    },
    {
      image: '/slide4.jpg',
      title: 'Achieve Your Dreams',
      description: 'Unlock your potential with our programs.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div>
      <Head>
        <title>St Johns Training College</title>
        <meta name="description" content="Welcome to St Johns Training College - Empowering futures through education" />
      </Head>
      <Header />
      <main className="container">
        <section className="carousel">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <div className="carousel-image-container">
                <Image
                  src={slide.image}
                  alt={`Campus ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="carousel-text">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <Link href="/admissions">
                  <button aria-label="Apply Now">Apply Now</button>
                </Link>
              </div>
            </div>
          ))}
        </section>

        <section className="section">
          <h2>About St Johns Training College</h2>
          <p>
            Founded in 2016, St Johns Training College is dedicated to fostering academic excellence and personal growth around
            Samburu country and its environs. Our mission is to empower students with the knowledge and skills to succeed in a rapidly changing world.
          </p>
          <Link href="/about">
            <button aria-label="Discover Our History">Discover Our History</button>
          </Link>
        </section>

        <section className="section">
          <h2>Our Programs</h2>
          <div className="section-grid">
            <div className="card">
              <svg
                className="card-icon"
                viewBox="0 0 24 24"
                fill="#fff9e6"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Technology icon"
              >
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"/>
              </svg>
              <h3>Technology</h3>
              <p>Master cutting-edge technologies like AI and web development.</p>
              <Link href="/programs/technology">
                <button aria-label="Explore Technology Program">Explore Program</button>
              </Link>
            </div>
            <div className="card">
              <svg
                className="card-icon"
                viewBox="0 0 24 24"
                fill="#fff9e6"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Teaching icon"
              >
                <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
              </svg>
              <h3>Teaching Courses</h3>
              <p>Develop Teaching skills from ECDE programs to CBC teaching.</p>
              <Link href="/programs/teaching">
                <button aria-label="Explore Teaching Program">Explore Program</button>
              </Link>
            </div>
            <div className="card">
              <svg
                className="card-icon"
                viewBox="0 0 24 24"
                fill="#fff9e6"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Health icon"
              >
                <path d="M12 4.14L6 6.39v4.7c0 3.33 1.76 6.44 4.33 8.04.45.28.93.54 1.42.76l.25.11.25-.11c.49-.22.97-.48 1.42-.76 2.57-1.6 4.33-4.71 4.33-8.04v-4.7L12 4.14zm-1 12.96c-.83.52-1.8.83-2.83.83-1.03 0-2-.31-2.83-.83C3.76 15.44 3 13.44 3 11.39V7.83l6-2.25 6 2.25v3.56c0 2.05-.76 4.05-2.33 5.72zm-1-8.96c0-.55.45-1 1-1s1 .45 1 1v3.59l1.71-1.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L11 9.59V6c0-.55-.45-1-1-1s-1 .45-1 1v3.59L7.71 7.88c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L8 11V6z"/>
              </svg>
              <h3>Health Courses</h3>
              <p>Prepare for a rewarding career in healthcare and more...</p>
              <Link href="/programs/health">
                <button aria-label="Explore Health Program">Explore Program</button>
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>What Our Students Say</h2>
          <div className="section-grid">
            <div className="card">
              <Image
                src="/richy4.jpg"
                alt="Richard Ngasike, Class of 2023"
                width={80}
                height={80}
                className="student-image"
              />
              <p>&quot;St Johns provided me with the tools to excel in my career.&quot;</p>
              <p><strong>- Richard Ngasike, Class of 2023</strong></p>
            </div>
            <div className="card">
              <Image
                src="/students.jpeg"
                alt="Moses Lolkumeni, Class of 2024"
                width={80}
                height={80}
                className="student-image"
              />
              <p>&quot;The supportive community here is unmatched.&quot;</p>
              <p><strong>- Moses Lolkumeni, Class of 2024</strong></p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Upcoming Events</h2>
          <p>Open House: Join us on September 10, 2025, to explore our campus.</p>
          <p>Career Fair: Connect with employers on October 15, 2025.</p>
          <Link href="/calendar">
            <button aria-label="View All Events">View All Events</button>
          </Link>
        </section>

        <section className="section" style={{ textAlign: 'center' }}>
          <h2>Ready to Join St Johns?</h2>
          <p>Apply today and start your journey with us.</p>
          <Link href="/admissions">
            <button aria-label="Apply Now">Apply Now</button>
          </Link>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        .container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 2rem 0;
          font-family: 'Roboto', sans-serif;
        }

        
        .section {
          margin: 2rem 0;
        }

        .section h2 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          font-family: 'Roboto', sans-serif;
          font-weight: 700;
        }

        .section p {
          font-family: 'Roboto', sans-serif;
          font-weight: 400;
        }

        .section-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .card {
          background: #f5f5f5;
          padding: 1rem;
          border-radius: 8px;
          text-align: center;
        }

        .card h3 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          font-family: 'Roboto', sans-serif;
          font-weight: 700;
        }

        .card p {
          font-size: 1rem;
          margin-bottom: 1rem;
          font-family: 'Roboto', sans-serif;
          font-weight: 400;
        }

        .card button {
          padding: 0.5rem 1rem;
          background: #28a745;
          color: white;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          border-radius: 4px;
          transition: background 0.3s ease, transform 0.3s ease;
          font-family: 'Roboto', sans-serif;
        }

        .card button:hover,
        .card button:focus {
          background: #218838;
          transform: scale(1.05);
          outline: 2px solid #ffeb3b;
        }

        .student-image {
          border-radius: 50%;
          margin-bottom: 1rem;
          border: 2px solid #2b2b2b;
          transition: transform 0.3s ease;
        }

        .student-image:hover,
        .student-image:focus {
          transform: scale(1.05);
        }

        .card-icon {
          width: 50px;
          height: 50px;
          margin-bottom: 0.5rem;
          transition: fill 0.3s ease, transform 0.3s ease;
          fill: #ff0000ff;
        }

        .card:hover .card-icon,
        .card:focus-within .card-icon {
          fill: #28a745;
          transform: scale(1.1);
        }

        @media (max-width: 1024px) {
          .section-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .card-icon {
            width: 28px;
            height: 28px;
          }

          .carousel-text h1 {
            font-size: 1.8rem;
          }

          .carousel-text p {
            font-size: 1.1rem;
          }

          .carousel-text button {
            padding: 0.4rem 0.8rem;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 768px) {
          .section-grid {
            grid-template-columns: 1fr;
          }

          .section h2 {
            font-size: 1.6rem;
          }

          .card h3 {
            font-size: 1.1rem;
          }

          .card p {
            font-size: 0.95rem;
          }

          .card button {
            font-size: 0.9rem;
            padding: 0.4rem 0.8rem;
          }

          .student-image {
            width: 70px;
            height: 70px;
          }

          .card-icon {
            width: 24px;
            height: 24px;
          }

          .carousel-text h1 {
            font-size: 1.6rem;
          }

          .carousel-text p {
            font-size: 1rem;
          }

          .carousel-text button {
            padding: 0.4rem 0.8rem;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .section h2 {
            font-size: 1.4rem;
          }

          .card h3 {
            font-size: 1rem;
          }

          .card p {
            font-size: 0.9rem;
          }

          .card button {
            font-size: 0.8rem;
            padding: 0.3rem 0.7rem;
          }

          .student-image {
            width: 60px;
            height: 60px;
          }

          .card-icon {
            width: 20px;
            height: 20px;
          }

          .carousel-text h1 {
            font-size: 1.4rem;
          }

          .carousel-text p {
            font-size: 0.9rem;
          }

          .carousel-text button {
            padding: 0.3rem 0.7rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
}