// pages/programs/[slug].js
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export async function getStaticPaths() {
  // Mock data; replace with Prisma query later
  const programs = [
    { slug: 'computer-science' },
    { slug: 'business-administration' },
  ];

  const paths = programs.map((program) => ({
    params: { slug: program.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Mock data; replace with Prisma query later
  const programs = {
    'computer-science': {
      id: 1,
      name: 'Computer Science',
      description: 'Learn cutting-edge technologies.',
      details: 'Our CS program covers AI, web development, and more.',
    },
    'business-administration': {
      id: 2,
      name: 'Business Administration',
      description: 'Develop leadership skills.',
      details: 'Our MBA program prepares you for global business challenges.',
    },
  };

  const program = programs[params.slug];

  return {
    props: { program },
  };
}

export default function Program({ program }) {
  return (
    <div>
      <Head>
        <title>{program.name} - University Name</title>
        <meta name="description" content={program.description} />
      </Head>
      <Header />
      <main className="container" style={styles.main}>
        <h1>{program.name}</h1>
        <p>{program.description}</p>
        <p>{program.details}</p>
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