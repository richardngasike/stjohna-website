import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaQuestionCircle } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState({ loading: false, success: null, error: null });
  const [messageLength, setMessageLength] = useState(0);
  const [faqOpen, setFaqOpen] = useState({});
  const [hoveredElement, setHoveredElement] = useState(null);
  const [focusedElement, setFocusedElement] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'message') {
      setMessageLength(value.length);
    }
  };

  // Validate form data
  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim()) return 'Name is required';
    if (!emailRegex.test(formData.email)) return 'Invalid email format';
    if (!formData.subject.trim()) return 'Subject is required';
    if (!formData.message.trim()) return 'Message is required';
    if (formData.message.length > 500) return 'Message cannot exceed 500 characters';
    return null;
  };

  // Handle form submission (client-side only, no backend)
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setFormStatus({ loading: false, success: null, error: validationError });
      return;
    }
    setFormStatus({ loading: true, success: null, error: null });
    // Simulate API call
    setTimeout(() => {
      setFormStatus({ loading: false, success: 'Message sent successfully!', error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setMessageLength(0);
    }, 1000);
  };

  // Toggle FAQ items
  const toggleFaq = (index) => {
    setFaqOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  // Handle hover and focus states
  const handleMouseEnter = (element) => setHoveredElement(element);
  const handleMouseLeave = () => setHoveredElement(null);
  const handleFocus = (element) => setFocusedElement(element);
  const handleBlur = () => setFocusedElement(null);

  // FAQ data
  const faqs = [
    {
      question: 'How can I contact the admissions office?',
      answer: 'You can reach the admissions office at +254 720 215715 or via email at stjohnstrainingcollege@gmail.com.',
    },
    {
      question: 'What are your office hours?',
      answer: 'Our office is open Monday to Friday, 8:00 AM to 5:00 PM, and Saturday, 9:00 AM to 1:00 PM.',
    },
    {
      question: 'where is college located?',
      answer: 'Our college main campus is located at Maralal town on your way to CerealBoard, next to Kirisia Police station.',
    },
  ];

  return (
    <div>
      <Head>
        <title>Contact - St. John’s Training College</title>
        <meta name="description" content="Get in touch with St. John’s Training College in Nairobi, Kenya for inquiries, admissions, and more." />
      </Head>
      <Header />
      <main className="container" style={styles.main}>
        {/* Cover Photo Section */}
        <section style={styles.coverSection}>
          <div style={styles.coverImage}>
            <h1 style={styles.coverTitle}>Contact our Offices</h1>
          </div>
        </section>

        {/* Contact Form Section */}
        <section style={styles.section}>
          <h2>Get in Touch</h2>
          <p style={styles.sectionText}>
            Have a question or need assistance? Fill out the form below, and our team will get back to you promptly.
          </p>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label style={styles.label}>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                  required
                  style={{
                    ...styles.input,
                    ...(focusedElement === 'name' ? styles.inputFocus : {}),
                  }}
                  placeholder="Your Full Name"
                />
              </label>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  required
                  style={{
                    ...styles.input,
                    ...(focusedElement === 'email' ? styles.inputFocus : {}),
                  }}
                  placeholder="Your Email Address"
                />
              </label>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>
                Subject:
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => handleFocus('subject')}
                  onBlur={handleBlur}
                  required
                  style={{
                    ...styles.input,
                    ...(focusedElement === 'subject' ? styles.inputFocus : {}),
                  }}
                  placeholder="Subject of Your Message"
                />
              </label>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>
                Message:
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  required
                  style={{
                    ...styles.textarea,
                    ...(focusedElement === 'message' ? styles.inputFocus : {}),
                  }}
                  placeholder="Your Message (max 500 characters)"
                />
                <span style={styles.charCounter}>
                  {messageLength}/500 characters
                </span>
              </label>
            </div>
            <div style={styles.formButtons}>
              <button
                type="submit"
                disabled={formStatus.loading}
                style={formStatus.loading ? styles.buttonDisabled : {
                  ...styles.submitButton,
                  ...(hoveredElement === 'submit' ? styles.buttonHover : {}),
                }}
                onMouseEnter={() => handleMouseEnter('submit')}
                onMouseLeave={handleMouseLeave}
              >
                {formStatus.loading ? 'Sending...' : 'Submit'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setFormData({ name: '', email: '', subject: '', message: '' });
                  setMessageLength(0);
                  setFormStatus({ loading: false, success: null, error: null });
                }}
                style={{
                  ...styles.clearButton,
                  ...(hoveredElement === 'clear' ? styles.buttonHover : {}),
                }}
                onMouseEnter={() => handleMouseEnter('clear')}
                onMouseLeave={handleMouseLeave}
              >
                Clear
              </button>
            </div>
            {formStatus.success && <p style={styles.successMessage}>{formStatus.success}</p>}
            {formStatus.error && <p style={styles.errorMessage}>{formStatus.error}</p>}
          </form>
        </section>

        {/* Contact Information Section */}
        <section style={styles.section}>
          <h2>Contact Information</h2>
          <p style={styles.sectionText}>
            Reach out to us directly using the contact details below or follow us on social media for updates.
          </p>
          <div style={styles.infoGrid}>
            <div style={styles.infoItem}>
              <FaEnvelope style={styles.infoIcon} />
              <p>
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:stjohnstrainingcollege@gmail.com"
                  style={{
                    ...styles.infoLink,
                    ...(hoveredElement === 'email' ? styles.linkHover : {}),
                  }}
                  onMouseEnter={() => handleMouseEnter('email')}
                  onMouseLeave={handleMouseLeave}
                  aria-label="Email St. John’s Training College"
                >
                  stjohnstrainingcollege@gmail.com
                </a>
              </p>
            </div>
            <div style={styles.infoItem}>
              <FaPhone style={styles.infoIcon} />
              <p>
                <strong>Phone:</strong>{' '}
                <a
                  href="tel:+254720215715"
                  style={{
                    ...styles.infoLink,
                    ...(hoveredElement === 'phone1' ? styles.linkHover : {}),
                  }}
                  onMouseEnter={() => handleMouseEnter('phone1')}
                  onMouseLeave={handleMouseLeave}
                  aria-label="Call +254 720 215715"
                >
                  +254 720 215715
                </a>,{' '}
                <a
                  href="tel:+254741573059"
                  style={{
                    ...styles.infoLink,
                    ...(hoveredElement === 'phone2' ? styles.linkHover : {}),
                  }}
                  onMouseEnter={() => handleMouseEnter('phone2')}
                  onMouseLeave={handleMouseLeave}
                  aria-label="Call +254 741 573059"
                >
                  +254 741 573059
                </a>,{' '}
                <a
                  href="tel:+254707708557"
                  style={{
                    ...styles.infoLink,
                    ...(hoveredElement === 'phone3' ? styles.linkHover : {}),
                  }}
                  onMouseEnter={() => handleMouseEnter('phone3')}
                  onMouseLeave={handleMouseLeave}
                  aria-label="Call +254 707 708557"
                >
                  +254 707 708557
                </a>,{' '}
                <a
                  href="tel:+254743345810"
                  style={{
                    ...styles.infoLink,
                    ...(hoveredElement === 'phone4' ? styles.linkHover : {}),
                  }}
                  onMouseEnter={() => handleMouseEnter('phone4')}
                  onMouseLeave={handleMouseLeave}
                  aria-label="Call +254 743 345810"
                >
                  +254 743 345810
                </a>
              </p>
            </div>
            <div style={styles.infoItem}>
              <FaMapMarkerAlt style={styles.infoIcon} />
              <p>
                <strong>Address:</strong> Cereal Board Road, Maralal Town, Nairobi, Kenya
              </p>
            </div>
            <div style={styles.infoItem}>
              <h3 style={styles.infoSubtitle}>Follow Us:</h3>
              <div style={styles.socialLinks}>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...styles.socialLink,
                    ...(hoveredElement === 'facebook' ? styles.linkHover : {}),
                  }}
                  onMouseEnter={() => handleMouseEnter('facebook')}
                  onMouseLeave={handleMouseLeave}
                  aria-label="Follow on Facebook"
                >
                  <FaFacebook style={{
                    ...styles.socialIcon,
                    ...(hoveredElement === 'facebook' ? styles.iconHover : {}),
                  }} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...styles.socialLink,
                    ...(hoveredElement === 'twitter' ? styles.linkHover : {}),
                  }}
                  onMouseEnter={() => handleMouseEnter('twitter')}
                  onMouseLeave={handleMouseLeave}
                  aria-label="Follow on Twitter"
                >
                  <FaTwitter style={{
                    ...styles.socialIcon,
                    ...(hoveredElement === 'twitter' ? styles.iconHover : {}),
                  }} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...styles.socialLink,
                    ...(hoveredElement === 'instagram' ? styles.linkHover : {}),
                  }}
                  onMouseEnter={() => handleMouseEnter('instagram')}
                  onMouseLeave={handleMouseLeave}
                  aria-label="Follow on Instagram"
                >
                  <FaInstagram style={{
                    ...styles.socialIcon,
                    ...(hoveredElement === 'instagram' ? styles.iconHover : {}),
                  }} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={styles.section}>
          <h2>Frequently Asked Questions</h2>
          <p style={styles.sectionText}>
            Find answers to common questions below. Click on a question to view the answer.
          </p>
          <div style={styles.faqContainer}>
            {faqs.map((faq, index) => (
              <div key={index} style={styles.faqItem}>
                <button
                  onClick={() => toggleFaq(index)}
                  style={{
                    ...styles.faqQuestion,
                    ...(hoveredElement === `faq${index}` ? styles.faqQuestionHover : {}),
                  }}
                  onMouseEnter={() => handleMouseEnter(`faq${index}`)}
                  onMouseLeave={handleMouseLeave}
                  aria-expanded={faqOpen[index]}
                  aria-controls={`faq-answer-${index}`}
                >
                  <FaQuestionCircle style={styles.faqIcon} />
                  {faq.question}
                  <span style={styles.faqToggle}>{faqOpen[index] ? '−' : '+'}</span>
                </button>
                {faqOpen[index] && (
                  <div id={`faq-answer-${index}`} style={styles.faqAnswer}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Map Placeholder Section */}
        <section style={styles.section}>
          <h2>Find Us</h2>
          <p style={styles.sectionText}>
            Visit us at our campus in Maralal Town, Kenya. Below is a placeholder for our location map.
          </p>
          <div style={styles.mapPlaceholder}>
            <p>Interactive Map Coming Soon</p>
          </div>
        </section>

        {/* Team Contacts Section */}
        <section style={styles.section}>
          <h2>Meet Our Team</h2>
          <p style={styles.sectionText}>
            Contact specific departments for tailored assistance.
          </p>
          <div style={styles.sectionGrid}>
            <div
              style={{
                ...styles.card,
                ...(hoveredElement === 'admissions' ? styles.cardHover : {}),
              }}
              onMouseEnter={() => handleMouseEnter('admissions')}
              onMouseLeave={handleMouseLeave}
            >
              <h3 style={styles.cardTitle}>Admissions Office</h3>
              <p>
                Phone:{' '}
                <a
                  href="tel:+254720215715"
                  style={{
                    ...styles.infoLink,
                    ...(hoveredElement === 'admissionsPhone' ? styles.linkHover : {}),
                  }}
                  onMouseEnter={() => handleMouseEnter('admissionsPhone')}
                  onMouseLeave={handleMouseLeave}
                  aria-label="Call Admissions Office"
                >
                  +254 720 215715
                </a>
              </p>
              <p>
                Email:{' '}
                <a
                  href="mailto:stjohnstrainingcollege@gmail.com"
                  style={{
                    ...styles.infoLink,
                    ...(hoveredElement === 'admissionsEmail' ? styles.linkHover : {}),
                  }}
                  onMouseEnter={() => handleMouseEnter('admissionsEmail')}
                  onMouseLeave={handleMouseLeave}
                  aria-label="Email Admissions Office"
                >
                  stjohnstrainingcollege@gmail.com
                </a>
              </p>
            </div>
            <div
              style={{
                ...styles.card,
                ...(hoveredElement === 'academics' ? styles.cardHover : {}),
              }}
              onMouseEnter={() => handleMouseEnter('academics')}
              onMouseLeave={handleMouseLeave}
            >
              <h3 style={styles.cardTitle}>Academic Affairs</h3>
              <p>
                Phone:{' '}
                <a
                  href="tel:+254741573059"
                  style={{
                    ...styles.infoLink,
                    ...(hoveredElement === 'academicsPhone' ? styles.linkHover : {}),
                  }}
                  onMouseEnter={() => handleMouseEnter('academicsPhone')}
                  onMouseLeave={handleMouseLeave}
                  aria-label="Call Academic Affairs"
                >
                  +254 741 573059
                </a>
              </p>
              <p>
                Email:{' '}
                <a
                  href="mailto:stjohnstrainingcollege@gmail.com"
                  style={{
                    ...styles.infoLink,
                    ...(hoveredElement === 'academicsEmail' ? styles.linkHover : {}),
                  }}
                  onMouseEnter={() => handleMouseEnter('academicsEmail')}
                  onMouseLeave={handleMouseLeave}
                  aria-label="Email Academic Affairs"
                >
                  stjohnstrainingcollege@gmail.com
                </a>
              </p>
            </div>
            <div
              style={{
                ...styles.card,
                ...(hoveredElement === 'students' ? styles.cardHover : {}),
              }}
              onMouseEnter={() => handleMouseEnter('students')}
              onMouseLeave={handleMouseLeave}
            >
              <h3 style={styles.cardTitle}>Student Services</h3>
              <p>
                Phone:{' '}
                <a
                  href="tel:+254707708557"
                  style={{
                    ...styles.infoLink,
                    ...(hoveredElement === 'studentsPhone' ? styles.linkHover : {}),
                  }}
                  onMouseEnter={() => handleMouseEnter('studentsPhone')}
                  onMouseLeave={handleMouseLeave}
                  aria-label="Call Student Services"
                >
                  +254 707 708557
                </a>
              </p>
              <p>
                Email:{' '}
                <a
                  href="mailto:stjohnstrainingcollege@gmail.com"
                  style={{
                    ...styles.infoLink,
                    ...(hoveredElement === 'studentsEmail' ? styles.linkHover : {}),
                  }}
                  onMouseEnter={() => handleMouseEnter('studentsEmail')}
                  onMouseLeave={handleMouseLeave}
                  aria-label="Email Student Services"
                >
                  stjohnstrainingcollege@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  // Main container
  main: {
    padding: '2rem 0',
    backgroundColor: '#f9f9f9', // Matches global.css body background
  },
  // Cover photo section
  coverSection: {
    position: 'relative',
    width: '100%',
    height: '70vh', // Matches global.css carousel height
    overflow: 'hidden',
    borderRadius: '10px',
    marginBottom: '3rem',
  },
  coverImage: {
    width: '100%',
    height: '100%',
    backgroundImage: 'url(/contact-cover.jpg)', // Image in public folder
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'brightness(70%)', // Darken for readability, matches global.css
  },
  coverTitle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#ffffff',
    fontSize: '3rem', // Matches global.css carousel-text h1
    fontWeight: '700',
    textAlign: 'center',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)', // Matches global.css
    animation: 'floatText 1.5s ease-in-out', // Matches global.css animation
  },
  section: {
    padding: '3rem 0',
    background: 'linear-gradient(180deg, #f0f4f8, #e2e8f0)', // Softer gradient
  },
  sectionText: {
    fontSize: '1.1rem',
    color: '#4b5563',
    marginBottom: '1.5rem',
  },

  // Form styles
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#f8fafc', // Off-white for contrast
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    border: '1px solid #e2e8f0',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '1rem',
    fontWeight: '500',
    color: '#1f2937',
  },
  input: {
    padding: '0.75rem',
    marginTop: '0.5rem',
    border: '1px solid #d1d5db',
    borderRadius: '5px',
    fontSize: '1rem',
    backgroundColor: '#ffffff',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  },
  inputFocus: {
    borderColor: '#28a745',
    boxShadow: '0 0 0 2px rgba(40, 167, 69, 0.2)',
    outline: 'none',
  },
  textarea: {
    padding: '0.75rem',
    marginTop: '0.5rem',
    border: '1px solid #d1d5db',
    borderRadius: '5px',
    minHeight: '120px',
    fontSize: '1rem',
    resize: 'vertical',
    backgroundColor: '#ffffff',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  },
  charCounter: {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginTop: '0.25rem',
    textAlign: 'right',
  },
  formButtons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
  },
  submitButton: {
    padding: '0.75rem 1.5rem',
    background: 'linear-gradient(45deg, #28a745, #38d57a)',
    color: '#fff9e6',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontFamily: '"Roboto", sans-serif',
    transition: 'background 0.3s ease, transform 0.3s ease',
  },
  buttonHover: {
    background: 'linear-gradient(45deg, #218838, #2ecc71)',
    transform: 'translateY(-2px)',
  },
  clearButton: {
    padding: '0.75rem 1.5rem',
    background: '#e5e7eb',
    color: '#374151',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontFamily: '"Roboto", sans-serif',
    transition: 'background 0.3s ease, transform 0.3s ease',
  },
  buttonDisabled: {
    background: '#6b7280',
    cursor: 'not-allowed',
  },
  successMessage: {
    color: '#15803d',
    fontWeight: '500',
    textAlign: 'center',
    marginTop: '1rem',
  },
  errorMessage: {
    color: '#b91c1c',
    fontWeight: '500',
    textAlign: 'center',
    marginTop: '1rem',
  },

  // Contact info styles
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    marginTop: '1.5rem',
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontSize: '1.1rem',
    backgroundColor: '#f8fafc',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
  },
  infoIcon: {
    fontSize: '1.25rem',
    color: '#28a745',
  },
  infoLink: {
    color: '#28a745',
    textDecoration: 'none',
  },
  linkHover: {
    color: '#218838',
    textDecoration: 'underline',
  },
  infoSubtitle: {
    fontSize: '1.125rem',
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: '0.5rem',
  },
  socialLinks: {
    display: 'flex',
    gap: '1rem',
  },
  socialLink: {
    color: '#28a745',
  },
  socialIcon: {
    fontSize: '1.5rem',
  },
  iconHover: {
    color: '#218838',
  },

  // FAQ styles
  faqContainer: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  faqItem: {
    backgroundColor: '#f8fafc',
    borderRadius: '8px',
    marginBottom: '1rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    border: '1px solid #e2e8f0',
    overflow: 'hidden',
  },
  faqQuestion: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: '1rem',
    background: '#e2e8f0',
    border: 'none',
    fontSize: '1.1rem',
    fontWeight: '500',
    color: '#1f2937',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
  faqQuestionHover: {
    background: '#cbd5e1',
  },
  faqIcon: {
    fontSize: '1.25rem',
    color: '#28a745',
    marginRight: '0.75rem',
  },
  faqToggle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
  },
  faqAnswer: {
    padding: '1rem',
    fontSize: '1rem',
    color: '#4b5563',
    backgroundColor: '#f8fafc',
    borderTop: '1px solid #e2e8f0',
  },

  // Map placeholder styles
  mapPlaceholder: {
    height: '300px',
    background: '#e5e7eb',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    fontSize: '1.2rem',
    color: '#6b7280',
    marginTop: '1.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    border: '1px solid #e2e8f0',
  },

  // Team contacts styles
  sectionGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginTop: '2rem',
  },
  card: {
    backgroundColor: '#f8fafc',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    border: '1px solid #e2e8f0',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  },
  cardHover: {
    transform: 'translateY(-5px)',
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '1rem',
  },
};
