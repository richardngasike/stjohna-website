import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Admissions() {
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    lastName: '',
    dateOfBirth: '',
    kcseGrade: '',
  });
  const [idFront, setIdFront] = useState(null);
  const [idBack, setIdBack] = useState(null);
  const [kcseDocument, setKcseDocument] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [formError, setFormError] = useState('');

  // List of courses (inspired by Kenyan colleges)
  const courses = [
    { category: 'Diploma Courses', name: 'Diploma in Information Technology' },
    { category: 'Diploma Courses', name: 'Diploma in Clinical Medicine and Surgery' },
    { category: 'Diploma Courses', name: 'Diploma in Community Health and Development' },
    { category: 'Diploma Courses', name: 'Diploma in Electrical and Electronic Engineering' },
    { category: 'Diploma Courses', name: 'Diploma in Business Management' },
    { category: 'Diploma Courses', name: 'Diploma in Fashion Design and Garment Making' },
    { category: 'Diploma Courses', name: 'Diploma in Automotive Engineering' },
    { category: 'Diploma Courses', name: 'Diploma in Architecture' },
    { category: 'Diploma Courses', name: 'Diploma in Quantity Surveying' },
    { category: 'Diploma Courses', name: 'Diploma in Social Work and Community Development' },
    { category: 'Certificate Courses', name: 'Certificate in Information and Communication Technology' },
    { category: 'Certificate Courses', name: 'Certificate in Electrical Installation' },
    { category: 'Certificate Courses', name: 'Certificate in Food Processing & Technology' },
    { category: 'Certificate Courses', name: 'Certificate in Hairdressing and Beauty Therapy' },
    { category: 'Certificate Courses', name: 'Certificate in Automotive Engineering' },
    { category: 'Certificate Courses', name: 'Certificate in Building Technology' },
    { category: 'Short Courses', name: 'Driving (Light Vehicle)' },
    { category: 'Short Courses', name: 'Computer Application Packages' },
    { category: 'Short Courses', name: 'Certificate in Bakery Technology' },
    { category: 'Short Courses', name: 'Certificate in Project Management' },
  ];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file uploads
  const handleFileChange = (e, setFile) => {
    const file = e.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      setFormError('File size should not exceed 5MB');
      return;
    }
    setFormError('');
    setFile(file);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.dateOfBirth ||
      !formData.kcseGrade ||
      !selectedCourse ||
      !idFront ||
      !idBack ||
      !kcseDocument
    ) {
      setFormError('Please fill all required fields and upload necessary documents.');
      return;
    }
    setFormError('');
    // Implement form submission logic (e.g., API call)
    console.log('Form submitted:', { ...formData, selectedCourse, idFront, idBack, kcseDocument });
    alert('Application submitted successfully!');
  };

  return (
    <div style={styles.container}>
      <Head>
        <title>Admissions - University Name</title>
        <meta name="description" content="Apply to University Name for Diploma, Certificate, and Short Courses" />
      </Head>
      <Header />
      <main style={styles.main}>
        {/* Brochure Image */}
        <div style={styles.brochureContainer}>
          <Image
            src="/bronchure.jpg" // Replace with actual brochure image path
            alt="Courses Brochure"
            width={1200}
            height={675} // 16:9 aspect ratio (1200/675 = 16/9)
            objectFit="cover"
            objectPosition="center"
            quality={85}
          />
        </div>

        <h1 style={styles.title}>Admissions Application</h1>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Application Form</h2>
          <p style={styles.sectionText}>
            Complete the form below to apply for our programs. Ensure all required fields are filled and documents are uploaded by December 1st.
          </p>
          {formError && <p style={styles.error}>{formError}</p>}
          <form onSubmit={handleSubmit} style={styles.form}>
            {/* Name Fields */}
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="firstName">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="secondName">
                Second Name (Optional)
              </label>
              <input
                type="text"
                id="secondName"
                name="secondName"
                value={formData.secondName}
                onChange={handleInputChange}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="lastName">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
            </div>

            {/* Date of Birth */}
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="dateOfBirth">
                Date of Birth *
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                style={styles.input}
                max={new Date().toISOString().split('T')[0]} // Prevent future dates
                required
              />
            </div>

            {/* KCSE Grade */}
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="kcseGrade">
                KCSE Grade *
              </label>
              <input
                type="text"
                id="kcseGrade"
                name="kcseGrade"
                value={formData.kcseGrade}
                onChange={handleInputChange}
                style={styles.input}
                placeholder="e.g., C+, C, C-"
                required
              />
            </div>

            {/* Course Selection */}
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="course">
                Select Course *
              </label>
              <select
                id="course"
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                style={styles.select}
                required
              >
                <option value="">-- Select a Course --</option>
                {courses.map((course, index) => (
                  <option key={index} value={course.name}>
                    {course.name} ({course.category})
                  </option>
                ))}
              </select>
            </div>

            {/* File Uploads */}
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="idFront">
                Upload ID Card (Front) * (Max 5MB)
              </label>
              <input
                type="file"
                id="idFront"
                accept="image/*,.pdf"
                onChange={(e) => handleFileChange(e, setIdFront)}
                style={styles.fileInput}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="idBack">
                Upload ID Card (Back) * (Max 5MB)
              </label>
              <input
                type="file"
                id="idBack"
                accept="image/*,.pdf"
                onChange={(e) => handleFileChange(e, setIdBack)}
                style={styles.fileInput}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="kcseDocument">
                Upload KCSE Certificate * (Max 5MB)
              </label>
              <input
                type="file"
                id="kcseDocument"
                accept="image/*,.pdf"
                onChange={(e) => handleFileChange(e, setKcseDocument)}
                style={styles.fileInput}
                required
              />
            </div>

            <button type="submit" style={styles.submitButton}>
              Submit Application
            </button>
          </form>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Tuition & Fees</h2>
          <p style={styles.sectionText}>
            Diploma Courses: KSH 22,000/term | Certificate Courses: KSH 19,500/term | Short Courses: Varies (e.g., Driving: KSH 10,000). Accommodation and meals: KSH 17,000/term (optional).
          </p>
        </section>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Financial Aid</h2>
          <p style={styles.sectionText}>
            Eligible students can apply for government funding through KUCCPS or HELB loans. Scholarships and grants are also available for qualifying applicants.
          </p>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="padding: 2rem 0"] {
            padding: 1.5rem 1rem !important;
          }
          div[style*="aspectRatio: '16 / 9'"] {
            aspect-ratio: 16 / 9 !important;
          }
          h1[style*="fontSize: '2.5rem'"] {
            font-size: 2rem !important;
          }
          h2[style*="fontSize: '1.8rem'"] {
            font-size: 1.5rem !important;
          }
          p[style*="fontSize: '1rem'"] {
            font-size: 0.9rem !important;
          }
          div[style*="gridTemplateColumns: repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          input[style*="padding: 0.75rem"], select[style*="padding: 0.75rem"] {
            padding: 0.6rem !important;
            font-size: 0.9rem !important;
          }
          button[style*="padding: 0.75rem 1.5rem"] {
            padding: 0.6rem 1.2rem !important;
            font-size: 0.9rem !important;
          }
        }

        @media (max-width: 480px) {
          div[style*="padding: 2rem 0"] {
            padding: 1rem 0.5rem !important;
          }
          div[style*="aspectRatio: '16 / 9'"] {
            aspect-ratio: 16 / 9 !important;
          }
          h1[style*="fontSize: '2.5rem'"] {
            font-size: 1.8rem !important;
          }
          h2[style*="fontSize: '1.8rem'"] {
            font-size: 1.3rem !important;
          }
          p[style*="fontSize: '1rem'"] {
            font-size: 0.85rem !important;
          }
          input[style*="padding: 0.75rem"], select[style*="padding: 0.75rem"] {
            padding: 0.5rem !important;
            font-size: 0.85rem !important;
          }
          button[style*="padding: 0.75rem 1.5rem"] {
            padding: 0.5rem 1rem !important;
            font-size: 0.85rem !important;
          }
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
  },
  main: {
    padding: '2rem 0',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  brochureContainer: {
    position: 'relative',
    width: '100%',
    aspectRatio: '16 / 9', // Ensures consistent aspect ratio
    marginBottom: '2rem',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#1a3c34',
    textAlign: 'center',
    marginBottom: '2rem',
    textTransform: 'uppercase',
  },
  section: {
    marginBottom: '2rem',
    background: '#fff',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  sectionTitle: {
    fontSize: '1.8rem',
    fontWeight: '600',
    color: '#1a3c34',
    marginBottom: '1rem',
  },
  sectionText: {
    fontSize: '1rem',
    color: '#4a5568',
    lineHeight: '1.5',
  },
  form: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1.5rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '1rem',
    fontWeight: '500',
    color: '#1a3c34',
    marginBottom: '0.5rem',
  },
  input: {
    padding: '0.75rem',
    fontSize: '1rem',
    border: '1px solid #cbd5e0',
    borderRadius: '8px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    ':focus': {
      borderColor: '#00cc00',
    },
  },
  select: {
    padding: '0.75rem',
    fontSize: '1rem',
    border: '1px solid #cbd5e0',
    borderRadius: '8px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    ':focus': {
      borderColor: '#00cc00',
    },
  },
  fileInput: {
    padding: '0.75rem',
    fontSize: '1rem',
  },
  submitButton: {
    gridColumn: 'span 2',
    padding: '0.75rem 1.5rem',
    background: 'linear-gradient(45deg, #00cc00, #00ff00)',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: '500',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
    ':hover': {
      background: 'linear-gradient(45deg, #009900, #00cc00)',
    },
  },
  error: {
    color: '#e53e3e',
    fontSize: '0.9rem',
    marginBottom: '1rem',
    textAlign: 'center',
  },
};
