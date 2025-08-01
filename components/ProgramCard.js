// components/ProgramCard.js
import Link from 'next/link';

export default function ProgramCard({ program }) {
  return (
    <div style={styles.card}>
      <h3>{program.name}</h3>
      <p>{program.description}</p>
      <Link href={`/programs/${program.slug}`}>
        <button>Learn More</button>
      </Link>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ddd',
    padding: '1rem',
    marginBottom: '1rem',
    borderRadius: '5px',
  },
};