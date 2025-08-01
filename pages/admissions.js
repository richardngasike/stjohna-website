// pages/admissions.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Admissions() {
  return (
    <div>
      <Head>
        <title>Admissions - University Name</title>
        <meta name="description" content="Apply to University Name" />
      </Head>
      <Header />
      <main className="container" style={styles.main}>
        <h1>Admissions</h1>
        <section>
          <h2>Application Process</h2>
          <p>Submit your application online by December 1st.</p>
        </section>
        <section>
          <h2>Tuition & Fees</h2>
          <p>Undergraduate: $10,000/year | Graduate: $15,000/year</p>
        </section>
        <section>
          <h2>Financial Aid</h2>
          <p>Explore scholarships and grants to fund your education.</p>
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