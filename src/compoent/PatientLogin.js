
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './PatientLogin.css';

const PatientLogin = () => {
      const history = useHistory();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [loginError, setLoginError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:9096/api/auth/patient/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        // Successful login, redirect to dashboard or other page
        history.push('/appointments'); // Change to your desired route
      } else {
        setLoginError(true);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Patient Login</h2>
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
                    <button type="submit">Login</button>
                </div>
                <p>Don't have an account? <a href="/patientregister">Register</a></p>
            </form>
            {loginError && (
        <p className="error-message">Invalid username or password</p>
      )}
        </div>
    );
};

export default PatientLogin;
