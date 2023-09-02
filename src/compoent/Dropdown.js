// Dropdown.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css'; // Add styles for dropdown

const Dropdown = () => {
  return (
    <div className="dropdown">
      <button className="dropdown-toggle">Create Your Account</button>
      <div className="dropdown-content">
        <Link to="/patientlogin">Patient Login</Link>
        <Link to="/doctorlogin">Doctor Login</Link>
        {/* Add more links as needed */}
      </div>
    </div>
  );
};

export default Dropdown;
