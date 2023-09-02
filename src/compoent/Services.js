
import React from 'react';
import './Services.css';

const Services = () => {
  const servicesData = [
    {
      title: 'Online Appointments',
      description: 'Book appointments online with your preferred doctors.',
    },
    {
      title: 'Specialist Consultation',
      description: 'Get consultations from specialized doctors in various fields.',
    },
    {
      title: 'Medical History Tracking',
      description: 'Keep track of your medical history and appointments.',
    },
    {
      title: 'Lab Tests',
      description: 'Schedule lab tests and get results digitally.',
    },
    {
      title: 'Prescription Management',
      description: 'Manage your prescriptions and medication reminders.',
    },
    {
      title: 'Telemedicine',
      description: 'Consult with doctors remotely via video calls.',
    },
    {
      title: 'Emergency Care',
      description: '24/7 emergency care services available.',
    },
    {
      title: 'Health Checkups',
      description: 'Comprehensive health checkups for individuals and families.',
    },
    {
      title: 'Surgical Procedures',
      description: 'Advanced surgical procedures performed by experienced surgeons.',
    },
    {
      title: 'Dental Care',
      description: 'Complete dental care including cleanings, fillings, and more.',
    },
    {
      title: 'Mental Health Support',
      description: 'Professional support for mental health and emotional well-being.',
    },
    {
      title: 'Physiotherapy',
      description: 'Personalized physiotherapy sessions for rehabilitation.',
    },
  ];

  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
