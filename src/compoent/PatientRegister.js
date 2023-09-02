
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'; 
import './PatientRegistration.css';

const PatientRegister = () => {
const history = useHistory();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    fullName: '',
  });

  const [registrationError, setRegistrationError] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:9096/api/auth/patient/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setShowSuccessPopup(true);
          setTimeout(() => {
            history.push('/patientlogin');
          }, 3000); // Redirect after 3 seconds
        } else {
          setRegistrationError(data.message);
        }
      })
      .catch(error => {
        console.error('Error during registration:', error);
        setRegistrationError('An error occurred. Please try again.');
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

    return (
        <div className="registration-container">
            <form className="registration-form" onSubmit={handleSubmit}>
                <h2>Patient Registration</h2>
                <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="username">User Name</label>
                    <input
                        type="username"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <button type="submit">Register</button>
                </div>
                <p>Already have an account? <a href="/patientlogin">Login</a></p>
            </form>
            {registrationError && <p className="error">{registrationError}</p>}
      {showSuccessPopup && (
        <div className="success-popup">
          <p>Registration successful! Redirecting to login page...</p>
        </div>
      )}
           </div>
    );
};


export default PatientRegister;
