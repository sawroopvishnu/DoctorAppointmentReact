import React from "react";
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./compoent/Navbar"
import Home from "./compoent/Home"
import Patients from "./compoent/Patients"
import Doctors from "./compoent/Doctors"
import Appointments from "./compoent/Appointments"
import Contact from "./compoent/Contact"
import Services from "./compoent/Services"
import Doctorlogin from "./compoent/Doctorlogin"
import DoctorRegister from "./compoent/DoctorRegister"
import PatientLogin from "./compoent/PatientLogin"
import PatientRegister from "./compoent/PatientRegister"
import Footer from "./compoent/Footer"

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path='/' compoent={Home} exact>
            <Home />
          </Route>
          <Route path='/patients' compoent={Patients} exact>
            <Patients />
          </Route>
          <Route path='/doctors' compoent={Doctors} exact>
            <Doctors />
          </Route>
          <Route path='/appointments' compoent={Appointments} exact>
            <Appointments />
          </Route>
          <Route path='/contact' compoent={Contact} exact>
            <Contact />
          </Route>
          <Route path='/services' compoent={Services} exact>
            <Services />
            </Route>
            <Route path='/doctorlogin' compoent={Doctorlogin} exact>
            <Doctorlogin />
            </Route>
            <Route path='/doctorregister' compoent={DoctorRegister} exact>
            <DoctorRegister />
            </Route>
            <Route path='/patientlogin' compoent={PatientLogin} exact>
            <PatientLogin />
            </Route>
            <Route path='/patientregister' compoent={PatientRegister} exact>
            <PatientRegister />
            </Route>

        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
