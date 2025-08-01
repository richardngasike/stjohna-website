// pages/programs/index.js
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProgramCard from '../../components/ProgramCard';

export async function getStaticProps() {
  // Mock data; replace with Prisma query later
  const programs = [
    {
      id: 1,
      name: 'Computer Science',
      description: 'Learn cutting-edge technologies.',
      slug: 'computer-science',
    },
    {
      id: 2,
      name: 'Business Administration',
      description: 'Develop leadership skills.',
      slug: 'business-administration',
    },
  ];

  return {
    props: { programs },
  };
}

export default function Programs({ programs }) {
  return (
    <div>
      <Head>
        <title>Academics - University Name</title>
        <meta name="description" content="Explore our academic programs" />
      </Head>
      <Header />
      <main className="container" style={styles.main}>
        <h1>Academic Programs</h1>
        <div style={styles.grid}>
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  main: {
    padding: '2rem 0',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1rem',
  },
};