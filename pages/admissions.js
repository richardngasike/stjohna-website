import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
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
        <meta name="description" content="Join University Name for Diploma, Certificate, and Short Courses. Apply online, via KUCCPS, or download our application form." />
      </Head>
      <Header />
      <main style={styles.main}>
        {/* Brochure Image */}
        <div style={styles.brochureContainer}>
          <Image
            src="/brochure.jpg"
            alt="University Name Courses Brochure featuring Diploma, Certificate, and Short Courses"
            layout="responsive"
            width={1200}
            height={675}
            objectFit="cover"
            objectPosition="center"
            quality={85}
          />
        </div>

        <h1 style={styles.title}>Admissions Application</h1>

        {/* Admissions Process Timeline */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Admissions Timeline</h2>
          <p style={styles.sectionText}>Plan your application with our key dates and deadlines.</p>
          <ul style={styles.timeline}>
            <li style={styles.timelineItem}>
              <span style={styles.timelineDate}>October 1st</span>: Applications Open
            </li>
            <li style={styles.timelineItem}>
              <span style={styles.timelineDate}>December 1st</span>: Application Deadline
            </li>
            <li style={styles.timelineItem}>
              <span style={styles.timelineDate}>January 15th</span>: Admission Results Released
            </li>
            <li style={styles.timelineItem}>
              <span style={styles.timelineDate}>February 1st</span>: Intake for January Session
            </li>
            <li style={styles.timelineItem}>
              <span style={styles.timelineDate}>September 1st</span>: Intake for September Session
            </li>
          </ul>
        </section>

        {/* Eligibility Criteria */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Eligibility Criteria</h2>
          <p style={styles.sectionText}>
            To join our programs, applicants must meet the following requirements:
          </p>
          <ul style={styles.list}>
            <li>Diploma Courses: Minimum KCSE mean grade of C- (minus).</li>
            <li>Certificate Courses: Minimum KCSE mean grade of D (plain).</li>
            <li>Short Courses: Open to all, no specific KCSE grade required (e.g., Driving, Computer Packages).</li>
            <li>Valid National ID or Passport for identification.</li>
            <li>Certified copies of KCSE certificates for verification.</li>
          </ul>
        </section>

        {/* Application Form */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Online Application Form</h2>
          <p style={styles.sectionText}>
            Complete the form below to apply for our programs. Ensure all required fields are filled and documents are uploaded by December 1st. Alternatively, download the PDF form for physical submission.
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
                max={new Date().toISOString().split('T')[0]}
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
            <Link
              href="/applicationdocument.pdf"
              style={styles.downloadButton}
              download
            >
              Download PDF Application Form
            </Link>
          </form>
        </section>

        {/* KUCCPS Application */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Apply via KUCCPS</h2>
          <div style={styles.imageTextContainer}>
            <div style={styles.imageWrapper}>
              <Image
                src="/kuccps.png"
                alt="KUCCPS Application Portal for Government-Sponsored Students"
                layout="responsive"
                width={300}
                height={200}
                objectFit="cover"
                quality={85}
              />
            </div>
            <div style={styles.textWrapper}>
              <p style={styles.sectionText}>
                The Kenya Universities and Colleges Central Placement Service (KUCCPS) offers an alternative application route for government-sponsored students. Log in to the KUCCPS portal, select University Name, and choose your preferred course. Ensure you meet the minimum KCSE grade requirements for your program. KUCCPS applications are ideal for students seeking subsidized tuition.
              </p>
              <Link
                href="https://www.kuccps.ac.ke"
                style={styles.actionButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply via KUCCPS
              </Link>
            </div>
          </div>
        </section>

        {/* Tuition & Fees */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Tuition & Fees</h2>
          <p style={styles.sectionText}>
            Our programs are competitively priced to ensure accessibility:
          </p>
          <ul style={styles.list}>
            <li>Diploma Courses: KSH 22,000 per term (3 terms per year).</li>
            <li>Certificate Courses: KSH 19,500 per term (2-3 terms).</li>
            <li>Short Courses: Varies (e.g., Driving: KSH 10,000, Computer Packages: KSH 8,000).</li>
            <li>Accommodation and Meals: KSH 17,000 per term (optional).</li>
            <li>Registration Fee: KSH 2,000 (one-time, non-refundable).</li>
            <li>Exam Fees: KSH 3,000 per term (where applicable).</li>
          </ul>
        </section>

        {/* Financial Aid */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Financial Aid & HELB Loans</h2>
          <div style={styles.imageTextContainer}>
            <div style={styles.imageWrapper}>
              <Image
                src="/helb2.jpeg"
                alt="HELB Loan Application for Tuition and Upkeep"
                layout="responsive"
                width={200}
                height={100}
                objectFit="contain"
                quality={85}
              />
            </div>
            <div style={styles.textWrapper}>
              <div>
                <p style={styles.sectionText}>
                  We support students through government funding and scholarships. The Higher Education Loans Board (HELB) offers loans for tuition and living expenses. To apply:
                </p>
                <ul style={styles.list}>
                  <li>Visit the HELB portal and create an account.</li>
                  <li>Submit required documents (e.g., National ID, KCSE certificate).</li>
                  <li>Select University Name and your course for loan allocation.</li>
                  <li>Track your application via the HELB portal or mobile app.</li>
                </ul>
                <p style={styles.sectionText}>
                  Scholarships are available for students with exceptional KCSE grades (B+ and above) or demonstrated financial need. Contact our admissions office for scholarship applications.
                </p>
              </div>
              <Link
                href="https://www.helb.co.ke"
                style={styles.actionButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply for HELB Loan
              </Link>
            </div>
          </div>
        </section>

        {/* Campus Facilities */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Campus Facilities</h2>
          <div>
            <p style={styles.sectionText}>
              University Name offers state-of-the-art facilities to support your learning:
            </p>
            <ul style={styles.list}>
              <li>Modern Computer Labs: Equipped with high-speed internet and industry-standard software.</li>
              <li>Workshops: Hands-on training for engineering, automotive, and fashion design courses.</li>
              <li>Library: Extensive collection of academic resources and e-books.</li>
              <li>Hostels: Affordable on-campus accommodation with meals (KSH 17,000/term).</li>
              <li>Sports Facilities: Fields and courts for football, basketball, and more.</li>
            </ul>
          </div>
        </section>

        {/* Application Tips */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Application Tips</h2>
          <div>
            <p style={styles.sectionText}>Maximize your chances of a successful application:</p>
            <ul style={styles.list}>
              <li>Ensure uploaded documents are clear (PDF or high-quality images, max 5MB).</li>
              <li>Verify your KCSE grade meets the course requirements.</li>
              <li>Apply via KUCCPS for government-sponsored programs to reduce costs.</li>
              <li>Contact our admissions team for clarification on requirements.</li>
              <li>Submit early to avoid last-minute technical issues.</li>
              <li>Keep copies of all submitted documents for reference.</li>
            </ul>
          </div>
        </section>

        {/* Student Testimonials */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>What Our Students Say</h2>
          <div style={styles.testimonialContainer}>
            <div style={styles.testimonial}>
              <p style={styles.sectionText}>
                “The Diploma in IT program transformed my career. The practical training and supportive lecturers made all the difference!” — Jane W., IT Graduate
              </p>
            </div>
            <div style={styles.testimonial}>
              <p style={styles.sectionText}>
                “The driving course was affordable and well-structured. I got my license in just a month!” — Peter M., Short Course Student
              </p>
            </div>
            <div style={styles.testimonial}>
              <p style={styles.sectionText}>
                “The business management course gave me the skills to start my own business. Highly recommend!” — Sarah K., Business Graduate
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div style={styles.faqContainer}>
            <div style={styles.faqItem}>
              <h3 style={styles.faqQuestion}>Can I apply for multiple courses?</h3>
              <p style={styles.sectionText}>Yes, but you must submit separate applications for each course. Contact our admissions team for guidance.</p>
            </div>
            <div style={styles.faqItem}>
              <h3 style={styles.faqQuestion}>What if I miss the application deadline?</h3>
              <p style={styles.sectionText}>Late applications may be considered for the next intake. Contact admissions@universityname.ac.ke for details.</p>
            </div>
            <div style={styles.faqItem}>
              <h3 style={styles.faqQuestion}>Are there evening or part-time classes?</h3>
              <p style={styles.sectionText}>Yes, select courses (e.g., Computer Packages, Business Management) offer evening and part-time options.</p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Contact Admissions</h2>
          <p style={styles.sectionText}>
            Have questions? Reach out to our friendly admissions team:
          </p>
          <ul style={styles.list}>
            <li>
              Email:{' '}
              <a href="mailto:admissions@universityname.ac.ke" style={styles.link}>
                admissions@universityname.ac.ke
              </a>
            </li>
            <li>
              Phone:{' '}
              <a href="tel:+254720215715" style={styles.link}>
                +254 720 215 715
              </a>
            </li>
            <li>
              WhatsApp:{' '}
              <a href="https://wa.me/254720215715" style={styles.link} target="_blank" rel="noopener noreferrer">
                +254 720 215 715
              </a>
            </li>
            <li>Physical Address: University Name, P.O. Box 1234-00100, Nairobi, Kenya</li>
            <li>Office Hours: Monday–Friday, 8:00 AM–5:00 PM EAT</li>
          </ul>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="padding: 2rem 0"] {
            padding: 1rem 0.5rem !important;
            max-width: 100% !important;
          }
          div[style*="aspectRatio: '16 / 9'"] {
            aspect-ratio: 16 / 9 !important;
            margin: 0 0.5rem 1rem !important;
          }
          h1[style*="fontSize: '2.5rem'"] {
            font-size: 1.8rem !important;
            padding: 0 0.5rem !important;
          }
          h2[style*="fontSize: '1.8rem'"] {
            font-size: 1.4rem !important;
          }
          h3[style*="fontSize: '1.2rem'"] {
            font-size: 1rem !important;
          }
          p[style*="fontSize: '1rem'"] {
            font-size: 0.85rem !important;
            word-wrap: break-word !important;
          }
          div[style*="gridTemplateColumns: repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          div[style*="gridTemplateColumns: repeat(auto-fit, minmax(250px, 1fr))"] {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          input[style*="padding: 0.75rem"], select[style*="padding: 0.75rem"] {
            padding: 0.5rem !important;
            font-size: 0.85rem !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }
          input[style*="padding: 0.75rem"][type="file"] {
            padding: 0.5rem 0 !important;
          }
          button[style*="padding: 0.75rem 1.5rem"], a[style*="padding: 0.75rem 1.5rem"] {
            padding: 0.5rem 1rem !important;
            font-size: 0.85rem !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }
          div[style*="display: flex; gap: 2rem"] {
            flex-direction: column !important;
            gap: 1rem !important;
          }
          div[style*="width: '300px'"], div[style*="width: '200px'"] {
            width: 100% !important;
            max-width: 300px !important;
            margin: 0 auto 1rem !important;
          }
          ul[style*="paddingLeft: '1.5rem'"] {
            padding-left: 1rem !important;
          }
          a[style*="background: linear-gradient(45deg, #ff0000ff, #9b00009c)"] {
            background: linear-gradient(45deg, #ff3333, #cc0000) !important;
            width: 100% !important;
            max-width: 300px !important;
            display: block !important;
            margin: 1rem auto !important;
            text-align: center !important;
            border-radius: 12px !important;
            box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2) !important;
            transition: transform 0.3s ease, box-shadow 0.3s ease !important;
          }
          a[style*="background: linear-gradient(45deg, #ff0000ff, #9b00009c)"]:hover {
            background: linear-gradient(45deg, #cc0000, #990000) !important;
            transform: scale(1.05) !important;
            box-shadow: 0 5px 12px rgba(0, 0, 0, 0.3) !important;
          }
        }

        @media (max-width: 480px) {
          div[style*="padding: 2rem 0"] {
            padding: 0.75rem 0.25rem !important;
            max-width: 100% !important;
          }
          div[style*="aspectRatio: '16 / 9'"] {
            aspect-ratio: 16 / 9 !important;
            margin: 0 0.25rem 0.75rem !important;
          }
          h1[style*="fontSize: '2.5rem'"] {
            font-size: 1.6rem !important;
            padding: 0 0.25rem !important;
          }
          h2[style*="fontSize: '1.8rem'"] {
            font-size: 1.2rem !important;
          }
          h3[style*="fontSize: '1.2rem'"] {
            font-size: 0.9rem !important;
          }
          p[style*="fontSize: '1rem'"] {
            font-size: 0.8rem !important;
            word-wrap: break-word !important;
          }
          div[style*="gridTemplateColumns: repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
          }
          div[style*="gridTemplateColumns: repeat(auto-fit, minmax(250px, 1fr))"] {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
          }
          input[style*="padding: 0.75rem"], select[style*="padding: 0.75rem"] {
            padding: 0.4rem !important;
            font-size: 0.8rem !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }
          input[style*="padding: 0.75rem"][type="file"] {
            padding: 0.4rem 0 !important;
          }
          button[style*="padding: 0.75rem 1.5rem"], a[style*="padding: 0.75rem 1.5rem"] {
            padding: 0.4rem 0.8rem !important;
            font-size: 0.8rem !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }
          div[style*="display: flex; gap: 2rem"] {
            flex-direction: column !important;
            gap: 0.75rem !important;
          }
          div[style*="width: '300px'"], div[style*="width: '200px'"] {
            width: 100% !important;
            max-width: 250px !important;
            margin: 0 auto 0.75rem !important;
          }
          ul[style*="paddingLeft: '1.5rem'"] {
            padding-left: 0.75rem !important;
          }
          a[style*="background: linear-gradient(45deg, #ff0000ff, #9b00009c)"] {
            background: linear-gradient(45deg, #ff3333, #cc0000) !important;
            width: 100% !important;
            max-width: 250px !important;
            display: block !important;
            margin: 0.75rem auto !important;
            text-align: center !important;
            border-radius: 10px !important;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15) !important;
            transition: transform 0.3s ease, box-shadow 0.3s ease !important;
          }
          a[style*="background: linear-gradient(45deg, #ff0000ff, #9b00009c)"]:hover {
            background: linear-gradient(45deg, #cc0000, #990000) !important;
            transform: scale(1.05) !important;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25) !important;
          }
        }

        @media (max-width: 360px) {
          div[style*="padding: 2rem 0"] {
            padding: 0.5rem 0.2rem !important;
            max-width: 100% !important;
          }
          div[style*="aspectRatio: '16 / 9'"] {
            aspect-ratio: 16 / 9 !important;
            margin: 0 0.2rem 0.5rem !important;
          }
          h1[style*="fontSize: '2.5rem'"] {
            font-size: 1.4rem !important;
            padding: 0 0.2rem !important;
          }
          h2[style*="fontSize: '1.8rem'"] {
            font-size: 1.1rem !important;
          }
          h3[style*="fontSize: '1.2rem'"] {
            font-size: 0.85rem !important;
          }
          p[style*="fontSize: '1rem'"] {
            font-size: 0.75rem !important;
            word-wrap: break-word !important;
          }
          div[style*="gridTemplateColumns: repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
            gap: 0.5rem !important;
          }
          div[style*="gridTemplateColumns: repeat(auto-fit, minmax(250px, 1fr))"] {
            grid-template-columns: 1fr !important;
            gap: 0.5rem !important;
          }
          input[style*="padding: 0.75rem"], select[style*="padding: 0.75rem"] {
            padding: 0.3rem !important;
            font-size: 0.75rem !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }
          input[style*="padding: 0.75rem"][type="file"] {
            padding: 0.3rem 0 !important;
          }
          button[style*="padding: 0.75rem 1.5rem"], a[style*="padding: 0.75rem 1.5rem"] {
            padding: 0.3rem 0.6rem !important;
            font-size: 0.75rem !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }
          div[style*="display: flex; gap: 2rem"] {
            flex-direction: column !important;
            gap: 0.5rem !important;
          }
          div[style*="width: '300px'"], div[style*="width: '200px'"] {
            width: 100% !important;
            max-width: 200px !important;
            margin: 0 auto 0.5rem !important;
          }
          ul[style*="paddingLeft: '1.5rem'"] {
            padding-left: 0.5rem !important;
          }
          a[style*="background: linear-gradient(45deg, #ff0000ff, #9b00009c)"] {
            background: linear-gradient(45deg, #ff3333, #cc0000) !important;
            width: 100% !important;
            max-width: 200px !important;
            display: block !important;
            margin: 0.5rem auto !important;
            text-align: center !important;
            border-radius: 8px !important;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
            transition: transform 0.3s ease, box-shadow 0.3s ease !important;
          }
          a[style*="background: linear-gradient(45deg, #ff0000ff, #9b00009c)"]:hover {
            background: linear-gradient(45deg, #cc0000, #990000) !important;
            transform: scale(1.05) !important;
            box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2) !important;
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
  brochureContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: '100%',
    aspectRatio: '16 / 9',
    marginBottom: '2rem',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    boxSizing: 'border-box',
    transition: 'transform 0.3s ease',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#1a3c34',
    textAlign: 'center',
    marginBottom: '2rem',
    textTransform: 'uppercase',
    wordWrap: 'break-word',
  },
  section: {
    marginBottom: '2rem',
    background: '#fff',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
    },
  },
  sectionTitle: {
    fontSize: '1.8rem',
    fontWeight: '600',
    color: '#1a3c34',
    marginBottom: '1rem',
    wordWrap: 'break-word',
  },
  sectionText: {
    fontSize: '1rem',
    color: '#4a5568',
    lineHeight: '1.5',
    wordWrap: 'break-word',
  },
  form: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1.5rem',
    boxSizing: 'border-box',
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
    wordWrap: 'break-word',
  },
  input: {
    padding: '0.75rem',
    fontSize: '1rem',
    border: '1px solid #cbd5e0',
    borderRadius: '8px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    width: '100%',
    boxSizing: 'border-box',
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
    width: '100%',
    boxSizing: 'border-box',
    ':focus': {
      borderColor: '#00cc00',
    },
  },
  fileInput: {
    padding: '0.75rem 0',
    fontSize: '1rem',
    width: '100%',
    boxSizing: 'border-box',
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
    transition: 'background 0.3s ease, transform 0.3s ease',
    width: '100%',
    boxSizing: 'border-box',
    ':hover': {
      background: 'linear-gradient(45deg, #009900, #00cc00)',
      transform: 'scale(1.02)',
    },
  },
  downloadButton: {
    gridColumn: 'span 2',
    display: 'inline-block',
    padding: '0.75rem 1.5rem',
    background: 'linear-gradient(45deg, #ff0000ff, #9b00009c)',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: '500',
    borderRadius: '8px',
    textAlign: 'center',
    textDecoration: 'none',
    transition: 'background 0.3s ease, transform 0.3s ease',
    width: '30%',
    boxSizing: 'border-box',
    marginTop: '1rem',
    ':hover': {
      background: 'linear-gradient(45deg, #cc0000, #990000)',
      transform: 'scale(1.02)',
    },
  },
  actionButton: {
    display: 'inline-block',
    padding: '0.75rem 1.5rem',
    background: 'linear-gradient(45deg, #00cc00, #00ff00)',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: '500',
    borderRadius: '8px',
    textDecoration: 'none',
    transition: 'background 0.3s ease, transform 0.3s ease',
    marginTop: '1rem',
    ':hover': {
      background: 'linear-gradient(45deg, #009900, #00cc00)',
      transform: 'scale(1.02)',
    },
  },
  imageTextContainer: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    width: '300px',
    maxWidth: '100%',
    flexShrink: 0,
  },
  textWrapper: {
    flex: 1,
    minWidth: '200px',
  },
  timeline: {
    listStyle: 'none',
    paddingLeft: '1.5rem',
    position: 'relative',
  },
  timelineItem: {
    fontSize: '1rem',
    color: '#4a5568',
    marginBottom: '1rem',
    position: 'relative',
    paddingLeft: '1.5rem',
    ':before': {
      content: '""',
      position: 'absolute',
      left: '0',
      top: '0.25rem',
      width: '10px',
      height: '10px',
      background: '#00cc00',
      borderRadius: '50%',
    },
  },
  timelineDate: {
    fontWeight: '600',
    color: '#1a3c34',
    marginRight: '0.5rem',
  },
  list: {
    listStyle: 'disc',
    paddingLeft: '1.5rem',
    fontSize: '1rem',
    color: '#4a5568',
  },
  testimonialContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
  },
  testimonial: {
    background: '#f7fafc',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
    ':hover': {
      transform: 'translateY(-3px)',
    },
  },
  faqContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  faqItem: {
    background: '#f7fafc',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  faqQuestion: {
    fontSize: '1.2rem',
    fontWeight: '500',
    color: '#1a3c34',
    marginBottom: '0.5rem',
  },
  link: {
    color: '#00cc00',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
    },
  },
  error: {
    color: '#e53e3e',
    fontSize: '0.9rem',
    marginBottom: '1rem',
    textAlign: 'center',
    wordWrap: 'break-word',
  },
};
