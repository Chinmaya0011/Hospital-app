import React from 'react';
import Header from './components/Header/Header';
import BannerSlider from './components/BannerSlider/BannerSlider';
import HospitalFacilities from './components/HospitalFacilities/HospitalFacilities';
import DepartmentSection from './components/Departments/Department';
import DoctorProfile from './components/FeaturedDoctors/doctors';
import AppointmentForm from './components/AppointmentRemindersAndGuidelines/appointment';
import FeaturedServices from './components/FeaturedServices/services';

// Import the Footer component
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <BannerSlider />
      <DepartmentSection />
      <DoctorProfile />
      <AppointmentForm />
      <FeaturedServices />
      <HospitalFacilities />
      
    
      <Footer />
    </div>
  );
}

export default App;
