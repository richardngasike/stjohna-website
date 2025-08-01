// pages/contact.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Placeholder for API call to store in PostgreSQL
    alert('Form submitted! (Replace with API call)');
  };

  return (
    <div>
      <Head>
        <title>Contact - University Name</title>
        <meta name="description" content="Get in touch with University Name" />
      </Head>
      <Header />
      <main className="container" style={styles.main}>
        <h1>Contact Us</h1>
        <section>
          <h2>Get in Touch</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <label style={styles.label}>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </label>
            <label style={styles.label}>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </label>
            <label style={styles.label}>
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                style={styles.textarea}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </section>
        <section>
          <h2>Contact Information</h2>
          <p>Email: stjohnscollege@gmail.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: cereal board Road, Maralal town, Nairobi KENYA</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  main: {
    padding: '2rem 0',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '500px',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '0.5rem',
    marginTop: '0.5rem',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  textarea: {
    padding: '0.5rem',
    marginTop: '0.5rem',
    border: '1px solid #ddd',
    borderRadius: '5px',
    minHeight: '100px',
  },
};