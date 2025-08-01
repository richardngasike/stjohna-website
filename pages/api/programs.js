// pages/api/programs.js
export default function handler(req, res) {
  if (req.method === 'GET') {
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
    res.status(200).json(programs);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}