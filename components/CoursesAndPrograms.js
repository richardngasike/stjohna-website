// components/CoursesAndPrograms.jsx
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FaBook, FaLaptopCode, FaTools, FaCar, FaUserGraduate, FaCertificate, FaPalette, FaCode, FaRoad } from 'react-icons/fa';

export default function CoursesAndPrograms() {
  const router = useRouter();
  const { school } = router.query; // Get school query parameter
  const [filter, setFilter] = useState('All');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const courses = [
    // Diploma Courses
    {
      category: 'Diploma Courses',
      name: 'Diploma in Information Technology',
      icon: <FaLaptopCode />,
      description: 'Learn software development, networking, and cybersecurity.',
      image: '/ict.jpg',
      school: 'Technology',
    },
    {
      category: 'Diploma Courses',
      name: 'Diploma in Clinical Medicine and Surgery',
      icon: <FaBook />,
      description: 'Train to become a clinical officer with hands-on medical skills.',
      image: '/clinical-medicine.jpg',
      school: 'Health Sciences',
    },
    {
      category: 'Diploma Courses',
      name: 'Diploma in Electrical and Electronic Engineering (Power Option)',
      icon: <FaTools />,
      description: 'Master electrical systems, power distribution, and electronics engineering principles.',
      image: '/electrical-engineering.jpg',
      school: 'Engineering',
    },
    {
      category: 'Diploma Courses',
      name: 'Diploma in Electrical and Electronic Engineering (Telecommunication Option)',
      icon: <FaTools />,
      description: 'Focus on telecommunications systems, networking, and signal processing.',
      image: '/telecom-engineering.jpg',
      school: 'Engineering',
    },
    {
      category: 'Diploma Courses',
      name: 'Diploma in Mechanical Engineering (Automotive Option)',
      icon: <FaTools />,
      description: 'Specialize in automotive design, maintenance, and manufacturing processes.',
      image: '/mechanical-engineering.jpg',
      school: 'Engineering',
    },
    {
      category: 'Diploma Courses',
      name: 'Diploma in Mechanical Engineering (Production Option)',
      icon: <FaTools />,
      description: 'Learn production techniques, manufacturing, and industrial engineering.',
      image: '/production-engineering.jpg',
      school: 'Engineering',
    },
    {
      category: 'Diploma Courses',
      name: 'Diploma in Mechanical Engineering (Fabrication and Welding Option)',
      icon: <FaTools />,
      description: 'Gain skills in metal fabrication, welding, and structural engineering.',
      image: '/fabrication-engineering.jpg',
      school: 'Engineering',
    },
    {
      category: 'Diploma Courses',
      name: 'Diploma in Building and Construction',
      icon: <FaTools />,
      description: 'Acquire knowledge in construction management, building design, and civil engineering.',
      image: '/building-construction.jpg',
      school: 'Engineering',
    },
    {
      category: 'Diploma Courses',
      name: 'Diploma in Civil Engineering',
      icon: <FaTools />,
      description: 'Study structural analysis, transportation, and environmental engineering.',
      image: '/civil-engineering.jpg',
      school: 'Engineering',
    },
    {
      category: 'Diploma Courses',
      name: 'Diploma in Architecture',
      icon: <FaBook />,
      description: 'Develop skills in architectural design, drafting, and urban planning.',
      image: '/architecture.jpg',
      school: 'Design',
    },
    {
      category: 'Diploma Courses',
      name: 'Diploma in Interior Design',
      icon: <FaPalette />,
      description: 'Learn interior space planning, materials, and decorative design.',
      image: '/interior-design.jpg',
      school: 'Design',
    },
    {
      category: 'Diploma Courses',
      name: 'Diploma in Fashion Design',
      icon: <FaPalette />,
      description: 'Master garment construction, pattern making, and textile design.',
      image: '/fashion-design.jpg',
      school: 'Design',
    },
    {
      category: 'Diploma Courses',
      name: 'Diploma in Graphic Design',
      icon: <FaPalette />,
      description: 'Explore visual communication, digital imaging, and branding design.',
      image: '/graphic-design.jpg',
      school: 'Design',
    },
    {
      category: 'Diploma Courses',
      name: 'Diploma in Animation and Illustration',
      icon: <FaPalette />,
      description: 'Create animated content, illustrations, and multimedia projects.',
      image: '/animation.jpg',
      school: 'Design',
    },
    {
      category: 'Diploma Courses',
      name: 'Diploma in Computer Programming',
      icon: <FaCode />,
      description: 'Develop programming skills in languages like Python, Java, and web development.',
      image: '/programming.jpg',
      school: 'Technology',
    },
    {
      category: 'Diploma Courses',
      name: 'Diploma in Software Engineering',
      icon: <FaLaptopCode />,
      description: 'Focus on software design, testing, and project management.',
      image: '/software-engineering.jpg',
      school: 'Technology',
    },
    {
      category: 'Diploma Courses',
      name: 'Diploma in Computer Science',
      icon: <FaLaptopCode />,
      description: 'Cover algorithms, data structures, and computational theory.',
      image: '/computer-science.jpg',
      school: 'Technology',
    },
    {
      category: 'Diploma Courses',
      name: 'Diploma in Business Management',
      icon: <FaBook />,
      description: 'Learn management principles, finance, and organizational behavior.',
      image: '/business-management.jpg',
      school: 'Business',
    },
    {
      category: 'Diploma Courses',
      name: 'Diploma in Human Resource Management',
      icon: <FaUserGraduate />,
      description: 'Study recruitment, employee relations, and labor laws.',
      image: '/hr-management.jpg',
      school: 'Business',
    },
    {
      category: 'Diploma Courses',
      name: 'Diploma in Accounting',
      icon: <FaBook />,
      description: 'Acquire skills in financial reporting, auditing, and taxation.',
      image: '/accounting.jpg',
      school: 'Business',
    },
    {
      category: 'Diploma Courses',
      name: 'Diploma in Supply Chain Management',
      icon: <FaTools />,
      description: 'Focus on logistics, procurement, and inventory management.',
      image: '/supply-chain.jpg',
      school: 'Business',
    },
    {
      category: 'Diploma Courses',
      name: 'Diploma in Marketing',
      icon: <FaBook />,
      description: 'Explore market research, advertising, and consumer behavior.',
      image: '/marketing.jpg',
      school: 'Business',
    },
    {
      category: 'Diploma Courses',
      name: 'Diploma in Sales and Marketing',
      icon: <FaBook />,
      description: 'Develop sales strategies, negotiation, and customer service skills.',
      image: '/sales-marketing.jpg',
      school: 'Business',
    },
    {
      category: 'Diploma Courses',
      name: 'Diploma in Tourism Management',
      icon: <FaBook />,
      description: 'Learn tour operations, hospitality, and travel planning.',
      image: '/tourism.jpg',
      school: 'Hospitality',
    },
    {
      category: 'Diploma Courses',
      name: 'Diploma in Hotel Management',
      icon: <FaBook />,
      description: 'Cover hotel operations, food service, and event management.',
      image: '/hotel-management.jpg',
      school: 'Hospitality',
    },
    {
      category: 'Diploma Courses',
      name: 'Diploma in Food and Beverage Management',
      icon: <FaBook />,
      description: 'Specialize in culinary arts, menu planning, and service standards.',
      image: '/food-beverage.jpg',
      school: 'Hospitality',
    },
    {
      category: 'Diploma Courses',
      name: 'Diploma in Community Health Nursing',
      icon: <FaBook />,
      description: 'Train in community health promotion and preventive care.',
      image: '/community-health.jpg',
      school: 'Health Sciences',
    },
    {
      category: 'Diploma Courses',
      name: 'Diploma in Environmental Health',
      icon: <FaBook />,
      description: 'Focus on public health, sanitation, and environmental protection.',
      image: '/environmental-health.jpg',
      school: 'Health Sciences',
    },
    {
      category: 'Diploma Courses',
      name: 'Diploma in Medical Laboratory Technology',
      icon: <FaBook />,
      description: 'Learn lab techniques, diagnostics, and pathology.',
      image: '/medical-lab.jpg',
      school: 'Health Sciences',
    },
    {
      category: 'Diploma Courses',
      name: 'Diploma in Pharmacy',
      icon: <FaBook />,
      description: 'Study pharmaceutical sciences, dispensing, and drug management.',
      image: '/pharmacy.jpg',
      school: 'Health Sciences',
    },
    {
      category: 'Diploma Courses',
      name: 'Diploma in Nutrition and Dietetics',
      icon: <FaBook />,
      description: 'Acquire knowledge in nutritional assessment and meal planning.',
      image: '/nutrition.jpg',
      school: 'Health Sciences',
    },
    {
      category: 'Diploma Courses',
      name: 'Diploma in Agriculture',
      icon: <FaBook />,
      description: 'Cover crop production, animal husbandry, and agribusiness.',
      image: '/agriculture.jpg',
      school: 'Agriculture',
    },
    {
      category: 'Diploma Courses',
      name: 'Diploma in Animal Health and Production',
      icon: <FaBook />,
      description: 'Focus on veterinary care, livestock management, and disease control.',
      image: '/animal-health.jpg',
      school: 'Agriculture',
    },
    {
      category: 'Diploma Courses',
      name: 'Diploma in Horticulture',
      icon: <FaBook />,
      description: 'Learn plant propagation, greenhouse management, and landscaping.',
      image: '/horticulture.jpg',
      school: 'Agriculture',
    },
    {
      category: 'Diploma Courses',
      name: 'Diploma in Water Engineering',
      icon: <FaTools />,
      description: 'Study water supply, sanitation, and hydraulic systems.',
      image: '/water-engineering.jpg',
      school: 'Engineering',
    },
    {
      category: 'Diploma Courses',
      name: 'Diploma in Surveying and Mapping',
      icon: <FaTools />,
      description: 'Develop skills in land surveying, GIS, and cartography.',
      image: '/surveying.jpg',
      school: 'Engineering',
    },
    // Certificate Courses
    {
      category: 'Certificate Courses',
      name: 'Certificate in Automotive Engineering',
      icon: <FaCar />,
      description: 'Gain skills in vehicle maintenance and repair.',
      image: '/automotive-engineering.jpg',
      school: 'Engineering',
    },
    {
      category: 'Certificate Courses',
      name: 'Certificate in Hairdressing and Beauty Therapy',
      icon: <FaCertificate />,
      description: 'Develop expertise in beauty and styling techniques.',
      image: '/beauty-therapy.jpg',
      school: 'Beauty',
    },
    {
      category: 'Certificate Courses',
      name: 'Certificate in Electrical Wiring',
      icon: <FaTools />,
      description: 'Learn basic electrical installation and safety standards.',
      image: '/electrical-wiring.jpg',
      school: 'Engineering',
    },
    {
      category: 'Certificate Courses',
      name: 'Certificate in Welding and Fabrication',
      icon: <FaTools />,
      description: 'Master welding techniques and metal fabrication.',
      image: '/welding.jpg',
      school: 'Engineering',
    },
    {
      category: 'Certificate Courses',
      name: 'Certificate in Carpentry and Joinery',
      icon: <FaTools />,
      description: 'Acquire woodworking skills for construction and furniture making.',
      image: '/carpentry.jpg',
      school: 'Engineering',
    },
    {
      category: 'Certificate Courses',
      name: 'Certificate in Masonry',
      icon: <FaTools />,
      description: 'Focus on bricklaying, plastering, and concrete work.',
      image: '/masonry.jpg',
      school: 'Engineering',
    },
    {
      category: 'Certificate Courses',
      name: 'Certificate in Plumbing and Pipe Fitting',
      icon: <FaTools />,
      description: 'Learn installation and maintenance of plumbing systems.',
      image: '/plumbing.jpg',
      school: 'Engineering',
    },
    {
      category: 'Certificate Courses',
      name: 'Certificate in Painting and Decoration',
      icon: <FaPalette />,
      description: 'Develop skills in surface preparation and decorative finishes.',
      image: '/painting.jpg',
      school: 'Design',
    },
    {
      category: 'Certificate Courses',
      name: 'Certificate in Tailoring and Fashion Design',
      icon: <FaCertificate />,
      description: 'Basic garment making and pattern drafting.',
      image: '/tailoring.jpg',
      school: 'Design',
    },
    {
      category: 'Certificate Courses',
      name: 'Certificate in Information Communication Technology',
      icon: <FaLaptopCode />,
      description: 'Introduction to computer hardware, software, and basic programming.',
      image: '/ict-certificate.jpg',
      school: 'Technology',
    },
    {
      category: 'Certificate Courses',
      name: 'Certificate in Computer Applications',
      icon: <FaLaptopCode />,
      description: 'Essential skills in MS Office and basic computing.',
      image: '/computer-apps.jpg',
      school: 'Technology',
    },
    {
      category: 'Certificate Courses',
      name: 'Certificate in Business Administration',
      icon: <FaBook />,
      description: 'Fundamentals of business operations and management.',
      image: '/business-admin.jpg',
      school: 'Business',
    },
    {
      category: 'Certificate Courses',
      name: 'Certificate in Secretarial Studies',
      icon: <FaBook />,
      description: 'Office administration, typing, and communication skills.',
      image: '/secretarial.jpg',
      school: 'Business',
    },
    {
      category: 'Certificate Courses',
      name: 'Certificate in Bookkeeping',
      icon: <FaBook />,
      description: 'Basic accounting principles and record-keeping.',
      image: '/bookkeeping.jpg',
      school: 'Business',
    },
    {
      category: 'Certificate Courses',
      name: 'Certificate in Salesmanship',
      icon: <FaBook />,
      description: 'Techniques for selling and customer engagement.',
      image: '/salesmanship.jpg',
      school: 'Business',
    },
    {
      category: 'Certificate Courses',
      name: 'Certificate in Tour Guiding',
      icon: <FaBook />,
      description: 'Skills for guiding tourists and cultural interpretation.',
      image: '/tour-guiding.jpg',
      school: 'Hospitality',
    },
    {
      category: 'Certificate Courses',
      name: 'Certificate in Food Production',
      icon: <FaBook />,
      description: 'Culinary basics and food preparation techniques.',
      image: '/food-production.jpg',
      school: 'Hospitality',
    },
    {
      category: 'Certificate Courses',
      name: 'Certificate in Housekeeping',
      icon: <FaBook />,
      description: 'Hotel cleaning, laundry, and maintenance procedures.',
      image: '/housekeeping.jpg',
      school: 'Hospitality',
    },
    {
      category: 'Certificate Courses',
      name: 'Certificate in Community Health',
      icon: <FaBook />,
      description: 'Basic health education and first aid.',
      image: '/community-health-cert.jpg',
      school: 'Health Sciences',
    },
    {
      category: 'Certificate Courses',
      name: 'Certificate in Environmental Science',
      icon: <FaBook />,
      description: 'Introduction to ecology and conservation.',
      image: '/environmental-science.jpg',
      school: 'Environment',
    },
    {
      category: 'Certificate Courses',
      name: 'Certificate in Crop Production',
      icon: <FaBook />,
      description: 'Basics of farming and crop management.',
      image: '/crop-production.jpg',
      school: 'Agriculture',
    },
    {
      category: 'Certificate Courses',
      name: 'Certificate in Animal Production',
      icon: <FaBook />,
      description: 'Livestock rearing and basic veterinary care.',
      image: '/animal-production.jpg',
      school: 'Agriculture',
    },
    // Short Courses - Computer Packages and Graphic Design
    {
      category: 'Short Courses - Computer Packages and Graphic Design',
      name: 'Computer Application Packages (Basic)',
      icon: <FaLaptopCode />,
      description: 'Master Microsoft Word, Excel, PowerPoint, and internet basics.',
      image: '/computer-packages.jpg',
      school: 'Technology',
    },
    {
      category: 'Short Courses - Computer Packages and Graphic Design',
      name: 'Advanced Computer Packages',
      icon: <FaLaptopCode />,
      description: 'Advanced features in MS Office, data analysis, and desktop publishing.',
      image: '/advanced-computer.jpg',
      school: 'Technology',
    },
    {
      category: 'Short Courses - Computer Packages and Graphic Design',
      name: 'Graphic Design Fundamentals',
      icon: <FaPalette />,
      description: 'Introduction to Adobe Photoshop, Illustrator, and design principles.',
      image: '/graphic-fundamentals.jpg',
      school: 'Design',
    },
    {
      category: 'Short Courses - Computer Packages and Graphic Design',
      name: 'Web Graphic Design',
      icon: <FaPalette />,
      description: 'Creating graphics for websites using tools like Canva and Adobe XD.',
      image: '/web-graphic.jpg',
      school: 'Design',
    },
    {
      category: 'Short Courses - Computer Packages and Graphic Design',
      name: 'Digital Illustration',
      icon: <FaPalette />,
      description: 'Vector and raster illustration techniques for digital media.',
      image: '/digital-illustration.jpg',
      school: 'Design',
    },
    {
      category: 'Short Courses - Computer Packages and Graphic Design',
      name: 'UI/UX Design Basics',
      icon: <FaPalette />,
      description: 'User interface and experience design for apps and websites.',
      image: '/ui-ux.jpg',
      school: 'Design',
    },
    // Short Courses - Driving School
    {
      category: 'Short Courses - Driving School',
      name: 'Driving (Light Vehicle - Class G)',
      icon: <FaCar />,
      description: 'Learn to drive light vehicles with safety and road rules.',
      image: '/driving-light.jpg',
      school: 'Transport',
    },
    {
      category: 'Short Courses - Driving School',
      name: 'Driving (Light Lorry - Class F)',
      icon: <FaCar />,
      description: 'Training for light lorries and commercial light vehicles.',
      image: '/driving-lorry.jpg',
      school: 'Transport',
    },
    {
      category: 'Short Courses - Driving School',
      name: 'Defensive Driving',
      icon: <FaRoad />,
      description: 'Advanced safety techniques for hazard avoidance and emergency handling.',
      image: '/defensive-driving.jpg',
      school: 'Transport',
    },
    {
      category: 'Short Courses - Driving School',
      name: 'Motorcycle Riding (Class J)',
      icon: <FaCar />,
      description: 'Safe motorcycle operation and traffic regulations.',
      image: '/motorcycle.jpg',
      school: 'Transport',
    },
    {
      category: 'Short Courses - Driving School',
      name: 'Advanced Driving Trainers Course',
      icon: <FaRoad />,
      description: 'Training to become a certified driving instructor.',
      image: '/driving-trainer.jpg',
      school: 'Transport',
    },
    {
      category: 'Short Courses - Driving School',
      name: 'Heavy Vehicle Driving (Class E)',
      icon: <FaCar />,
      description: 'Handling heavy commercial vehicles and trailers.',
      image: '/heavy-vehicle.jpg',
      school: 'Transport',
    },
    // Online Courses - Computer Programming
    {
      category: 'Online Courses - Computer Programming',
      name: 'Online Python Programming',
      icon: <FaCode />,
      description: 'Basics of Python for beginners, including scripts and automation.',
      image: '/python-online.jpg',
      school: 'Technology',
    },
    {
      category: 'Online Courses - Computer Programming',
      name: 'Online Web Development (HTML/CSS/JS)',
      icon: <FaCode />,
      description: 'Build responsive websites with core web technologies.',
      image: '/web-dev-online.jpg',
      school: 'Technology',
    },
    {
      category: 'Online Courses - Computer Programming',
      name: 'Online Java Programming',
      icon: <FaCode />,
      description: 'Object-oriented programming with Java for applications.',
      image: '/java-online.jpg',
      school: 'Technology',
    },
    {
      category: 'Online Courses - Computer Programming',
      name: 'Online Database Management (SQL)',
      icon: <FaCode />,
      description: 'Querying and managing databases with SQL.',
      image: '/sql-online.jpg',
      school: 'Technology',
    },
    {
      category: 'Online Courses - Computer Programming',
      name: 'Online Full Stack Development',
      icon: <FaCode />,
      description: 'Front-end and back-end development with modern frameworks.',
      image: '/fullstack-online.jpg',
      school: 'Technology',
    },
    {
      category: 'Online Courses - Computer Programming',
      name: 'Online Mobile App Development',
      icon: <FaCode />,
      description: 'Building Android/iOS apps using Flutter or React Native.',
      image: '/mobile-app-online.jpg',
      school: 'Technology',
    },
  ];

  const partners = [
    { name: 'KNEC', logo: '/knec.jpeg', alt: 'Kenya National Examinations Council' },
    { name: 'CDACC', logo: '/cdacc.png', alt: 'TVET CDACC' },
    { name: 'TVET', logo: '/tvet.png', alt: 'Technical and Vocational Education and Training' },
    { name: 'GOK', logo: '/gok.png', alt: 'Government of Kenya' },
    { name: 'KUCCPS', logo: '/kuccps.jpeg', alt: 'Kenya Universities and Colleges Central Placement Service' },
    { name: 'NITA', logo: '/nita.jpeg', alt: 'National Industrial Training Authority' },
    { name: 'TVETA', logo: '/tvetpng.png', alt: 'TVET Authority' },
  ];

  // Filter courses based on school query and category
  const filteredCourses = school
    ? courses.filter((course) => course.school === school && (filter === 'All' || course.category === filter))
    : filter === 'All'
    ? courses
    : courses.filter((course) => course.category === filter);

  return (
    <div style={styles.container}>
      <Head>
        <title>Courses & Programs - Kenyan TVET Colleges</title>
        <meta
          name="description"
          content={`Explore Diploma, Certificate, Short Courses, and Online Programming Courses offered by Kenyan TVET colleges accredited by KNEC, TVET, and CDACC under Kenya National Examinations Council.`}
        />
      </Head>

      <main style={styles.main}>
        <section style={styles.hero}>
          <div style={{ ...styles.heroContent, ...styles.heroBackground }}>
            <h1 style={styles.title}>
              {school ? `${school} Courses & Programs` : 'Discover TVET Courses & Programs at KNEC Colleges'}
            </h1>
            <p style={styles.subtitle}>
              Join accredited Kenyan TVET colleges for Diploma, Certificate, Short Courses like Computer Packages, Graphic Design, Driving, and Online Computer Programming accredited by KNEC, TVET, and CDACC.
            </p>
            <Link href="/apply" style={styles.ctaButton}>
              Apply Now
            </Link>
          </div>
        </section>

        <section style={styles.filterSection}>
          <h2 style={styles.sectionTitle}>Filter Courses</h2>
          <div style={styles.filterButtons}>
            {['All', 'Diploma Courses', 'Certificate Courses', 'Short Courses - Computer Packages and Graphic Design', 'Short Courses - Driving School', 'Online Courses - Computer Programming'].map((category) => (
              <button
                key={category}
                style={filter === category ? { ...styles.filterButton, ...styles.filterButtonActive } : styles.filterButton}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section id="courses" style={styles.coursesSection}>
          <h2 style={styles.sectionTitle}>Our Programs</h2>
          {filteredCourses.length === 0 ? (
            <p style={styles.sectionText}>No courses available for this filter.</p>
          ) : (
            <div style={styles.coursesGrid}>
              {filteredCourses.map((course, index) => (
                <div
                  key={index}
                  style={styles.courseCard}
                  className={isClient ? 'animate__animated animate__fadeIn' : ''}
                >
                  <div style={styles.courseImage}>
                    <Image
                      src={course.image}
                      alt={course.name}
                      layout="responsive"
                      width={400}
                      height={300}
                      objectFit="cover"
                      quality={85}
                    />
                  </div>
                  <div style={styles.courseContent}>
                    <div style={styles.courseIcon}>{course.icon}</div>
                    <h3 style={styles.courseTitle}>{course.name}</h3>
                    <p style={styles.courseDescription}>{course.description}</p>
                    <p style={styles.courseCategory}>{course.category}</p>
                    <Link href={`/admissions`} style={styles.courseButton}>
                      Apply
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section style={styles.partnersSection}>
          <h2 style={styles.sectionTitle}>Our Partners</h2>
          <div style={styles.partnersSlider}>
            <div style={styles.sliderTrack}>
              {[...partners, ...partners].map((partner, index) => (
                <div key={index} style={styles.partnerItem}>
                  <div style={styles.partnerAvatar}>
                    <Image
                      src={partner.logo}
                      alt={partner.alt}
                      layout="fill"
                      objectFit="contain"
                      quality={75}
                    />
                  </div>
                  <p style={styles.partnerName}>{partner.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={styles.ctaSection}>
          <h2 style={styles.sectionTitle}>Start Your Journey Today</h2>
          <p style={styles.sectionText}>
            Enroll in our TVET programs at KNEC-accredited colleges and take the first step towards a successful career with the support of our partners like KNEC, TVET, and CDACC.
          </p>
          <Link href="/apply" style={styles.ctaButton}>
            Apply Now
          </Link>
        </section>
      </main>

      <style jsx>{`
        @import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');

        @media (max-width: 768px) {
          div[style*="padding: 2rem 0"] {
            padding: 1rem 0.5rem !important;
          }
          h1[style*="fontSize: '3rem'"] {
            font-size: 2rem !important;
          }
          h2[style*="fontSize: '1.8rem'"] {
            font-size: 1.4rem !important;
          }
          p[style*="fontSize: '1.2rem'"], p[style*="fontSize: '1rem'"] {
            font-size: 0.9rem !important;
          }
          div[style*="gridTemplateColumns: repeat(auto-fit, minmax(300px, 1fr))"] {
            grid-template-columns: 1fr !important;
          }
          button[style*="padding: 0.75rem 1.5rem"], a[style*="padding: 0.75rem 1.5rem"] {
            padding: 0.5rem 1rem !important;
            font-size: 0.9rem !important;
            width: 100% !important;
            max-width: 300px !important;
            margin: 0 auto !important;
          }
          div[style*="width: '80px'"] {
            width: 60px !important;
            height: 60px !important;
          }
          div[style*="padding: 1.5rem"] {
            padding: 1rem !important;
          }
        }

        @media (max-width: 480px) {
          div[style*="padding: 2rem 0"] {
            padding: 0.75rem 0.25rem !important;
          }
          h1[style*="fontSize: '3rem'"] {
            font-size: 1.8rem !important;
          }
          h2[style*="fontSize: '1.8rem'"] {
            font-size: 1.2rem !important;
          }
          p[style*="fontSize: '1.2rem'"], p[style*="fontSize: '1rem'"] {
            font-size: 0.85rem !important;
          }
          button[style*="padding: 0.75rem 1.5rem"], a[style*="padding: 0.75rem 1.5rem"] {
            padding: 0.4rem 0.8rem !important;
            font-size: 0.85rem !important;
            max-width: 250px !important;
          }
          div[style*="width: '80px'"] {
            width: 50px !important;
            height: 50px !important;
          }
          div[style*="padding: 1.5rem"] {
            padding: 0.75rem !important;
          }
        }

        @media (max-width: 360px) {
          div[style*="padding: 2rem 0"] {
            padding: 0.5rem 0.2rem !important;
          }
          h1[style*="fontSize: '3rem'"] {
            font-size: 1.6rem !important;
          }
          h2[style*="fontSize: '1.8rem'"] {
            font-size: 1.1rem !important;
          }
          p[style*="fontSize: '1.2rem'"], p[style*="fontSize: '1rem'"] {
            font-size: 0.8rem !important;
          }
          button[style*="padding: 0.75rem 1.5rem"], a[style*="padding: 0.75rem 1.5rem"] {
            padding: 0.3rem 0.6rem !important;
            font-size: 0.8rem !important;
            max-width: 200px !important;
          }
          div[style*="width: '80px'"] {
            width: 40px !important;
            height: 40px !important;
          }
          div[style*="padding: 1.5rem"] {
            padding: 0.5rem !important;
          }
        }

        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate__fadeIn {
          animation: fadeIn 1s ease-in-out;
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    background: 'linear-gradient(135deg, #f0f4f8, #d9e2ec)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',
    boxSizing: 'border-box',
  },
  main: {
    padding: '2rem 0',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    boxSizing: 'border-box',
  },
  hero: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: '3rem',
  },
  heroContent: {
    padding: '4rem 2rem',
    position: 'relative',
    width: '100%',
    maxWidth: '1200px',
  },
  heroBackground: {
    backgroundImage: 'url(/stjohndriving.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    color: '#fff', // Ensure text is visible on background
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)', // Add text shadow for readability
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#fff', // White text for contrast
    marginBottom: '1rem',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#fff', // White text for contrast
    lineHeight: '1.5',
    maxWidth: '600px',
    margin: '0 auto 1.5rem',
  },
  filterSection: {
    marginBottom: '2rem',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '1.8rem',
    fontWeight: '600',
    color: '#1a3c34',
    marginBottom: '1rem',
  },
  filterButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  filterButton: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    border: '1px solid #ff0000ff',
    borderRadius: '8px',
    background: '#66ff00ff',
    color: '#000000ff',
    cursor: 'pointer',
    transition: 'background 0.3s ease, color 0.3s ease',
  },
  filterButtonActive: {
    background: '#00cc00',
    color: '#fff',
    borderColor: '#00cc00',
  },
  coursesSection: {
    marginBottom: '3rem',
  },
  coursesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  courseCard: {
    background: '#fff',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  courseImage: {
    width: '100%',
    aspectRatio: '4 / 3',
  },
  courseContent: {
    padding: '1.5rem',
    textAlign: 'center',
  },
  courseIcon: {
    fontSize: '2rem',
    color: '#00cc00',
    marginBottom: '1rem',
  },
  courseTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#1a3c34',
    marginBottom: '0.5rem',
  },
  courseDescription: {
    fontSize: '1rem',
    color: '#4a5568',
    marginBottom: '1rem',
  },
  courseCategory: {
    fontSize: '0.9rem',
    color: '#718096',
    marginBottom: '1rem',
  },
  courseButton: {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    background: 'linear-gradient(45deg, #00cc00, #00ff00)',
    color: '#fff',
    borderRadius: '8px',
    textDecoration: 'none',
    transition: 'background 0.3s ease, transform 0.3s ease',
  },
  partnersSection: {
    marginBottom: '3rem',
    textAlign: 'center',
  },
  partnersSlider: {
    overflow: 'hidden',
    width: '100%',
  },
  sliderTrack: {
    display: 'flex',
    animation: 'slide 20s linear infinite',
    width: 'calc(200px * 14)',
  },
  partnerItem: {
    flex: '0 0 200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 1rem',
  },
  partnerAvatar: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    overflow: 'hidden',
    position: 'relative',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '0.5rem',
  },
  partnerName: {
    fontSize: '0.9rem',
    color: '#1a3c34',
    fontWeight: '500',
  },
  ctaSection: {
    textAlign: 'center',
    padding: '2rem',
    background: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  sectionText: {
    fontSize: '1rem',
    color: '#4a5568',
    marginBottom: '1.5rem',
    maxWidth: '600px',
    margin: '0 auto 1.5rem',
  },
  ctaButton: {
    display: 'inline-block',
    padding: '0.75rem 1.5rem',
    background: 'linear-gradient(45deg, #00cc00, #00ff00)',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: '500',
    borderRadius: '8px',
    textDecoration: 'none',
    transition: 'background 0.3s ease, transform 0.3s ease',
  },
};