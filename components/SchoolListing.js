import Link from 'next/link';
import Image from 'next/image';

export default function SchoolListing() {
  const schools = [
    {
      id: 1,
      name: 'School of Technology',
      description:
        'The School of Technology offers cutting-edge programs in software development,ICT, and computer engineering, equipping students with skills for the dynamic tech industry.',
      image: '/school1.jpg', 
      joinUrl: 'https://example.com/join-technology',
    },
    {
      id: 2,
      name: 'School of Education',
      description:
        'This school provides comprehensive training in ECDE,Primary and Special needs education to produce quality teachers for the future of Samburu and Outside world',
      image: '/school2.jpg',
      joinUrl: 'https://example.com/join-ict',
    },
    {
      id: 3,
      name: 'School of Engineering',
      description:
        'Focused on practical skills in electrical, electronic, and mechanical engineering, this school empowers students to excel in technical and vocational fields.',
      image: '/school3.jpg', 
      joinUrl: 'https://example.com/join-engineering',
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem',
        background: 'linear-gradient(135deg, #f0f4f8, #d9e2ec)',
        minHeight: '100vh',
      }}
    >
      <h1
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#1a3c34',
          marginBottom: '2rem',
          textAlign: 'center',
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}
      >
        Our Schools
      </h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          width: '100%',
          maxWidth: '1200px',
        }}
      >
        {schools.map((school) => (
          <div
            key={school.id}
            style={{
              background: '#fff',
              borderRadius: '15px',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              ':hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '200px',
              }}
            >
              <Image
                src={school.image}
                alt={`${school.name} image`}
                layout="fill"
                objectFit="cover"
                style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
              />
            </div>
            <div
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <h2
                style={{
                  fontSize: '1.8rem',
                  fontWeight: '600',
                  color: '#1a3c34',
                  margin: '0',
                }}
              >
                {school.name}
              </h2>
              <p
                style={{
                  fontSize: '1rem',
                  color: '#4a5568',
                  lineHeight: '1.5',
                  margin: '0',
                }}
              >
                {school.description}
              </p>
              <Link
                href={school.joinUrl}
                style={{
                  display: 'inline-block',
                  textAlign: 'center',
                  padding: '0.75rem 1.5rem',
                  background: 'linear-gradient(45deg, #00cc00, #00ff00)',
                  color: '#fff',
                  fontWeight: '500',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  transition: 'background 0.3s ease',
                  ':hover': {
                    background: 'linear-gradient(45deg, #009900, #00cc00)',
                  },
                }}
              >
                Explore Programs
              </Link>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 2rem !important;
          }
          div[style*="gridTemplateColumns"] {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) !important;
          }
          div[style*="height: 200px"] {
            height: 180px !important;
          }
          h2 {
            font-size: 1.5rem !important;
          }
          p {
            font-size: 0.9rem !important;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 1.8rem !important;
          }
          div[style*="padding: 2rem"] {
            padding: 1rem !important;
          }
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="height: 200px"] {
            height: 150px !important;
          }
          h2 {
            font-size: 1.3rem !important;
          }
          p {
            font-size: 0.85rem !important;
          }
          a[style*="padding: 0.75rem 1.5rem"] {
            padding: 0.6rem 1.2rem !important;
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </div>
  );
}