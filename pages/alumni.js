// pages/alumni.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Alumni() {
  return (
    <div>
      <Head>
        <title>Alumni - University Name</title>
        <meta name="description" content="Connect with our alumni community" />
      </Head>
      <Header />
      <main className="container" style={styles.main}>
        <h1>Alumni</h1>
        <section>
          <h2>Alumni Association</h2>
          <p>Join our network of over 50,000 graduates.</p>
        </section>
        <section>
          <h2>Success Stories</h2>
          <p>Read about our alumni making a difference worldwide.</p>
        </section>
        <section>
          <h2>Donate</h2>
          <p>Support the next generation of students.</p>
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