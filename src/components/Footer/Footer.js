import React from 'react';
import './Footer.css'; // Import the CSS file for styling

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-logo">
            <img src="https://shorturl.at/acM69" alt="Hospital Logo" />

              <h3>CareNexus</h3>
            </div>
            <div className="footer-contact">
              <h4>Contact Us</h4>
              <p>123 Main Street</p>
              <p>City, State 12345</p>
              <p>Email: info@hospital.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Hospital Name. All rights reserved.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
