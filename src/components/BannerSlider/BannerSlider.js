import React from 'react';
import './BannerSlider.css'; // Import the CSS file using a relative path

const BannerSlider = () => {
    return (
        <div className="banner-slider">
            <div className="banner-slide">
                <div className="background-image" />
                <div className="button-container">
                    <h1>Welcome to CareNexus</h1>
                    <p>Your Trusted Partner in Healthcare</p>
                    <button className="get-started-button">Appointment Now</button>
                </div>
            </div>
            {/* Add more slide items */}
        </div>
    );
};

export default BannerSlider;
