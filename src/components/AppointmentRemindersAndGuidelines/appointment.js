import React, { useState } from 'react';
import "./appointment.css";
import jsPDF from "jspdf";

function MedicalAppointment() {
  const [isAppointmentScheduled, setAppointmentScheduled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    appointmentType: '', // New field for appointment type
    dateAndTime: '', // Combined date and time field
    area: '',
    city: '',
    state: '',
    postCode: '',
  });

  const backgroundImageStyle = {
    backgroundImage: 'url(https://shorturl.at/fiLY9)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleAppointmentBooking = () => {
    // You should replace this with your actual registration logic.
    // For demonstration, we set the state to show "Appointment Scheduled."
    setAppointmentScheduled(true);
  }

  const handlePrintAppointment = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica");
    doc.setFontSize(20);
    doc.text("CareNexus", 10, 20); // h1
    doc.setFontSize(14);
    doc.text("Appointment Details", 10, 30); // h3

    // Create a list of other details (ul li)
    const otherDetails = [
      "Name: " + formData.name,
      "Phone: " + formData.phone,
      "Email: " + formData.email,
      "Appointment Type: " + formData.appointmentType, // Display appointment type
      "Date and Time: " + formData.dateAndTime, // Display date and time together
      "Area: " + formData.area,
      "City: " + formData.city,
      "State: " + formData.state,
      "Post Code: " + formData.postCode,
    ];

    doc.setFontSize(12);
    let yOffset = 45;
    otherDetails.forEach((detail) => {
      doc.text("• " + detail, 10, yOffset);
      yOffset += 10;
    });

    doc.save("appointment_details.pdf");
  }

  return (
    <div className="formbold-main-wrapper" style={backgroundImageStyle}>
      {isAppointmentScheduled ? (
        <div className="appointment-scheduled-message">
          <p>Appointment Scheduled</p>
          <button onClick={handlePrintAppointment} className="formbold-btn">
            Print Appointment
          </button>
        </div>
      ) : (
        <div className="formbold-form-wrapper">
          <form action="https://formbold.com/s/FORM_ID" method="POST">
            <div className="formbold-mb-5">
              <label htmlFor="name" className="formbold-form-label">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="formbold-form-input"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="formbold-mb-5">
              <label htmlFor="phone" className="formbold-form-label">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                className="formbold-form-input"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="formbold-mb-5">
              <label htmlFor="email" className="formbold-form-label">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="formbold-form-input"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="formbold-mb-5">
              <label htmlFor="appointmentType" className="formbold-form-label">
                Appointment Type
              </label>
              <select
                name="appointmentType"
                id="appointmentType"
                className="formbold-form-input"
                value={formData.appointmentType}
                onChange={handleInputChange}
              >
                <option value="">Select Appointment Type</option>
                <option value="Dental">Dental</option>
                <option value="Eye">Eye</option>
                <option value="Dermatology">Dermatology</option>
                {/* Add more appointment types here */}
              </select>
            </div>
            <div className="formbold-mb-5">
              <label htmlFor="dateAndTime" className="formbold-form-label">
                Date and Time
              </label>
              <input
                type="datetime-local"
                name="dateAndTime"
                id="dateAndTime"
                className="formbold-form-input"
                value={formData.dateAndTime}
                onChange={handleInputChange}
              />
            </div>
            <div className="formbold-mb-5 formbold-pt-3">
              <label className="formbold-form-label formbold-form-label-2">
                Address Details
              </label>
              <div className="flex flex-wrap formbold--mx-3">
                <div className="w-full sm:w-half formbold-px-3">
                  <div className="formbold-mb-5">
                    <input
                      type="text"
                      name="area"
                      id="area"
                      placeholder="Enter area"
                      className="formbold-form-input"
                      value={formData.area}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="w-full sm:w-half formbold-px-3">
                  <div className="formbold-mb-5">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="Enter city"
                      className="formbold-form-input"
                      value={formData.city}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="w-full sm:w-half formbold-px-3">
                  <div className="formbold-mb-5">
                    <input
                      type="text"
                      name="state"
                      id="state"
                      placeholder="Enter state"
                      className="formbold-form-input"
                      value={formData.state}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="w-full sm:w-half formbold-px-3">
                  <div className="formbold-mb-5">
                    <input
                      type="text"
                      name="postCode"
                      id="postCode"
                      placeholder="Post Code"
                      className="formbold-form-input"
                      value={formData.postCode}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button onClick={handleAppointmentBooking} className="formbold-btn">
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default MedicalAppointment;
