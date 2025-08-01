// pages/student-life.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function StudentLife() {
  return (
    <div>
      <Head>
        <title>Student Life - University Name</title>
        <meta name="description" content="Experience vibrant campus life" />
      </Head>
      <Header />
      <main className="container" style={styles.main}>
        <h1>Student Life</h1>
        <section>
          <h2>Clubs & Organizations</h2>
          <p>Join over 100 student-led clubs, from robotics to debate.</p>
        </section>
        <section>
          <h2>Housing & Dining</h2>
          <p>Modern dorms and diverse dining options await you.</p>
        </section>
        <section>
          <h2>Events</h2>
          <p>Attend concerts, workshops, and cultural festivals.</p>
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
};