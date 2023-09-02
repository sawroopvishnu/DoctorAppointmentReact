import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AppointmentForm.css';

const Appointments = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [patientName, setPatientName] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [patientAddress, setPatientAddress] = useState('');
  const [patientContactNo, setPatientContactNo] = useState('');
  const [notes, setNotes] = useState('');
  //const [selectedReport, setSelectedReport] = useState(null);

  useEffect(() => {
    // Fetch doctors data and update the state
    axios.get('http://localhost:9096/api/doctors/getalldoctor') // Adjust the API endpoint accordingly
      .then(response => {
        setDoctors(response.data);
      })
      .catch(error => {
        console.error('Error fetching doctors:', error);
      });


        // Fetch patients data and update the state
    axios.get('http://localhost:9096/api/patients/getAllPatient') // Adjust the API endpoint accordingly
      .then(response => {
      console.log('Fetched patients:', response.data);
      setPatients(response.data);
    })
    .catch(error => {
      console.error('Error fetching patients:', error);
    });

  }, []); // Empty dependency array to execute the effect only once

  const handlePatientChange = (event) => {
    setSelectedPatient(event.target.value);
  };

  const handleDoctorChange = (event) => {
    setSelectedDoctor(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handlePatientNameChange = (event) => {
    setPatientName(event.target.value);
  };

  const handlePatientAgeChange = (event) => {
    setPatientAge(event.target.value);
  };

  const handlePatientAddressChange = (event) => {
    setPatientAddress(event.target.value);
  };

  const handlePatientContactNoChange = (event) => {
    setPatientContactNo(event.target.value);
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

 // const handleReportChange = (event) => {
    //setSelectedReport(event.target.files[0]);
  //};

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('doctorId', selectedDoctor);
      formData.append('patientId', selectedPatient);
      formData.append('appointmentDateTime', `${selectedDate} ${selectedTime}`);
      formData.append('patientName', patientName);
      formData.append('patientAge', patientAge);
      formData.append('patientAddress', patientAddress);
      formData.append('patientContactNo', patientContactNo);
      formData.append('notes', notes);
     // formData.append('patientReport', selectedReport);
console.log("appointment creating" ,formData )
      // Make API call to send formData to the backend API for appointment scheduling
      //const response = await axios.post('http://localhost:9096/api/appointments/createAppointment', formData);
      const response = await axios.post('http://localhost:9096/api/appointments/createAppointment', formData, {
  headers: {
    'Content-Type': 'application/json',
  },
});
      console.log('Appointment created:', response.data);
      alert('Appointment scheduled successfully!');
      // Redirect logic to dashboard or other page
      // For example, you can use window.location.href = '/dashboard';
    } catch (error) {
      console.error('Error creating appointment:', error);
      alert('Error creating appointment. Please try again.');
    }
  };

  return (
    <div className="appointment-form-container">
      <h2>Schedule an Appointment</h2>
      <form className="appointment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="doctor">Select Doctor:</label>
          <select id="doctor" value={selectedDoctor} onChange={handleDoctorChange} required>
            <option value="">Select a doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.name}
              </option>
            ))}
          </select>
        </div>
       <div className="form-group">
          <label htmlFor="patient">Select Patient:</label>
          <select id="patient" value={selectedPatient} onChange={handlePatientChange}>
            <option value="">Select a patient</option>
            {patients.map(patient => (
              <option key={patient.id} value={patient.id}>
                {patient.patientName}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="date">Select Date:</label>
          <input type="date" id="date" value={selectedDate} onChange={handleDateChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="time">Select Time:</label>
          <input type="time" id="time" value={selectedTime} onChange={handleTimeChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="notes">Notes (optional):</label>
          <textarea id="notes" value={notes} onChange={handleNotesChange} />
        </div>
        <div className="form-group">
          <label htmlFor="patientName">Patient Name:</label>
          <input
            type="text"
            id="patientName"
            value={patientName}
            onChange={handlePatientNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="patientAge">Patient Age:</label>
          <input
            type="number"
            id="patientAge"
            value={patientAge}
            onChange={handlePatientAgeChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="patientAddress">Patient Address:</label>
          <input
            type="text"
            id="patientAddress"
            value={patientAddress}
            onChange={handlePatientAddressChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="patientContactNo">Patient Contact No:</label>
          <input
            type="tel"
            id="patientContactNo"
            value={patientContactNo}
            onChange={handlePatientContactNoChange}
            required
          />
        </div>
      
        <button type="submit">Schedule Appointment</button>
      </form>
    </div>
  );
};

export default Appointments;
