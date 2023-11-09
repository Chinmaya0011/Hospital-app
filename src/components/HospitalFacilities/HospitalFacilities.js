import React, { useState } from 'react';
import './facility.css'; // Import the CSS file
import onlineCounslatantImage from './images/pexels-edward-jenner-4031710.jpg';
import freeReportImage from './images/pexels-evg-kowalievska-1170979.jpg';
import freeMedicineImage from './images/pexels-karolina-grabowska-4021808.jpg';
import freeTestImage from './images/pexels-pixabay-207601.jpg';
import freeBodyCheckupImage from './images/pexels-pixabay-247786.jpg';
import freeAmbulanceServiceImage from './images/pexels-wendy-wei-2959588.jpg';

const facilitiesData = [
    {
        title: 'Online Consultation',
        description: 'Access medical consultations from the comfort of your home.',
        icon: onlineCounslatantImage
    },
    {
        title: 'Free Report',
        description: 'Get free medical reports and analysis.',
        icon: freeReportImage
    },
    {
        title: 'Free Medicine',
        description: 'Avail free medicines for specific conditions.',
        icon: freeMedicineImage
    },
    {
        title: 'Free Test',
        description: 'Take advantage of free medical tests.',
        icon: freeTestImage
    },
    {
        title: 'Free Body Checkup',
        description: 'Receive a comprehensive body checkup free of cost.',
        icon: freeBodyCheckupImage
    },
    {
        title: 'Free Ambulance Service',
        description: 'Emergency ambulance service available at no charge.',
        icon: freeAmbulanceServiceImage
    },
    // Add more facility objects here
];

const HospitalFacilities = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(null);
        } else {
            setExpandedIndex(index);
        }
    };

    return (
        <div className="facility-section">
            <h2>Hospital Facilities</h2>
            <div className="facility-container">
                {facilitiesData.map((facility, index) => (
                    <div
                        className={`facility-card ${expandedIndex === index ? 'expanded' : ''}`}
                        key={index}
                        onClick={() => toggleExpand(index)}
                    >
                        <div
                            className="facility-card-bg"
                            style={{ backgroundImage: `url(${facility.icon})` }}
                        >
                            <div className="facility-overlay">
                                <h3>{facility.title}</h3>
                                <p>{facility.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HospitalFacilities;