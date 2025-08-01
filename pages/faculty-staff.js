// pages/faculty-staff.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function FacultyStaff() {
  return (
    <div>
      <Head>
        <title>Faculty & Staff - University Name</title>
        <meta name="description" content="Meet our faculty and staff" />
      </Head>
      <Header />
      <main className="container" style={styles.main}>
        <h1>Faculty & Staff</h1>
        <section>
          <h2>Faculty Directory</h2>
          <p>Explore our expert faculty in various disciplines.</p>
        </section>
        <section>
          <h2>Staff Resources</h2>
          <p>Access HR policies, benefits, and professional development.</p>
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