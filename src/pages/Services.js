import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      name: 'General Medicine',
      icon: 'fas fa-stethoscope',
      description: 'Comprehensive care for adults including preventive care, diagnosis and treatment of acute and chronic illnesses.',
      details: 'Our General Medicine department provides primary care services for patients of all ages. Our experienced physicians offer comprehensive evaluations, preventive care, and management of common health conditions.'
    },
    {
      id: 2,
      name: 'Cardiology',
      icon: 'fas fa-heartbeat',
      description: 'Specialized care for heart conditions including diagnostic testing, treatment, and ongoing management.',
      details: 'Our cardiology department is equipped with advanced technology for diagnosing and treating heart conditions. Services include ECGs, echocardiograms, stress tests, and cardiac rehabilitation programs.'
    },
    {
      id: 3,
      name: 'Neurology',
      icon: 'fas fa-brain',
      description: 'Diagnosis and treatment of disorders of the nervous system, including brain, spinal cord, and nerves.',
      details: 'Our neurology department specializes in disorders of the brain, spinal cord, and nerves. We offer comprehensive evaluations, diagnostic testing, and treatment plans for conditions such as headaches, epilepsy, stroke, and neurodegenerative disorders.'
    },
    {
      id: 4,
      name: 'Orthopedics',
      icon: 'fas fa-bone',
      description: 'Specialized care for musculoskeletal system - bones, joints, ligaments, tendons, and muscles.',
      details: 'Our orthopedic department provides comprehensive care for injuries and conditions affecting the musculoskeletal system. Services include fracture care, joint replacements, sports medicine, and rehabilitation.'
    },
    {
      id: 5,
      name: 'Pediatrics',
      icon: 'fas fa-child',
      description: 'Comprehensive healthcare for infants, children, and adolescents up to age 18.',
      details: 'Our pediatric department provides compassionate care for children from birth through adolescence. Services include well-child visits, immunizations, developmental assessments, and management of acute and chronic conditions.'
    },
    {
      id: 6,
      name: 'Obstetrics & Gynecology',
      icon: 'fas fa-baby',
      description: 'Specialized care for women, including pregnancy, childbirth, and disorders of the reproductive system.',
      details: 'Our OB/GYN department offers comprehensive womens health services, including prenatal care, labor and delivery, gynecological exams, and treatment for reproductive health conditions.'
    },
    {
      id: 7,
      name: 'Dermatology',
      icon: 'fas fa-allergies',
      description: 'Diagnosis and treatment of conditions related to skin, hair, and nails.',
      details: 'Our dermatology department provides care for conditions affecting the skin, hair, and nails. Services include skin cancer screenings, treatment for acne, eczema, psoriasis, and cosmetic procedures.'
    },
    {
      id: 8,
      name: 'Ophthalmology',
      icon: 'fas fa-eye',
      description: 'Diagnosis and treatment of eye disorders and vision problems.',
      details: 'Our ophthalmology department offers comprehensive eye care services, including routine eye exams, treatment for eye diseases, and surgical procedures such as cataract surgery and LASIK.'
    },
    {
      id: 9,
      name: 'Dental Care',
      icon: 'fas fa-tooth',
      description: 'Comprehensive dental services including preventive, restorative, and cosmetic procedures.',
      details: 'Our dental department provides a full range of dental services, including cleanings, fillings, root canals, extractions, crowns, bridges, and cosmetic dentistry.'
    },
    {
      id: 10,
      name: 'Emergency Care',
      icon: 'fas fa-ambulance',
      description: '24/7 emergency medical services for critical and urgent conditions.',
      details: 'Our emergency department is staffed 24/7 with experienced physicians and nurses ready to provide immediate care for critical and urgent medical conditions.'
    },
    {
      id: 11,
      name: 'Laboratory Services',
      icon: 'fas fa-flask',
      description: 'Comprehensive diagnostic testing services to aid in the diagnosis and treatment of medical conditions.',
      details: 'Our laboratory provides a wide range of diagnostic tests, including blood tests, urinalysis, cultures, and pathology services. Results are processed promptly to support timely diagnosis and treatment.'
    },
    {
      id: 12,
      name: 'Radiology',
      icon: 'fas fa-x-ray',
      description: 'Advanced imaging services to diagnose and monitor various medical conditions.',
      details: 'Our radiology department offers X-rays, ultrasounds, CT scans, MRIs, and other advanced imaging techniques to aid in diagnosis and treatment planning.'
    }
  ];

  return (
    <div className="services-container">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>Comprehensive Healthcare Solutions for All Your Needs</p>
      </div>

      <section className="services-grid">
        {services.map(service => (
          <div className="service-card" key={service.id}>
            <div className="service-icon">
              <i className={service.icon}></i>
            </div>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <div className="service-details">
              <h4>What We Offer</h4>
              <p>{service.details}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="services-cta">
        <h2>Need Medical Assistance?</h2>
        <p>Schedule an appointment with our specialists today.</p>
        <Link to="/book-now" className="book-service-btn">Book an Appointment</Link>
      </section>
    </div>
  );
};
 
export default Services;